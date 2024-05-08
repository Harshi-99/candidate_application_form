import React from "react";
import "./ExperienceSection.css";

const ExperienceSection = ({ minimumExperience }) => {
  return (
    <div className="experience-section">
      {minimumExperience && (
        <>
          <span>Minimum Experience:</span>
          <span>{minimumExperience} years</span>
        </>
      )}
    </div>
  );
};

export default ExperienceSection;
