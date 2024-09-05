import { useState } from "react";
import styles from "./Search.module.css";

function Search({ onSearch, className = "" }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("t");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm, searchType);
  };

  return (
    <div className={`${styles.search} ${className}`}>
      <form onSubmit={handleSubmit}>
        <label>검색하기</label>
        <select
          name="type"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="t">제목</option>
          <option value="c">내용</option>
          <option value="w">작성자</option>
          <option value="tc">제목+내용</option>
          <option value="tcw">제목+내용+작성자</option>
        </select>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">검색</button>
      </form>
    </div>
  );
}

export default Search;
