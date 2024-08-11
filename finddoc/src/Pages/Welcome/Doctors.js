import React, { useState, useEffect } from 'react'
import Doctor from '../../Component/Doctor'
import axios from 'axios';
const Doctors = () => {
   const [details,setdetails] = useState([]);
   useEffect(() => {
     const fetch = async () =>{
      const reponse = await axios.get("http://localhost:8080/doctorCardGet");
      setdetails(reponse.data);
      console.log(reponse.data);
     }
   fetch();
     
   }, [])
   
  return (
    <>
    <div className='Doctors'>
    <h1 style={{marginLeft:"55px",marginTop:"100px"}}>TopDoctors</h1>
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