import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./BulletinBoard.module.css";
import PostList from "../../components/community/postList/PostList";
import Search from "../../components/community/Search";
import Button from "../../components/common/button/Button";

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

function BulletinBoard() {
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState(dummyData);

  const handleWriteClick = () => {
    navigate("/community/board/create");
  };

  const handleTitleClick = (post) => {
    navigate(`/community/board/post`, { state: post });
  };

  const handleSearch = (term, type) => {
    const filtered = dummyData.filter((post) => {
      if (type === "t") return post.title.includes(term);
      if (type === "c") return post.content.includes(term);
      if (type === "w") return post.userId.includes(term);
      if (type === "tc")
        return post.title.includes(term) || post.content.includes(term);
      if (type === "tcw")
        return (
          post.title.includes(term) ||
          post.content.includes(term) ||
          post.userId.includes(term)
        );
      return true;
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <Search className={styles.searchBox} onSearch={handleSearch} />
      <PostList data={filteredData} onTitleClick={handleTitleClick} />
      <div className={styles.buttonContainer}>
        <Button
          type="button"
          className={styles.writeBtn}
          onClick={handleWriteClick}
        >
          글쓰기
        </Button>
      </div>
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

export default BulletinBoard;
