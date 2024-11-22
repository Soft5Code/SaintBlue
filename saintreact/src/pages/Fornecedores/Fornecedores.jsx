import React, { useState } from "react";
import styles from './Fornecedores.module.css';
import Carregador from "./Carregador";
import './Carousel.css';

const Fornecedores = () => {
  const slides = [
    {
      image: "/img002_700.jpg",
      text: "Estoque",
      link: "/estoque",
    },
    {
      image: "/img004_700.jpg",
      text: "Home",
      link: "/",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <main className={styles.geral}>
      <div className={styles.header}>
        <div className={styles.bemVindo}>
          <Carregador />
        </div>
        <div className={styles.container}>
          <h1 className={styles.aba}>Início</h1>
        </div>
      </div>

      {/* Carrossel */}
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="carousel-item" key={index}>
              <a href={slide.link} className="carousel-link">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
                <div className="carousel-text">{slide.text}</div>
              </a>
            </div>
          ))}
        </div>
        <button className="carousel-control prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={handleNext}>
          &#10095;
        </button>

        {/* Indicadores abaixo do carrossel */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleIndicatorClick(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Legenda "Atalhos" */}
      <div className="carousel-caption">
        <p>Atalhos</p>
      </div>
    </main>
  );
};

export default Fornecedores;
