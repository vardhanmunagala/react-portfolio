import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("about/About_Pic.jpg")}
            alt="Me"
            className={styles.aboutImage}
          />
        </div>
        <div className={styles.textContainer}>
          <p>
            Hey there! I'm Naga Govardhan Munagala, a digital enthusiast with a passion for all things creative. 
            I love diving into new projects, exploring different ideas, and pushing boundaries in the digital world. 
            From designing to storytelling, I'm always excited to tackle new challenges and bring fresh ideas to life. 
            When I'm not glued to my screen, you can find me outdoors, soaking up inspiration from nature or cooking up a storm in 
            the kitchen. Let's connect and create something awesome together!
          </p>
        </div>
      </div>
    </section>
  );
};