import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-header">
                <h2>Contact Me</h2>
                <p>I'd love to hear from you! Fill out the form below, and I'll get back to you as soon as possible.</p>
            </div>
            <form className="contact-form">
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
