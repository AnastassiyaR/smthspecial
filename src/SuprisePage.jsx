import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './SuprisePage.css';
import WorkingPage from "./WorkingPage.jsx"; // Импортируем WorkingPage
import weImage from './assets/we.png'; // Импортируем изображение

function SuprisePage() {
    const [showSurprise, setShowSurprise] = useState(false); // Состояние для отслеживания, нужно ли показывать WorkingPage
    const [showButton, setShowButton] = useState(false); // Состояние для показа кнопки

    // Функция для показа WorkingPage
    const handleContinue = () => {
        setShowSurprise(true); // Обновляем состояние для показа WorkingPage
    };

    // Анимационные варианты
    const pageVariants = {
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 },
    };

    // Используем useEffect для показа кнопки через 5 секунд
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true); // Показываем кнопку через 5 секунд
        }, 1000); // 5000 миллисекунд = 5 секунд

        // Очищаем таймер при размонтировании компонента
        return () => clearTimeout(timer);
    }, []);

    // Если нужно показать WorkingPage, рендерим его
    if (showSurprise) {
        return <WorkingPage />;
    }

    return (
        <div className="suprise-page">
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.5 }} // Длительность анимации
                className="suprise-content"
            >
                <img src={weImage} alt="Surprise" className="surprise-image" />

                {/* Показываем кнопку только если showButton равно true */}
                {showButton && (
                    <button className="button_suprise" onClick={handleContinue}>Continue</button>
                )}
            </motion.div>
        </div>
    );
}

export default SuprisePage;