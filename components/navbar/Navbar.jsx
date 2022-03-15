import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import BurgerMenuButton from "../BurgerMenuButton/BurgerMenuButton";

export default function Navbar() {
  const [offset, setOffset] = useState(0);
  const classes = classNames({
    [styles.darken]: offset > 90,
    [styles.navbar]: true,
  });

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={classes}>
      <div>
        <strong className={styles.logo}>B.Tanyi</strong>
      </div>
      <div className={styles.menu_buttons}>
        <p>About Me</p>
        <p>Portfolio</p>
        <p>Contact Me</p>
      </div>
      <div>
        <BurgerMenuButton />
      </div>
    </div>
  );
}
