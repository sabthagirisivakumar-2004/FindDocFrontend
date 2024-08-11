import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile  from "./Profile";
const Navbar = () => {
  const navigate = useNavigate();
  const Hospitals = () => {
    navigate("/Hsearch");
  };
  const Doctors = () => {
    navigate("/Dsearch");
  };
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  const handleDrawerClose = () => {
    setIsProfileOpen(false);
  };
  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://graph.org/file/8998a48e103ccf565ec2b.jpg"
          alt="Hospital Logo"
        />
      </div>

      <ul className="nav-links">
        <li>
          <a
            href="#home"
            className="links1"
            onClick={() => {
              navigate("/home");
            }}
            style={{marginLeft:"90px"}}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#hospital"
            className="links2"
            onClick={() => {
              navigate("/Hsearch");
            }}
            style={{marginLeft:"105px"}}
          >
            Hospital
          </a>
        </li>
        <li>
          <a
            href="#doctors"
            className="links3"
            onClick={() => {
              navigate("/Dsearch");
            }}
            style={{marginLeft:"125px"}}
          >
            Doctors
          </a>
        </li>
        <li>
          <a
            href="#Special"
            className="links4"
            onClick={() => {
              navigate("/Special");
            }}
            style={{marginLeft:"140px"}}
          >
            Specialist
          </a>
        </li>
        <li>
          <a
            href="#events"
            className="links5"
            onClick={()=>{navigate("/events")}}
            style={{marginLeft:"160px"}}
          >
            Events
          </a>
        </li>
        <li>
          <a href="#location" className="links6">
            Location
          </a>
        </li>
        <li>
        <img
        src="https://graph.org/file/013ab34a2d54cf6c62955.jpg"
        style={{ width: 30, height: 30, cursor: 'pointer' }}
        alt="Profile"
        onClick={handleProfileClick}
      />
        </li>
      </ul>
    </nav>
    <Profile open={isProfileOpen} onClose={handleDrawerClose} /></>
  );
};

export default Navbar;
