import React, { useState } from "react";
import { motion } from 'framer-motion';
import MainPage from "./MainPage.jsx";
import RunningPage from "./RunningPage.jsx";
import SuprisePage from './SuprisePage.jsx';
import WorkingPage from "./WorkingPage.jsx";
import SupportPage from "./SupportPage.jsx";
import WorryingPage from "./WorryingPage.jsx";
import ProudPage from "./ProudPage.jsx";
import RealPage from "./RealPage.jsx";
import './App.css'; // Импортируйте стили, если необходимо

function App() {
  const [currentPage, setCurrentPage] = useState("Main"); // Состояние для отслеживания текущей страницы

  // Функция для смены страниц
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Определяем, какой компонент отображать
  const renderPage = () => {
    switch (currentPage) {
      case "Running":
        return <RunningPage onPageChange={handlePageChange} />;
      case "Suprise":
        return <SuprisePage onPageChange={handlePageChange} />;
      case "Working":
        return <WorkingPage onPageChange={handlePageChange} />;
      case "Support":
        return <SupportPage onPageChange={handlePageChange} />;
      case "Worrying":
        return <WorryingPage onPageChange={handlePageChange} />;
      case "Proud":
        return <ProudPage onPageChange={handlePageChange} />;
      case "Real":
        return <RealPage onPageChange={handlePageChange} />;
      default:
        return <MainPage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="App">

      <motion.div
        key={currentPage} // Используем ключ для анимации при смене страниц
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }} // Длительность анимации
      >
        {renderPage()}
      </motion.div>
    </div>
  );
}

export default App;