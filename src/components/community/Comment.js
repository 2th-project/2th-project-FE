import React, { useState } from "react";
import styles from "./Comment.module.css";

function Comment({ comments, onAddComment, onEditComment, onDeleteComment }) {
  const [newComment, setNewComment] = useState(""); // 새 댓글 내용
  const [editMode, setEditMode] = useState(null); // 현재 수정 중인 댓글 ID
  const [editContent, setEditContent] = useState(""); // 수정 중인 댓글 내용

  // 댓글 추가
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      onAddComment(newComment);
      setNewComment(""); // 입력 후 초기화
    }
  };

  // 수정 모드로 변경
  const handleEditClick = (comment) => {
    setEditMode(comment.id);
    setEditContent(comment.content); // 현재 댓글 내용을 수정창에 채움
  };

  // 댓글 저장
  const handleSaveClick = (id) => {
    onEditComment(id, editContent);
    setEditMode(null); // 수정 모드 해제
  };

  // 수정 취소
  const handleCancelClick = () => {
    setEditMode(null); // 수정 모드 해제
  };

  return (
    <div className={styles.commentBox}>
      <div className={styles.commentInputBox}>
        <textarea
          className={styles.commentTextarea}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 입력하세요."
          rows={3}
        />
        <button className={styles.commentInputBtn} onClick={handleAddComment}>
          작성하기
        </button>
      </div>

      {comments.map((comment) => (
        <div key={comment.id} className={styles.commentItem}>
          <div className={styles.commentUser}>{comment.userId}</div>

          {editMode === comment.id ? (
            <textarea
              className={styles.commentTextarea}
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              rows={3}
            />
          ) : (
            <div className={styles.commentContent}>{comment.content}</div>
          )}

          {editMode === comment.id ? (
            <>
              <button
                className={styles.commentSaveBtn}
                onClick={() => handleSaveClick(comment.id)}
              >
                저장
              </button>
              <button
                className={styles.commentCancelBtn}
                onClick={handleCancelClick}
              >
                취소
              </button>
            </>
          ) : (
            <>
              <button
                className={styles.commentEditBtn}
                onClick={() => handleEditClick(comment)}
              >
                수정
              </button>
              <button
                className={styles.commentDeleteBtn}
                onClick={() => onDeleteComment(comment.id)}
              >
                삭제
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Comment;
