import React from "react";
import Navbar from "../component/Navbar";
import "./accommodation.css";
import ColomboHotel from "../assets/ColomboHotel.jpg";
import GalleHotel from "../assets/GalleHotel.jpg";
import MirissaHotel from "../assets/MirissaHotel.jpg";
import KandyHotel from "../assets/KandyHotel.jpg";
import {motion} from 'framer-motion';
import {fadeIn} from '../Variants';

export default function Accommodation() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="accommodation-page">
        {/* Header */}
        <header className="accommodation-header">
          <div className="header-background">
            <motion.h1
               variants={fadeIn("up",0.2)}
               initial="hidden"
               animate={"show"}
                        /*viewport={{once: false, amount: 0.7}}*/
            >Find Your Perfect Stay</motion.h1>
          </div>
        </header>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button className="filter-btn">Sort by Location</button>
          <button className="filter-btn">Sort by Rating</button>
        </div>

        {/* Accommodation Gallery */}
        <div className="accommodation-gallery">
          <div className="accommodation-item">
            <img src={ColomboHotel} alt="Hotel in Colombo" />
            <h3>Luxury Stay Colombo</h3>
            <p>Location: Colombo</p>
            <p>Rating: ★★★★★</p>
          </div>
          <div className="accommodation-item">
            <img src={GalleHotel} alt="Hotel in Galle" />
            <h3>Cozy Villa Galle</h3>
            <p>Location: Galle</p>
            <p>Rating: ★★★★☆</p>
          </div>
          <div className="accommodation-item">
            <img src={KandyHotel} alt="Resort in Kandy" />
            <h3>Hilltop Resort Kandy</h3>
            <p>Location: Kandy</p>
            <p>Rating: ★★★★★</p>
          </div>
          <div className="accommodation-item">
            <img src={MirissaHotel} alt="Beach Hotel in Mirissa" />
            <h3>Beachside Hotel Mirissa</h3>
            <p>Location: Mirissa</p>
            <p>Rating: ★★★☆☆</p>
          </div>
        </div>
      </div>
    </div>
  );
}
