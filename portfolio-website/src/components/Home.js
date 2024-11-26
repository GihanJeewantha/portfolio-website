import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <h1>
                    Hi, I'm <span className="highlight">Gihan Jeewantha</span>
                </h1>
                <p className="subtitle">
                    A creative developer passionate about building modern solutions.
                </p>
                <a href="#about" className="scroll-btn">Explore More</a>
            </div>
        </section>
    );
};

export default Home;
