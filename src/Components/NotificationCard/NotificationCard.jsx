import React, { useState } from 'react';
import './NotificationCard.css';

const NotificationCard = () => {
    const [daily, setDaily] = useState(false);
    const [weekly, setWeekly] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const categories = ['Crypto', 'Articles', 'Research Papers', 'News', 'Blockchain'];

    const toggleCategory = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category]
        );
    };

    const handleSubmit = () => {
        const preferences = {
            daily,
            weekly,
            selectedCategories,
        };
        console.log('User Preferences:', preferences);
        alert('Preferences submitted!');
    };

    return (
        <div className="notification-card">
            <h2 className="card-title">Subscribe for Notifications</h2>
            <label className="email-label" htmlFor="email">
                Enter your email:
            </label>
            <input type="email" id="email" className="email-input" placeholder="you@example.com" />

            <h3 className="section-title">Notification Frequency</h3>
            <div className="toggle-container">
                <div>
                    <label className="toggle-label">Daily</label>
                    <div
                        className={`toggle-switch ${daily ? 'active' : ''}`}
                        onClick={() => setDaily(!daily)}
                    ></div>
                </div>
                <div>
                    <label className="toggle-label">Weekly</label>
                    <div
                        className={`toggle-switch ${weekly ? 'active' : ''}`}
                        onClick={() => setWeekly(!weekly)}
                    ></div>
                </div>
            </div>

            <h3 className="section-title">Select Categories</h3>
            <div className="category-options">
                {categories.map((category) => (
                    <div
                        key={category}
                        className={`category-option ${
                            selectedCategories.includes(category) ? 'selected' : ''
                        }`}
                        onClick={() => toggleCategory(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>

            <button className="submit-button" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default NotificationCard;
