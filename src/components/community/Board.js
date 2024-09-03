import styles from "./Board.module.css";

const dummyData = Array(10).fill({
  id: 3667,
  title: "잠실역 환승구간 에어컨 추가 설치건",
  date: "2024-07-18",
});

function Board() {
  return (
    <div className={styles.postList}>
      <div className={styles.searchBar}>
        <input type="text" placeholder="검색어 입력" />
        <button>검색</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>게시날짜</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((post, index) => (
            <tr key={index}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button>&lt;</button>
        <button className={styles.active}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>&gt;</button>
      </div>
      <button className={styles.writeBtn}>글쓰기</button>
    </div>
  );
}

export default Board;
