import React, { useState } from "react";
import styles from "./Sign.module.css";

const Sign = () => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userBirthday, setUserBirthday] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userArea, setUserArea] = useState("");

  const changeIdHandler = (event) => {
    setUserId(event.target.value);
  };

  const changeNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const changePasswordHandler = (event) => {
    setUserPassword(event.target.value);
  };

  const changePasswordCheckHandler = (event) => {
    setUserPasswordCheck(event.target.value);
  };

  const changeEmailHandler = (event) => {
    setUserEmail(event.target.value);
  };

  const changeBirthdayHandler = (event) => {
    setUserBirthday(event.target.value);
  };

  const changePhoneNumberHandler = (event) => {
    setUserPhoneNumber(event.target.value);
  };

  const changeAreaHandler = (event) => {
    setUserArea(event.target.value);
  };

  return (
    <div className={styles.pagebox}>
      <div className={styles.signbox}>
        <h1 className={styles.formtitle}>회원가입</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="id">아이디</label>
            <input type="text" id="id" name="id" onChange={changeIdHandler} />
            <div>
              <button className={styles.checkButton}>중복확인</button>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={changeNameHandler}
            />
            <div></div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="birthday">생년월일</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              onChange={changeBirthdayHandler}
            />
            <div></div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={changeEmailHandler}
            />
            <div>
              <button className={styles.checkButton}>중복확인</button>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={changePasswordHandler}
            />
            <div></div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password_check">비밀번호 확인</label>
            <input
              type="password"
              id="password_check"
              name="password_check"
              onChange={changePasswordCheckHandler}
            />
            <div></div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone_number">연락처</label>
            <input
              type="number"
              id="phone_number"
              name="phone_number"
              onChange={changePhoneNumberHandler}
            />
            <div></div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="area">거주 지역</label>
            <input
              type="text"
              id="area"
              name="area"
              onChange={changeAreaHandler}
            />
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
