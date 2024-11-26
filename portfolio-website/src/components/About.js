import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <h2 data-aos="fade-up">About Me</h2>
                <p data-aos="fade-right">
                    Hi! I'm a passionate software developer who loves creating seamless, interactive, and user-friendly experiences. 
                    With a knack for solving complex problems, I enjoy collaborating with teams to build innovative and scalable solutions that make a difference.
                </p>
                <p data-aos="fade-right">
                    I have hands-on experience in full-stack development, agile methodologies, and software testing. 
                    During a six-month internship at Bank of Ceylon's Head Office, I honed my skills in UI/UX design and mobile application development using React Native. 
                    I stay driven by my curiosity to explore emerging technologies and my dedication to crafting products that stand out.
                </p>

                <div className="about-grid">
                    {/* Experience Section */}
                    <div className="experience card" data-aos="zoom-in">
                        <h3>Experience</h3>
                        <div className="experience-item">
                            <h4>Software Developer Intern</h4>
                            <p className="company">Bank of Ceylon Head Office</p>
                            <p className="duration">08/2023 - 02/2024 | Colombo</p>
                            <ul>
                                <li>Collaborated with teams to gather and refine project requirements.</li>
                                <li>Designed engaging UI/UX prototypes for new applications.</li>
                                <li>Developed a mobile application using React Native, enhancing functionality and user experience.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="education card" data-aos="zoom-in">
                        <h3>Education</h3>
                        <ul className="education-list">
                            <li>
                                <h4>BSc (Hons) Degree in Information Technology</h4>
                                <p className="institute">Sri Lanka Institute of Information Technology, Malabe (Undergraduate, 2020)</p>
                            </li>
                            <li>
                                <h4>GCE Advanced Level</h4>
                                <p className="institute">Sri Siddhartha Central College, 2018</p>
                            </li>
                            <li>
                                <h4>GCE Ordinary Level</h4>
                                <p className="institute">Sri Siddhartha Central College, 2015</p>
                            </li>
                        </ul>
                    </div>

                    {/* Skills Section */}
                    <div className="skills card" data-aos="zoom-in">
                        <h3>Skills</h3>
                        <ul className="skills-list">
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>CSS</li>
                            <li>SQL</li>
                            <li>React.js</li>
                            <li>React Native</li>
                            <li>Spring Boot</li>
                            <li>GitHub</li>
                            <li>MySQL</li>
                            <li>Android Studio</li>
                            <li>IntelliJ IDE</li>
                            <li>Eclipse</li>
                        </ul>
                    </div>

                    {/* Certifications Section */}
                    <div className="certifications card" data-aos="zoom-in">
                        <h3>Certifications</h3>
                        <ul className="certifications-list">
                            <li>
                                <h4>Career Essentials in Software Development</h4>
                                <p className="issuer">by Microsoft and LinkedIn</p>
                            </li>
                            <li>
                                <h4>Introduction to Cybersecurity</h4>
                                <p className="issuer">Issued by Cisco</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;