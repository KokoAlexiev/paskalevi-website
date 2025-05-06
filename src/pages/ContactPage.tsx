import React from 'react';
import ContactForm from '../components/ContactForm';
import FadeInSection from '../components/FadeInSection';
import '../styles/ContactPage.css';

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="page-banner">
        <div className="page-banner-overlay"></div>
        <div className="container">
          <h1 className="page-title">Контакти</h1>
        </div>
      </div>
      
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-content-grid">
            <FadeInSection className="contact-info-container">
              <h2>Свържете се с нас</h2>
              <p className="contact-info-text">
                Ако имате въпроси или се нуждаете от оферта за специализиран транспорт, 
                не се колебайте да се свържете с нас. Нашият екип е на разположение, 
                за да отговори на всички ваши запитвания.
              </p>
              
              <div className="contact-info-details">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Адрес</h3>
                    <p>43°32'02.9"N 27°49'04.6"E</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Телефон</h3>
                    <p>+359 887 611 912</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Имейл</h3>
                    <p>office@paskalevi.com</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Работно време</h3>
                    <p>Понеделник - Петък: 09:00 - 18:00</p>
                    <p>Събота - Неделя: Почивен ден</p>
                  </div>
                </div>
              </div>
              
              <div className="social-media-container">
                <h3>Последвайте ни</h3>
                <div className="social-media-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-media-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-media-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection className="contact-form-container">
              <ContactForm />
            </FadeInSection>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <div className="container">
          <FadeInSection>
            <h2 className="section-title">Нашето местоположение</h2>
          </FadeInSection>
          
          <FadeInSection className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.684851454322!2d27.81683411501654!3d43.53414897111702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDMyJzAyLjkiTiAyN8KwNDknMDQuNiJF!5e0!3m2!1sbg!2sbg!4v1628174134851!5m2!1sbg!2sbg" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Местоположение на Паскалеви"
            ></iframe>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 