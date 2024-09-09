import React, { useState } from "react";
import styles from "./Login.module.css";
import OAuth from "../../components/sociallogin/OAuth";

const API_URL = "";
const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
    findId: "",
    newPassword: "",
    passwordCheck: "",
  });

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    console.log(name, value);
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePasswordChange = async () => {
    if (loginData.newPassword !== loginData.passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: { id: loginData.findId, password: loginData.newPassword },
      });
      if (!response.ok) {
        throw new Error("비밀번호 변경 실패");
      }

      alert("비밀번호가 성공적으로 변경되었습니다.");
      closeModal();
    } catch (error) {
      console.error("비밀번호 변경 실패", error);
      alert("비밀번호 변경에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const sendLoginData = {
      uid: loginData.id,
      password: loginData.password,
    };

    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: sendLoginData,
      });

      if (!response.ok) {
        throw new Error("로그인 실패");
      }

      const data = await response.json();
      const { token } = data;
      // const { accessToken,refreshToken } = data;

      localStorage.setItem("token", token);
      // localStorage.setItem("accessToken", accessToken);
      // localStorage.setItem("refreshToken", refreshToken);

      console.log("로그인 성공");
    } catch (error) {
      console.error("로그인 실패", error);
    }
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
            onChange={changeHandler}
          />
        </div>
        <div className={styles.modalInput}>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="새 비밀번호"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.modalInput}>
          <input
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            placeholder="비밀번호 확인"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.modalButtons}>
          <button
            className={styles.submitButton}
            onClick={handlePasswordChange}
          >
            제출
          </button>
          <button className={styles.closeButton} onClick={closeModal}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.styleBox}>
      <div className={styles.loginBox}>
        <h1 className={styles.loginTitle}>로그인</h1>
        <div className={styles.loginForm}>
          <div className={styles.inputBox}>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="아이디"
              onChange={changeHandler}
            />
          </div>
          <div className={styles.inputBox}>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호"
              onChange={changeHandler}
            />
          </div>
          <button className={styles.loginButton} onClick={handleSubmit}>
            로그인
          </button>
          <button className={styles.findPassword} onClick={openModal}>
            비밀번호 찾기
          </button>
        </div>
        <OAuth />
      </div>
      {isOpen && passwordModal}
    </div>
  );
};

export default Login;
