import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo.jsx';
import EducationalExperience from './components/EducationalExperience.jsx';
import PracticalExperience from './components/PracticalExperience.jsx';
import CVDisplay from './components/CVDisplay.jsx';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    generalInfo: {},
    education: [],
    practicalExperience: []
  });

  const handleNextStep = (newData, nextStep) => {
    setFormData(prevData => ({
      ...prevData,
      ...newData
    }));
    setCurrentStep(nextStep);
  };

  const handleSubmitFinal = () => {
    console.log(formData); // Here, you'd handle the final submission or transition to the CV display
    setCurrentStep(currentStep + 1);
  };

  return (
    <div>
      {currentStep === 1 && <GeneralInfo onSubmit={() => handleNextStep({}, 2)} />}
      {currentStep === 2 && <EducationalExperience onSubmit={() => handleNextStep({}, 3)} />}
      {currentStep === 3 && <PracticalExperience onSubmit={handleSubmitFinal} />}
      {currentStep === 4 && <CVDisplay formData={formData} />}
    </div>
  );
}

export default App;
