import React from "react";
import styles from "./KeyBenefits.module.css";

const KeyBenefits = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.title}>주요 혜택</div>
      <div className={styles.imagesContainer}>
        <img
          src="/assets/image1.png"
          alt="혜택 이미지 1"
          className={styles.benefitImage}
        />
        <img
          src="/assets/image2.png"
          alt="혜택 이미지 2"
          className={styles.benefitImage}
        />
        <img
          src="/assets/image3.png"
          alt="혜택 이미지 3"
          className={styles.benefitImage}
        />
      </div>
    </section>
  );
};

export default KeyBenefits;
