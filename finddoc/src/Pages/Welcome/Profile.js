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
            <img src="https://graph.org/file/013ab34a2d54cf6c62955.jpg" alt="Profile" />
          </div>
          <div className="details">
            <h2>Darlene Gibbs (34/F)</h2>
            <p >Email: darlene_gibbs@gmail.com</p>
            <p style={{marginRight:"75px"}}>Phone: (219) 555-0114</p>
            <p style={{marginRight:"115px"}}>Job Type: Private</p>
            <p style={{marginRight:"105px"}}>Age: 34</p>
            <p style={{marginRight:"5px"}}>Address: 6391 Elgin St. Celina</p>
            <p style={{marginRight:"70px"}} >Birthday: 1984-07-09</p>
            <button className="edit-button" style={{backgroundColor:"rgb(148, 51, 238)",marginRight:"20px"}}>Edit Profile</button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Profile;