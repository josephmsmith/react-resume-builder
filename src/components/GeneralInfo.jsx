// src/components/GeneralInfo.jsx
import '../styles/GeneralInfo.css';
import React, { useState } from 'react';

function GeneralInfo({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = { /* Collect data from form fields */ };
    onSubmit({generalInfo: newData}, 2); // Advance to step 2
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default GeneralInfo;
