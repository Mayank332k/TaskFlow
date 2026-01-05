import { useState } from "react";
import styles from "./Dashboard.module.css";
import Card from "./Card.jsx";
import { useTasks } from "../Store/Data-Context";
const Icons = {
  check: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  clock: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  alert: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  ),
};

function Dashboard({  setshowAddData }) {
  const { state } = useTasks();
  const [activeTab, setActiveTab] = useState("ALL");

  const data = state.tasks;

  const filteredData = data.filter((task) => {
    if (activeTab === "ALL") return true;
    return task.status === activeTab;
  });

  const tabs = [
    { label: "All", value: "ALL", icon: "clock" },
    { label: "Completed", value: "COMPLETED", icon: "check" },
    { label: "In Progress", value: "IN_PROGRESS", icon: "clock" },
    { label: "Urgent", value: "URGENT", icon: "alert" },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.topBar}>
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`${styles.splitPill} ${
              activeTab === tab.value ? styles.active : ""
            }`}
            onClick={() => {
              setActiveTab(tab.value);
            }}
            title={tab.label}
          >
            {/* Icon Section */}
            <div className={styles.iconSection}>{Icons[tab.icon]}</div>

            <div className={styles.divider}></div>

            <div className={styles.textSection}>{tab.label}</div>
          </div>
        ))}
      </div>
      <div className={styles.cardContainer}>
        {filteredData.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </div>
      <button
        className={styles.fab}
        onClick={() => {
          setshowAddData(true);
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
}

export default Dashboard;
