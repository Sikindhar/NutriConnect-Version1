import React from 'react';
import { Link } from 'react-router-dom';

interface UserCardProps {
  name: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ name }) => {
  return (
    <div className="p-1 m-1 text-center bg-green-200 rounded-md shadow-md">
      <p><strong>Name:</strong> {name}</p>
      <Link to="/profile">
        <button className="mt-4 bg-customGreen text-white px-2 py-2 rounded-md hover:bg-green-600">
          View Full Profile
        </button>
      </Link>
    </div>
  );
};

export default UserCard;