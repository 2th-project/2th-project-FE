import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // react-quill의 기본 스타일
import styles from "./CreateBoard.module.css";

function CreateBoard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 게시글 제출 로직 추가
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <div className={styles.createBoard}>
      <h2>새 게시글 작성</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>제목:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className={styles.titleInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label>내용:</label>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            className={styles.quill}
            theme="snow"
            placeholder="내용을 작성해주세요..."
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          작성하기
        </button>
      </form>
    </div>
  );
}

export default CreateBoard;
