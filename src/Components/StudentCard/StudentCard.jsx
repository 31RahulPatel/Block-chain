import React from "react";
import "./StudentCard.css";

const students = [
    {
        id: 1,
        name: "Rahul Patel",
        course: "B.Tech in Computer Science",
        bio: "Blockchain enthusiast with a knack for decentralized apps.",
        image: "https://via.placeholder.com/150",
        linkedin: "https://www.linkedin.com/in/alicejohnson",
        twitter: "https://twitter.com/alicejohnson",
    },
    {
        id: 2,
        name: "Bob Smith",
        course: "B.Sc in Information Technology",
        bio: "Passionate about crypto and smart contracts.",
        image: "https://via.placeholder.com/150",
        linkedin: "https://www.linkedin.com/in/bobsmith",
        twitter: "https://twitter.com/bobsmith",
    },
    {
        id: 3,
        name: "Charlie Brown",
        course: "B.Tech in Software Engineering",
        bio: "Loves coding and exploring blockchain scalability.",
        image: "https://via.placeholder.com/150",
        linkedin: "https://www.linkedin.com/in/charliebrown",
        twitter: "https://twitter.com/charliebrown",
    },
    {
        id: 4,
        name: "Diana Prince",
        course: "B.Sc in Computer Applications",
        bio: "AI and blockchain intersection researcher.",
        image: "https://via.placeholder.com/150",
        linkedin: "https://www.linkedin.com/in/dianaprince",
        twitter: "https://twitter.com/dianaprince",
    },
    {
        id: 5,
        name: "Ethan Hunt",
        course: "B.Tech in Cybersecurity",
        bio: "Exploring blockchain's role in secure communications.",
        image: "https://via.placeholder.com/150",
        linkedin: "https://www.linkedin.com/in/ethanhunt",
        twitter: "https://twitter.com/ethanhunt",
    },
    {
        id: 6,
        name: "Fiona Gallagher",
        course: "B.Sc in Data Science",
        bio: "Data-driven approach to blockchain analytics.",
        image: "https://via.placeholder.com/150",
        linkedin: "https://www.linkedin.com/in/fionagallagher",
        twitter: "https://twitter.com/fionagallagher",
    },
];

const StudentCard = () => {
    return (
        <div className="students-container">
            <h1 className="students-title">Our Students</h1>
            <p className="students-description">
                Meet the passionate minds shaping the future of blockchain technology.
            </p>
            <div className="students-list">
                {students.map((student) => (
                    <div className="student-card" key={student.id}>
                        <img
                            src={student.image}
                            alt={`${student.name}'s profile`}
                            className="student-card-image"
                        />
                        <div className="student-card-content">
                            <h2 className="student-card-name">{student.name}</h2>
                            <p className="student-card-course">{student.course}</p>
                            <p className="student-card-bio">{student.bio}</p>
                            <div className="student-card-links">
                                {student.linkedin && (
                                    <a
                                        href={student.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="student-card-link linkedin"
                                    >
                                        LinkedIn
                                    </a>
                                )}
                                {student.twitter && (
                                    <a
                                        href={student.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="student-card-link twitter"
                                    >
                                        Twitter
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentCard;
