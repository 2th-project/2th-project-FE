import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import styles from "./NewsList.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const articlesPerPage = 50;

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch("/news.csv");
        const reader = response.body.getReader();
        const result = await reader.read(); // raw array
        const decoder = new TextDecoder("utf-8");
        const csv = decoder.decode(result.value); // the csv text
        const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
        setArticles(results.data);
      } catch (error) {
        console.error("Error fetching the CSV data:", error);
      } finally {
        setLoading(false); // 데이터 로드 완료
      }
    };

    fetchCSV();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // 검색어 입력 시 첫 페이지로 이동
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title &&
      article.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Calculate the articles to display on the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate page numbers for pagination
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredArticles.length / articlesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.newsListContainer}>
        <h1>뉴스리스트</h1>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchBar}
        />
        <table className={styles.newsTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>제목</th>
              <th>링크</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {currentArticles.map((article) => (
              <tr key={article.id}>
                <td>{article.id}</td>
                <td>{article.title || "N/A"}</td>
                <td>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
                <td>
                  {article.created_at
                    ? new Date(article.created_at).toLocaleDateString()
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.pagination}>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={currentPage === number ? styles.active : ""}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsList;
