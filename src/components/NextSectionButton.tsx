import React from 'react';
import '../styles/NavigationGuide.css';

interface NextSectionButtonProps {
  targetId: string;
  label?: string;
}

const NextSectionButton: React.FC<NextSectionButtonProps> = ({ targetId, label }) => {
  const scrollToTarget = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="next-section-button" onClick={scrollToTarget}>
      {label && <span className="next-section-label">{label}</span>}
      <div className="arrow"></div>
      <div className="arrow"></div>
    </div>
  );
};

export default NextSectionButton; 