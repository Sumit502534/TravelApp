import "../style/SignUp.css"
import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic form validation
    let hasErrors = false;
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
      hasErrors = true;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      hasErrors = true;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      hasErrors = true;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
      hasErrors = true;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      
    } else {
      // Here, you can perform the actual form submission logic
      // For example, you can send the data to a server or update the state
      console.log('Form submitted:', formData);
      window.location.reload();
    }
  };

  return (
    <form>
      <h2>Sign Up</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
      />
      {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

      <input type="submit" value="Submit" onClick={handleSubmit} />
    </form>
  );
};

export default SignUp;
