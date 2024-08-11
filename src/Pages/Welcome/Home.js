import React from "react";
import Nav from "./Navbar";
import Hero from "./Hero";
import TopH from "./TopHospitals";
import Doctors from "./Doctors";
import Collab from "./Collabrators";
import Foot from "./Footer";
const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <TopH />
      <Doctors />
      <Collab />
      <Foot />
    </>
  );
};

export default Home;
