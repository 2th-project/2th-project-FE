import React, { useState } from "react";
import Button from "../../components/common/button/Button";
import styles from "./Detail.module.css";
import Header from "../../components/Header";

function Detail() {
  const [activeTab, setActiveTab] = useState("지원 대상");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleButtonClick = () => {
    alert("목록");
  };

  return (
    <>
      <Header />

      <div className={styles.container}>
        <h1 className={styles.title}>복지 서비스 상세</h1>
        <div className={styles.infoBox}>
          <p className={styles.description}>카드1 의 복지 "제목"</p>
          <table className={styles.infoTable}>
            <thead>
              <tr>
                <th>기준 연도</th>
                <th>문의처</th>
                <th>지원 기간</th>
                <th>제공 유형</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>연도 데이터</td>
                <td>전화 번호 데이터</td>
                <td>지원기간 데이터</td>
                <td>제공 유형 데이터</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.infoBox}>
          <p className={styles.description}>
            카드1 의 복지 에 대한 가공데이터들
          </p>
          <table className={styles.newTable}>
            <thead>
              <tr>
                <th
                  onClick={() => handleTabClick("지원 대상")}
                  className={activeTab === "지원 대상" ? styles.activeTab : ""}
                >
                  지원 대상
                </th>
                <th
                  onClick={() => handleTabClick("서비스 내용")}
                  className={
                    activeTab === "서비스 내용" ? styles.activeTab : ""
                  }
                >
                  서비스 내용
                </th>
                <th
                  onClick={() => handleTabClick("신청 방법")}
                  className={activeTab === "신청 방법" ? styles.activeTab : ""}
                >
                  신청 방법
                </th>
                <th
                  onClick={() => handleTabClick("추가 정보")}
                  className={activeTab === "추가 정보" ? styles.activeTab : ""}
                >
                  추가 정보
                </th>
              </tr>
            </thead>
            <tbody>
              {activeTab === "지원 대상" && (
                <tr>
                  <td colSpan="4">Default Data Page</td>
                </tr>
              )}
              {activeTab === "서비스 내용" && (
                <tr>
                  <td colSpan="4">서비스 내용 설명</td>
                </tr>
              )}
              {activeTab === "신청 방법" && (
                <tr>
                  <td colSpan="4">신청 방법에 대한 설명</td>
                </tr>
              )}
              {activeTab === "추가 정보" && (
                <tr>
                  <td colSpan="4">추가정보에 대한 설명</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className={styles.buttonWrapper}>
          <Button onClick={handleButtonClick} className={styles.largeButton}>
            목록
          </Button>
        </div>
      </div>
    </>
  );
}

export default Detail;
