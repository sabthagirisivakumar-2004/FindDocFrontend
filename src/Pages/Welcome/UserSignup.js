import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./UserLogin.css";

const UserAuth = ({ setIsAuthenticated }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({  email: "", password: "" });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setForm({ email: "", password: "" });
    setErrors({ name: "", email: "", password: "" });
    navigate("/home");
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
        setForm({ email: "", password: "" });
        setErrors({ name: "", email: "", password: "" });
      } else {
        // Handle login logic
        console.log("Login successful", form);
        localStorage.setItem("isAuthenticated", "true"); // Save authentication state
       
        navigate("/User-login"); // Navigate to the home page upon successful login
      }
    }
  };
const nextSignin = async () =>{
const datas={email:form.email,password:form.password}
 const response = await axios.post('http://localhost:8080/saveUser',datas);
 console.log(response.data)
}
  return (
    <div className="container" style={{width:"1519px"}}>
      <div className="image-section"></div>
      <div className="form-section">
        <form onSubmit={handleSubmit} className="form-container">
          <h1 style={{ textAlign: "center" }}>
            Signup
          </h1>
         
          
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
          <button type="submit" className="form-button" onClick={nextSignin}>
            Signup
          </button>
          <button type="button" onClick={()=>{navigate("/User-login")}} className="toggle-button">
          Already have an account? Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAuth;
