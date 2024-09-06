import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.fLogo}>
          <img
            src="/assets/logo.png"
            className={styles.logo}
            alt="대한민국정부"
          />
          <span className={styles.logoText}>복지 24</span>
        </div>
        <div className={styles.fCnt}>
          <div className={styles.fInfo}>
            <p className={styles.infoAddr}>
              (00000) 서울특별시 강남구 도곡로 1길 10, 프린스타워 9층
            </p>
            <ul className={styles.infoCs}>
              <li>
                <strong className={styles.strong}>대표전화 0000-0000</strong>
                <span className={styles.span}>(유료, 평일 09시~18시)</span>
              </li>
              <li>
                <strong className={styles.strong}>
                  해외이용 00-00-000-0000
                </strong>
                <span className={styles.span}>(유료, 평일 09시~18시)</span>
              </li>
            </ul>
          </div>

          <div className={styles.fLink}>
            <div className={styles.linkGo}>
              <a className={styles.linkLoad}>찾아오시는 길</a>
              <a className={styles.linkUse}>이용안내</a>
            </div>
            <div className={styles.linkSnsContainer}>
              <img src="/assets/youtube.png" className={styles.linkSns} />
              <img src="/assets/twitter.png" className={styles.linkSns} />
              <img src="/assets/instagram.png" className={styles.linkSns} />
              <img src="/assets/facebook.png" className={styles.linkSns} />
              <img src="/assets/blog.png" className={styles.linkSns} />
            </div>
          </div>
        </div>

        <div className={styles.fBtm}>
          <div className={styles.fBtmText}>
            <div className={styles.fMenu}>
              <a href="#" className={styles.point}>
                개인정보처리방침
              </a>
              <a href="#">저작권 정책</a>
              <a href="#">웹 접근성 품질인증 마크 획득</a>
            </div>
            <p className={styles.fCopy}>© 2nd Project. All rights reserved.</p>
          </div>
          <div className={styles.fBtmBan}>
            <span className={styles.banTxt}>
              이 사이트는 웹 개발 팀프로젝트의 일환으로 복지서비스를 쉽고 편하게
              제공합니다.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
