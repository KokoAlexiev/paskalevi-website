import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';
import TestimonialSlider from '../components/TestimonialSlider';
import NextSectionButton from '../components/NextSectionButton';
import '../styles/HomePage.css';

const testimonials = [
  {
    content: "Паскалеви ни осигуриха изключително професионален транспорт на тежко индустриално оборудване от Германия до България. Всичко беше перфектно организирано и доставено в срок.",
    author: "Иван Петров",
    company: "Техностил ООД"
  },
  {
    content: "Работим с Паскалеви повече от 5 години за транспорт на извънгабаритни строителни машини. Тяхната надеждност и професионализъм са на много високо ниво.",
    author: "Мария Иванова",
    company: "Строймаш АД"
  },
  {
    content: "Благодаря на екипа на Паскалеви за безпроблемния транспорт на нашите съоръжения. Препоръчвам ги на всички, които се нуждаят от качествен извънгабаритен транспорт.",
    author: "Георги Димитров",
    company: "Индустриал Груп"
  }
];

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <div id="services-section">
        <Services />
        <NextSectionButton targetId="about-section" label="Научете повече за нас" />
      </div>
      
      <div id="about-section">
        <AboutSection />
        <NextSectionButton targetId="testimonials-section" label="Вижте отзивите на нашите клиенти" />
      </div>
      
      <section id="testimonials-section" className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Отзиви</h2>
          <p className="section-subtitle">
            Нашите клиенти споделят своя опит с Паскалеви
          </p>
          <TestimonialSlider testimonials={testimonials} />
        </div>
        <NextSectionButton targetId="contact-section" label="Свържете се с нас" />
      </section>
      
      <section id="contact-section" className="contact-section">
        <div className="container">
          <h2 className="section-title">Свържете се с нас</h2>
          <p className="section-subtitle">
            Имате запитване или се нуждаете от допълнителна информация?
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default HomePage; 