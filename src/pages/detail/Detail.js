import React, { useState } from "react";
import Button from "../../components/common/button/Button";
import styles from "./Detail.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/common/sidebar/Sidebar";

function Detail() {
  const [activeTab1, setActiveTab1] = useState("지원 대상");
  const [activeTab2, setActiveTab2] = useState("주요 내용");

  const handleTabClick1 = (tab) => {
    setActiveTab1(tab);
  };

  const handleTabClick2 = (tab) => {
    setActiveTab2(tab);
  };

  const handleButtonClick = () => {
    alert("테스트");
  };

  const sidebarItems = [
    { name: "Item 1", active: true },
    { name: "Item 2", active: false },
    { name: "Item 3", active: false },
  ];

  return (
    <>
      <Header className={styles.headerTitle} />
      <div className={styles.layoutContainer}>
        <Sidebar
          title="Sidebar Title"
          items={sidebarItems}
          onItemClick={() => {}}
        />
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <h3>복지서비스 상세</h3>
            <p>내 상황에 맞는 다양한 복지 서비스를 찾을 수 있습니다</p>
          </div>

          <div className={styles.infoBox}>
            <h1>서비스명</h1>
            <p>서비스 목적 요약</p>
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
                    <td colSpan="4">지원 대상에 대한 설명입니다.</td>
                  </tr>
                )}
                {activeTab1 === "서비스 내용" && (
                  <tr>
                    <td colSpan="4">서비스 내용 설명입니다.</td>
                  </tr>
                )}
                {activeTab1 === "신청 방법" && (
                  <tr>
                    <td colSpan="4">신청 방법에 대한 설명입니다.</td>
                  </tr>
                )}
                {activeTab1 === "추가 정보" && (
                  <tr>
                    <td colSpan="4">추가 정보에 대한 설명입니다.</td>
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
                      <span className={styles.mainText}>신청기관</span>
                      <span className={styles.subText}>상시신청</span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>전화문의</span>
                      <span className={styles.subText}>
                        고용노동부 고객상담센터 (1350)
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>신청방법</span>
                      <span className={styles.subText}>
                        가까운 고용센터를 방문하거나 고용 24를 통해 신청
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>접수기관</span>
                      <span className={styles.subText}>
                        고용노동부 각 지역 관할 고용센터 및 고객상담센터
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>지원형태</span>
                      <span className={styles.subText}>서비스(일자리)</span>
                    </td>
                  </tr>
                )}
                {activeTab2 === "진행 상황" && (
                  <tr>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>신청기관</span>
                      <span className={styles.subText}>상시신청</span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>전화문의</span>
                      <span className={styles.subText}>
                        고용노동부 고객상담센터 (1350)
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>신청방법</span>
                      <span className={styles.subText}>
                        가까운 고용센터를 방문하거나 고용 24를 통해 신청
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>접수기관</span>
                      <span className={styles.subText}>
                        고용노동부 각 지역 관할 고용센터 및 고객상담센터
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>지원형태</span>
                      <span className={styles.subText}>서비스(일자리)</span>
                    </td>
                  </tr>
                )}
                {activeTab2 === "지원 내용" && (
                  <tr>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>신청기관</span>
                      <span className={styles.subText}>상시신청</span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>전화문의</span>
                      <span className={styles.subText}>
                        고용노동부 고객상담센터 (1350)
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>신청방법</span>
                      <span className={styles.subText}>
                        가까운 고용센터를 방문하거나 고용 24를 통해 신청
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>접수기관</span>
                      <span className={styles.subText}>
                        고용노동부 각 지역 관할 고용센터 및 고객상담센터
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>지원형태</span>
                      <span className={styles.subText}>서비스(일자리)</span>
                    </td>
                  </tr>
                )}
                {activeTab2 === "신청 방법" && (
                  <tr>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>신청기관</span>
                      <span className={styles.subText}>상시신청</span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>전화문의</span>
                      <span className={styles.subText}>
                        고용노동부 고객상담센터 (1350)
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>신청방법</span>
                      <span className={styles.subText}>
                        가까운 고용센터를 방문하거나 고용 24를 통해 신청
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>접수기관</span>
                      <span className={styles.subText}>
                        고용노동부 각 지역 관할 고용센터 및 고객상담센터
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>지원형태</span>
                      <span className={styles.subText}>서비스(일자리)</span>
                    </td>
                  </tr>
                )}
                {activeTab2 === "접수 문의" && (
                  <tr>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>신청기관</span>
                      <span className={styles.subText}>상시신청</span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>전화문의</span>
                      <span className={styles.subText}>
                        고용노동부 고객상담센터 (1350)
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>신청방법</span>
                      <span className={styles.subText}>
                        가까운 고용센터를 방문하거나 고용 24를 통해 신청
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>접수기관</span>
                      <span className={styles.subText}>
                        고용노동부 각 지역 관할 고용센터 및 고객상담센터
                      </span>
                    </td>
                    <td className={styles.infoCell}>
                      <span className={styles.mainText}>지원형태</span>
                      <span className={styles.subText}>서비스(일자리)</span>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* 푸터와의 간격을 유지하기 위해 빈 줄 추가 */}
      <Footer />
    </>
  );
}

export default Detail;
