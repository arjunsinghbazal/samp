import React from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "./young-bearded-man-with-striped-shirt_273609-5677.avif";


const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/login");
  };

  const handleDelete = () => {
    localStorage.clear();
    navigate("/");
  };

  const userString = localStorage.getItem("login");
  const user = JSON.parse(userString);

  if (!user) {
    navigate("/login");
    return null; 
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
      </div>
      <div className="profile-content">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="profile-details">
          <h3 className="profile-info">Username: {user.username}</h3>
          <h3 className="profile-info">Password: {user.password}</h3>
        </div>
      </div>
      <div className="profile-footer">
        <button className="delete-button gray" onClick={handleDelete}>
          Delete Account
        </button>
        <button className="profile-button black" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
