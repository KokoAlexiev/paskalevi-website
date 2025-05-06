import React from 'react';
import FadeInSection from '../components/FadeInSection';
import '../styles/EquipmentPage.css';

interface Equipment {
  id: number;
  title: string;
  description: string;
  image: string;
  specs: string[];
}

const EquipmentPage: React.FC = () => {
  // Dummy equipment data - in a real app, these would come from a database or API
  const equipmentList: Equipment[] = [
    {
      id: 1,
      title: 'Низкорамни полуремаркета',
      description: 'Специализирани низкорамни полуремаркета за транспорт на извънгабаритни товари. Оборудвани с хидравлични рампи и разширяващи се платформи.',
      image: '/images/equipment/equipment1.jpg',
      specs: [
        'Товароносимост: до 100 тона',
        'Дължина: до 25 метра',
        'Хидравлично управление',
        'Възможност за разширяване'
      ]
    },
    {
      id: 2,
      title: 'Модулни транспортни платформи',
      description: 'Модулни платформи, които могат да се комбинират за транспортиране на свръхтежки товари. Идеални за индустриално оборудване и трансформатори.',
      image: '/images/equipment/equipment2.jpg',
      specs: [
        'Товароносимост: до 300 тона',
        'Електронно насочване на осите',
        'Хидравлично окачване',
        'Модулна конструкция'
      ]
    },
    {
      id: 3,
      title: 'Специализирани влекачи',
      description: 'Мощни влекачи, специално проектирани за теглене на свръхтежки и извънгабаритни товари. Оборудвани с всички необходими системи за безопасност.',
      image: '/images/equipment/equipment3.jpg',
      specs: [
        'Мощност: 750 к.с.',
        'Въртящ момент: 3500 Nm',
        'Специализирани хидравлични системи',
        'Всички системи за безопасност'
      ]
    },
    {
      id: 4,
      title: 'Хидравлична система (Jacks)',
      description: 'Специализирана хидравлична система за повдигане и преместване на свръхтежки товари в ограничени пространства.',
      image: '/images/equipment/equipment4.jpg',
      specs: [
        'Товароподемност: до 200 тона',
        'Прецизно хидравлично управление',
        'Възможност за работа в ограничени пространства',
        'Компютърно контролирана система'
      ]
    }
  ];
  
  return (
    <div className="equipment-page">
      <div className="page-banner">
        <div className="page-banner-overlay"></div>
        <div className="container">
          <h1 className="page-title">Оборудване</h1>
        </div>
      </div>
      
      <section className="equipment-intro-section">
        <div className="container">
          <FadeInSection>
            <h2 className="section-title">Нашата специализирана техника</h2>
            <p className="equipment-intro-text">
              Фирма Паскалеви разполага с модерна специализирана техника за транспортиране на 
              извънгабаритни и тежки товари. Нашето оборудване е внимателно подбрано, за 
              да отговори на всички изисквания за безопасен и ефективен транспорт дори на 
              най-сложните товари.
            </p>
          </FadeInSection>
        </div>
      </section>
      
      <section className="equipment-list-section">
        <div className="container">
          {equipmentList.map((equipment, index) => (
            <FadeInSection key={equipment.id} className="equipment-item">
              <div className={`equipment-content ${index % 2 !== 0 ? 'reversed' : ''}`}>
                <div className="equipment-image-container">
                  <img src={equipment.image} alt={equipment.title} className="equipment-image" />
                </div>
                
                <div className="equipment-details">
                  <h3 className="equipment-title">{equipment.title}</h3>
                  <p className="equipment-description">{equipment.description}</p>
                  
                  <div className="equipment-specs">
                    <h4 className="specs-title">Технически характеристики:</h4>
                    <ul className="specs-list">
                      {equipment.specs.map((spec, i) => (
                        <li key={i} className="spec-item">
                          <div className="spec-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                            </svg>
                          </div>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {index < equipmentList.length - 1 && <div className="equipment-divider"></div>}
            </FadeInSection>
          ))}
        </div>
      </section>
      
      <section className="equipment-cta-section">
        <div className="container">
          <FadeInSection className="equipment-cta-container">
            <h2 className="equipment-cta-title">Нуждаете се от специализиран транспорт?</h2>
            <p className="equipment-cta-text">
              Свържете се с нас за оферта или консултация относно транспорта на вашия товар.
            </p>
            <a href="/contact" className="cta-button equipment-cta-button">
              Свържете се с нас
            </a>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default EquipmentPage; 