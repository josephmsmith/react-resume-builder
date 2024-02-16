import React from 'react';

function CVDisplay({ generalInfo, educationExperiences, practicalExperiences, onEdit }) {
  return (
    <div className="cv-display">
      <h1>Curriculum Vitae</h1>
      <div className="cv-section">
        <h2>General Information</h2>
        <p>Name: {generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phoneNumber}</p>
      </div>

      <div className="cv-section">
        <h2>Educational Experience</h2>
        {educationExperiences.map((edu, index) => (
          <div key={index}>
            <p>School: {edu.schoolName}</p>
            <p>Study Field: {edu.titleOfStudy}</p>
            <p>Date of Study: {edu.dateOfStudy}</p>
          </div>
        ))}
      </div>

      <div className="cv-section">
        <h2>Practical Experience</h2>
        {practicalExperiences.map((exp, index) => (
          <div key={index}>
            <p>Company: {exp.companyName}</p>
            <p>Position: {exp.positionTitle}</p>
            <p>Main Responsibilities: {exp.mainResponsibilities}</p>
            <p>Period: {exp.startDate} - {exp.endDate}</p>
          </div>
        ))}
      </div>

      <button onClick={onEdit}>Edit</button>
    </div>
  );
}

export default CVDisplay;
