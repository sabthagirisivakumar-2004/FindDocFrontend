import React from "react";
import { useNavigate } from "react-router-dom";
import "./DefaultAuth.css";

const DefaultAuth = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate("/Admin-login");
  };

  const handleUserLogin = () => {
    navigate("/User-login");
  };

  return (
    <div className="container" style={{width:"1519px"}}>
      <h1>Welcome</h1>
      <br></br>
      <div>
      <button onClick={handleAdminLogin} className="button">
        Admin Login
      </button>
      <button onClick={handleUserLogin} className="button">
        User Login / Register
      </button>
      </div>
    </div>
  );
};

export default DefaultAuth;
