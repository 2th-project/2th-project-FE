import React from "react";
import styles from "./KeyBenefits.module.css";

const KeyBenefits = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.title}>주요 혜택</div>
      <div className={styles.imagesContainer}>
        <div className={styles.benefitBox}></div>
        <div className={styles.benefitBox}></div>
        <div className={styles.benefitBox}></div>
      </div>
    </section>
  );
};

export default KeyBenefits;
