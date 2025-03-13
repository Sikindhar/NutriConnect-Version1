import { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'react-toastify';
import config from '@/config';

const AppointmentForm = ({ doctor, user, onClose }: { doctor: any; user: any; onClose: () => void }) => {
    const [subject, setSubject] = useState('');
    const [concernAndTime, setConcernAndTime] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post(`${config.apiBaseUrl}/api/appointments/schedule-appointment`, {
                name: user.name,
                email: user.email,
                subject,
                phone: user.phone,
                doctorId: doctor._id,
                doctorName: doctor.name,
                concernAndTime,
            });
            toast.success('Appointment successfully scheduled. We will call you shortly.');
            onClose();
        } catch (err) {
            setError('Failed to schedule appointment');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Schedule Appointment with {doctor.name}</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" value={user.name} readOnly />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value={user.email} readOnly />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" value={user.phone} readOnly />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="doctorName">Doctor</Label>
                        <Input id="doctorName" value={doctor.name} readOnly />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="concernAndTime">Concern and Preferred Time</Label>
                        <Input id="concernAndTime" value={concernAndTime} onChange={(e) => setConcernAndTime(e.target.value)} required />
                    </div>
                    <div className="flex justify-end">
                        <Button type="button" onClick={onClose} className="mr-2">Cancel</Button>
                        <Button variant={'outline'} type="submit" className="bg-customGreen text-white hover:bg-green-600" disabled={loading}>
                            {loading ? 'Scheduling...' : 'Schedule'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;