import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';
import Lottie from 'lottie-react';
import aboutAnimation from '../assets/json-files/about.json';

function About() {
  return (
    <motion.section
      className="page about"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      
      <div className='about-left'>
        <h2>About Us</h2>
        <p>
          We are a passionate team crafting products that blend design and technology.
          Our mission is to create seamless digital experiences that inspire and empower.
        </p>
      </div>
      <div className='about-right'>
        <Lottie animationData={aboutAnimation} loop={true} style={{ width: '500px' }} />
      </div>
    </motion.section>
  );
}

export default About;