import React from "react";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <h2 className={styles.title}>Education</h2>
      <div className={styles.grid}>
        <div className={styles.educationItem}>
          <img
            src={getImageUrl("education/ucf.png")}
            alt="University icon"
            className={styles.educationIcon}
          />
          <div className={styles.educationItemText}>
            <h3>University of Central Florida</h3>
            <p>MS in Computer Science</p>
            <p>Aug, 2022 - May, 2024</p>
            <p>
              Advanced Data Structures, Machine Learning, Computer Vision, Data Analytics
            </p>
          </div>
        </div>
        <div className={styles.educationItem}>
          <img
            src={getImageUrl("education/rvr.png")}
            alt="College icon"
            className={styles.educationIcon}
          />
          <div className={styles.educationItemText}>
            <h3>R.V.R. & J.C. College of Engineering</h3>
            <p>B.Tech in Computer Science</p>
            <p>July, 2017 - July, 2021</p>
            <p>
              Programming, Databases, Computer Networks, Data Structures & Algorithms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};