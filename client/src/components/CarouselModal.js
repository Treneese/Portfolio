import React, { useState } from "react";

function CarouselModal({ item, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!item) return null;

  const slides = item.slides || [];
  const activeSlide = slides[activeIndex];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-modal__backdrop" onClick={onClose}>
      <div className="carousel-modal" onClick={(e) => e.stopPropagation()}>
        <button className="carousel-modal__close" onClick={onClose}>
          ×
        </button>

        <h2 className="carousel-modal__title">{item.title}</h2>

        <div className="carousel-modal__media-row">
          <button className="carousel-modal__arrow" onClick={prevSlide}>
            ‹
          </button>

          <div className="carousel-modal__image-wrap">
            <img src={activeSlide.image} alt={activeSlide.title} />
          </div>

          <button className="carousel-modal__arrow" onClick={nextSlide}>
            ›
          </button>
        </div>

        <div className="carousel-modal__caption">
          <h3>{activeSlide.title}</h3>
          <p>{activeSlide.subtitle}</p>
        </div>

        <div className="carousel-modal__dots">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              onClick={() => setActiveIndex(index)}
              className={
                activeIndex === index
                  ? "carousel-modal__dot active"
                  : "carousel-modal__dot"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselModal;