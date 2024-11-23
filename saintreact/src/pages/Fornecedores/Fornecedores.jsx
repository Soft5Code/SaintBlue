import React, { useState } from "react";
import styles from './Fornecedores.module.css';
import Carregador from "./Carregador";
import Contact from "./Contact";
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

      <div className={styles.cards}>
        <div className={styles.caixa} id="caixa_faturamento">
          <h2 className={styles.titulo}>Faturamento 2024</h2>
          <p className={styles.valor}>R$ 10.000</p>
        </div>
        <div className={styles.caixa} id="caixa_venda">
          <h2 className={styles.titulo}>Vendas Hoje</h2>
          <p className={styles.valor}>R$ 5.000</p>
        </div>
        <div className={styles.caixa} id="caixa_estoque">
          <h2 className={styles.titulo}>Produtos em Estoque</h2>
          <p className={styles.valor}>120 unid</p>
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
      
      {/* Título acima do vídeo */}
      <h2 className={styles.videoTitle}>Dicas de Gestão de Vendas e Estoque</h2>

      {/* Vídeo do YouTube */}
      <div className={styles.video}>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/_aQf-tKNrTs?autoplay=1&mute=1&loop=1&playlist=_aQf-tKNrTs"
          title="YouTube Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Contact/>
    </main>
  );
};

export default Fornecedores;
