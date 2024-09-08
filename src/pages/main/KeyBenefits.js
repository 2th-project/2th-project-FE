import React, { useState, useEffect } from "react";
import styles from "./KeyBenefits.module.css";

const KeyBenefits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalBenefits = 6;
  const visibleBoxes = 3;

  const benefitBoxes = [
    { id: 1, content: "혜택 1" },
    { id: 2, content: "혜택 2" },
    { id: 3, content: "혜택 3" },
    { id: 4, content: "혜택 4" },
    { id: 5, content: "혜택 5" },
    { id: 6, content: "혜택 6" },
  ];

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalBenefits);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPaused, currentIndex, totalBenefits]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalBenefits);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalBenefits) % totalBenefits
    );
  };

  const handlePausePlay = () => {
    setIsPaused(!isPaused);
  };

  const renderBenefitBoxes = () => {
    const boxesToShow = [];
    for (let i = 0; i < visibleBoxes; i++) {
      const index = (currentIndex + i) % totalBenefits;
      boxesToShow.push(
        <div className={styles.benefitBox} key={benefitBoxes[index].id}>
          {benefitBoxes[index].content}
        </div>
      );
    }
    return boxesToShow;
  };

  return (
    <section className={styles.benefitsSection}>
      <div className={styles.title}>주요 혜택</div>
      <div className={styles.imagesContainer}>{renderBenefitBoxes()}</div>
      <div className={styles.controls}>
        <span className={styles.pageIndicator}>
          <span className={styles.currentPage}>{currentIndex + 1}</span>
          {" / "}
          <span>{totalBenefits}</span>
        </span>
        <div className={styles.buttons}>
          <button onClick={handlePrev} className={styles.navButton}>
            {"<"}
          </button>
          <div className={styles.separator}></div>
          <button onClick={handleNext} className={styles.navButton}>
            {">"}
          </button>
          <button onClick={handlePausePlay} className={styles.pauseButton}>
            {isPaused ? "▶" : "||"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
