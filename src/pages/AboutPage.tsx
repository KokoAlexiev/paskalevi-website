import React from 'react';
import FadeInSection from '../components/FadeInSection';
import '../styles/AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="page-banner">
        <div className="banner-overlay"></div>
        <div className="container">
          <h1 className="page-title">За нас</h1>
        </div>
      </div>
      
      <section className="about-intro-section">
        <div className="container">
          <FadeInSection>
            <h2 className="section-title">ФАКТОР - П ЕООД</h2>
            <div className="about-intro-content">
              <div className="about-intro-text">
                <p className="lead-text">
                  Фирма Паскалеви е специализирана в извънгабаритния и тежкотоварен транспорт из цяла Европа. 
                  Нашият опит и специализирана техника ни позволяват да предлагаме високо качество на обслужване 
                  и безопасен транспорт на извънгабаритни товари.
                </p>
                <p>
                  С повече от 10 години опит в сферата на извънгабаритния транспорт, ние предлагаме надеждни
                  решения за транспортиране на тежки и извънгабаритни товари, включително строителна техника,
                  индустриално оборудване и други специализирани товари.
                </p>
                <p>
                  Нашият екип от професионалисти гарантира безопасен и ефективен транспорт на всички видове 
                  извънгабаритни товари, отговарящ на всички европейски изисквания и стандарти.
                </p>
              </div>
              <div className="about-intro-image">
                <img src="/images/about-image.jpg" alt="Извънгабаритен транспорт Паскалеви" />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
      
      <section className="about-stats-section">
        <div className="container">
          <div className="stats-grid">
            <FadeInSection className="stat-item" delay={100}>
              <div className="stat-number">10+</div>
              <div className="stat-label">Години опит</div>
            </FadeInSection>
            
            <FadeInSection className="stat-item" delay={200}>
              <div className="stat-number">500+</div>
              <div className="stat-label">Успешни превози</div>
            </FadeInSection>
            
            <FadeInSection className="stat-item" delay={300}>
              <div className="stat-number">20+</div>
              <div className="stat-label">Специализирани превозни средства</div>
            </FadeInSection>
            
            <FadeInSection className="stat-item" delay={400}>
              <div className="stat-number">30+</div>
              <div className="stat-label">Държави на доставка</div>
            </FadeInSection>
          </div>
        </div>
      </section>
      
      <section className="about-values-section">
        <div className="container">
          <FadeInSection>
            <h2 className="section-title">Нашите ценности</h2>
          </FadeInSection>
          
          <div className="values-grid">
            <FadeInSection className="value-item" delay={100}>
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                </svg>
              </div>
              <h3>Надеждност</h3>
              <p>Гарантираме сигурност и точност при изпълнението на всеки транспорт, независимо от сложността и размера на товара.</p>
            </FadeInSection>
            
            <FadeInSection className="value-item" delay={200}>
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/>
                </svg>
              </div>
              <h3>Безопасност</h3>
              <p>Безопасността е наш основен приоритет. Ние спазваме всички европейски изисквания и стандарти за безопасност.</p>
            </FadeInSection>
            
            <FadeInSection className="value-item" delay={300}>
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79l-43.9 35.6c-8.1 6.6-18.6 10.2-29.4 10.2l-83.3-.6c-30.5-.2-58.9 15.9-75.8 42l-20.3 31.3C173.8 203.3 160 219.8 160 241.6v29.9c0 20.3 13.1 38.2 32.5 44.6l23.3 7.8c15.7 5.2 25.8 20.1 25.7 36.7l-.1 81.3c0 19 15.4 34.4 34.4 34.4c18.9 0 34.4-15.5 34.4-34.4l.1-80.1c0-32-20.8-60.1-51.5-69.5c-4.3-1.3-8.3-3.5-11.7-6.5l-13.6-12c-14.5-12.9-16.5-35.4-4.6-51.1c13.9-18.6 39.6-22.6 58.4-9.1l37.4 26.9c14.8 10.6 33.2 13 50 6.6c23.1-8.7 37.6-31.3 37.6-55.9V148c0-29-22.6-53.5-51.6-55.9c-16.2-1.4-30.4 10.2-33.4 26.3c-1.7 9.7-4.3 20.3-8.6 30.7z"/>
                </svg>
              </div>
              <h3>Професионализъм</h3>
              <p>Нашият екип от висококвалифицирани специалисти гарантира професионален подход към всеки проект.</p>
            </FadeInSection>
            
            <FadeInSection className="value-item" delay={400}>
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                </svg>
              </div>
              <h3>Точност</h3>
              <p>Спазваме стриктно договорените срокове и изисквания, осигурявайки навременна доставка на всеки товар.</p>
            </FadeInSection>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <FadeInSection>
            <h2>Готови ли сте да транспортирате своя товар?</h2>
            <p>Свържете се с нас за безплатна консултация и оферта</p>
            <a href="/contact" className="cta-button">Свържете се с нас</a>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 