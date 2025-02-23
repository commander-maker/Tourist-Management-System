import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import './contact.css';
import Contactimg from "../assets/Contactimg.jpg";

const Contact = () => {
  const [isContentVisible, setIsContentVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector(".navbar").offsetHeight; // Get navbar height
      const banner = document.querySelector(".contact-container");
      const bannerBottom = banner.getBoundingClientRect().top;

      if (bannerBottom <= navbarHeight) {
        setIsContentVisible(false); // Hide content
      } else {
        setIsContentVisible(true); // Show content
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="contact-page">
      <img src={Contactimg} alt="Sri Lanka" className="contact-image" />
      <Navbar />

      {/* Contact content */}
      <div className={`contact-container ${isContentVisible ? "visible" : "hidden"}`}>
        <h1>Contact Us</h1>
        <form className="contact-form">
          <label>
            Name:
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Message:
            <textarea placeholder="Enter your message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
        <div className="map">
          <iframe
            title="Map of Sri Lanka"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7963360.964939938!2d79.72876835000001!3d7.8730545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a39b190c5b1%3A0xa16c6ab5c3278171!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1618205609256!5m2!1sen!2slk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div
        className={`content-container ${isContentVisible ? "visible" : "hidden"}`}
      >
        
      </div>
    </div>
  );
};

export default Contact;
