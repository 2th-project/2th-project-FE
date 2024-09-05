import React from "react";
import styles from "./WelfareListHeader.module.css";

const WelfareListHeader = ({ totalItems, layout, setLayout }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.totalItems}>총 게시물 {totalItems}개</div>
      <div className={styles.controls}>
        <select className={styles.select}>
          <option value="24">목록 표시 갯수: 24개</option>
          <option value="48">목록 표시 갯수: 48개</option>
          <option value="96">목록 표시 갯수: 96개</option>
        </select>
        <button className={styles.iconButton} onClick={() => setLayout("grid")}>
          <img
            src="/assets/gridIcon.png"
            alt="Grid View"
            className={styles.icon}
          />
        </button>
        <button className={styles.iconButton} onClick={() => setLayout("list")}>
          <img
            src="/assets/listIcon.png"
            alt="List View"
            className={styles.icon}
          />
        </button>
      </div>
    </div>
  );
};

export default WelfareListHeader;
