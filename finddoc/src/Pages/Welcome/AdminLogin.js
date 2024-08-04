import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = ({ setIsAuthenticated }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let valid = true;
    let errors = {};
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
      // Handle login logic
      console.log("Login successful", form);
      localStorage.setItem("isAuthenticated", "true"); // Save authentication state
      setIsAuthenticated(true);
      navigate("/home"); // Navigate to the home page upon successful login
    }
  };

  return (
    <div className="container">
      <div className="image-section"></div>
      <div className="form-section">
        <form onSubmit={handleSubmit} className="form-container">
          <h1 style={{ textAlign: "center" }}>Admin Login</h1>
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
          <button type="submit" className="form-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
