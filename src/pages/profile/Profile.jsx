import React from 'react';
import "./profile.scss";
import Header from '../../components/header/Header';

const Profile = () => {
  // Get user data from local storage
  const userData = localStorage.getItem('userData');
  let user = null;

  if (userData) {
    user = JSON.parse(userData);
  }

  return (
    <div className="profile">
      <Header />
      <div className="profile-content">
        <h3>My Profile</h3>
        {user && (
          <div className="profile-details">
            <h2>User Details</h2>
            <p>First Name: {user.user.firstname}</p>
            <p>Last Name: {user.user.lastname}</p>
            <p>Email: {user.user.email}</p>
            <p>Phone Number: {user.user.phone_number}</p>
            <p>Address: {user.user.address.street}, {user.user.address.city}, {user.user.address.postal_code}, {user.user.address.country}</p>
            {/* Add more user details as needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
