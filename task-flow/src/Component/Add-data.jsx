import { useContext } from "react";
import { TaskContext } from "../Store/Data-Context";
import { useState } from "react";
import styles from "./Add-data.module.css";

// Simple Icons for the component
const Icons = {
  back: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  ),
  next: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  ),
  alert: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  ),
};

const AddData = ({  setshowAddData }) => {
  const [isUrgent, setIsUrgent] = useState(false);
  const [content, setContent] = useState("");
  // for data
  const { dispatch } = useContext(TaskContext); // use to dispatch the data handleing
  return (
    <div className={styles.card}>
      {/* 1. CONTENT AREA (Dominant) */}
      <textarea
        className={styles.textArea}
        placeholder="Text Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {/* 2. FOOTER CONTROLS */}
      <div className={styles.footerRow}>
        {/* Left: Urgent Toggle */}
        <button
          className={`${styles.urgentPill} ${
            isUrgent ? styles.urgentActive : ""
          }`}
          onClick={() => setIsUrgent(!isUrgent)}
        >
          {Icons.alert}
          <span>Urgent</span>
        </button>

        {/* Right: The Split Control (< | >) */}
        <div className={styles.navPill}>
          <button
            className={styles.navBtn}
            title="Cancel / Back"
            onClick={() => setshowAddData(false)}
          >
            {Icons.back}
          </button>

          <div className={styles.divider}></div>

          <button
            className={styles.navBtn}
            title="Save / Next "
            onClick={() => {
              dispatch({
                type: "ADD_TASK",
                payload: {
                  content: content,
                  status: isUrgent ? "URGENT" : "",
                },
              });

              setshowAddData(false);
            }}
          >
            {Icons.next}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddData;
