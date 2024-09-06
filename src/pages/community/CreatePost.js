import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./CreatePost.module.css";
import Button from "./../../components/common/button/Button";

function CreatePost() {
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
      <p className={styles.category}>자유게시판 &gt; 새 게시글 작성</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.title}>제목</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className={styles.titleInput}
          />
        </div>
        <div className={styles.formGroup2}>
          <label className={styles.content}>내용</label>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            className={styles.quill}
            theme="snow"
            placeholder="내용을 작성해주세요."
          />
        </div>
        <Button type="submit" className={styles.submitButton}>
          작성하기
        </Button>
      </form>
    </div>
  );
}

export default CreatePost;
