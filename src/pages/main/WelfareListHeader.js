import React from "react";
import styles from "./WelfareListHeader.module.css";

const WelfareListHeader = ({
  totalItems,
  itemsPerPage,
  setItemsPerPage,
  layout,
  setLayout,
}) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.totalItems}>총 게시물: {totalItems}개</div>

      <div className={styles.controls}>
        <label>
          목록 표시 갯수:
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className={styles.select}
          >
            <option value={24}>24개</option>
            <option value={48}>48개</option>
            <option value={96}>96개</option>
          </select>
        </label>

        <button
          className={`${styles.iconButton} ${
            layout === "grid" ? styles.active : ""
          }`}
          onClick={() => setLayout("grid")}
        >
          <img
            src="/assets/gridIcon.png"
            alt="Grid View"
            className={styles.icon}
          />
        </button>

        <button
          className={`${styles.iconButton} ${
            layout === "list" ? styles.active : ""
          }`}
          onClick={() => setLayout("list")}
        >
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
