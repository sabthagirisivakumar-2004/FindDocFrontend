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
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"25px"}}>
      <div>
      
      <button onClick={handleAdminLogin} className="button" style={{marginRight:"10px",backgroundColor:"rgb(148, 51, 238)"}}>
        Admin Login
      </button>
      </div>
      <div>
      <button onClick={handleUserLogin} className="button" style={{marginRight:"10px",backgroundColor:"rgb(148, 51, 238)"}}>
        User Login / Register
      </button>
      </div>
      </div>
    </div>
  );
};

export default DefaultAuth;
