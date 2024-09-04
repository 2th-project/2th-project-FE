import React from "react";
import styles from "./MainBanner.module.css";

const MainBanner = () => {
  return (
    <div className={styles.mainBanner}>
      <img
        src="/assets/mainBanner.png"
        alt="메인배너"
        className={styles.mainBannerImage}
      />
    </div>
  );
};

export default MainBanner;
