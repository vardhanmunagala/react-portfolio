import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`${styles.container} ${expanded ? styles.expanded : ""}`}
      onClick={handleToggle}
    >
      {!expanded && (
        <>
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
          />
          <h3 className={styles.title}>{title}</h3>
          <ul className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              );
            })}
          </ul>
        </>
      )}
      {expanded && <p className={styles.description}>{description}</p>}
    </div>
  );
}