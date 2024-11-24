import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './RunningPage.css';
import Square_running from "./components/Square_running.jsx";
import ButtonRunning from "./components/Button_running.jsx"; // Импортируем ButtonRunning
import SurprisePage from "./SuprisePage.jsx"; // Импортируем SurprisePage

function RunningPage() {
  const [showSurprise, setShowSurprise] = useState(false); // Состояние для отслеживания, нужно ли показывать SurprisePage

  // Функция для показа SurprisePage
  const handleContinue = () => {
    setShowSurprise(true); // Обновляем состояние для показа SurprisePage
  };

  // Анимационные варианты
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  // Если нужно показать SurprisePage, рендерим его
  if (showSurprise) {
    return <SurprisePage />;
  }

  return (
    <div className="running-page">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.5 }} // Длительность анимации
        className="running-content"
      >
        <h1>You hear someone is running to you</h1>
        <p>Who is that?</p>
        <Square_running />
        <ButtonRunning onClick={handleContinue} /> {/* Используем ButtonRunning с обработчиком клика */}
      </motion.div>
    </div>
  );
}

export default RunningPage;