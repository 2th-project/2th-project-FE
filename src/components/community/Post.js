import { useLocation } from "react-router-dom";
import styles from "./Post.module.css";

function Post() {
  const location = useLocation();
  const { title, content, userId, date, views } = location.state;

  return (
    <div>
      <p className={styles.category}>자유게시판 &gt; 게시글</p>
      <div>
        <div className={styles.postTitle}>제목</div>
        <div className={styles.postDetail}>
          <div>작성자 {userId}</div>
          <span>|</span>
          <div>게시날짜 {date}</div>
          <span>|</span>
          <div>조회수 {views}</div>
        </div>
        <div className={styles.postContent}>{title}</div>
      </div>
      <div>
        <div className={styles.postTitle}>내용</div>
        <div className={styles.postContent}>{content}</div>
      </div>
      <button>수정하기</button>
      <button>삭제하기</button>
      <div>
        <label>댓글</label>
        <input placeholder="댓글을 입력하세요." />
        <button>작성하기</button>
      </div>
    </div>
  );
}

export default Post;
