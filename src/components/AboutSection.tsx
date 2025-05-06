import React from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from './FadeInSection';
import '../styles/AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <FadeInSection className="about-image-container" rootMargin="-100px">
            <div className="about-image-wrapper">
              <img src="/images/about-image.jpg" alt="Извънгабаритен транспорт" className="about-image" />
              <div className="about-image-accent"></div>
            </div>
            
            <div className="about-experience">
              <span className="experience-number">10+</span>
              <span className="experience-text">години опит</span>
            </div>
          </FadeInSection>
          
          <FadeInSection className="about-content" rootMargin="-100px">
            <h2 className="section-title">ФАКТОР - П ЕООД</h2>
            <h3 className="about-subtitle">Извънгабаритен и тежкотоварен транспорт</h3>
            
            <p className="about-description">
              Фирма Паскалеви е специализирана в извънгабаритния и тежкотоварен транспорт из цяла Европа. 
              Нашият опит и специализирана техника ни позволяват да предлагаме високо качество на обслужване 
              и безопасен транспорт на извънгабаритни товари.
            </p>
            
            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                  </svg>
                </div>
                <p>Модерен автопарк със специализирани превозни средства</p>
              </div>
              
              <div className="about-feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                  </svg>
                </div>
                <p>Професионален екип с богат опит в транспортния сектор</p>
              </div>
              
              <div className="about-feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                  </svg>
                </div>
                <p>Висока надеждност и отговорност към всеки проект</p>
              </div>
            </div>
            
            <Link to="/about" className="cta-button about-button">
              За нас
            </Link>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
