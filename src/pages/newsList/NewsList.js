import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import styles from "./NewsList.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchCSV = async () => {
      const response = await fetch("/news.csv");
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      setArticles(results.data);
    };

    fetchCSV();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.newsListContainer}>
        <h1>뉴스리스트</h1>
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
            {articles.map((article) => (
              <tr key={article.id}>
                <td>{article.id}</td>
                <td>{article.title}</td>
                <td>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
                <td>{new Date(article.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Footer />
      </div>
    </>
  );
};

export default NewsList;
