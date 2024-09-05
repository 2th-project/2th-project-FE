import styles from "./PostList.module.css";

function PostList({ data, onTitleClick }) {
  const reversedData = [...data].reverse();

  return (
    <div className={styles.table}>
      <div className={styles.tableHeader}>
        <div className={styles.tableRow}>
          <div className={styles.tableCell}>번호</div>
          <div className={styles.tableCell}>작성자</div>
          <div className={styles.tableCell}>제목</div>
          <div className={styles.tableCell}>게시날짜</div>
          <div className={styles.tableCell}>조회수</div>
        </div>
      </div>
      <div className={styles.tableBody}>
        {reversedData.map((post) => (
          <div className={styles.tableRow} key={post.id}>
            <div className={styles.tableCell}>{post.id}</div>
            <div className={styles.tableCell}>{post.userId}</div>
            <div
              className={`${styles.tableCell} ${styles.cellContent}`}
              onClick={() => onTitleClick(post)}
            >
              {post.title}
            </div>
            <div className={styles.tableCell}>{post.date}</div>
            <div className={styles.tableCell}>{post.views}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
