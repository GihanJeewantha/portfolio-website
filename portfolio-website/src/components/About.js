import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <p>
                Hi! I'm a passionate software developer who loves creating seamless, interactive, and user-friendly experiences. Known for solving complex problems, I enjoy collaborating with teams to build innovative and scalable solutions that make a difference.
            </p>
            <p>
                I have hands-on experience in full-stack development, agile methodologies, and software testing. My journey has taught me to design and implement efficient and maintainable software solutions. During a six-month internship at Bank of Ceylon's Head Office, I honed my skills in UI/UX design and mobile application development using React Native. I stay driven by my curiosity to explore emerging technologies and my dedication to crafting products that stand out.
            </p>

            <div className="experience">
                <h3>Experience</h3>
                <div className="experience-item">
                    <h4>Software Developer Intern</h4>
                    <p>Bank of Ceylon Head Office</p>
                    <p>08/2023 - 02/2024 | Colombo</p>
                    <ul>
                        <li>Collaborated with teams to gather and refine project requirements.</li>
                        <li>Designed engaging UI/UX prototypes for new applications.</li>
                        <li>Developed a mobile application using React Native, enhancing functionality and user experience.</li>
                    </ul>
                </div>
            </div>

            <div className="education">
                <h3>Education</h3>
                <ul className="education-list">
                    <li>
                        <strong>BSc (Hons) Degree in Information Technology</strong><br />
                        Specialized in Information Technology<br />
                        Sri Lanka Institute of Information Technology, Malabe (Undergraduate, 2020)
                    </li>
                    <li>
                        <strong>GCE Advanced Level</strong><br />
                        Sri Siddhartha Central College, 2018
                    </li>
                    <li>
                        <strong>GCE Ordinary Level</strong><br />
                        Sri Siddhartha Central College, 2015
                    </li>
                </ul>
            </div>

            <div className="skills">
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
        </section>
    );
};

export default About;
