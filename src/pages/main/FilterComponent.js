import React, { useState } from "react";
import styles from "./FilterComponent.module.css";

const FilterComponent = () => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOptions3, setSelectedOptions3] = useState([]);

  const options1 = ["Option 1-1", "Option 1-2", "Option 1-3"];
  const options2 = ["Option 2-1", "Option 2-2", "Option 2-3"];
  const options3 = ["Option 3-1", "Option 3-2", "Option 3-3"];

  const handleSelect1 = (event) => setSelectedOption1(event.target.value);
  const handleSelect2 = (event) => setSelectedOption2(event.target.value);
  const handleSelect3 = (event) => {
    const value = event.target.value;
    if (!selectedOptions3.includes(value)) {
      setSelectedOptions3([...selectedOptions3, value]);
    }
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions3(selectedOptions3.filter((item) => item !== option));
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.selectContainer}>
        <label>
          사용자 구분
          <select onChange={handleSelect1} value={selectedOption1}>
            <option value="">선택하세요</option>
            {options1.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          신청 방법
          <select onChange={handleSelect2} value={selectedOption2}>
            <option value="">선택하세요</option>
            {options2.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          지원 대상
          <select onChange={handleSelect3} value="">
            <option value="">여러 항목 선택</option>
            {options3.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <hr className={styles.divide} />

      <div className={styles.selectedOptions}>
        <p>선택된 필터({selectedOptions3.length}):</p>
        {selectedOptions3.map((option) => (
          <div key={option} className={styles.selectedOption}>
            {option}{" "}
            <button onClick={() => handleRemoveOption(option)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
