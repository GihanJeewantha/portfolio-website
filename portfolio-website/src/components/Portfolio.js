import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <h2>My Projects</h2>
            <div className="portfolio-grid">
                <div className="project-card">
                    <h3>Project 1</h3>
                    <p>Description of the project.</p>
                </div>
                <div className="project-card">
                    <h3>Project 2</h3>
                    <p>Description of the project.</p>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
