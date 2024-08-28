import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
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
      email: '',
      password: '',
    };


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
          <h2 className="font-semibold text-xl text-center text-gray-600">Login in</h2>
          <p className="text-red-500 text-center mb-6">totally no clue</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            
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
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className={`h-10 border mt-1 rounded px-4 w-full ${formErrors.password ? 'bg-red-100' : 'bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {formErrors.password && <p className="text-xs text-red-500 mt-1">{formErrors.password}</p>}
            </div>

            <div className="mb-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                type="submit"
              >
                Log in
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Dont have a account?{' '}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
