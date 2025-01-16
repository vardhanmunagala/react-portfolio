import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsContainer}> {/* New wrapper div for the border */}
        <div className={styles.skillsMarquee}>
          <div className={styles.skillsMarqueeContent}>
            {skills.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
            {/* Repeat skills for seamless scrolling */}
            {skills.map((skill, id) => (
              <div key={`duplicate-${id}`} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
