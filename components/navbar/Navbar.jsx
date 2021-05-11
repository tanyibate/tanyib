import React from "react";
import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <strong>B.Tanyi</strong>
      </div>
      <div className={styles.menu_buttons}>
        <p>About Me</p>
        <p>Portfolio</p>
        <p>Contact Me</p>
      </div>
      <div></div>
    </div>
  );
}
