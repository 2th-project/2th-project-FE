import Sidebar from "../../components/common/sidebar/Sidebar";
import Board from "./Board";
import styles from "./Community.module.css";

function Community(props) {
  const sidebarItems = [
    { name: "자유게시판", active: true },
    { name: "FAQ(추가되었을 경우 예제)", active: false },
  ];

  return (
    <div className={styles.community}>
      <Sidebar title="소통광장" items={sidebarItems} />
      <Board />
    </div>
  );
}

export default Community;
