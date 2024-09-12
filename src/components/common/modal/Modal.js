import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ message, onClose }) => {
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalMessage}>{message}</div>
        <div className={styles.modalBtnBox}>
          <button className={styles.confirmBtn} onClick={onClose}>
            확인
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
};

export default Modal;
