// src/components/PracticalExperience.jsx
import React, { useState } from 'react';

function PracticalExperience({ onSubmit }) {
  const [experience, setExperience] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExperience(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = { /* Collect data from form fields */ };
    onSubmit({generalInfo: newData}, 4); // Advance to step 4
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company Name:
        <input
          type="text"
          name="companyName"
          value={experience.companyName}
          onChange={handleChange}
        />
      </label>
      <label>
        Position Title:
        <input
          type="text"
          name="positionTitle"
          value={experience.positionTitle}
          onChange={handleChange}
        />
      </label>
      <label>
        Main Responsibilities:
        <input
          type="text"
          name="mainResponsibilities"
          value={experience.mainResponsibilities}
          onChange={handleChange}
        />
      </label>
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={experience.startDate}
          onChange={handleChange}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={experience.endDate}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Experience</button>
    </form>
  );
}

export default PracticalExperience;
