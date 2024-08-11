// DoctorCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./Ldoctors.css";
const DoctorCard = ({ item }) => {
  return (
    <>
      <Link
        className="doctor-card-link"
        
      >
        <div className="doctor-card">
          <img src={item.url} alt={item.name} className="doctor-card-image" />
          <h2>{item.name}</h2>
          <p>Specialty: {item.specialty}</p>
          <p>Location: {item.location}</p>
        </div>
      </Link>
    </>
  );
};

export default DoctorCard;
