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

import React, { useState } from "react";
import styles from "./WelfareList.module.css";
import WelfareListHeader from "./WelfareListHeader";
import WelfareBox from "./WelfareBox";

const exampleWelfareItems = Array(24).fill({
  title: "복지 혜택 제목",
  description: "이것은 복지 혜택에 대한 설명입니다."
});

const WelfareList = () => {
  const [layout, setLayout] = useState("grid"); // 'grid' or 'list'

  return (
    <div>
      <WelfareListHeader
        totalItems={exampleWelfareItems.length}
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
        {exampleWelfareItems.map((item, index) => (
          <WelfareBox key={index} item={item} layout={layout} />
        ))}
      </div>
    </div>
  );
};

export default WelfareList;
