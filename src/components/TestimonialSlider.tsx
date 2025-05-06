import React, { useState, useEffect } from 'react';
import FadeInSection from './FadeInSection';
import '../styles/TestimonialSlider.css';

interface Testimonial {
  content: string;
  author: string;
  company: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoplaySpeed?: number;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ 
  testimonials,
  autoplaySpeed = 5000 
}) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Autoplay functionality
  useEffect(() => {
    if (autoplaySpeed <= 0 || testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, autoplaySpeed);
    
    return () => clearInterval(interval);
  }, [current, testimonials.length, autoplaySpeed]);
  
  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrent(prevCurrent => (prevCurrent + 1) % testimonials.length);
    
    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 600); // Match transition duration
  };
  
  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrent(prevCurrent => (prevCurrent === 0 ? testimonials.length - 1 : prevCurrent - 1));
    
    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 600); // Match transition duration
  };
  
  const goToSlide = (index: number) => {
    if (isAnimating || index === current) return;
    
    setIsAnimating(true);
    setCurrent(index);
    
    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 600); // Match transition duration
  };
  
  return (
    <FadeInSection className="testimonial-container">
      <div className="testimonial-slider">
        <button 
          className="testimonial-nav testimonial-prev" 
          onClick={goToPrev}
          aria-label="Previous testimonial"
          disabled={isAnimating}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
          </svg>
        </button>
        
        <div className="testimonial-content">
          <div 
            className="testimonial-slide"
            style={{ 
              transform: `translateX(-${current * 100}%)`,
              transition: isAnimating ? 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)' : 'none'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-item" key={index}>
                <blockquote>
                  <p>{testimonial.content}</p>
                  <footer>
                    <cite>{testimonial.author}</cite>
                    <span className="company">{testimonial.company}</span>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="testimonial-nav testimonial-next" 
          onClick={goToNext}
          aria-label="Next testimonial"
          disabled={isAnimating}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
          </svg>
        </button>
      </div>
      
      <div className="testimonial-controls">
        {testimonials.map((_, index) => (
          <button 
            key={index}
            className={`control ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </FadeInSection>
  );
};

export default TestimonialSlider; 