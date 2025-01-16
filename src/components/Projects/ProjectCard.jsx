import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`${styles.cardContainer} ${expanded ? styles.expanded : ""}`}>
      <div className={styles.container} onClick={handleToggle}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
      </div>

      {expanded && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <button className={styles.closeButton} onClick={handleToggle}>×</button>
            <h3 className={styles.overlayTitle}>{title}</h3>
            <p className={styles.description}>{description}</p>

            {/* Display skills used in the project */}
            {skills && skills.length > 0 && (
              <div className={styles.skillsContainer}>
                <h4>Skills Used:</h4>
                <ul className={styles.skillsList}>
                  {skills.map((skill, index) => (
                    <li key={index} className={styles.skillItem}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}

            {source && (
              <a href={source} className={styles.sourceLink} target="_blank" rel="noopener noreferrer">View Source</a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
