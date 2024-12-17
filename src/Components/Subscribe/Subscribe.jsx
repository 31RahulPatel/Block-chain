import React, { useState } from 'react';
import './Subscribe.css'; // Importing the styles for Subscribe

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) {
            setMessage('Please enter a valid email address.');
            return;
        }

        // Placeholder for actual subscription logic (API call, etc.)
        setMessage('Thank you for subscribing! You will receive weekly notifications.');
        setEmail('');
    };

    return (
        <div className="subscribe-card">
            <h3 className="subscribe-title">Subscribe for Weekly Notifications</h3>
            <p className="subscribe-description">
                Stay up-to-date with our latest news, events, and blockchain trends!
            </p>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
                <input
                    type="email"
                    className="subscribe-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit" className="subscribe-button">
                    Subscribe
                </button>
            </form>
            {message && <p className="subscribe-message">{message}</p>}
        </div>
    );
};

export default Subscribe;
