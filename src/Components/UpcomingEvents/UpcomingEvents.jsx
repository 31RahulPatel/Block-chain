import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './UpcomingEvents.css'; // Updated CSS file

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Blockchain Basics Workshop',
      date: 'January 15, 2025',
      time: '10:00 AM - 1:00 PM',
      location: 'Tech Auditorium, Parul University',
      description: 'Learn the fundamentals of blockchain technology and its applications.',
    },
    {
      id: 2,
      title: 'Smart Contract Development',
      date: 'February 10, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Online (Zoom)',
      description: 'Hands-on session on writing smart contracts using Solidity.',
    },
    {
      id: 3,
      title: 'Hackathon: Blockchain for Social Impact',
      date: 'March 5-6, 2025',
      time: 'All Day',
      location: 'Innovation Hub, Parul University',
      description: 'A 2-day hackathon to build blockchain solutions for real-world problems.',
    },
    {
      id: 4,
      title: 'Advanced Blockchain Concepts',
      date: 'April 20, 2025',
      time: '1:00 PM - 4:00 PM',
      location: 'Innovation Lab, Parul University',
      description: 'Explore advanced blockchain topics like scalability and security.',
    },
  ];

  const [slidesToShow, setSlidesToShow] = useState(2); // Default is 2 slides

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setSlidesToShow(1); // Show 1 slide on mobile
      } else if (width < 1024) {
        setSlidesToShow(2); // Show 2 slides on tablet
      } else {
        setSlidesToShow(3); // Show 3 slides on larger screens
      }
    };

    updateSlidesToShow();

    window.addEventListener('resize', updateSlidesToShow);

    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <div className="slick-prev">←</div>,
    nextArrow: <div className="slick-next">→</div>,
  };

  return (
    <section id="upcoming-events-slider" className="py-10 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Upcoming Events & Workshops</h2>
        <Slider {...sliderSettings}>
          {events.map((event) => (
            <div key={event.id} className="p-4">
              <div className="upcoming-events-card bg-white shadow-lg rounded-lg p-5 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-lg font-semibold mb-2 text-blue-700">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Time:</strong> {event.time}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UpcomingEvents;
