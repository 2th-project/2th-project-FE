import React from "react";
import styles from "./Sign.module.css";

const Sign = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.signContainer}>
        <h1 className={styles.title}>회원가입</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username">아이디</label>
            <input type="text" id="username" name="username" />
            <div>
              <button className={styles.checkButton}>중복확인</button>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="name">이름</label>
            <input type="text" id="name" name="name" />
            <div></div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="dob">생년월일</label>
            <input type="date" id="dob" name="dob" />
            <div></div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" name="email" />
            <div>
              <button className={styles.checkButton}>중복확인</button>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" name="password" />
            <div></div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <div></div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="contact">연락처</label>
            <input type="tel" id="contact" name="contact" />
            <div></div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="location">거주 지역</label>
            <input type="text" id="location" name="location" />
            <div></div>
          </div>
          <div className={styles.submit}>
            <button type="submit" className={styles.submitButton}>
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
