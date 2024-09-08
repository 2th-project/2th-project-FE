import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./BulletinBoard.module.css";
import PostList from "../../components/community/postList/PostList";
import Search from "../../components/community/Search";
import Button from "../../components/common/button/Button";
import Pagination from "./../../components/common/pagination/Pagination";

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
  {
    id: 8,
    userId: "hhhh1111",
    title: "제목8",
    content: "내용8",
    date: "2024-07-26",
    views: 34,
  },
  {
    id: 9,
    userId: "iiii1111",
    title: "제목9",
    content: "내용9",
    date: "2024-07-27",
    views: 12,
  },
  {
    id: 10,
    userId: "jjjj1111",
    title: "제목10",
    content: "내용10",
    date: "2024-07-28",
    views: 7,
  },
  {
    id: 11,
    userId: "kkkk1111",
    title: "제목11",
    content: "내용11",
    date: "2024-07-29",
    views: 23,
  },
  {
    id: 12,
    userId: "llll1111",
    title: "제목12",
    content: "내용12",
    date: "2024-07-30",
    views: 6,
  },
  {
    id: 13,
    userId: "gggg1111",
    title: "제목7",
    content: "내용7",
    date: "2024-07-25",
    views: 56,
  },
  {
    id: 14,
    userId: "hhhh1111",
    title: "제목8",
    content: "내용8",
    date: "2024-07-26",
    views: 34,
  },
  {
    id: 15,
    userId: "iiii1111",
    title: "제목9",
    content: "내용9",
    date: "2024-07-27",
    views: 12,
  },
  {
    id: 16,
    userId: "jjjj1111",
    title: "제목10",
    content: "내용10",
    date: "2024-07-28",
    views: 7,
  },
  {
    id: 17,
    userId: "kkkk1111",
    title: "제목11",
    content: "내용11",
    date: "2024-07-29",
    views: 23,
  },
  {
    id: 18,
    userId: "llll1111",
    title: "제목12",
    content: "내용12",
    date: "2024-07-30",
    views: 6,
  },
  {
    id: 19,
    userId: "iiii1111",
    title: "제목9",
    content: "내용9",
    date: "2024-07-27",
    views: 12,
  },
  {
    id: 20,
    userId: "jjjj1111",
    title: "제목10",
    content: "내용10",
    date: "2024-07-28",
    views: 7,
  },
  {
    id: 21,
    userId: "kkkk1111",
    title: "제목11",
    content: "내용11",
    date: "2024-07-29",
    views: 23,
  },
  {
    id: 22,
    userId: "llll1111",
    title: "제목12",
    content: "내용12",
    date: "2024-07-30",
    views: 6,
  },
];

function BulletinBoard() {
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState(dummyData);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

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
    setCurrentPage(1);
  };

  const reversedData = [...filteredData].reverse();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = reversedData.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredData.length / postsPerPage);

  return (
    <div>
      <Search className={styles.searchBox} onSearch={handleSearch} />
      <div className={styles.totalPosts}>
        <img src="assets/ico_docu.png" alt="board" />
        전체 {filteredData.length}건 ({currentPage} / {totalPages} 페이지)
      </div>
      <PostList data={currentPosts} onTitleClick={handleTitleClick} />
      <div className={styles.buttonContainer}>
        <Button
          type="button"
          className={styles.writeBtn}
          onClick={handleWriteClick}
        >
          글쓰기
        </Button>
      </div>
      <Pagination
        totalPosts={filteredData.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default BulletinBoard;
