import React, { useState } from 'react';
import FadeInSection from '../components/FadeInSection';
import '../styles/GalleryPage.css';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const GalleryPage: React.FC = () => {
  // Dummy gallery images - in a real app, these would come from a database or API
  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/images/gallery/image1.jpg', alt: 'Извънгабаритен транспорт 1', category: 'transport' },
    { id: 2, src: '/images/gallery/image2.jpg', alt: 'Извънгабаритен транспорт 2', category: 'transport' },
    { id: 3, src: '/images/gallery/image3.jpg', alt: 'Специализиран съпровод', category: 'escort' },
    { id: 4, src: '/images/gallery/image4.jpg', alt: 'Тежкотоварен транспорт 1', category: 'heavy' },
    { id: 5, src: '/images/gallery/image5.jpg', alt: 'Тежкотоварен транспорт 2', category: 'heavy' },
    { id: 6, src: '/images/gallery/image6.jpg', alt: 'Извънгабаритен транспорт 3', category: 'transport' },
    { id: 7, src: '/images/gallery/image7.jpg', alt: 'Специализиран съпровод 2', category: 'escort' },
    { id: 8, src: '/images/gallery/image8.jpg', alt: 'Тежкотоварен транспорт 3', category: 'heavy' },
  ];
  
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);
  
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  
  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="gallery-page">
      <div className="page-banner">
        <div className="page-banner-overlay"></div>
        <div className="container">
          <h1 className="page-title">Галерия</h1>
        </div>
      </div>
      
      <section className="gallery-section">
        <div className="container">
          <FadeInSection>
            <div className="gallery-filters">
              <button 
                className={`gallery-filter ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterClick('all')}
              >
                Всички
              </button>
              <button 
                className={`gallery-filter ${activeFilter === 'transport' ? 'active' : ''}`}
                onClick={() => handleFilterClick('transport')}
              >
                Извънгабаритен транспорт
              </button>
              <button 
                className={`gallery-filter ${activeFilter === 'heavy' ? 'active' : ''}`}
                onClick={() => handleFilterClick('heavy')}
              >
                Тежкотоварен транспорт
              </button>
              <button 
                className={`gallery-filter ${activeFilter === 'escort' ? 'active' : ''}`}
                onClick={() => handleFilterClick('escort')}
              >
                Специализиран съпровод
              </button>
            </div>
          </FadeInSection>
          
          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <FadeInSection key={image.id} className="gallery-item">
                <div 
                  className="gallery-image-container"
                  onClick={() => openLightbox(image)}
                >
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                  <div className="gallery-image-overlay">
                    <div className="gallery-image-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
              </svg>
            </button>
            <img src={lightboxImage.src} alt={lightboxImage.alt} className="lightbox-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage; 