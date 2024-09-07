import React from "react";
import styles from "./WelfareBox.module.css";

const WelfareBox = ({ item, layout }) => {
  return (
    <div
      className={layout === "grid" ? styles.welfareBox : styles.welfareListItem}
    >
      <h3 className={styles.title}>{item.serviceName}</h3>
      <p className={styles.supervisingAgency}>{item.supervisingAgencyName}</p>
      <p className={styles.applicationDeadline}>{item.applicationDeadline}</p>
      <p className={styles.applicationMethod}>{item.applicationMethod}</p>
    </div>
  );
};

export default WelfareBox;
