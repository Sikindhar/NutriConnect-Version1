import { Card, CardContent } from "@/components/ui/card";
import { Star, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const DoctorCard = ({
    doctor,
    onSchedule,
}: {
    doctor: any;
    onSchedule: (doctor: any) => void;
}) => {
    return (
        <Card>
            <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <div className="flex items-center mb-4">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm ml-1">{doctor.rating}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{doctor.description}</p>
                <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>{doctor.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-2" />
                        <span>{doctor.email}</span>
                    </div>
                    <div className="flex items-center text-sm">
                        <span>Specialization: {doctor.specialization}</span>
                    </div>
                    <div className="flex items-center text-sm">
                        <span>Experience: {doctor.experience} years</span>
                    </div>
                    <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Available Slots: {doctor.availableSlots.join(', ')}</span>
                    </div>
                </div>
                <Button variant={"outline"} onClick={() => onSchedule(doctor)} className="bg-customGreen text-white hover:bg-green-600">
                    Schedule
                </Button>
            </CardContent>
        </Card>
    );
};

export default DoctorCard;
