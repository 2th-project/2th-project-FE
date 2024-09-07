import React, { useState } from "react";
import styles from "./Login.module.css";

const API_URL = "";
const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const passwordModal = (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div>비밀번호 찾기</div>
        <div className={styles.modalInput}>
          <input
            type="text"
            id="findId"
            name="findId"
            placeholder="아이디를 입력하세요"
          />
        </div>
        <div className={styles.modalInput}>
          <input
            type="text"
            id="findId"
            name="findId"
            placeholder="새 비밀번호"
          />
        </div>
        <div className={styles.modalInput}>
          <input
            type="text"
            id="findId"
            name="findId"
            placeholder="비밀번호 확인"
          />
        </div>
        <div className={styles.modalButtons}>
          <button className={styles.submitButton}>제출</button>
          <button className={styles.closeButton} onClick={closeModal}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { id, password } = userData;

    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { id, password },
      });

      if (!response.ok) {
        throw new Error("로그인 실패");
      }

      const data = await response.json();
      const { token } = data;

      localStorage.setItem("token", token);

      console.log("로그인 성공");
    } catch (error) {
      console.error("로그인 실패", error);
    }
  };

  return (
    <div className={styles.styleBox}>
      <div className={styles.loginBox}>
        <h1 className={styles.loginTitle}>로그인</h1>
        <div className={styles.loginForm}>
          <div className={styles.inputBox}>
            <input type="text" id="id" name="id" placeholder="아이디" />
          </div>
          <div className={styles.inputBox}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호"
            />
          </div>
          <button className={styles.loninButton} onClick={handleSubmit}>
            로그인
          </button>
          <button className={styles.findPassword} onClick={openModal}>
            비밀번호 찾기
          </button>
        </div>
        <button className={styles.oauthLogin}>소셜 로그인</button>
      </div>
      {isOpen && passwordModal}
    </div>
  );
};

export default Login;
