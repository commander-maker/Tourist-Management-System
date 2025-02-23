import React from "react";
import Navbar from "../component/Navbar";
import "./destination.css";
import GalleFort from "../assets/GalleFort.jpg";
import Unawatuna from "../assets/Unawatuna.jpg";
import Diyaluma from "../assets/Diyaluma.jpg";
import Sigiriya from "../assets/Sigiriya.jpg";

import Destination2 from "../assets/Destination2.jpg";

export default function Destination() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

    
    <div className="destination-page">
      

      {/* Header */}
      <header className="destination-header">

        <img src={Destination2} alt="Sri Lanka" className="home-image" />
        <motion.div
         variants={fadeIn("up",0.2)}
         initial="hidden"
         animate={"show"}
         /*viewport={{once: false, amount: 0.7}}*/
       
       className="header-background">
         <h1>Find Your Next Destination</h1>
       </motion.div>
      </header>


      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button className="filter-btn">Historical Places</button>
        <button className="filter-btn">Beaches</button>
        <button className="filter-btn">Waterfalls</button> 
      </div>

      {/* Destination Gallery */}
      <div className="destination-gallery">
        <div className="destination-item">
          <img src={Sigiriya} alt="Sigiriya" />
          <h3>Sigiriya</h3>
          <p>Historical Site</p>
        </div>
        <div className="destination-item">
          <img src={Unawatuna} alt="Unawatuna Beach" />
          <h3>Unawatuna Beach</h3>
          <p>Beach</p>
        </div>
        <div className="destination-item">
          <img src={Diyaluma} alt="Diyaluma Falls" />
          <h3>Diyaluma Falls</h3>
          <p>Waterfall</p>
        </div>
        <div className="destination-item">
          <img src={GalleFort} alt="Galle Fort" />
          <h3>Galle Fort</h3>
          <p>Historical Site</p>
        </div>
      </div>
    </div>
  </div> 
  );
}
