import styles from "./Sidebar.module.css";

function Sidebar({ title, items, onItemClick }) {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${styles.listItem} ${item.active && styles.active}`}
            onClick={() => onItemClick(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
