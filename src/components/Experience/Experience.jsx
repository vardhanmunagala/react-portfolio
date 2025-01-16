import React, { useState } from "react";
import styles from "./Experience.module.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track the currently expanded timeline element
  const workIconStyles = { background: "#ffff", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center" };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the expanded state
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <VerticalTimeline>
        {history.map((historyItem, id) => (
          <VerticalTimelineElement
            key={id}
            date={<span className={styles.date}>{`${historyItem.startDate} - ${historyItem.endDate}`}</span>}
            iconStyle={workIconStyles}
            icon={<img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.organisation} Logo`} className={styles.icon} />}
            className={styles.verticalTimelineElement}
          >
            {/* Use a single heading with different styles */}
            <div 
              className={styles.verticalTimelineElementTitle} 
              onClick={() => toggleExpand(id)} // Toggle on title click
              role="button" // Improve accessibility
              tabIndex={0} // Make title focusable
              onKeyPress={(e) => { if (e.key === 'Enter') toggleExpand(id); }} // Handle Enter key
            >
              
              <h3 className={styles.orgName}>{historyItem.organisation}</h3>
              <h2 className={styles.jobTitle}>{historyItem.role}</h2>
            </div>

            {expandedIndex === id && ( // Show details if the current element is expanded
              <ul className={styles.experienceDetails}>
                {historyItem.experiences.map((experience, expId) => (
                  
                  <p key={expId}>{experience}</p>
                ))}
              </ul>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
