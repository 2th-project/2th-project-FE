import React, { useState } from "react";
import styles from "./Sign.module.css";
import Modal from "../../components/common/modal/Modal";

const API_URL = "";
const Sign = () => {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    password: "",
    password_check: "",
    email: "",
    birthday: "",
    phone_number: "",
    area: "",
  });
  const [isValidId, setIsValidId] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidPasswordCheck, setIsValidPasswordCheck] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const openModal = (message) => {
    setModalMessage(message);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setModalMessage("");
  };

  //유효성 검사를 위한 함수
  const validInput = (name, value) => {
    let isChecked;

    switch (name) {
      case "id":
        const idCheck = /^[a-zA-Z0-9]{8,}$/;
        isChecked = idCheck.test(value);
        setIsValidId(isChecked);
        break;
      case "password":
        const passwordCheck = /^[a-zA-Z0-9]{10,}$/;
        isChecked = passwordCheck.test(value);
        setIsValidPassword(isChecked);
        break;
      case "password_check":
        isChecked = value === userData.password;
        setIsValidPasswordCheck(isChecked);
        break;
      default:
        break;
    }
    return isChecked;
  };

  const handleCheck = async (name) => {
    const value = userData[name];
    if (!value) {
      openModal("값을 입력해 주세요.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { [name]: value },
      });

      const data = await response.json();
      if (data.isAvailable) {
        openModal("사용 가능합니다.");
      } else {
        openModal("이미 사용중입니다.");
      }
    } catch (error) {
      openModal("오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    validInput(name, value);

    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userData);

    if (!isValidId || !isValidPassword || !isValidPasswordCheck) {
      openModal("입력 정보를 확인해주세요.");
      return;
    }

    const sendUserData = {
      uid: userData.id,
      name: userData.name,
      password: userData.password,
      password_check: userData.password_check,
      email: userData.email,
      birthday: userData.birthday,
      phone_number: userData.phone_number,
      area: userData.area,
    };

    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: sendUserData,
      });

      if (!response.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다.");
      }

      const result = await response.json();
      console.log("회원가입 성공:", result);
      openModal("회원가입이 완료되었습니다.");
    } catch (error) {
      console.error("회원가입 실패:", error);
      openModal("회원가입에 실패했습니다.");
    }
  };

  return (
    <>
      {isOpen && <Modal message={modalMessage} onClose={closeModal} />}
      <div className={styles.pagebox}>
        <div className={styles.signbox}>
          <h1 className={styles.formtitle}>회원가입</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="id">아이디</label>
              <div className={styles.formGroupValid}>
                <input
                  type="text"
                  id="id"
                  name="id"
                  onChange={changeHandler}
                  className={
                    !isValidId ? styles.vaildInput : styles.formGroupinput
                  }
                />
                {!isValidId && (
                  <div className={styles.vaildError}>
                    아이디는 8자 이상의 영문, 숫자로 조합
                  </div>
                )}
              </div>
              <div className={styles.formGroupButton}>
                <button
                  type="button"
                  className={styles.checkButton}
                  onClick={() => handleCheck("id")}
                >
                  중복확인
                </button>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={changeHandler}
                className={styles.formGroupinput}
              />
              <div className={styles.formGroupButton}></div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="birthday">생년월일</label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                onChange={changeHandler}
                className={styles.formGroupinput}
                placeholder="YYYY-MM-DD"
              />
              <div className={styles.formGroupButton}></div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={changeHandler}
                className={styles.formGroupinput}
              />
              <div className={styles.formGroupButton}>
                <button
                  type="button"
                  className={styles.checkButton}
                  onClick={() => handleCheck("email")}
                >
                  중복확인
                </button>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">비밀번호</label>
              <div className={styles.formGroupValid}>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={changeHandler}
                  className={
                    !isValidPassword ? styles.vaildInput : styles.formGroupinput
                  }
                />
                {!isValidPassword && (
                  <div className={styles.vaildError}>
                    비밀번호는 10자 이상의 영문, 숫자로 조합
                  </div>
                )}
              </div>
              <div className={styles.formGroupButton}></div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password_check">비밀번호 확인</label>
              <div className={styles.formGroupValid}>
                <input
                  type="password"
                  id="password_check"
                  name="password_check"
                  onChange={changeHandler}
                  className={
                    !isValidPassword ? styles.vaildInput : styles.formGroupinput
                  }
                />
                {!isValidPasswordCheck && (
                  <div className={styles.vaildError}>
                    비밀번호가 일치하지 않습니다.
                  </div>
                )}
              </div>
              <div className={styles.formGroupButton}></div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone_number">연락처</label>
              <input
                type="number"
                id="phone_number"
                name="phone_number"
                placeholder="010-1234-5678"
                onChange={changeHandler}
                className={styles.formGroupinput}
              />
              <div className={styles.formGroupButton}></div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="area">거주 지역</label>
              <input
                type="text"
                id="area"
                name="area"
                onChange={changeHandler}
                className={styles.formGroupinput}
              />
              <div className={styles.formGroupButton}></div>
            </div>
            <div className={styles.submit}>
              <button type="submit" className={styles.submitButton}>
                가입하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sign;
