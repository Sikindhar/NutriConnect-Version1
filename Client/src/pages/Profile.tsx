import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaSignOutAlt, FaCalendarAlt } from 'react-icons/fa';

const UserProfile = () => {
  const [user, setUser] = useState<any>(null);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError('No token found');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('API response:', response.data); 
        setUser(response.data);
      } catch (err) {
        console.error('Error fetching user data:', err); 
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    const fetchAppointments = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError('No token found');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/appointments/user-appointments', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Appointments response:', response.data); 
        setAppointments(response.data);
      } catch (err) {
        console.error('Error fetching appointments:', err); 
        setError('Failed to fetch appointments');
      }
    };

    fetchUserData();
    fetchAppointments();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/sign-in"); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 m-6">
      <h1 className="text-center bg-green-500 p-6 m-6 text-white rounded-md">User Profile</h1>
      {user && (
        <div className="bg-white p-6 m-6 rounded-md shadow-md">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <FaUser className="text-green-500 mr-2" />
              <p className="text-xl font-semibold"><strong>Name:</strong> {user.name}</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-green-500 mr-2" />
              <p className="text-lg"><strong>Email:</strong> {user.email}</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-green-500 mr-2" />
              <p className="text-lg"><strong>Phone:</strong> {user.phone}</p>
            </div>
            <br />
            <h2 className="text-center text-2xl font-bold mt-8">Booked Appointments</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {appointments.map((appointment) => (
                <div key={appointment._id} className="bg-white p-4 rounded-md shadow-md w-full sm:w-[450px]">
                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className="text-green-500 mr-2" />
                    <p className="text-lg font-semibold">Appointment with Dr. {appointment.doctorName}</p>
                  </div>
                  <p><strong>Date:</strong> {new Date(appointment.appointmentDate).toLocaleDateString()}</p>
                  <p><strong>Time:</strong> {new Date(appointment.appointmentDate).toLocaleTimeString()}</p>
                  <p><strong>Concern:</strong> {appointment.concernAndTime}</p>
                </div>
              ))}
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center"
            >
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;