import { useNavigate } from "react-router-dom";
import styles from "./FreeBoard.module.css";

const dummyData = Array(10).fill({
  id: 3667,
  userId: "abcd1234",
  title: "잠실역 환승구간 에어컨 추가 설치건",
  date: "2024-07-18",
  views: 123,
});

function FreeBoard() {
  const navigate = useNavigate();

  const handleWriteClick = () => {
    navigate("/create-board");
  };

  return (
    <div>
      <div className={styles.search}>
        <form>
          <label>검색하기</label>
          <select name="type">
            <option value="t">제목</option>
            <option value="c">내용</option>
            <option value="w">작성자</option>
            <option value="tc">제목+내용</option>
            <option value="tcw">제목+내용+작성자</option>
          </select>
          <input />
          <button>검색</button>
        </form>
      </div>
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
          {dummyData.map((post, index) => (
            <div className={styles.tableRow} key={index}>
              <div className={styles.tableCell}>{post.id}</div>
              <div className={styles.tableCell}>{post.userId}</div>
              <div className={styles.tableCell}>{post.title}</div>
              <div className={styles.tableCell}>{post.date}</div>
              <div className={styles.tableCell}>{post.views}</div>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.writeBtn} onClick={handleWriteClick}>
        글쓰기
      </button>
      <div className={styles.pagination}>
        <button>&lt;</button>
        <button className={styles.active}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>&gt;</button>
      </div>
    </div>
  );
}

export default FreeBoard;
