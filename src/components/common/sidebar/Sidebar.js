import styles from "./Sidebar.module.css";

function Sidebar({ title, items }) {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li
            // key 값으로는 index가 좋지 않으므로 변경하기!
            key={index}
            className={`${styles.listItem} ${item.active ? styles.active : ""}`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
