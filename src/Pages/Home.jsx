import React from "react";
import {Link} from "react-router-dom";
import Navbar from "../component/Navbar";
import home1 from "../assets/home1.jpg";
import "./Home.css";
import {motion} from 'framer-motion';
import {fadeIn} from '../Variants';


export default function Home() {
  return (
    <div>
        
        
        {/*<Link to="/About">Go to about page</Link>*/}
        <div className="home-banner">
         <Navbar/>
         <img src={home1} alt="Sri Lanka" className="home-image" />
         <motion.div
         variants={fadeIn("up",0.2)}
         initial="hidden"
         animate={"show"}
         /*viewport={{once: false, amount: 0.7}}*/
         
         className="banner-text">
          <h1>Sri Lanka</h1>
          <p className="subtitle">
            A magical mix of colorful culture, friendly locals, and stunning nature
          </p>
         </motion.div>
        </div>
        
    </div>
  )
}
