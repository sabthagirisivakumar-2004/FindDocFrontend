import React from "react";
import "./Lnavbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  
 
  return (
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
            href="#Home"
            className="link1"
           
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#Doctors"
            className="link2"
          >
            Our Doctors
          </a>
        </li>
        <li>
          <a
            href="#Features"
            className="link3"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#Review"
            className="link4"
          >
            Review
          </a>
        </li>
        <li>
          <a
            href="#events"
            className="link5"
            
          >
            Contact Us
          </a>
        </li>
        <li>
          <img
            src="https://graph.org/file/013ab34a2d54cf6c62955.jpg"
            width={"50px"}
            height={"50px"}
            style={{ borderRadius: "80px" }}
          ></img>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
