import React from "react";
import styles from "./Login.module.css";

const Login = () => {
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
          <button className={styles.loninButton}>로그인</button>
          <button className={styles.findPassword}>비밀번호 찾기</button>
        </div>
        <button className={styles.oauthLogin}>소셜 로그인</button>
      </div>
    </div>
  );
};

export default Login;
