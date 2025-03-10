import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfoCard = () => {
    return (
        <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-xl shadow-sm bg-white m-5">
            <div className="px-5 mx-5">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">

                    <div className="flex items-center space-x-3">
                        <Mail className="text-green-500 w-5 h-5" />
                        <div>
                            <h3 className="font-medium">Email</h3>
                            <p className="text-gray-600 text-sm">support@nutriconnect.com</p>
                        </div>
                    </div>


                    <div className="flex items-center space-x-3">
                        <Phone className="text-green-500 w-5 h-5" />
                        <div>
                            <h3 className="font-medium">Phone</h3>
                            <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
                        </div>
                    </div>


                    <div className="flex items-center space-x-3">
                        <MapPin className="text-green-500 w-5 h-5" />
                        <div>
                            <h3 className="font-medium">Address</h3>
                            <p className="text-gray-600 text-sm">
                                123 Nutrition Street
                                <br />
                                New York, NY 10001
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ContactInfoCard;
