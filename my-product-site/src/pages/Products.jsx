import React from "react";
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import productAnimation from '../assets/json-files/product-showcase.json';
import '../styles/products.css';

const products = ["Smart Lamp", "Wireless Speaker", "Eco Thermostat"];

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 }
  })
};

function Products() {
  return (
    <motion.section 
      className="page products"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="products-left">
        <h2>Our Products</h2>
        <ul className="product-list">
          {products.map((item, i) => (
            <motion.li
              key={item}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={listVariants}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="products-right">
        <Lottie animationData={productAnimation} loop={true} style={{ width: '350px' }} />
      </div>
    </motion.section>
  );
}

export default Products;