import { motion } from 'framer-motion';
import './square_running.css';

function Square_running() {
    const squareVariants = {
        initial: { y: 100, scale: 1 }, // Начальное положение: 100px ниже и оригинальный размер
        in: { y: 0, scale: 3 },        // Перемещение в оригинальное положение и увеличение до 3x
        out: { y: 100, scale: 1 },     // Возврат обратно вниз и возвращение к оригинальному размеру
    };

    return (
        <motion.div
            className="square"
            variants={squareVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: 7.5 }} // Длительность анимации квадрата
        />
    );
}

export default Square_running; // Экспортируем компонент без вызова