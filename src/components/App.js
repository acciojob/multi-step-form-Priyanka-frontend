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
    expiry_date: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => {
      if (prev < 3) {
        return prev + 1;
      }
      return prev;
    });
  };

  const previousStep = () => {
    setCurrentStep((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
      return prev;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Step
      step={currentStep}
      formData={formData}
      handleChange={handleChange}
      nextStep={nextStep}
      previousStep={previousStep}
      handleSubmit={handleSubmit}
    />
  );
}

export default App;