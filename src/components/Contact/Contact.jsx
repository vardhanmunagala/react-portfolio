import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <h2 className={styles.title}>Let's Connect!</h2>
      <p className={styles.subtitle}>Reach out for collaboration or just a chat.</p>
      <div className={styles.buttonContainer}>
        <a className={styles.button} href="mailto:vardhan.munagala15@gmail.com">
          <img src={getImageUrl("contact/gmail.png")} alt="Email icon" />
          Email
        </a>
        <a className={styles.button} href="https://www.linkedin.com/in/govardhan15/">
          <img src={getImageUrl("contact/linkedin.png")} alt="LinkedIn icon" />
          LinkedIn
        </a>
        <a className={styles.button} href="https://github.com/vardhanmunagala">
          <img src={getImageUrl("contact/github.png")} alt="Github icon" />
          GitHub
        </a>
      </div>
    </footer>
  );
};
