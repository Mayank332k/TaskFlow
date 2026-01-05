import React from 'react';
import styles from './NoData.module.css';

const NoData = () => {
  // Define common SVG props for consistent gray outline style
  const svgCommonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    xmlns: "http://www.w3.org/2000/svg"
  };

  return (
    <div className={styles.container}>
      {/* Main Illustration SVG */}
      <svg width="400" height="300" viewBox="0 0 400 300" className={styles.mainIllustration} {...svgCommonProps}>
        {/* Desk line */}
        <path d="M50 180 H350" strokeWidth="1" />

        {/* Person & Shirt */}
        <path d="M130 180 C130 150, 160 100, 200 100 C240 100, 270 150, 270 180" />
        <path d="M200 100 C190 80, 190 60, 200 40 C210 60, 230 70, 240 60 C230 50, 230 30, 220 20 C210 30, 190 30, 180 20 C170 30, 150 30, 160 50 C170 60, 170 80, 160 90" strokeWidth="1" /> {/* Hair approximation */}
        <path d="M180 70 Q200 80 220 70" strokeWidth="1" /> {/* Face outline approx */}
        {/* Shirt Stripes (simplified) */}
        <path d="M140 160 H260" strokeWidth="1"/>
        <path d="M145 145 H255" strokeWidth="1"/>
        <path d="M155 130 H245" strokeWidth="1"/>
        <path d="M165 115 H235" strokeWidth="1"/>

        {/* Book */}
        <path d="M110 195 Q200 210 290 195 V180 Q200 195 110 180 Z" fill="white" />
        <path d="M200 188 V202" />
        {/* Lines in book */}
        <path d="M130 190 H180" strokeWidth="1" opacity="0.6"/>
        <path d="M220 190 H270" strokeWidth="1" opacity="0.6"/>

        {/* Magnifying Glass */}
        <circle cx="250" cy="130" r="30" strokeWidth="2" fill="white"/>
        <path d="M272 152 L290 170" strokeWidth="3" />

        {/* Thought bubbles and Question marks */}
        <path d="M300 60 Q320 40, 340 60 Q360 60, 360 80 Q360 100, 340 100 Q320 120, 300 100 Q280 100, 280 80 Q280 60, 300 60" strokeWidth="1" />
        <path d="M80 100 Q100 80, 120 100 Q140 100, 140 120 Q140 140, 120 140 Q100 160, 80 140 Q60 140, 60 120 Q60 100, 80 100" strokeWidth="1" />

        <text x="100" y="60" fontSize="40" strokeWidth="1" fill="none">?</text>
        <text x="330" y="150" fontSize="30" strokeWidth="1" fill="none">?</text>
        <text x="280" y="40" fontSize="20" strokeWidth="1" fill="none">?</text>
      </svg>

      {/* Message Section */}
      <div className={styles.messageContainer}>
        {/* Notebook Icon SVG */}
        <svg width="40" height="46" viewBox="0 0 24 24" className={styles.icon} {...svgCommonProps}>
          <path d="M16 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V6L16 2Z" />
          <path d="M16 2V6H20" />
          <line x1="8" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="16" y2="14" />
          <line x1="8" y1="18" x2="12" y2="18" />
          {/* Spiral top things */}
          <path d="M6 2V4" strokeWidth="2"/>
          <path d="M10 2V4" strokeWidth="2"/>
          <path d="M14 2V4" strokeWidth="2"/>
        </svg>

        <div className={styles.textBlock}>
          <h3 className={styles.title}>No Tasks Found.</h3>
          <p className={styles.subtitle}>Add to Diary?</p>
        </div>
      </div>
    </div>
  );
};

export default NoData;