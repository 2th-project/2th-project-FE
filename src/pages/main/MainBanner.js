import React from "react";
import styles from "./MainBanner.module.css";

const MainBanner = () => {
  return (
    <div className={styles.mainBanner}>
      <div className={styles.mainBannerBox}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainTitle}>시마의 여정</h1>
          <p className={styles.subText}>
            우리의 미래는 어떻게 결정되는 걸까요? 오늘보다 더 나은 내일을
            위해서는
            <br /> 자신에 대한 믿음과 새로운 길로 한발 내딛는 용기가 필요합니다.
            <br /> 그리고 교욱은 그 여정을 시작하는 힘이 되어줍니다.
          </p>
        </div>
      </div>
      <video
        className={styles.mainBannerVideo}
        autoPlay
        loop
        muted
        playsInline
        src="/assets/mainBannerVideo.mp4"
        type="video/mp4"
      ></video>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default MainBanner;
