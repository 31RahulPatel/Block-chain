import React, { useState } from 'react';
import './Membership.css'; // Import styles for Membership page

const Membership = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    membershipType: 'Student', // Default value
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission (e.g., send data to a server)
    setSuccessMessage('Thank you for becoming a member! We will contact you soon.');
    setFormData({ name: '', email: '', membershipType: 'Student' }); // Reset the form
  };

  return (
    <div className="membership-container">
      <h1 className="membership-title">Become a Member</h1>
      <p className="membership-description">
        Join our Blockchain Club to gain exclusive access to resources, workshops, and events!
      </p>

      <form className="membership-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="membershipType">Membership Type</label>
          <select
            id="membershipType"
            name="membershipType"
            value={formData.membershipType}
            onChange={handleChange}
          >
            <option value="Student">Student</option>
            <option value="Professional">Professional</option>
            <option value="Lifetime">Lifetime</option>
          </select>
        </div>

        <button type="submit" className="membership-submit-btn">
          Join Now
        </button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Membership;
