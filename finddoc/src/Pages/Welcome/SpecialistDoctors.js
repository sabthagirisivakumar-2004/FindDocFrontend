import React, { useState, useEffect } from 'react'
import Doctor from '../../Component/Doctor'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Doctors = () => {
   const [details,setdetails] = useState([]);
   const {specialty} =useParams();
   useEffect(() => {
     const fetch = async () =>{
      const reponse = await axios.get("http://localhost:8080/GetAllSpecialityDoctor");
      setdetails(reponse.data);
      console.log(reponse.data);
     }
   fetch();
     
   }, [])
   
  return (
    <>
    <div className='Doctors'>
    <h1 style={{marginLeft:"55px",marginTop:"100px"}}>{specialty}</h1>
    {
    details.map((d,index) => (
      <Doctor item={d}/>
      )
    )
    }
    </div>
    </>
  )
}

export default Doctors