import React from "react";

function Step({
  step,
  formData,
  handleChange,
  nextStep,
  previousStep,
  handleSubmit,
}) {
  return (
    <form className="form-container" onSubmit={handleSubmit}>

      {step === 1 && (
        <div id="step1" className="step-card">
          <h2>Customer Details</h2>

          <label htmlFor="first_name">First Name:</label>
          <input
            id="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleChange}
          />

          <label htmlFor="last_name">Last Name:</label>
          <input
            id="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleChange}
          />

          <button id="next" type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div id="step2" className="step-card">
          <h2>Car Details</h2>

          <label htmlFor="model">Car Model:</label>
          <input
            id="model"
            type="text"
            value={formData.model}
            onChange={handleChange}
          />

          <label htmlFor="car_price">Car Price:</label>
          <input
            id="car_price"
            type="number"
            value={formData.car_price}
            onChange={handleChange}
          />

          <button id="previous" type="button" onClick={previousStep}>
            Previous
          </button>

          <button id="next" type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div id="step3" className="step-card">
          <h2>Payment Details</h2>

          <label htmlFor="card_info">Card Information:</label>
          <input
            id="card_info"
            type="text"
            value={formData.card_info}
            onChange={handleChange}
          />

          <label htmlFor="expiry_date">Expiry Date:</label>
          <input
            id="expiry_date"
            type="text"
            value={formData.expiry_date}
            onChange={handleChange}
          />

          <button id="previous" type="button" onClick={previousStep}>
            Previous
          </button>

          <button id="submit" type="submit">
            Submit
          </button>
        </div>
      )}
    </form>
  );
}

export default Step;