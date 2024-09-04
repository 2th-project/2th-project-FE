import { Routes, Route, Navigate } from "react-router-dom";
import FreeBoard from "./FreeBoard";
import FAQ from "./FAQ";
import styles from "./Board.module.css";

function Board({ activeItem }) {
  return (
    <div className={styles.board}>
      <div className={styles.title}>{activeItem}</div>{" "}
      {/* 선택된 항목 이름을 표시 */}
      <Routes>
        <Route path="/" element={<Navigate to="free-board" />} />{" "}
        {/* 기본 경로로 리디렉션 */}
        <Route path="free-board" element={<FreeBoard />} />
        <Route path="faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default Board;
