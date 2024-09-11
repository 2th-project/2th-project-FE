import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./CreatePost.module.css";
import Button from "./../../components/common/button/Button";

function CreatePost() {
  const { state } = useLocation();
  const isEdit = state?.isEdit || false;
  const [title, setTitle] = useState(state?.title || "");
  const [content, setContent] = useState(state?.content || "");

  useEffect(() => {
    if (isEdit) {
      setContent(state?.content || "");
    }
  }, [isEdit, state?.content]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = isEdit ? "Updated" : "New";
    console.log(`${action} Post - Title:`, title);
    console.log(`${action} Post - Content:`, content);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "list",
    "bullet",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "link",
  ];

  return (
    <div className={styles.createBoard}>
      <p className={styles.category}>
        {isEdit ? "자유게시판 > 게시글 수정" : "자유게시판 > 새 게시글 작성"}
      </p>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.title}>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.titleInput}
          />
        </div>
        <div className={styles.formGroup2}>
          <label className={styles.content}>내용</label>
          <ReactQuill
            value={content || ""}
            onChange={setContent}
            className={styles.quill}
            theme="snow"
            placeholder="내용을 작성해주세요."
            modules={modules}
            formats={formats}
          />
        </div>
        <Button type="submit" className={styles.submitButton}>
          {isEdit ? "수정하기" : "작성하기"}
        </Button>
      </form>
    </div>
  );
}

export default CreatePost;
