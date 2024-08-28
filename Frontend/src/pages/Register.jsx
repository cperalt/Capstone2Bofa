import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      fullName: '',
      email: '',
      password: '',
    };

    if (!formData.fullName) {
      errors.fullName = 'Full Name is required';
      valid = false;
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      valid = false;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid. Submitting...', formData);
      setFormData({
        fullName: '',
        email: '',
        password: '',
      });
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <div className="container flex-grow max-w-screen-lg mx-auto p-6">
        <div className="bg-white rounded shadow-lg p-4 md:p-8">
          <h2 className="font-semibold text-xl text-center text-gray-600">Log In</h2>
          <p className="text-red-500 text-center mb-6">Sign up to get all the best Deals</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleChange}
                className={`h-10 border mt-1 rounded px-4 w-full ${formErrors.fullName ? 'bg-red-100' : 'bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {formErrors.fullName && <p className="text-xs text-red-500 mt-1">{formErrors.fullName}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@domain.com"
                value={formData.email}
                onChange={handleChange}
                className={`h-10 border mt-1 rounded px-4 w-full ${formErrors.email ? 'bg-red-100' : 'bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
                className={`h-10 border mt-1 rounded px-4 w-full ${formErrors.password ? 'bg-red-100' : 'bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {formErrors.password && <p className="text-xs text-red-500 mt-1">{formErrors.password}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                className={`h-10 border mt-1 rounded px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {formErrors.confirmPassword && <p className="text-xs text-red-500 mt-1">{formErrors.confirmPassword}</p>}
            </div>

            <div className="mb-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                type="submit"
              >
                Sign Up
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already a member?{' '}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
