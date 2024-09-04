import React from "react";
import styles from "./WelfareList.module.css";

const exampleWelfareItems = Array(24).fill({
  title: "복지 혜택 제목",
  description: "이것은 복지 혜택에 대한 설명입니다.",
});

const WelfareList = () => {
  return (
    <div className={styles.welfareListContainer}>
      {exampleWelfareItems.map((item, index) => (
        <div key={index} className={styles.welfareBox}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WelfareList;
