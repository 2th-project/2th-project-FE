import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../../components/common/button/Button";
import styles from "./Detail.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/common/sidebar/Sidebar";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // loading 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/test/details/${id}`);
        setData(response.data[0]);
      } catch (error) {
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false); // 데이터 로드 후 loading 상태 false로 변경
      }
    };
    fetchData();
  }, [id]);

  const handleButtonClick = () => {
    window.location.href =
      "https://www.gov.kr/portal/rcvfvrSvc/dtlEx/149200000026";
  };

  return (
    <>
      <Header className={styles.headerTitle} />
      <div className={styles.layoutContainer}>
        <div className={styles.sidebarWrapper}>
          <Sidebar
            title="복지서비스 상세"
            items={[
              { name: "상세정보", active: true },
              { name: "생애주기", active: false },
            ]}
            onItemClick={() => {}}
          />
        </div>
        <div className={styles.mainContent}>
          {loading ? (
            // 최소한의 UI를 로드할 때도 보여줌
            <p>Loading...</p>
          ) : (
            <>
              <div className={styles.headerContent}>
                <h3>서비스명: {data.service_name}</h3>
                <p>서비스 목적 요약: {data.service_purpose_summary}</p>
              </div>
              <div className={styles.infoBox}>
                <h1>{data.service_name}</h1>
                <p>{data.service_purpose_summary}</p>
              </div>
              <div className={styles.buttonWrapper}>
                <Button
                  onClick={handleButtonClick}
                  className={styles.largeButton}
                >
                  신청하기
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
