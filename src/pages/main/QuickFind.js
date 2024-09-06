import React from "react";
import styles from "./QuickFind.module.css";

const QuickFind = () => {
  return (
    <div className={styles.quickFindContainer}>
      <div className={styles.quickFindBox}>
        <h2 className={styles.title}>간편검색</h2>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="검색어를 입력하세요"
          />
        </div>
      </div>
    </div>
  );
};

export default QuickFind;
