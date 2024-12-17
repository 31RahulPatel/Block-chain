import React from 'react';
import './Eventcard.css'; // Import styles for EventCard

const Eventcard = ({ title, date, time, location, description, image }) => {
    return (
        <div className="event-card">
            <img src={image} alt={title} className="event-card-image" />
            <div className="event-card-content">
                <h2 className="event-card-title">{title}</h2>
                <p className="event-card-date">{date}</p>
                <p className="event-card-time">{time}</p>
                <p className="event-card-location">{location}</p>
                <p className="event-card-description">{description}</p>
            </div>
        </div>
    );
};

export default Eventcard;
