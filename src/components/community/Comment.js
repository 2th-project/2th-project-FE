import React, { useState } from "react";
import styles from "./Comment.module.css";
import Modal from "./../common/modal/Modal";

function Comment({ comments, onAddComment, onEditComment, onDeleteComment }) {
  const [newComment, setNewComment] = useState("");
  const [editMode, setEditMode] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      onAddComment(newComment);
      setNewComment("");
    }
  };

  const handleEditClick = (comment) => {
    setEditMode(comment.id);
    setEditContent(comment.content);
  };

  const handleCancelClick = () => {
    setEditMode(null);
  };

  const handleSaveClick = (id) => {
    onEditComment(id, editContent);
    setEditMode(null);
    setModalMessage("댓글이 수정되었습니다");
    setShowModal(true);
  };

  const handleDeleteClick = (id) => {
    setModalMessage("댓글을 삭제하시겠습니까?");
    setConfirmDelete(id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (confirmDelete !== null) {
      onDeleteComment(confirmDelete);
      setConfirmDelete(null);
      setModalMessage("댓글이 삭제되었습니다.");
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setConfirmDelete(null); // 모달을 닫을 때 삭제 확인 상태 초기화
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
              <div className={styles.divider}></div>
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
                onClick={() => handleDeleteClick(comment.id)}
              >
                삭제
              </button>
            </>
          )}
        </div>
      ))}
      {showModal && (
        <Modal
          message={modalMessage}
          onClose={
            confirmDelete !== null ? handleConfirmDelete : handleCloseModal
          }
        />
      )}
    </div>
  );
}

export default Comment;
