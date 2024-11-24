import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './SupportPage.css'; // Обновите имя файла стилей, если необходимо
import supportImage from './assets/help.png'; // Импортируем новое изображение поддержки
import RealPage from "./RealPage.jsx"; // Импортируем следующую страницу

function SupportPage() {
    const [showNextPage, setShowNextPage] = useState(false); // Состояние для отслеживания, нужно ли показывать следующую страницу
    const [showButton, setShowButton] = useState(false); // Состояние для показа кнопки

    // Функция для показа следующей страницы
    const handleContinue = () => {
        setShowNextPage(true); // Обновляем состояние для показа следующей страницы
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

    // Если нужно показать следующую страницу, рендерим ее
    if (showNextPage) {
        return <RealPage />;
    }

    return (
        <div className="support-page">
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.5 }} // Длительность анимации
                className="support-content"
            >
                <img src={supportImage} alt="Support" className="support-image" />

                {/* Показываем кнопку только если showButton равно true */}
                {showButton && (
                    <button className="button_support" onClick={handleContinue}>Continue</button>
                )}
            </motion.div>
        </div>
    );
}

export default SupportPage;