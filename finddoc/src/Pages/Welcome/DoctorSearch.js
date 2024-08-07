import React, { useState } from "react";
import DoctorCard from "../../Component/Doctor";
import "./DoctorSearch.css";
import Nav from "../Welcome/Navbar"
const doctorsData = [
  { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Sharmila", specialty: "Cardilogists", location: "Coimbatore" },
  { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Pavithran", specialty: "Neurologists", location: "Madurai" },
  { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Sharmila", specialty: "Cardilogists", location: "Coimbatore" },
  { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Pavithran", specialty: "Neurologists", location: "Madurai" },
  { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Sharmila", specialty: "Cardilogists", location: "Coimbatore" },
  { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Pavithran", specialty: "Neurologists", location: "Madurai" },
  { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Sharmila", specialty: "Cardilogists", location: "Coimbatore" },
  { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Pavithran", specialty: "Neurologists", location: "Madurai" },
  { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Sharmila", specialty: "Cardilogists", location: "Coimbatore" },
  { url:"https://graph.org/file/bdc611ecff97eeb973041.jpg",name: "Dr. Pavithran", specialty: "Neurologists", location: "Madurai" },
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDoctors = doctorsData.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {filteredDoctors.map((doctor, index) => (
          <DoctorCard key={index} item={doctor} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Doctors;