import React, { useState, useEffect } from "react";
import DoctorCard from "../../Component/Doctor";
import "./DoctorSearch.css";
import Nav from "../Welcome/Navbar"
import axios from "axios";
  

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [details,setDetails]=useState([]);
  useEffect(() => {
    const fetch = async () =>{
      const response= await axios.get("http://localhost:8080/doctorCardGet");
      setDetails(response.data);
      console.log(response.data);
    }
    const fetchPostBySearch = async () =>{
      const response = await axios.get(`http://localhost:8080/searchDoctors/${searchTerm}`);
      console.log(response.data);
      setDetails(response.data);
    }
  if (searchTerm.length == 0 ){fetch()};
    if(searchTerm.length > 2){fetchPostBySearch()};
  }, [searchTerm])
  

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  

  return (
    <>
    <Nav />
    <div className="doctors-container">
      
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search doctors..."
          className="search-input"
        />
        <button className="search-button" onClick={handleSearchChange}>Search</button>
      </div>
      <div className="doctor-cards-container">
        {details.map((doctor, index) => (
          <DoctorCard key={index} item={doctor} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Doctors;