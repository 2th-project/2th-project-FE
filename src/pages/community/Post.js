import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Post.module.css";
import Comment from "./../../components/community/Comment";
import Button from "./../../components/common/button/Button";

const initialComments = {
  1: [
    {
      id: 1,
      userId: "user1",
      content: "첫 번째 댓글입니다.",
      date: "2024-07-21",
    },
    {
      id: 2,
      userId: "user2",
      content: "두 번째 댓글입니다.",
      date: "2024-07-23",
    },
  ],
  2: [
    {
      id: 1,
      userId: "user1",
      content: "다른 게시글의 첫 번째 댓글입니다.",
      date: "2024-07-25",
    },
  ],
};

function Post() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, title, content, userId, date } = location.state;

  const [comments, setComments] = useState(initialComments[id] || []);

  const handleEditPost = () => {
    navigate("/community/board/create", {
      state: { title, content, isEdit: true },
    });
  };

  const handleAddComment = (newContent) => {
    const newComment = {
      id: comments.length + 1,
      userId: "newUser",
      content: newContent,
    };
    setComments([...comments, newComment]);
  };

  const handleEditComment = (commentId, newContent) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId ? { ...comment, content: newContent } : comment
      )
    );
  };

  const handleDeleteComment = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
  };

  return (
    <div>
      <p className={styles.category}>자유게시판 &gt; 게시글</p>
      <div className={styles.postBox}>
        <div className={styles.postTitle}>{title}</div>
        <div className={styles.postDetail}>
          <div>작성자: {userId}</div>
          <div className={styles.detailDivider}></div>
          <div>게시날짜: {date}</div>
        </div>
        <div className={styles.postContent}>{content}</div>
      </div>
      <div className={styles.postBtnBox}>
        <div className={styles.postEditBtnBox}>
          <Button type="submit" onClick={handleEditPost}>
            수정하기
          </Button>
        </div>
        <div className={styles.postDeleteBtnBox}>
          <Button type="submit" className={styles.postDeleteBtn}>
            삭제하기
          </Button>
        </div>
      </div>
      <Comment
        postId={id}
        comments={comments}
        onAddComment={handleAddComment}
        onEditComment={handleEditComment}
        onDeleteComment={handleDeleteComment}
      />
    </div>
  );
}

// export default Post;

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styles from "./BulletinBoard.module.css";
// import PostList from "../../components/community/postList/PostList";
// import Search from "../../components/community/Search";
// import Button from "../../components/common/button/Button";
// import Pagination from "./../../components/common/pagination/Pagination";

// function BulletinBoard() {
//   const navigate = useNavigate();
//   const [posts, setPosts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const postsPerPage = 10;

//   // Fetch posts based on current page, type, and keyword
//   const fetchPosts = async (page = 1, type = "t", keyword = "") => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8080/api/question/list?page=${page}&size=${postsPerPage}&type=${type}&keyword=${keyword}`
//       );

//       if (response.data.code === 200) {
//         setPosts(response.data.data.dtoList);
//         setTotalPages(response.data.data.totalPage);
//       } else {
//         console.error("Failed to fetch posts:", response.data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   // Fetch posts when component mounts and when currentPage changes
//   useEffect(() => {
//     fetchPosts(currentPage);
//   }, [currentPage]);

//   // Handle search
//   const handleSearch = (term, type) => {
//     setCurrentPage(1); // Reset to first page after search
//     fetchPosts(1, type, term);
//   };

//   // Handle post click
//   const handleTitleClick = (post) => {
//     navigate(`/community/board/post`, { state: post });
//   };

//   // Handle post writing
//   const handleWriteClick = () => {
//     navigate("/community/board/create");
//   };

//   return (
//     <div>
//       <Search className={styles.searchBox} onSearch={handleSearch} />
//       <div className={styles.totalPosts}>
//         <img src="/assets/ico_docu.png" alt="board" />
//         전체 {posts.length}건 ({currentPage} / {totalPages} 페이지)
//       </div>
//       <PostList data={posts} onTitleClick={handleTitleClick} />
//       <div className={styles.buttonContainer}>
//         <Button
//           type="button"
//           className={styles.writeBtn}
//           onClick={handleWriteClick}
//         >
//           게시글 작성
//         </Button>
//       </div>
//       <Pagination
//         totalPosts={posts.length}
//         postsPerPage={postsPerPage}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//     </div>
//   );
// }

// export default BulletinBoard;
