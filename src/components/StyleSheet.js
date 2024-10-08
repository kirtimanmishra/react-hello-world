import React from "react";
import "./myStyle.css";
import styles from "./myStyle.module.css";

function StyleSheet(props) {
  let className = props.primary ? "primary" : "";

  return (
    <div>
      <h1 className={`${className} font-xl `}>Stylesheet</h1>
      <h1 className={`${styles.primary} ${styles.fontxl} `}>
        Module Stylesheet
      </h1>
    </div>
  );
}

export default StyleSheet;
