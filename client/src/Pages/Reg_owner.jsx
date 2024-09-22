import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const RegOwner = () => {
  const [formData, setFormData] = useState({
    contactNo: '',
    name: '',
    adharNo: '',
    licenseNo: '',
    dob: '',
    state: '',
    city: '',
    street: '',
    pin: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [alreadyCustomer, setAlreadyCustomer] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.contactNo) tempErrors.contactNo = 'Contact No. is required';
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.adharNo) tempErrors.adharNo = 'Adhar No. is required';
    if (!formData.licenseNo) tempErrors.licenseNo = 'License No. is required';
    if (!formData.dob) tempErrors.dob = 'Date of Birth is required';
    if (!formData.state) tempErrors.state = 'State is required';
    if (!formData.city) tempErrors.city = 'City is required';
    if (!formData.street) tempErrors.street = 'Street is required';
    if (!formData.pin) tempErrors.pin = 'Pin is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.gender) tempErrors.gender = 'Gender is required';
    if (!formData.password) tempErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      tempErrors.confirmPassword = 'Passwords do not match';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form or handle registration logic
      console.log('Form Submitted', formData);
    }
  };

  return (
    <div
      style={{
        // marginTop: '120px',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          marginTop: '120px',
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          backgroundColor: '#fff',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        {/* Registration Form */}
        <div
          style={{
            width: '100%',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: '#750E21',
            }}
          >
            Register as Owner
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="contactNo"
                placeholder="Contact No."
                value={formData.contactNo}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.contactNo && <p style={{ color: 'red' }}>{errors.contactNo}</p>}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>

            {/* Adhar No. */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="adharNo"
                placeholder="Adhar No."
                value={formData.adharNo}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.adharNo && <p style={{ color: 'red' }}>{errors.adharNo}</p>}
            </div>

            {/* Date of Birth */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.dob && <p style={{ color: 'red' }}>{errors.dob}</p>}
            </div>

            {/* Gender */}
            <div style={{ marginBottom: '16px' }}>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
            </div>

            {/* Address Fields */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={formData.street}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.street && <p style={{ color: 'red' }}>{errors.street}</p>}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <input
                type="text"
                name="pin"
                placeholder="Pin"
                value={formData.pin}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.pin && <p style={{ color: 'red' }}>{errors.pin}</p>}
            </div>

            {/* Email */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>

            {/* Password */}
  
            <div style={{ marginBottom: '16px', position: 'relative' }}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              <span
                onClick={() => setPasswordVisible(!passwordVisible)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '15px',
                  cursor: 'pointer',
                }}
              >
                {passwordVisible ? '🙈' : '👁️'}
              </span>
              {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div style={{ marginBottom: '16px', position: 'relative' }}>
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  outline: 'none',
                  marginBottom: '10px',
                }}
              />
              <span
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '15px',
                  cursor: 'pointer',
                }}
              >
                {confirmPasswordVisible ? '🙈' : '👁️'}
              </span>
              {errors.confirmPassword && (
                <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              style={{
                padding: '12px 20px',
                backgroundColor: '#750E21',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              Register
            </button>

            <div style={{ marginTop: '20px'}}>
              <p>Already a customer?</p>
              <Link to="/main_owner" style={{ color: '#750E21' }}>
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegOwner;
