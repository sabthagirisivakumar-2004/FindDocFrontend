import React from 'react';
import Drawer from '@mui/material/Drawer';
import './Profile.css';

const Profile = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
        className="profile-drawer-content"
      >
        <div className="profile-info">
          <div className="profile-pic">
            <img src="" alt="Profile" />
          </div>
          <div className="details">
            <h2>Darlene Gibbs (34/F)</h2>
            <p>Email: darlene_gibbs@gmail.com</p>
            <p>Phone: (219) 555-0114</p>
            <p>Job Type: Private</p>
            <p>Age: 34</p>
            <p>Address: 6391 Elgin St. Celina, Delaware 10299</p>
            <p>Birthday: 1984-07-09</p>
            <button className="edit-button">Edit Profile</button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Profile;