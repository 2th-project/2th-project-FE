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
          <p className={styles.description}>담당부처/소관기관명</p>
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

        <div className={styles.infoBox}>
          <table className={styles.infoTable}>
            <thead>
              <tr>
                <th>주요 내용</th>
                <th>진행 상황</th>
                <th>지원 내용</th>
                <th>신청 방법</th>
                <th>접수 문의</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        <div className={styles.buttonWrapper}>
          <Button onClick={handleButtonClick} className={styles.largeButton}>
            신청하기
          </Button>
        </div>
      </div>
    </>
  );
}

export default Detail;
