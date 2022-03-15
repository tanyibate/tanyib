import React from "react";
import styles from "./burgermenubutton-styles.module.scss";

export default function BurgerMenuButton({
  triggerBurgerMenu,
  burgerMenuActive,
}) {
  return (
    <div className={styles.container}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
