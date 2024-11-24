import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './RunningPage.css';
import Square_running from "./components/Square_running.jsx";
import RealPage from "./RealPage.jsx"; // Импортируем SurprisePage

function SupportPage() {
  const [showSurprise, setShowSurprise] = useState(false); // Состояние для отслеживания, нужно ли показывать SurprisePage
  const [showButton, setShowButton] = useState(false); // Состояние для показа кнопки

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

  // Используем useEffect для показа кнопки через 3 секунды
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true); // Показываем кнопку через 3 секунды
    }, 5000); // 3000 миллисекунд = 3 секунды

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);

  // Если нужно показать SurprisePage, рендерим его
  if (showSurprise) {
    return <RealPage />;
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

        {/* Показываем кнопку только если showButton равно true */}
        {showButton && (
          <button className="button_running" onClick={handleContinue}>Continue</button>
        )}
      </motion.div>
    </div>
  );
}

export default SupportPage;