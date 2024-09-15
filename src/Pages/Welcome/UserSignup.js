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
    <img src="https://plus.unsplash.com/premium_photo-1673958772145-379691dd6160?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{position:"absolute",height:"676px",left:"515px",top:"10px",width:"1020px",borderTopLeftRadius:"20px",borderEndStartRadius:"20px"}}></img>
      <div className="image-section"></div>
      <div className="form-section" style={{marginRight:"950px",borderRadius:"40px", backgroundColor: "rgba(255, 255, 255, 0.058)",width:"400px",
        transform: "scale(1.05)"}}>
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
          <button type="submit" className="form-button" onClick={nextSignin} style={{backgroundColor:"rgb(148, 51, 238)"}}>
            Signup
          </button>
          <button type="button" onClick={()=>{navigate("/User-login")}} className="toggle-button" style={{backgroundColor:"black"}}>
          Already have an account? Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAuth;
