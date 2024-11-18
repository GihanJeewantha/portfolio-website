import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <p className="contact-description">
                Have a question or want to work together? Feel free to reach out!
            </p>
            <form>
                <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <textarea placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="send-btn">Send Message</button>
            </form>
        </section>
    );
};

export default Contact;
