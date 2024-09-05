import React from "react";
import styles from "./WelfareBox.module.css";

const WelfareBox = ({ item, layout }) => {
  return (
    <div
      className={layout === "grid" ? styles.welfareBox : styles.welfareListItem}
    >
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.description}>{item.description}</p>
    </div>
  );
};

export default WelfareBox;
