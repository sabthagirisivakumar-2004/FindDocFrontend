import React, { useState } from 'react';

const AccountDetails = () => {
  const [accountData, setAccountData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccountData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const doctorProfileData = {
      ...accountData,
      // Populate other fields as needed
    };

    // Here you can handle the data, e.g., logging it
    console.log('Doctor profile data:', doctorProfileData);
    // Additional logic, such as clearing the form or showing a success message, can be added here
  };

  return (
    <form className="add-doctor-form-container" onSubmit={handleSubmit}>
      <div className="add-doctor-form-group">
        <label>Username <span>*</span></label>
        <input type="text" name="username" value={accountData.username} onChange={handleChange} placeholder="Enter Username" required />
      </div>
      <div className="add-doctor-form-group">
        <label>Password <span>*</span></label>
        <input type="password" name="password" value={accountData.password} onChange={handleChange} placeholder="Enter Password" required />
      </div>
      <div className="add-doctor-form-group">
        <label>Confirm Password <span>*</span></label>
        <input type="password" name="confirmPassword" value={accountData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
      </div>
      <div className="add-doctor-form-actions">
        <button type="button" className="add-doctor-cancel-button" style={{marginRight:"10px"}}>Cancel</button>
        <button type="submit" className="add-doctor-submit-button" style={{marginRight:"10px"}}>Create Doctor Profile</button>
      </div>
    </form>
  );
};

export default AccountDetails;
