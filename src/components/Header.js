import React from "react";
import styles from "./Header.module.css";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  return (
    <header className={styles.header} data-page={isMainPage ? "main" : "other"}>
      {/* 유틸리티 바 */}
      <div className={styles.utilityBar}>
        <div>
          <span className={styles.utilityItem}>공인인증서 내보내기</span>
          <span className={styles.utilityItem}>지원</span>
          <span className={styles.utilityItem}>화면 크기</span>
          <span className={styles.utilityItem}>Language</span>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className={styles.mainHeader}>
        <div className={styles.logo}>
          <img src="/assets/logo.png" alt="로고" className={styles.logoImage} />
        </div>
        <div className={styles.userMenu}>
          <span className={styles.userMenuItem}>통합검색</span>
          <span className={styles.userMenuItem}>회원가입</span>
          <span className={styles.userMenuItem}>로그인</span>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* 네비게이션 메뉴 */}
      <nav className={styles.navbar}>
        <span className={styles.navItem}>복지서비스</span>
        <span className={styles.navItem}>소통광장</span>
      </nav>

      <hr className={styles.divider02} />
      <Outlet />
    </header>
  );
};

export default Header;
