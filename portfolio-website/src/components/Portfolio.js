import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <h2>My Projects</h2>
            <div className="portfolio-grid">
                {/* Project 1 */}
                <div className="project-card">
                    <h3>Car Rental System</h3>
                    <p>
                        Designed a Car Rental System using Object-Oriented Programming (OOP) principles. 
                        This project helped solidify Java programming skills and core OOP concepts, including:
                    </p>
                    <ul>
                        <li>Implemented classes, methods, and encapsulation for organized code.</li>
                        <li>Applied inheritance and polymorphism for a versatile car inventory.</li>
                        <li>Developed a user-friendly console interface for renting and returning cars.</li>
                        <li>Calculated rental prices based on car types and durations.</li>
                        <li>Efficiently managed customers, cars, and rentals.</li>
                    </ul>
                    <a
                        href="https://github.com/GihanJeewantha/Car-Rental-System.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        View on GitHub
                    </a>
                </div>

                <div className="project-card">
                    <h3>Car Rental System</h3>
                    <p>
                        Designed a Car Rental System using Object-Oriented Programming (OOP) principles. 
                        This project helped solidify Java programming skills and core OOP concepts, including:
                    </p>
                    <ul>
                        <li>Implemented classes, methods, and encapsulation for organized code.</li>
                        <li>Applied inheritance and polymorphism for a versatile car inventory.</li>
                        <li>Developed a user-friendly console interface for renting and returning cars.</li>
                        <li>Calculated rental prices based on car types and durations.</li>
                        <li>Efficiently managed customers, cars, and rentals.</li>
                    </ul>
                    <a
                        href="https://github.com/GihanJeewantha/Car-Rental-System.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        View on GitHub
                    </a>
                </div>

                <div className="project-card">
                    <h3>Car Rental System</h3>
                    <p>
                        Designed a Car Rental System using Object-Oriented Programming (OOP) principles. 
                        This project helped solidify Java programming skills and core OOP concepts, including:
                    </p>
                    <ul>
                        <li>Implemented classes, methods, and encapsulation for organized code.</li>
                        <li>Applied inheritance and polymorphism for a versatile car inventory.</li>
                        <li>Developed a user-friendly console interface for renting and returning cars.</li>
                        <li>Calculated rental prices based on car types and durations.</li>
                        <li>Efficiently managed customers, cars, and rentals.</li>
                    </ul>
                    <a
                        href="https://github.com/GihanJeewantha/Car-Rental-System.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
