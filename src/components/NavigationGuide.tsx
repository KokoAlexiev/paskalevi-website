import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/NavigationGuide.css';

interface Section {
  id: string;
  label: string;
  path: string;
}

const sections: Section[] = [
  { id: 'home', label: 'Начало', path: '/' },
  { id: 'about', label: 'За нас', path: '/about' },
  { id: 'gallery', label: 'Галерия', path: '/gallery' },
  { id: 'equipment', label: 'Оборудване', path: '/equipment' },
  { id: 'contact', label: 'Контакти', path: '/contact' },
];

const NavigationGuide: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Determine active section based on current path
    const currentPath = location.pathname;
    const currentSection = sections.find(section => section.path === currentPath);
    if (currentSection) {
      setActiveSection(currentSection.id);
    } else {
      setActiveSection('home'); // Default to home if path not found
    }
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (section) {
      navigate(section.path);
    }
  };

  return (
    <div className="navigation-guide">
      <div className="progress-indicator">
        {sections.map(section => (
          <div 
            key={section.id}
            className={`indicator ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => scrollToSection(section.id)}
          >
            <div className="indicator-dot"></div>
            <span className="indicator-label">{section.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationGuide; 