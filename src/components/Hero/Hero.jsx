import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [professionIndex, setProfessionIndex] = useState(0);
  const professions = ["Software Engineer", "Web Developer", "Data Engineer"];
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
        <h1 className={styles.title}>NAGA GOVARDHAN MUNAGALA</h1>
        <p className={styles.description}>
          I'm a <span className={styles.typing}>{typedText}</span>
        </p>
        <div className={styles.buttons}>
          <a 
            href="https://drive.google.com/file/d/1Kfw6_fCxa0XdGDcX6kgGQ0b0kSn3UcHP/view?usp=sharing" 
            className={styles.resumeBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/myhero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}