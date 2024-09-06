// import React from "react";
// import styles from "./WelfareList.module.css";

// const exampleWelfareItems = Array(24).fill({
//   title: "복지 혜택 제목",
//   description: "이것은 복지 혜택에 대한 설명입니다.",
// });

// const WelfareList = () => {
//   return (
//     <div className={styles.welfareListContainer}>
//       {exampleWelfareItems.map((item, index) => (
//         <div key={index} className={styles.welfareBox}>
//           <h3 className={styles.title}>{item.title}</h3>
//           <p className={styles.description}>{item.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default WelfareList;

import React, { useState, useEffect } from "react";
import styles from "./WelfareList.module.css";
import WelfareListHeader from "./WelfareListHeader";
import WelfareBox from "./WelfareBox";
import FilterComponent from "./FilterComponent";

const exampleWelfareItems = Array(24).fill({
  title: "복지 혜택 제목",
  description: "이것은 복지 혜택에 대한 설명입니다."
});

const WelfareList = () => {
  const [layout, setLayout] = useState("grid"); // 'grid' or 'list'
  const [filters, setFilters] = useState({
    selectedOption1: "",
    selectedOption2: "",
    selectedOptions3: []
  });
  const [welfareItems, setWelfareItems] = useState([]);

  // 예시 API 호출 함수 (필터 적용)
  const fetchWelfareItems = async (filters) => {
    try {
      // 여기에 필터에 맞는 데이터를 API로부터 가져오는 부분을 작성합니다.
      const response = await fetch("/api/welfare-items", {
        method: "POST",
        body: JSON.stringify(filters),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      setWelfareItems(data);
    } catch (error) {
      console.error("Error fetching welfare items:", error);
    }
  };

  useEffect(() => {
    fetchWelfareItems(filters);
  }, [filters]);

  return (
    <div>
      <FilterComponent onFilterChange={setFilters} />
      <WelfareListHeader
        totalItems={welfareItems.length}
        layout={layout}
        setLayout={setLayout}
      />
      <div
        className={
          layout === "grid"
            ? styles.welfareListContainer
            : styles.welfareListContainerList
        }
      >
        {welfareItems.length > 0 ? (
          welfareItems.map((item, index) => (
            <WelfareBox key={index} item={item} layout={layout} />
          ))
        ) : (
          <p>복지 혜택이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default WelfareList;
