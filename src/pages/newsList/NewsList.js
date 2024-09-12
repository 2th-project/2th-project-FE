import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import styles from "./NewsList.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Pagination from "../../components/common/pagination/Pagination"; // Import existing Pagination component

const PAGE_SIZE = 50; // Set number of articles per page

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      }
    };

    fetchCSV();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title &&
      article.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Calculate the current articles to display based on pagination
  const indexOfLastArticle = currentPage * PAGE_SIZE;
  const indexOfFirstArticle = indexOfLastArticle - PAGE_SIZE;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );

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
        <Pagination
          totalPosts={filteredArticles.length}
          postsPerPage={PAGE_SIZE}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Footer />
    </>
  );
};

export default NewsList;
