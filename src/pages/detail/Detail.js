import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../../components/common/button/Button";
import styles from "./Detail.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/common/sidebar/Sidebar";

const mockData = {
  id: 1,
  service_name: "예제 서비스",
  service_purpose_summary: "서비스 서머리.",
  likeCount: 120,
  dislikeCount: 10,
  comments: [
    { id: 1, text: "좀더 개선이 필요해요!" },
    { id: 2, text: "솔직히 별로에요." },
  ],
};

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(mockData);
  const [loading, setLoading] = useState(true);
  const [likeCount, setLikeCount] = useState(mockData.likeCount);
  const [dislikeCount, setDislikeCount] = useState(mockData.dislikeCount);
  const [comments, setComments] = useState(mockData.comments);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(mockData);
      } catch (error) {
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleButtonClick = () => {
    window.location.href =
      "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/149200000026";
  };

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim()) {
      const updatedComments = [
        ...comments,
        { id: comments.length + 1, text: newComment },
      ];
      setComments(updatedComments);
      setNewComment("");
    }
  };

  return (
    <>
      <Header className={styles.headerTitle} />
      <div className={styles.layoutContainer}>
        <div className={styles.sidebarWrapper}>
          <Sidebar
            title="복지서비스 상세"
            items={[
              { name: "상세정보", active: true },
              { name: "생애주기", active: false },
            ]}
            onItemClick={() => {}}
          />
        </div>
        <div className={styles.mainContent}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className={styles.headerContent}>
                <h3>서비스명: {data.service_name}</h3>
                <p>서비스 목적 요약: {data.service_purpose_summary}</p>
              </div>
              <div className={styles.infoBox}>
                <h1>{data.service_name}</h1>
                <p>{data.service_purpose_summary}</p>
              </div>
              <div className={styles.buttonWrapper}>
                <Button
                  onClick={handleButtonClick}
                  className={styles.largeButton}
                >
                  신청하기
                </Button>
              </div>
              <div className={styles.reactions}>
                <button onClick={handleLike} className={styles.likeButton}>
                  좋아요 ({likeCount})
                </button>
                <button
                  onClick={handleDislike}
                  className={styles.dislikeButton}
                >
                  싫어요 ({dislikeCount})
                </button>
              </div>
              <div className={styles.commentsSection}>
                <h2>의견</h2>
                <ul className={styles.commentsList}>
                  {comments.map((comment) => (
                    <li key={comment.id} className={styles.commentItem}>
                      {comment.text}
                    </li>
                  ))}
                </ul>
                <div className={styles.commentFormContainer}>
                  <form
                    onSubmit={handleCommentSubmit}
                    className={styles.commentForm}
                  >
                    <textarea
                      value={newComment}
                      onChange={handleCommentChange}
                      placeholder="의견을 작성하세요"
                      className={styles.commentInput}
                    ></textarea>
                    <button
                      type="submit"
                      className={styles.commentSubmitButton}
                    >
                      제출
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
