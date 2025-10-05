import React from "react";
import { motion } from 'framer-motion';
import '../styles/gallery.css';

const products = [
  {
    title: "Smart Lamp",
    videoUrl: "https://res.cloudinary.com/dgjs19uyt/video/upload/v1759696033/smart-lamp_uctbdq.mp4",
  },
  {
    title: "Wireless Speaker",
    videoUrl: "https://res.cloudinary.com/dgjs19uyt/video/upload/v1759696030/wireless-speaker_vctetm.mp4",
  },
  {
    title: "Eco Thermostat",
    videoUrl: "https://res.cloudinary.com/dgjs19uyt/video/upload/v1759696029/eco-thermo_eyxpws.mp4",
  }
];

const videoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.3, duration: 0.6 }
  })
};

function Gallery() {
  return (
    <motion.section 
      className="page gallery"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Product Showcase</h2>
      <div className="video-grid">
        {products.map((product, i) => (
          <motion.div
            key={product.title}
            className="video-card"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={videoVariants}
          >
            <video
              src={product.videoUrl}
              title={product.title}
              autoPlay
              loop
              muted
              playsInline
              className="video-player"
            />
            <p>{product.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Gallery;