import React from "react";
import './RealPage.css'; // Импортируем стили
import { motion } from 'framer-motion';
import weImage from './assets/dummy.png'; // Импортируем изображение

function RealPage() {
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
            transition={{ duration: 0.9 }} // Длительность анимации
        >
            <div className="real" style={{ backgroundImage: `url(${weImage})` }}>
                <div className="real_context">
                    <h1 className="real_text">
                        Please stay that real Himanshu I know
                    </h1>
                    {/* Добавляем кнопку для навигации */}
                </div>
            </div>
        </motion.div>
    );
}

export default RealPage