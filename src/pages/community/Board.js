import { Routes, Route, Navigate } from "react-router-dom";
import FreeBoard from "./FreeBoard";
import FAQ from "./FAQ";
import CreateBoard from "./CreateBoard";
import styles from "./Board.module.css";
import Post from "./Post";

function Board({ activeItem }) {
  return (
    <div className={styles.board}>
      <div className={styles.title}>{activeItem}</div>
      <Routes>
        <Route path="/" element={<Navigate to="free-board" />} />
        <Route path="free-board" element={<FreeBoard />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="create-board" element={<CreateBoard />} />
        <Route path="post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default Board;
