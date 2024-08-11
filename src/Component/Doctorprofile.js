import React, { useState,useEffect } from "react";
import Nav from "../Pages/Welcome/Navbar";
import "./DoctorPro.css";
import MediAct from "./MedicalAction";
import Exp from "./Experience";
import Dreview from "./Doctorreview";
import axios from "axios";
import { useParams } from "react-router-dom";
const Doctorprofile = () => {
  const [Ddetails,setDdetails]= useState([]);
  const {id} = useParams();
  useEffect(() => {
    const fetch = async () =>{
    const response= await axios.get(`http://localhost:8080/DoctorDetailById/${id}`);
    console.log(response.data);
    setDdetails(response.data);
    
    }
  
   fetch();
  }, [id])
  return (
    <>
      <Nav />
      <div>
      <img src="https://telegra.ph/file/610859f9b6c858fbf41f1.jpg" width={"1475px"} style={{marginLeft:"20px",marginTop:"20px",borderRadius:"20px"}}></img>
      <img src="https://telegra.ph/file/453b152d21122394780e7.jpg" width={"300px"} style={{position:"absolute",left:"50px",top:"530px",borderRadius:"5%"}}></img>
      <h1 style={{marginTop:"140px",marginLeft:"50px",color:"black"}}>{Ddetails.dname}<span style={{fontSize:"28px",marginLeft:"20px",color:"grey"}}>{Ddetails.speciality}</span></h1>
      <h2 style={{marginLeft:"50px",color:"black"}}>{Ddetails.location}</h2>
      <h2 style={{marginTop:"50px",marginLeft:"49px"}}>About</h2>
      <p style={{marginLeft:"49px",lineHeight:"35px",fontSize:"21px"}}>
Dr. Priya Ramanathan is a highly experienced ENT Specialist at PSG Hospital in Coimbatore.<br></br> With over 15 years of expertise in diagnosing and treating a wide range of ear, nose, and throat <br></br>conditions, Dr. Ramanathan is dedicated to providing compassionate and comprehensive care <br></br>to her patients. She specializes in advanced treatments for sinusitis, hearing loss, voice disorders,<br></br> and allergies. Dr. Ramanathan is known for her patient-centered approach, ensuring personalized<br></br> treatment plans and the highest quality of care. At PSG Hospital, she leverages state-of-the-art <br></br>technology and evidence based practices to achieve the best outcomes for her patients.
      </p>
      <h1><span style={{fontSize:"28px",marginLeft:"49px",marginTop:"80px",color:"grey"}}>🧑‍⚕️{Ddetails.status}</span></h1>
      <h1><span style={{fontSize:"28px",position:"absolute",top:"1244px",left:"270px",color:"grey"}}>{Ddetails.fees}</span></h1>
      </div>
      
       
          <MediAct item={Ddetails.actions}/>
        
       

       

      
      <Exp item={Ddetails}/>
      <Dreview item={Ddetails}/>
      </>
  );
};

export default Doctorprofile;
