import React, { useState } from "react";
import "../Styles/Contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Email is invalid";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.message) formErrors.message = "Message is required";
    if (!formData.consent)
      formErrors.consent = "You must agree to receive communications";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData);

      setSuccessMessage("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        consent: false, // Reset consent checkbox
      });
      setErrors({});
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero-section">
        <div className="contact-hero-overlay">
          <h1>CONTACT US</h1>
          <p>HAVE A QUESTION? WE ARE HERE FOR YOU</p>
        </div>
      </div>

      <div className="contact-sections">
        <div className="contact-info-section">
          <h2>Hands On Heros Of Meck County, NC</h2>
          <p>
            <strong>Hands On Heroes</strong>
          </p>
          <p>123 Volunteer Lane, Suite 100, Charlotte, NC 28202</p>
          <p>
            P: <span class="phone-number">(123) 456-7890</span>
          </p>
          <p>F: (123) 456-7891</p>
          <div className="operating-hours">
            <h3>OPERATING HOURS</h3>
            <p>Monday – Friday, 9:00 am to 5:00 pm</p>
          </div>
          <div className="need-help">
            <h3>NEED HELP?</h3>
            <p>
              If you need help finding assistance, please call 2-1-1 or
              866-892-9211 for referral information. For additional resources
              visit Handsonheros.org.
            </p>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Get In Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                Name<span className="required-asterisk">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email<span className="required-asterisk">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="subject">
                Subject<span className="required-asterisk">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              {errors.subject && (
                <p className="error-message">{errors.subject}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Message<span className="required-asterisk">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && (
                <p className="error-message">{errors.message}</p>
              )}
            </div>
            <div className="form-group consent-group">
              <label>
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                />
                <span className="consent-text">
                  By submitting, I agree to receive communications from Hand's
                  On Hero's, SC.
                </span>
              </label>
              {errors.consent && (
                <p className="error-message">{errors.consent}</p>
              )}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
