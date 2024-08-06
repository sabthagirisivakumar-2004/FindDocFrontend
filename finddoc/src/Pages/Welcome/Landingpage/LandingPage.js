import React from "react";
import Nav from "../Landingpage/Lnavbar";
import Hero from "./Lhero";
import Feature from "../Landingpage/Feature";
import OurDoctors from "./Ourdoctors";
import Review from "../Landingpage/Review";
import Footer from "../../Welcome/Landingpage/Lfooter";
const LandingPage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <OurDoctors />
      <Feature />
      <Review />
      <Footer/>
    </>
  );
};

export default LandingPage;
