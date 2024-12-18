import React from "react";
import "./ProfessorCard.css";

const ProfessorCard = ({ name, designation, bio, image, linkedin, twitter }) => {
    return (
        <div className="professor-card">
            <img 
                src={image} 
                alt={`${name}'s profile`} 
                className="professor-card-image" 
            />
            <div className="professor-card-content">
                <h2 className="professor-card-name">{name}</h2>
                <p className="professor-card-designation">{designation}</p>
                <p className="professor-card-bio">{bio}</p>
                <div className="professor-card-links">
                    {linkedin && (
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="professor-card-link linkedin">
                            LinkedIn
                        </a>
                    )}
                    {twitter && (
                        <a href={twitter} target="_blank" rel="noopener noreferrer" className="professor-card-link twitter">
                            Twitter
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

// Dummy data for testing
const ProfessorCardExample = () => {
    return (
        <div className="professor-cards">
            <ProfessorCard
                name="Dr. John Smith"
                designation="Blockchain Researcher"
                bio="Dr. John Smith is a leading researcher in the field of blockchain technology, focusing on decentralized systems and their applications in finance."
                image="https://via.placeholder.com/150"
                linkedin="https://www.linkedin.com"
                twitter="https://www.twitter.com"
            />
            <ProfessorCard
                name="Dr. Alice Johnson"
                designation="Smart Contract Specialist"
                bio="Dr. Alice Johnson specializes in smart contract development and security, with a focus on building robust decentralized applications."
                image="https://via.placeholder.com/150"
                linkedin="https://www.linkedin.com"
                twitter="https://www.twitter.com"
            />
            <ProfessorCard
                name="Dr. Michael Williams"
                designation="Blockchain Architect"
                bio="Dr. Michael Williams is an expert in blockchain architecture, developing scalable and secure solutions for various industries."
                image="https://via.placeholder.com/150"
                linkedin="https://www.linkedin.com"
                twitter="https://www.twitter.com"
            />
        </div>
    );
};

export default ProfessorCardExample;
