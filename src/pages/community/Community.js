import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../../components/common/sidebar/Sidebar";
import styles from "./Community.module.css";
import Board from "./../../components/community/Board";

function Community() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(() => {
    // 초기 활성 항목을 URL 경로에 따라 설정
    if (location.pathname.includes("faq")) return "FAQ(추가되었을 경우 예)";
    return "자유게시판";
  });

  const sidebarItems = [
    { name: "자유게시판", active: activeItem === "자유게시판" },
    {
      name: "FAQ(추가되었을 경우 예)",
      active: activeItem === "FAQ(추가되었을 경우 예)",
    },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.name);
    navigate(
      `/community/${item.name === "자유게시판" ? "bulletin-board" : "faq"}`
    );
  };

  return (
    <div className={styles.community}>
      <Sidebar
        title="소통광장"
        items={sidebarItems}
        onItemClick={handleItemClick}
      />
      <div className={styles.board}>
        <Board activeItem={activeItem} />
      </div>
    </div>
  );
}

export default Community;
