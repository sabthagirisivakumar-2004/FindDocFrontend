import React from 'react';
import './SpecialistCard.css';
import { Link } from "react-router-dom";

const SpecialistCard = ({ id, specialty, image, onClick }) => {
  return (
    <Link to={`/SpecialDoctors/${specialty}`} className="specialty-card-link" style={{textDecoration: "none", marginTop:"20px"}}>
      <div 
        className="specialty-card" 
        onClick={() => {
          if (onClick) {
            onClick(specialty);
          }
        }}
      >
        <div className="card-image">
          <img src={image} alt={specialty} />
        </div>
        <div className="card-content" >
          <h3>{specialty}</h3>
        </div>
      </div>
    </Link>
  );
};

export default SpecialistCard;