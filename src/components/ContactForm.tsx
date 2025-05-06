import React, { useState, useEffect } from 'react';
import '../styles/ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    cargoName: '',
    loadingUnloadingAddress: '',
    dimensions: '',
    companyContacts: '',
    email: '',
    phone: '',
    acceptedPrivacyPolicy: false
  });
  
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Validate form whenever formData changes, but only show errors for touched fields
  useEffect(() => {
    const errors = validateForm();
    setFormErrors(errors);
  }, [formData]);
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.dimensions) {
      errors.dimensions = 'Моля, въведете размерите на товара';
    }
    
    if (!formData.companyContacts) {
      errors.companyContacts = 'Моля, въведете контакти на фирмата';
    }
    
    if (!formData.email) {
      errors.email = 'Моля, въведете имейл';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Моля, въведете валиден имейл адрес';
    }
    
    if (!formData.phone) {
      errors.phone = 'Моля, въведете телефон';
    }
    
    if (!formData.acceptedPrivacyPolicy) {
      errors.acceptedPrivacyPolicy = 'Моля, приемете политиката за поверителност';
    }
    
    return errors;
  };
  
  const handleBlur = (name: string) => {
    setTouched({
      ...touched,
      [name]: true
    });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
    
    // For checkboxes, consider them touched as soon as they're changed
    setTouched({
      ...touched,
      [name]: true
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
    
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulating form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after success
        setFormData({
          cargoName: '',
          loadingUnloadingAddress: '',
          dimensions: '',
          companyContacts: '',
          email: '',
          phone: '',
          acceptedPrivacyPolicy: false
        });
        
        setTouched({});
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  // Helper to determine if a field has an error and should show it
  const shouldShowError = (fieldName: string) => {
    return touched[fieldName] && formErrors[fieldName];
  };
  
  return (
    <div className="contact-form-container">
      <h2 className="form-title">Изпратете своето запитване</h2>
      
      {submitSuccess ? (
        <div className="form-success">
          <svg className="success-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
          </svg>
          <h3>Запитването е изпратено успешно!</h3>
          <p>Ще се свържем с Вас възможно най-скоро.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cargoName">Наименование на товара</label>
            <input
              type="text"
              id="cargoName"
              name="cargoName"
              value={formData.cargoName}
              onChange={handleChange}
              onBlur={() => handleBlur('cargoName')}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="loadingUnloadingAddress">Адрес на товарене и разтоварване</label>
            <textarea
              id="loadingUnloadingAddress"
              name="loadingUnloadingAddress"
              value={formData.loadingUnloadingAddress}
              onChange={handleChange}
              onBlur={() => handleBlur('loadingUnloadingAddress')}
              rows={3}
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="dimensions">Основни размери - дължина, широчина, височина и тонаж *</label>
            <textarea
              id="dimensions"
              name="dimensions"
              value={formData.dimensions}
              onChange={handleChange}
              onBlur={() => handleBlur('dimensions')}
              rows={3}
              className={shouldShowError('dimensions') ? 'error' : ''}
            ></textarea>
            {shouldShowError('dimensions') && <div className="error-message">{formErrors.dimensions}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="companyContacts">Контакти на фирмата *</label>
            <input
              type="text"
              id="companyContacts"
              name="companyContacts"
              value={formData.companyContacts}
              onChange={handleChange}
              onBlur={() => handleBlur('companyContacts')}
              className={shouldShowError('companyContacts') ? 'error' : ''}
            />
            {shouldShowError('companyContacts') && <div className="error-message">{formErrors.companyContacts}</div>}
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Имейл *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                className={shouldShowError('email') ? 'error' : ''}
              />
              {shouldShowError('email') && <div className="error-message">{formErrors.email}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Телефон *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur('phone')}
                className={shouldShowError('phone') ? 'error' : ''}
              />
              {shouldShowError('phone') && <div className="error-message">{formErrors.phone}</div>}
            </div>
          </div>
          
          <div className="form-group file-upload">
            <label>Снимки на товара</label>
            <div className="file-upload-container">
              <input type="file" id="fileUpload" multiple />
              <label htmlFor="fileUpload" className="file-upload-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
                </svg>
                Изберете файлове
              </label>
              <span className="upload-info">Maximum file size: 2 GB</span>
            </div>
          </div>
          
          <div className="form-group checkbox-group">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="acceptedPrivacyPolicy"
                name="acceptedPrivacyPolicy"
                checked={formData.acceptedPrivacyPolicy}
                onChange={handleCheckboxChange}
                className={shouldShowError('acceptedPrivacyPolicy') ? 'error' : ''}
              />
              <label htmlFor="acceptedPrivacyPolicy">
                Запознах се и приемам <a href="/privacy" target="_blank" rel="noopener noreferrer">Политиката за поверителност</a> *
              </label>
            </div>
            {shouldShowError('acceptedPrivacyPolicy') && <div className="error-message">{formErrors.acceptedPrivacyPolicy}</div>}
          </div>
          
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="loading-spinner"></span>
            ) : 'Изпрати'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm; 