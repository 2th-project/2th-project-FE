import React from "react";
import styles from "./Sign.module.css";

const Sign = () => {
  return (
    <div className={styles.pagebox}>
      <div className={styles.signbox}>
        <h1 className={styles.formtitle}>회원가입</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="id">아이디</label>
            <input type="text" id="id" name="id" />
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
            <label htmlFor="birthday">생년월일</label>
            <input type="date" id="birthday" name="birthday" />
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
            <label htmlFor="password_check">비밀번호 확인</label>
            <input type="password" id="password_check" name="password_check" />
            <div></div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone_number">연락처</label>
            <input type="number" id="phone_number" name="phone_number" />
            <div></div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="area">거주 지역</label>
            <input type="text" id="area" name="area" />
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
