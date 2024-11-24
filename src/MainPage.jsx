import React from "react";
import { motion } from 'framer-motion';
import cats from "./assets/cats.jpg";
import "./MainPage.css";

function MainPage({ onPageChange }) {
  const handlePictureClick = () => {
    alert("Dummy click on the button");
  };

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.9 }}
    >
      <div className="content">
        <img src={cats} className="cats" alt="Cats" onClick={handlePictureClick} />
        <h1 className='text'>To my little Dummy</h1>

        {/* Кнопки для перехода на другие страницы */}
        <button className="button" onClick={() => onPageChange("Running")}>Continue</button>
      </div>
    </motion.div>
  );
}

export default MainPage;