import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./Board.module.css";
import Post from "./Post";
import PostList from "../../pages/community/PostList";
import CreatePost from "./CreatePost";
import FAQ from "./../../pages/community/FAQ";

function Board({ activeItem }) {
  return (
    <div className={styles.board}>
      <div className={styles.title}>{activeItem}</div>
      <Routes>
        <Route path="/" element={<Navigate to="/post-list" />} />
        <Route path="/post-list" element={<PostList />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/community/create-post" element={<CreatePost />} />
        <Route path="/community/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default Board;
