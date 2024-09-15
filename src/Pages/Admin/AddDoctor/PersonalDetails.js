import React, { useState } from 'react';

const PersonalDetails = () => {
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    speciality: '',
    location: '',
    image: null
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
    setFormData(prev => ({
      ...prev,
      image: file
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Create doctor profile data
    const doctorProfileData = {
      ...formData
      // Add more fields if needed
    };

    // Log the form data to the console
    console.log(doctorProfileData);
  };

  return (
    <form className="add-doctor-form-container" onSubmit={handleSubmit}>
      <div className="add-doctor-form-group">
        <label>First Name <span>*</span></label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter First Name"
          required
        />
      </div>
    
      <div className="add-doctor-form-group">
        <label>Speciality <span>*</span></label>
        <input
          type="text"
          name="speciality"
          value={formData.speciality}
          onChange={handleChange}
          placeholder="Enter Speciality"
          required
        />
      </div>

      <div className="add-doctor-form-group">
        <label>Location <span>*</span></label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter Location"
          required
        />
      </div>

      <div className="add-doctor-form-group">
        <label>Profile Photo <span>*</span></label>
        <input
          type="file"
          id="profile-photo-upload"
          onChange={handlePhotoChange}
        />
      </div>
 
      <div className="add-doctor-form-actions">
        <button
          type="button"
          className="add-doctor-cancel-button"
          style={{ marginRight: "10px" }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="add-doctor-submit-button"
          style={{ marginRight: "20px" }}
        >
          Create Profile
        </button>
      </div>
    </form>
  );
};

export default PersonalDetails;
