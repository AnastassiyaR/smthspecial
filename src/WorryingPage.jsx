import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './WorryingPage.css';
import ProudPage from "./ProudPage.jsx"; // Импортируем ProudPage
import worrky from './assets/worry.png'; // Импортируем изображение

function WorryingPage() {
    const [showSurprise, setShowSurprise] = useState(false); // Состояние для отслеживания, нужно ли показывать ProudPage
    const [showButton, setShowButton] = useState(false); // Состояние для показа кнопки

    // Функция для показа ProudPage
    const handleContinue = () => {
        setShowSurprise(true); // Обновляем состояние для показа ProudPage
    };

    // Анимационные варианты
    const pageVariants = {
        initial: { opacity: 0 },
        in: { opacity: 1 },
        out: { opacity: 0 },
    };

    // Используем useEffect для показа кнопки через 1 секунду
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true); // Показываем кнопку через 1 секунду
        }, 1000); // 1000 миллисекунд = 1 секунда

        // Очищаем таймер при размонтировании компонента
        return () => clearTimeout(timer);
    }, []);

    // Если нужно показать ProudPage, рендерим его
    if (showSurprise) {
        return <ProudPage />;
    }

    return (
        <div className="worry-page">
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.5 }} // Длительность анимации
                className="worry-content"
            >
                <img src={worrky} alt="worry" className="worry-image" />

                {/* Показываем кнопку только если showButton равно true */}
                {showButton && (
                    <button className="button_worry" onClick={handleContinue}>Continue</button>
                )}
            </motion.div>
        </div>
    );
}

export default WorryingPage;