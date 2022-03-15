import React from "react";
import styles from "./project-card-styles.module.scss";

export default function ProjectCard({
  image,
  imageEndPoint,
  url,
  name,
  description,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <img src={imageEndPoint + image} alt="" />
        <div className={styles.description}></div>
      </div>
    </div>
  );
}
