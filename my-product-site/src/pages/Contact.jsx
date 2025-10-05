import React from "react";
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Lottie from 'lottie-react';
import contactAnim from '../assets/json-files/contact.json';
import '../styles/contact.css';

const contactItems = [
  { icon: <FaMapMarkerAlt />, text: "123 Innovation Street, Colombo" },
  { icon: <FaPhoneAlt />, text: "+94 77 123 4567" },
  { icon: <FaEnvelope />, text: "contact@showcaseco.com" }
];

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

function Contact() {
  return (
    <motion.section 
      className="page contact"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact-left">
        <h2>Contact Us</h2>
        <div className="contact-list">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.text}
              className="contact-item"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <span className="contact-icon">{item.icon}</span>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="contact-right">
        <Lottie animationData={contactAnim} loop={true} style={{ width: '500px' }} />
      </div>
    </motion.section>
  );
}

export default Contact;