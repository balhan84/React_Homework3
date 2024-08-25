import { useState } from "react";
import styles from "./Slider.module.sass";

import { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      currentSlide: 0,
    };
  }
  nextSlide = () => {
    this.setState((prevState) => ({
      currentSlide:
        prevState.currentSlide === this.props.slides.length - 1
          ? 0
          : prevState.currentSlide + 1,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentSlide:
        prevState.currentSlide === 0
          ? this.props.slides.length - 1
          : prevState.currentSlide - 1,
    }));
  };

  render() {
    const { slides } = this.props;
    const { currentSlide, error } = this.state;
    return (
      <>
        <div>{error && <div>ERROR</div>}</div>
        <div className={styles.sliderWrapper}>
          <h1 className={styles.sliderTitle}>{slides[currentSlide].title}</h1>
          <img
            className={styles.sliderImg}
            src={slides[currentSlide].src}
            alt={slides[currentSlide].title}
          />
          <button className={styles.prevBtn} onClick={this.prevSlide}>
            {"<"}
          </button>
          <button className={styles.nextBtn} onClick={this.nextSlide}>
            {">"}
          </button>
        </div>
      </>
    );
  }
}
export default Slider;
