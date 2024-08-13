import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Welcome from "../Pages/Welcome/Welcome";
import Admin from "../Pages/Welcome/AdminLogin";
import User from "../Pages/Welcome/UserLogin";
import Home from "../Pages/Welcome/Home";
import Hsearch from "../Pages/Welcome/HospitalSearch";
import Dsearch from "../Pages/Welcome/DoctorSearch";
import Events from "../Pages/Welcome/Events";
import LandingPage from "../Pages/Welcome/Landingpage/LandingPage";

import Special from "../Pages/Welcome/Special";
import Dpage from "../Pages/Welcome/DoctorPage";
import Hdetails from "../Pages/Welcome/HospitalDetails";
import Signup from "../Pages/Welcome/UserSignup";
import Ddetails from "../Component/DoctorProile";
import Dashboard from "../Pages/Admin/Dashboard";
import SDoctors from "../Pages/Welcome/SpecialistDoctors"
const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/SpecialDoctors/:specialty" element={<SDoctors/>}></Route>
        <Route index path="/home" element={<Home />}></Route>
        <Route path="/Welcome" element={<Welcome />}></Route>
        <Route path="/Admin-login" element={<Admin />}></Route>
        <Route path="/User-login" element={<User />}></Route>
        <Route path="/Hsearch" element={<Hsearch />}></Route>
        <Route path="/Dsearch" element={<Dsearch />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Special" element={<Special />}></Route>
        <Route path="/special/:id" element={<Dpage />}></Route>
        <Route path="/Hdetails/:id" element={<Hdetails />}></Route>
        <Route path="/Ddetails/:id" element={<Ddetails/>}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
