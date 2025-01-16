import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  const [professionIndex, setProfessionIndex] = useState(0);
  const professions = ["SOFTWARE ENGINEER", "WEB DEVELOPER", "DATA ENGINEER"];
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentProfession = professions[professionIndex];
      if (typingIndex < currentProfession.length) {
        setTypedText(currentProfession.substring(0, typingIndex + 1));
        setTypingIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setTypedText("");
          setTypingIndex(0);
          setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
        }, 1500);
      }
    }, 60);

    return () => clearInterval(intervalId);
  }, [professionIndex, typingIndex, professions]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* Icon above the name */}
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={faLaptop} size="4x" />
        </div>
        <h1 className={styles.title}>NAGA GOVARDHAN MUNAGALA</h1>
        <p className={styles.description}>
          <span className={styles.typing}>
            {typedText || "DATA ENGINEER"} {/* Placeholder text */}
          </span>
        </p>
        
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
