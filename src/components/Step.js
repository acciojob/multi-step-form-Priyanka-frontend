import React from "react";

function Step({
  step,
  formData,
  handleChange,
  nextStep,
  previousStep,
  handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit} className="form-container">

      {/* Step 1 */}
      {step === 1 && (
        <div className="step-card">
          <h2>Customer Details</h2>

          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />

          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />

          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="step-card">
          <h2>Car Details</h2>

          <label htmlFor="model">Car Model:</label>
          <input
            type="text"
            id="model"
            value={formData.model}
            onChange={handleChange}
          />

          <label htmlFor="car_price">Car Price:</label>
          <input
            type="number"
            id="car_price"
            value={formData.car_price}
            onChange={handleChange}
          />

          <div className="buttons">
            <button type="button" onClick={previousStep}>
              Previous
            </button>

            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="step-card">
          <h2>Payment Details</h2>

          <label htmlFor="card_info">Card Information:</label>
          <input
            type="text"
            id="card_info"
            value={formData.card_info}
            onChange={handleChange}
          />

          <label htmlFor="expiry_date">Expiry Date:</label>
          <input
            type="text"
            id="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
          />

          <div className="buttons">
            <button type="button" onClick={previousStep}>
              Previous
            </button>

            <button type="submit">
              Submit
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default Step;