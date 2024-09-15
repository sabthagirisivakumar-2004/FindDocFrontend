import React from 'react';
import './SpecialistCard.css';
import { Link } from "react-router-dom";

const SpecialistCard = ({ item }) => {
  return (
    <Link to={`/SpecialDoctors/${item.speciality}`} className="specialty-card-link" style={{textDecoration: "none", marginTop:"20px"}}>
      <div 
        className="specialty-card" 
      >
        <div className="card-image">
          <img src={item.simg} />
        </div>
        <div className="card-content" >
          <h3>{item.speciality}</h3>
        </div>
      </div>
    </Link>
  );
};

export default SpecialistCard;