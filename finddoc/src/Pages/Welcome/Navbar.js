import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const Hospitals = () => {
    navigate("/Hsearch");
  };
  const Doctors = () => {
    navigate("/Dsearch");
  };
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
            href="#home"
            className="links1"
            onClick={() => {
              navigate("/home");
            }}
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
          >
            Specialist
          </a>
        </li>
        <li>
          <a
            href="#events"
            className="links5"
            onClick={()=>{navigate("/events")}}
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
