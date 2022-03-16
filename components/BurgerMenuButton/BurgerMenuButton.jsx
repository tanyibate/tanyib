import React from "react";
import styles from "./burgermenubutton-styles.module.scss";
import classNames from "classnames";

export default function BurgerMenuButton({
  triggerBurgerMenu,
  burgerMenuActive,
}) {
  const classes = classNames({
    [styles.focus]: burgerMenuActive,
    [styles.container]: true,
  });
  return (
    <button
      className={classes}
      onClick={triggerBurgerMenu}
      onBlur={triggerBurgerMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
