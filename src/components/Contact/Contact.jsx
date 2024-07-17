import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/gmail.png")} alt="Email icon" />
          <a href="mailto:vardhan.munagala15@gmail.com">vardhan.munagala15@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/govardhan15/">linkedin.com/Govardhan</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="Github icon" />
          <a href="https://github.com/vardhanmunagala">github.com/Govardhan</a>
        </li>
      </ul>
    </footer>
  );
};
