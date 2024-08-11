import React, { useState, useEffect } from "react";
import HospitalCard from "../../Component/HospitalSearch";
import "./HospitalSearch.css";
import { useNavigate } from "react-router-dom";
import Nav from "../Welcome/Navbar";
import axios from "axios";
const Hospital = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [details,setDetails]=useState([]);
  useEffect(() => {
   const fetch =  async () =>{
     const response= await axios.get("http://localhost:8080/HospitalCardGet");
     setDetails(response.data);
     console.log(response.data);
   }
   const fetchCardByPost = async () => {
    const reponse = await axios.get(`http://localhost:8080/hospitalCardSearch/${searchTerm}`);
    setDetails(reponse.data);
    console.log(reponse.data); 
   }
   if(searchTerm.length == 0){fetch()};
   if(searchTerm.length > 2){fetchCardByPost()};
   }, [searchTerm]);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // const filteredHospitals =details.filter(
  //   (hospital) =>
  //     hospital.Hname.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const navigate =useNavigate();

  return (
    <>
    <Nav/>
    <div className="hospital-container">
      
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search hospitals..."
          className="search-input"
        />
        <button className="HSbtn" onClick={handleSearchChange}>CLEAR</button>
      </div>
      <div className="hospital-cards-container">
        {details.map((hospital) => (
          <HospitalCard key={hospital.id} item={hospital} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Hospital;