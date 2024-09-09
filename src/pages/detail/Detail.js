import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../../components/common/button/Button";
import styles from "./Detail.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/common/sidebar/Sidebar";

const Detail = () => {
  const { id } = useParams(); // URL에서 ID 파라미터 받아오기
  const [data, setData] = useState(null);
  const [activeTab1, setActiveTab1] = useState("지원 대상");
  const [activeTab2, setActiveTab2] = useState("주요 내용");

  useEffect(() => {
    axios
      .get(`https://your-backend-domain.com/detail/${id}`)
      .then((response) => {
        setData(response.data); // 데이터 받아오기
      })
      .catch((error) => console.error("Error fetching details:", error));
  }, [id]);

  const handleTabClick1 = (tab) => {
    setActiveTab1(tab);
  };

  const handleTabClick2 = (tab) => {
    setActiveTab2(tab);
  };

  const handleButtonClick = () => {
    alert("테스트");
  };

  if (!data) {
    return <div>Loading...</div>; // 데이터를 불러오는 동안 로딩 메시지 표시
  }

  const sidebarItems = [
    { name: "상세정보", active: true },
    { name: "생애주기", active: false },
  ];

  return (
    <>
      <Header className={styles.headerTitle} />
      <div className={styles.layoutContainer}>
        <div className={styles.sidebarWrapper}>
          <Sidebar
            title="복지서비스 상세"
            items={sidebarItems}
            onItemClick={() => {}}
          />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.headerContent}>
            <h3>{data.title}</h3>
            <p>{data.subtitle}</p> {/* 필요한 데이터 필드로 대체 */}
          </div>
          <div className={styles.infoBox}>
            <h1>{data.serviceName}</h1> {/* 필요한 데이터 필드로 대체 */}
            <p>{data.serviceSummary}</p> {/* 필요한 데이터 필드로 대체 */}
            <p>{data.department}</p> {/* 필요한 데이터 필드로 대체 */}
            <table className={styles.newTable}>
              <thead>
                <tr>
                  <th
                    onClick={() => handleTabClick1("지원 대상")}
                    className={
                      activeTab1 === "지원 대상" ? styles.activeTab : ""
                    }
                  >
                    지원 대상
                  </th>
                  <th
                    onClick={() => handleTabClick1("서비스 내용")}
                    className={
                      activeTab1 === "서비스 내용" ? styles.activeTab : ""
                    }
                  >
                    서비스 내용
                  </th>
                  <th
                    onClick={() => handleTabClick1("신청 방법")}
                    className={
                      activeTab1 === "신청 방법" ? styles.activeTab : ""
                    }
                  >
                    신청 방법
                  </th>
                  <th
                    onClick={() => handleTabClick1("추가 정보")}
                    className={
                      activeTab1 === "추가 정보" ? styles.activeTab : ""
                    }
                  >
                    추가 정보
                  </th>
                </tr>
              </thead>
              <tbody>
                {activeTab1 === "지원 대상" && (
                  <tr>
                    <td colSpan="4">{data.eligibility}</td>{" "}
                    {/* 필요한 데이터 필드로 대체 */}
                  </tr>
                )}
                {activeTab1 === "서비스 내용" && (
                  <tr>
                    <td colSpan="4">{data.serviceContents}</td>{" "}
                    {/* 필요한 데이터 필드로 대체 */}
                  </tr>
                )}
                {activeTab1 === "신청 방법" && (
                  <tr>
                    <td colSpan="4">{data.applicationMethod}</td>{" "}
                    {/* 필요한 데이터 필드로 대체 */}
                  </tr>
                )}
                {activeTab1 === "추가 정보" && (
                  <tr>
                    <td colSpan="4">{data.additionalInfo}</td>{" "}
                    {/* 필요한 데이터 필드로 대체 */}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className={styles.buttonWrapper}>
            <Button onClick={handleButtonClick} className={styles.largeButton}>
              신청하기
            </Button>
          </div>
          <div className={styles.infoBox}>
            <table className={styles.infoTable}>
              <thead>
                <tr>
                  <th
                    onClick={() => handleTabClick2("주요 내용")}
                    className={
                      activeTab2 === "주요 내용" ? styles.activeTab : ""
                    }
                  >
                    주요 내용
                  </th>
                  <th
                    onClick={() => handleTabClick2("진행 상황")}
                    className={
                      activeTab2 === "진행 상황" ? styles.activeTab : ""
                    }
                  >
                    진행 상황
                  </th>
                  <th
                    onClick={() => handleTabClick2("지원 내용")}
                    className={
                      activeTab2 === "지원 내용" ? styles.activeTab : ""
                    }
                  >
                    지원 내용
                  </th>
                  <th
                    onClick={() => handleTabClick2("신청 방법")}
                    className={
                      activeTab2 === "신청 방법" ? styles.activeTab : ""
                    }
                  >
                    신청 방법
                  </th>
                  <th
                    onClick={() => handleTabClick2("접수 문의")}
                    className={
                      activeTab2 === "접수 문의" ? styles.activeTab : ""
                    }
                  >
                    접수 문의
                  </th>
                </tr>
              </thead>
              <tbody>
                {activeTab2 === "주요 내용" && (
                  <tr>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>
                        {data.mainContent}
                      </span>{" "}
                      {/* 필요한 데이터 필드로 대체 */}
                      <span className={styles.subText}>상시신청</span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>전화문의</span>
                      <span className={styles.subText}>
                        {data.contactNumber}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>신청방법</span>
                      <span className={styles.subText}>
                        {data.applicationMethod}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>접수기관</span>
                      <span className={styles.subText}>
                        {data.registrationInstitution}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>지원형태</span>
                      <span className={styles.subText}>{data.supportType}</span>
                    </td>
                  </tr>
                )}
                {activeTab2 === "진행 상황" && (
                  <tr>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>
                        {data.mainContent}
                      </span>
                      <span className={styles.subText}>상시신청</span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>전화문의</span>
                      <span className={styles.subText}>
                        {data.contactNumber}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>신청방법</span>
                      <span className={styles.subText}>
                        {data.applicationMethod}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>접수기관</span>
                      <span className={styles.subText}>
                        {data.registrationInstitution}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>지원형태</span>
                      <span className={styles.subText}>{data.supportType}</span>
                    </td>
                  </tr>
                )}
                {activeTab2 === "지원 내용" && (
                  <tr>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>
                        {data.mainContent}
                      </span>
                      <span className={styles.subText}>상시신청</span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>전화문의</span>
                      <span className={styles.subText}>
                        {data.contactNumber}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>신청방법</span>
                      <span className={styles.subText}>
                        {data.applicationMethod}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>접수기관</span>
                      <span className={styles.subText}>
                        {data.registrationInstitution}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>지원형태</span>
                      <span className={styles.subText}>{data.supportType}</span>
                    </td>
                  </tr>
                )}
                {activeTab2 === "신청 방법" && (
                  <tr>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>
                        {data.mainContent}
                      </span>
                      <span className={styles.subText}>상시신청</span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>전화문의</span>
                      <span className={styles.subText}>
                        {data.contactNumber}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>신청방법</span>
                      <span className={styles.subText}>
                        {data.applicationMethod}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>접수기관</span>
                      <span className={styles.subText}>
                        {data.registrationInstitution}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>지원형태</span>
                      <span className={styles.subText}>{data.supportType}</span>
                    </td>
                  </tr>
                )}
                {activeTab2 === "접수 문의" && (
                  <tr>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>
                        {data.mainContent}
                      </span>
                      <span className={styles.subText}>상시신청</span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>전화문의</span>
                      <span className={styles.subText}>
                        {data.contactNumber}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>신청방법</span>
                      <span className={styles.subText}>
                        {data.applicationMethod}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>접수기관</span>
                      <span className={styles.subText}>
                        {data.registrationInstitution}
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>지원형태</span>
                      <span className={styles.subText}>{data.supportType}</span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p>소관기관명 {data.departmentName}</p>{" "}
          {/* 필요한 데이터 필드로 대체 */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
