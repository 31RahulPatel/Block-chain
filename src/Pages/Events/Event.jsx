import React from 'react';
import './Event.css'; // Import styles for Events page
import EventCard from '../../Components/Eventcard/Eventcard'; // Assuming you have created EventCard.jsx for individual events
import NotificationCard from '../../Components/NotificationCard/NotificationCard';
const Events = () => {
    // Example data for events (replace with dynamic data or API integration)
    const events = [
        {
            id: 1,
            title: 'Blockchain 101 Workshop',
            date: 'January 15, 2025',
            time: '10:00 AM - 2:00 PM',
            location: 'Main Auditorium, Campus',
            description: 'An introductory workshop on blockchain fundamentals and how to build a simple blockchain.',
            image: 'https://via.placeholder.com/300', // Replace with actual image URL
        },
        {
            id: 2,
            title: 'Smart Contract Development Bootcamp',
            date: 'February 20, 2025',
            time: '10:00 AM - 5:00 PM',
            location: 'Lab 202, Tech Building',
            description: 'A hands-on bootcamp on developing and deploying smart contracts using Solidity.',
            image: 'https://via.placeholder.com/300', // Replace with actual image URL
        },
        {
            id: 3,
            title: 'Blockchain Hackathon 2025',
            date: 'March 10-12, 2025',
            time: '24-hour Event',
            location: 'Innovation Hub, Campus',
            description: 'Collaborate, innovate, and create blockchain solutions in this exciting hackathon.',
            image: 'https://via.placeholder.com/300', // Replace with actual image URL
        },
    ];

    return (
        <div className="events-container">
            <h1 className="events-title">Our Events</h1>
            <p className="events-subtitle">Explore and join our exciting blockchain events and workshops!</p>

            <div className="events-list">
                {events.map((event) => (
                    <EventCard
                        key={event.id}
                        title={event.title}
                        date={event.date}
                        time={event.time}
                        location={event.location}
                        description={event.description}
                        image={event.image}
                    />
                ))}
            </div>
            <div className="notification">
                <NotificationCard />
            </div>

        </div>
    );
};

export default Events;
