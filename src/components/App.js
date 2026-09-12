import React, { useState } from "react";
import Step from "./Step";
import "../styles/App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>

      <Step
        step={currentStep}
        formData={formData}
        handleChange={handleChange}
        nextStep={nextStep}
        previousStep={previousStep}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;

