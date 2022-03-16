import React from "react";
import styles from "./burger-menu-styles.module.scss";

export default function BurgerMenu() {
  return (
    <aside className={styles.container}>
      <nav className={styles.navigation}>
        <a href="">About Me</a>
        <a href="">Portfolio</a>
        <a href=""> Me</a>
      </nav>
    </aside>
  );
}
