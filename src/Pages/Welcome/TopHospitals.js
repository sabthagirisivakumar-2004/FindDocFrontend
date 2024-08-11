import React, { useState,useEffect } from 'react'
import Hospital from '../../Component/Hospitals'
import axios from 'axios'
const TopHospitals = () => {
  const [details,setDetails] = useState([]);
  
  
  useEffect(() => {
    const fetch = async () => {
    const response= await axios.get("http://localhost:8080/HospitalCardGet");
    setDetails(response.data)
    console.log(response.data);
    }
  fetch();
   
  }, [])
  
  return (
    <>
    <div className='Hospitals'>
    <h1 style={{marginLeft:"55px",marginTop:"100px"}}>TopHospitals</h1>
    {
    details.map((d,index) => (
    
      <Hospital item={d}/>
   
      )
    )
    }
    </div>
    </>
  )
}

export default TopHospitals