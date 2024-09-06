import { useLocation } from "react-router-dom";
import styles from "./Post.module.css";
import Button from "./../../components/common/button/Button";

function Post() {
  const location = useLocation();
  const { title, content, userId, date, views } = location.state;

  return (
    <div>
      <p className={styles.category}>자유게시판 &gt; 게시글</p>
      <div className={styles.postBox}>
        <div className={styles.postTitle}>{title}</div>
        <div className={styles.postDetail}>
          <div>작성자: {userId}</div>
          <div className={styles.detailDivider}></div>
          <div>게시날짜: {date}</div>
          <div className={styles.detailDivider}></div>
          <div>조회수: {views}</div>
        </div>
        <div className={styles.postContent}>{content}</div>
      </div>
      <div className={styles.postBtnBox}>
        <Button type="submit">수정하기</Button>
        <Button type="submit">삭제하기</Button>
      </div>
      <div>
        <label>댓글</label>
        <div className={styles.commentBox}>
          <input
            className={styles.commentInput}
            placeholder="댓글을 입력하세요."
          />
          <button className={styles.commentBtn}>작성하기</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
