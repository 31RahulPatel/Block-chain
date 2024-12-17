import React, { useState } from 'react';
import './Contactus.css'; // Import styles for Contact Us page

const Contactus = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
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
        // Here you can handle form submission (e.g., send data to a server)
        setSuccessMessage('Thank you for reaching out! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Reset the form
    };

    return (
        <div className="contactus-container">
            <h1 className="contactus-title">Contact Us</h1>
            <p className="contactus-subtitle">
                Got questions or suggestions? Feel free to reach out to us!
            </p>

            <form className="contactus-form" onSubmit={handleSubmit}>
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
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message"
                        required
                    />
                </div>

                <button type="submit" className="contactus-submit-btn">
                    Submit
                </button>
            </form>

            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

export default Contactus;
