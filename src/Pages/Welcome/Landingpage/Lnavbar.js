import React from "react";
import "./Lnavbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  
 
  return (
    <nav className="navbar">
      <div className="Llogo" >
        <img
          src="https://telegra.ph/file/2aefe06d6971b3b64c3f9.jpg"
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
            src="https://telegra.ph/file/8234a14fe801e437971cd.jpg"
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
