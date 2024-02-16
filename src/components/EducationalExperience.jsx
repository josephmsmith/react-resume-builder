// src/components/EducationalExperience.jsx
import React, { useState } from 'react';

function EducationalExperience({ onSubmit }) {
  const [education, setEducation] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEducation(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = { /* Collect data from form fields */ };
    onSubmit({generalInfo: newData}, 4); // Advance to step 2
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        School Name:
        <input
          type="text"
          name="schoolName"
          value={education.schoolName}
          onChange={handleChange}
        />
      </label>
      <label>
        Title of Study:
        <input
          type="text"
          name="titleOfStudy"
          value={education.titleOfStudy}
          onChange={handleChange}
        />
      </label>
      <label>
        Date of Study:
        <input
          type="text"
          name="dateOfStudy"
          value={education.dateOfStudy}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Education</button>
    </form>
  );
}

export default EducationalExperience;
