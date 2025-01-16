import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(2);

  // Function to update the number of projects per page based on window width
  const updateProjectsPerPage = () => {
    if (window.innerWidth >= 1024) {
      setProjectsPerPage(3); // 3 items for desktop
    } else {
      setProjectsPerPage(2); // 2 items for mobile
    }
  };

  // Set the initial projects per page based on the current window width
  useEffect(() => {
    updateProjectsPerPage(); // Set initial projects per page
    window.addEventListener("resize", updateProjectsPerPage); // Add resize event listener

    return () => {
      window.removeEventListener("resize", updateProjectsPerPage); // Cleanup listener on unmount
    };
  }, []);

  const handleNext = () => {
    if (currentIndex + projectsPerPage < projects.length) {
      setCurrentIndex(currentIndex + projectsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - projectsPerPage >= 0) {
      setCurrentIndex(currentIndex - projectsPerPage);
    }
  };

  const displayedProjects = projects.slice(
    currentIndex,
    currentIndex + projectsPerPage
  );

  return (
    <section className={styles.container} id="projects">
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {displayedProjects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
      <div className={styles.navigation}>
        <button
          className={`${styles.button} ${currentIndex === 0 ? styles.disabled : ""}`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          className={`${styles.button} ${currentIndex + projectsPerPage >= projects.length ? styles.disabled : ""}`}
          onClick={handleNext}
          disabled={currentIndex + projectsPerPage >= projects.length}
        >
          Next
        </button>
      </div>
    </section>
  );
};





/*import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
*/