import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./Board.module.css";
import Post from "./Post";
import BulletinBoard from "../../pages/community/BulletinBoard";
import FAQ from "./../../pages/community/FAQ";
import BoardTitle from "./boardTitle/BoardTitle";
import CreatePost from "./CreatePost";

function Board({ activeItem }) {
  return (
    <div className={styles.board}>
      <BoardTitle text={activeItem} />
      <Routes>
        <Route path="/" element={<Navigate to="bulletin-board" />} />
        <Route path="bulletin-board" element={<BulletinBoard />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default Board;
