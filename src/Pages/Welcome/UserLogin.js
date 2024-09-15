import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserLogin.css";
import axios from "axios";

const UserAuth = ({ setIsAuthenticated }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setForm({ name: "", email: "", password: "" });
    setErrors({ name: "", email: "", password: "" });
    navigate("/Signup");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let valid = true;
    let errors = {};
    if (isRegister && !form.name) {
      errors.name = "Name is required";
      valid = false;
    }
    if (!form.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email address is invalid";
      valid = false;
    }
    if (!form.password) {
      errors.password = "Password is required";
      valid = false;
    }
    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (isRegister) {
        // Handle registration logic
        console.log("Registration successful", form);
        // Switch to login after successful registration
        setForm({ name: "", email: "", password: "" });
        setErrors({ name: "", email: "", password: "" });
      } else {
        authentication();
       
      }
    }
  };

  const authentication = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email: form.email,
        password: form.password,
      });
  
      if (response.status === 200) {
       
        navigate("/home");
       
        
      } else {
        alert("Login failed");
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        alert("Login failed: " +  "Invalid credentials");
      } else if (error.request) {
        // The request was made but no response was received
        alert("No response from the server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        alert("Error: " + error.message);
      }
    }
  };
  

  return (
    <div className="container" style={{ width: "1530px",}}>
    <img src="https://plus.unsplash.com/premium_photo-1673958772259-009b3e16b99a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{position:"absolute",height:"676px",left:"515px",top:"9px",width:"1020px",borderTopLeftRadius:"20px"}}></img>
      <div className="image-section"></div>
      <div className="form-section" style={{marginRight:"950px",borderRadius:"40px", backgroundColor: "rgba(255, 255, 255, 0.058)",width:"400px",
        transform: "scale(1.05)"}}>
        <form className="form-container" onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center" }}>
            {isRegister ? "Register" : "Login"}
          </h1>
          {isRegister && (
            <div>
              <label className="form-label">
                Name:
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>
          )}
          <div>
            <label className="form-label">
              Email:
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </label>
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>
          <div>
            <label className="form-label">
              Password:
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="form-input"
              />
            </label>
            {errors.password && <p className="form-error">{errors.password}</p>}
          </div>
          <button type="submit" className="form-button" style={{backgroundColor:"rgb(148, 51, 238)"}}>
            {isRegister ? "Register" : "Login"}
          </button>
          <button type="button" onClick={toggleMode} className="toggle-button" style={{backgroundColor:"black"}}>
            {isRegister
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAuth;
