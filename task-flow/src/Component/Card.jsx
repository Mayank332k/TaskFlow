import { useState, useContext, useEffect, useRef } from "react";
import { TaskContext } from "../Store/Data-Context";
import styles from "./Card.module.css";

function Card({ task }) {
  const { dispatch } = useContext(TaskContext);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const formatStatus = (statusString) => {
    if (!statusString) return "";
    return statusString.replace(/_/g, " ").toLowerCase();
  };

  return (
    <div className={styles.card}>
      <div className={styles.menuWrapper} ref={menuRef}>
        <button
          className={`${styles.menuBtn} ${isOpen ? styles.menuBtnActive : ""}`}
          onClick={toggleMenu}
          aria-label="Options"
        >
          {/* 3 Dots Icon */}
          <svg width="18" height="4" viewBox="0 0 18 4" fill="none">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
            <circle cx="9" cy="2" r="2" fill="currentColor" />
            <circle cx="16" cy="2" r="2" fill="currentColor" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div
          className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ""}`}
        >
          <button
            className={`${styles.menuItem} ${styles.completeOption}`}
            onClick={() => {
              dispatch({
                type: "MARK_COMPLETED",
                payload: { id: task.id },
              });
              setIsOpen(false);
            }}
          >
            Completed
          </button>

          <button
            className={`${styles.menuItem} ${styles.delete}`}
            onClick={() => {
              setIsOpen(false);
              dispatch({
                type: "DELETE_TASK",
                payload: {
                  id: task.id,
                },
              });
            }}
          >
            Delete
          </button>
        </div>
      </div>

      {/* --- Card Body --- */}
      <div className={styles.body}>
        <p className={styles.text}>{task.content || task.description}</p>
      </div>

      {/* ---> Card Footer */}
      <div className={styles.footer}>
        <span className={styles.statusPill} data-status={task.status}>
          {formatStatus(task.status)}
        </span>
      </div>
    </div>
  );
}

export default Card;
