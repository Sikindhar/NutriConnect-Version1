import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import DoctorCard from "@/components/DoctorCard";
import AppointmentForm from "@/components/AppointmentForm";

const Doctors = () => {
    const [doctors, setDoctors] = useState<any[]>([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/users/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}` 
                    }
                });
                setUser(response.data);
            } catch (err) {
                console.error('Failed to fetch user', err);
            }
        };

        fetchUser();
    }, []);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/doctors/doctors-list', {
                    params: { page, limit: 10, search }
                });
                if (response.data.length < 10) {
                    setHasMore(false);
                }
                setDoctors(prevDoctors => [...prevDoctors, ...response.data]);
            } catch (err) {
                setError('Failed to fetch doctors');
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, [page, search]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setDoctors([]);
        setPage(1);
        setHasMore(true);
    };

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handleSchedule = (doctor: any) => {
        setSelectedDoctor(doctor);
    };

    const handleCloseForm = () => {
        setSelectedDoctor(null);
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <div className="container px-4 mx-auto pt-24 pb-12">
                <h1 className="text-3xl font-bold mb-8">Connect with our Experts </h1>
                <input
                    type="text"
                    placeholder="Search doctors by name or specialization"
                    value={search}
                    onChange={handleSearch}
                    className="mb-8 p-2 border rounded-md w-full"
                />
                {loading && page === 1 ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {doctors.map((doctor: any) => (
                                <DoctorCard
                                    key={doctor._id}
                                    doctor={doctor}
                                    onSchedule={handleSchedule}
                                />
                            ))}
                        </div>
                        {hasMore && (
                            <div className="flex justify-center mt-8">
                                <Button onClick={loadMore} className="bg-customGreen text-white hover:bg-green-600">
                                    View More
                                </Button>
                            </div>
                        )}
                    </>
                )}
                {selectedDoctor && user && (
                    <AppointmentForm doctor={selectedDoctor} user={user} onClose={handleCloseForm} />
                )}
            </div>
        </div>
    );
};

export default Doctors;