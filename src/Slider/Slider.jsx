import { useState } from "react";
import styles from "./Slider.module.sass";

function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <div className={styles.sliderWrapper}>
        <h1 className={styles.sliderTitle}>{slides[currentSlide].title}</h1>
        <img
          className={styles.sliderImg}
          src={slides[currentSlide].src}
          alt={slides[currentSlide].title}
        />
        <button className={styles.prevBtn} onClick={prevSlide}>
          {"<"}
        </button>
        <button className={styles.nextBtn} onClick={nextSlide}>
          {">"}
        </button>
      </div>
    </>
  );
}

export default Slider;
