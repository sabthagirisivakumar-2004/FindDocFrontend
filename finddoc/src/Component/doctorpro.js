import React from "react";
function DoctorProfile({item}) {
  return (
   
      <div
        className="specialty-card"
        style={{height:"250px"}}
      >
        <div className="card-image">
          <img src={item.img}/>
        </div>
        <div style={{marginLeft:"10px",marginTop:"5px",fontWeight:"bold"}}>
       {item.name} <span style={{marginLeft:"38px"}}> <img src={item.status} width={"20px"} height={"20px"}></img></span>
        </div>
        
       
        
        <div style={{marginLeft:"10px",marginTop:"10px",fontWeight:"lighter"}}>
        {item.speciality}
        </div>
        <div style={{marginLeft:"10px",marginTop:"10px",fontWeight:"lighter"}}>
        {item.location}
        </div>
        
        
      </div>
  );
}

export default DoctorProfile;