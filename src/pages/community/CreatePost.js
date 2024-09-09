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

  // content를 초기화하는 로직을 useEffect에서 좀 더 간결하게 처리
  useEffect(() => {
    if (isEdit) {
      setContent(state?.content || "");
    }
  }, [isEdit, state?.content]);

  // 제목과 내용의 변경을 핸들링하는 인라인 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    const action = isEdit ? "Updated" : "New";
    console.log(`${action} Post - Title:`, title);
    console.log(`${action} Post - Content:`, content);
    // 이후 서버에 post 또는 put 요청 로직을 추가
  };

  // 툴바에서 이미지 관련 버튼을 삭제하고 텍스트 편집만 가능하게 설정
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
