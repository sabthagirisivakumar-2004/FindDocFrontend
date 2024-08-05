import React from "react";
function DoctorProfile({image,specialty,}) {
  return (
   
      <div
        className="specialty-card"
      >
        <div className="card-image">
          <img src={image} alt={specialty} />
        </div>
        <div className="card-content">
          <h3>{specialty}</h3>
        </div>
      </div>
  );
}

export default DoctorProfile;