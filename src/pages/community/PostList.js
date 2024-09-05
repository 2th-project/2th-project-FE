import { useNavigate } from "react-router-dom";
import styles from "./PostList.module.css";

const dummyData = [
  {
    id: 1,
    userId: "abcd1234",
    title: "잠실역 환승구간 에어컨 추가 설치건",
    content: "잠실역 8호선-2호선 환승통로 냉방 관리에 관심을 기울여 주길 요청.",
    date: "2024-07-18",
    views: 123,
  },
  {
    id: 2,
    userId: "bbbb1111",
    title: "제목2",
    content: "내용2",
    date: "2024-07-19",
    views: 101,
  },
  {
    id: 3,
    userId: "cccc1111",
    title: "제목3",
    content: "내용3",
    date: "2024-07-20",
    views: 81,
  },
  {
    id: 4,
    userId: "dddd1111",
    title: "제목4",
    content: "내용4",
    date: "2024-07-21",
    views: 8,
  },
  {
    id: 5,
    userId: "eeee1111",
    title: "제목5",
    content: "내용5",
    date: "2024-07-23",
    views: 21,
  },
  {
    id: 6,
    userId: "ffff1111",
    title: "제목6",
    content: "내용6",
    date: "2024-07-24",
    views: 5,
  },
  {
    id: 7,
    userId: "gggg1111",
    title: "제목7",
    content: "내용7",
    date: "2024-07-25",
    views: 56,
  },
];

function PostList() {
  const navigate = useNavigate();

  const handleWriteClick = () => {
    navigate("/community/create-post");
  };

  const handleTitleClick = (post) => {
    navigate(`/community/post`, { state: post });
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
          {dummyData
            .slice()
            .reverse()
            .map((post) => (
              <div className={styles.tableRow} key={post.id}>
                <div className={styles.tableCell}>{post.id}</div>
                <div className={styles.tableCell}>{post.userId}</div>
                <div
                  className={styles.tableCell}
                  onClick={() => handleTitleClick(post)}
                  style={{ cursor: "pointer" }}
                >
                  {post.title}
                </div>
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

export default PostList;
