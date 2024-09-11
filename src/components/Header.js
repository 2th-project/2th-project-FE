import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "../states/Auth";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);

  const [auth, setAuth] = useRecoilState(authState);
  const isLoggedIn = useRecoilValue(authState).isLoggedIn;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //로그아웃
  const handleLogout = () => {
    setAuth({
      isLoggedIn: false,
      token: "",
    });
    localStorage.removeItem("token");
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
        isMainPage && !isScrolled ? styles.mainPage : ""
      }`}
    >
      <div className={styles.utilityBar}>
        <div>
          <span className={styles.utilityItem}>공인인증서 내보내기</span>
          <span className={styles.utilityItem}>지원</span>
          <span className={styles.utilityItem}>화면 크기</span>
          <span className={styles.utilityItem}>Language</span>
        </div>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.logo}>
          <img
            src="/assets/logo.png"
            alt="로고"
            className={styles.logoImage}
            onClick={() => handleNavigate("/")}
          />
          <span className={styles.logoText} onClick={() => handleNavigate("/")}>
            하나로 복지
          </span>
        </div>
        <div className={styles.userMenu}>
          <span className={styles.userMenuItem}>통합검색</span>
          <span
            className={styles.userMenuItem}
            onClick={() => handleNavigate("/sign")}
          >
            회원가입
          </span>
          {isLoggedIn ? (
            <span className={styles.userMenuItem} onClick={handleLogout}>
              로그아웃
            </span>
          ) : (
            <span
              className={styles.userMenuItem}
              onClick={() => handleNavigate("/login")}
            >
              로그인
            </span>
          )}
        </div>
      </div>

      <hr className={styles.divider} />

      <nav className={styles.navbar}>
        <span className={styles.navItem} onClick={() => handleNavigate("/")}>
          복지서비스
        </span>
        <span
          className={styles.navItem}
          onClick={() => handleNavigate("/community")}
        >
          소통광장
        </span>
        <span
          className={styles.navItem}
          onClick={() => handleNavigate("/newslist")}
        >
          뉴스리스트
        </span>{" "}
      </nav>

      <hr className={styles.divider02} />
    </header>
  );
};

export default Header;
