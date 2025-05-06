import React, { useState } from 'react';
import FadeInSection from './FadeInSection';
import '../styles/Services.css';

interface ServiceItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, icon, delay = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <FadeInSection 
      className={`service-card ${isExpanded ? 'expanded' : ''}`}
      rootMargin="-50px"
      delay={delay}
    >
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <button 
        className="details-button"
        onClick={toggleExpand}
      >
        {isExpanded ? 'Скрий детайли' : 'Научи повече'}
      </button>
      
      {isExpanded && (
        <div className="service-details">
          <p>Допълнителна информация за услугата {title.toLowerCase()}. Свържете се с нас за повече детайли и индивидуална оферта, съобразена с вашите нужди.</p>
        </div>
      )}
    </FadeInSection>
  );
};

const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">Услуги</h2>
          <p className="section-subtitle">
            Фирма Паскалеви предлага транспортни услуги из цяла Европа
          </p>
        </FadeInSection>
        
        <div className="services-grid">
          <ServiceItem
            title="Извънгабаритен транспорт"
            description="Транспорт на извънгабаритни товари, тежки машини и съоръжения със специализиран автопарк."
            delay={100}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
              </svg>
            }
          />
          
          <ServiceItem
            title="Специализиран съпровод"
            description="Осигуряваме специализиран съпровод за безопасно транспортиране на извънгабаритни товари."
            delay={200}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/>
              </svg>
            }
          />
          
          <ServiceItem
            title="Транспортни разрешителни"
            description="Съдействие при набавяне на всички необходими разрешителни за извънгабаритни превози."
            delay={300}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z"/>
              </svg>
            }
          />
          
          <ServiceItem
            title="Специализирана повдигаща система"
            description="Разполагаме със специализирана система (Jacks) за повдигане и преместване на тежки товари."
            delay={400}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9L224 380.4c-13.3 4.9-24.9 8.9-33.8 11.8c-11.5 3.8-23.8 .8-32.2-7.7l-30.9-30.9c-8.5-8.5-11.5-20.8-7.7-32.2c3.9-11.8 8.9-27.1 14.6-45.6c-30.5-34.4-57.6-72.9-80.5-113.9c-3.2-5.7-3.1-12.8 .2-18.3s9.3-8.8 15.9-8.8c8.5 0 16.4 4.5 20.7 11.8c32.3 54.7 71.5 102.5 116.5 142.2c4.5-13.5 9.3-28.1 14.6-43.9c.4-1.2 .7-2.4 1-3.7c-40.9-40.7-83.8-75.3-128.8-103.1c-5.5-3.4-9.1-9.4-9.1-16s3.6-12.6 9.1-16c7.7-4.7 17.5-4.7 25.2 0c52.2 32 101.2 73.2 147.7 121.5c18.8-10.3 40-21.1 63.1-30.9c5.5-2.3 11.9-1.9 17.1 1.2s8.6 8.5 9 14.6c.5 8.4-4.7 16.1-12.4 18.8c-28.6 10-55.6 22.4-82.2 37.1c8.3 10.8 16 21.2 23.2 31c11.7-12.6 22.9-26.1 33.7-40.6c4.3-5.8 11.3-8.9 18.3-8.1c5.6 .6 10.3 4.1 12.5 9.2c8.8 20.2 13.6 42.4 13.6 65.4c0 17.9-14.5 32.3-32.3 32.3l-104.5 0c4.7 13.5 8.6 24.6 11.5 32.5c3.8 11.5 .8 23.8-7.7 32.2z"/>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Services; 