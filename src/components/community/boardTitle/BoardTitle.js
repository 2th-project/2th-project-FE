import styles from "./BoardTitle.module.css";

function Title({ text }) {
  return <div className={styles.title}>{text}</div>;
}

export default Title;
