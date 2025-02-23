import React, { useState, useEffect } from "react";
import "./about.css";
import About01 from "../assets/About01.jpg";
import About2 from "../assets/About2.jpg";
import About3 from "../assets/About3.jpg";
import Navbar from "../component/Navbar";

const AboutSriLanka = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 80; // Set your navbar height here
      const scrollPosition = window.scrollY;

      if (scrollPosition > navbarHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar/>
      
    <div className={`container ${!isVisible ? "hidden" : ""}`}>
      <h1 className="heading">About Sri Lanka</h1>
      <p className="description">
        <strong>Sri Lanka - A Land of Timeless Beauty.</strong>
        <br />
        Experience the breathtaking landscapes of Sri Lanka. From sun-kissed
        palm-lined beaches to cascading waterfalls, this island offers an exotic
        blend of natural wonders and rich culture. Discover serene coastal paths,
        vibrant wildlife, and lush tea estates in this tropical paradise.
      </p>
      <div className="image-gallery">
        <img src={About01} alt="Palm-lined Beach" className="image" />
        <img src={About2} alt="Tea Estates" className="image" />
        <img src={About3} alt="Waterfalls" className="image" />
      </div>
    </div>
    </div>
  );
};

export default AboutSriLanka;
