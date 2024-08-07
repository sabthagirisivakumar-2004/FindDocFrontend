import React, { useState } from "react";
import HospitalCard from "../../Component/Hospitals";
import "./HospitalSearch.css";
import { useNavigate } from "react-router-dom";
import Nav from "../Welcome/Navbar";
const datas=[
    {
      id: 1,
      url:"https://graph.org/file/af258f1b89b99e6e20ee2.jpg",
      name: "PSG Hospital",
      address: "123 Main St, Cityville",
      
    },
    {
      id: 2,
      url:"https://graph.org/file/af258f1b89b99e6e20ee2.jpg",
      name: "KG Hospital",
      address: "456 Elm St, Townsville",
      
    },
    {
      id: 3,
      url:"https://graph.org/file/af258f1b89b99e6e20ee2.jpg",
      name: "KMCH Hospital",
      address: "123 Main St, Cityville",
      
    },
    {
      id: 4,
      url:"https://graph.org/file/af258f1b89b99e6e20ee2.jpg",
      name: "Stanley Hospital",
      address: "456 Elm St, Townsville",
      
    },
  ];

const Hospital = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredHospitals =datas.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.address.toLowerCase().includes(searchTerm.toLowerCase()) 
  );
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
        {filteredHospitals.map((hospital) => (
          <HospitalCard key={hospital.id} item={hospital} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Hospital;