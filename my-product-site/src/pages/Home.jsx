import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import chatbotAnimation from '../assets/json-files/Live chatbot.json';
import "../styles/home.css";

function Home() {
  return (
    <motion.section
      className="page home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className='left-side'>
        <h2>Welcome to ShowcaseCo</h2>
        <p>Discover our innovative products designed for modern living.</p>
        <div className="button-group">
            <Link to="/about" className="home-btn">ShowcaseCo.</Link>
            <Link to="/contact" className="home-btn">Get In Touch</Link>
        </div>
      </div>
      <div className='right-side'>
        <Lottie animationData={chatbotAnimation} loop={true} style={{ width: '600px' }} />
      </div>
    </motion.section>
  );
}


export default Home;