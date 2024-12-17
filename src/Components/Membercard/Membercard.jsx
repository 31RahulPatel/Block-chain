// MembersCard.jsx
import React from 'react';
import './MembersCard.css'; // Importing the styles for MembersCard

const MembersCard = ({ name, role, description, image, socialLinks }) => {
  return (
    <div className="members-card">
      <img src={image} alt={name} className="members-card-image" />
      <h3 className="members-card-name">{name}</h3>
      <p className="members-card-role">{role}</p>
      <p className="members-card-description">{description}</p>
      <div className="members-card-socials">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.icon} {/* You can use icons like Font Awesome or Material Icons */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MembersCard;
