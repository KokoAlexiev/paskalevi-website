const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const buildDir = path.join(__dirname, 'build');
const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');
const indexHtml = path.join(buildDir, 'index.html');

// Create build directory if it doesn't exist
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
}

// Copy static assets from public directory
function copyPublicFiles() {
  console.log('Copying public files...');
  
  // Check if public directory exists
  if (fs.existsSync(publicDir)) {
    // Create recursive copy function
    const copyRecursive = (source, target) => {
      if (!fs.existsSync(target)) {
        fs.mkdirSync(target, { recursive: true });
      }
      
      // Read directory contents
      const files = fs.readdirSync(source);
      
      // Copy each file/directory
      files.forEach(file => {
        const sourcePath = path.join(source, file);
        const targetPath = path.join(target, file);
        
        if (fs.statSync(sourcePath).isDirectory()) {
          copyRecursive(sourcePath, targetPath);
        } else {
          fs.copyFileSync(sourcePath, targetPath);
        }
      });
    };
    
    copyRecursive(publicDir, buildDir);
    console.log('Public files copied successfully!');
  } else {
    console.log('Public directory not found, skipping...');
  }
}

// Generate HTML file
function generateHtml() {
  console.log('Generating HTML file...');
  
  const htmlContent = `<!DOCTYPE html>
<html lang="bg">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#66FF00">
  <meta name="description" content="Паскалеви - Специализиран извънгабаритен и тежкотоварен транспорт из цяла Европа">
  <link rel="manifest" href="/manifest.json">
  <link rel="icon" href="/favicon.ico">
  <title>Паскалеви - Извънгабаритен транспорт</title>
  <style>
    /* Global styles */
    :root {
      --primary-color: #66FF00;
      --primary-dark: #4CC700;
      --text-color: #252525;
      --background-light: #F8F8F8;
      --white: #FFFFFF;
      --gray-light: #EEEEEE;
      --gray: #CCCCCC;
      --gray-dark: #888888;
      --black: #000000;
      --error: #FF3B30;
      --success: #34C759;
      --warning: #FF9500;
      --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
      --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15);
      --border-radius-sm: 4px;
      --border-radius-md: 8px;
      --border-radius-lg: 16px;
      --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      --transition-fast: 0.2s ease;
      --transition-standard: 0.3s ease;
      --transition-slow: 0.5s ease;
      --container-width: 1200px;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    html {
      font-size: 16px;
      scroll-behavior: smooth;
    }
    
    body {
      font-family: var(--font-sans);
      line-height: 1.6;
      color: var(--text-color);
      background-color: var(--background-light);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
    
    a {
      color: var(--text-color);
      text-decoration: none;
      transition: color var(--transition-standard);
    }
    
    a:hover {
      color: var(--primary-dark);
    }
    
    .container {
      width: 100%;
      max-width: var(--container-width);
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    
    .main-content {
      min-height: calc(100vh - 160px);
    }
    
    .cta-button {
      display: inline-block;
      background-color: var(--primary-color);
      color: var(--text-color);
      border-radius: var(--border-radius-sm);
      padding: 12px 24px;
      font-weight: 500;
      text-decoration: none;
      transition: background-color var(--transition-standard), transform var(--transition-standard), box-shadow var(--transition-standard);
      text-align: center;
    }
    
    .cta-button:hover {
      background-color: var(--primary-dark);
      color: var(--text-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(76, 199, 0, 0.3);
    }
    
    /* Header */
    .header {
      background-color: rgba(255, 255, 255, 0.95);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 1rem 0;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
    }
    
    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .logo {
      font-size: 1.8rem;
      font-weight: 700;
    }
    
    .logo-text {
      background: linear-gradient(90deg, var(--text-color) 70%, var(--primary-color) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .nav-list {
      display: flex;
      list-style: none;
    }
    
    .nav-item {
      margin: 0 1rem;
    }
    
    .nav-item a {
      position: relative;
      font-weight: 500;
      padding: 0.5rem 0;
    }
    
    .nav-item a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-color);
      transition: width 0.3s ease;
    }
    
    .nav-item a:hover, .nav-item a.active {
      color: var(--primary-dark);
    }
    
    .nav-item a:hover::after, .nav-item a.active::after {
      width: 100%;
    }
    
    /* Hero */
    .hero {
      position: relative;
      height: 100vh;
      min-height: 600px;
      display: flex;
      align-items: center;
      background-image: url('/images/hero-bg.jpg');
      background-size: cover;
      background-position: center;
      color: white;
      margin-top: -80px;
      padding-top: 80px;
    }
    
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4));
      z-index: 1;
    }
    
    .hero-container {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1.5rem;
    }
    
    .hero-title-part {
      display: block;
    }
    
    .hero-title-part:last-child {
      color: var(--primary-color);
    }
    
    .hero-subtitle {
      font-size: 1.5rem;
      margin-bottom: 2.5rem;
      opacity: 0.9;
      max-width: 600px;
    }
    
    /* Footer */
    .footer {
      background-color: #1a1a1a;
      color: rgba(255, 255, 255, 0.8);
      padding: 4rem 0 2rem;
      margin-top: 2rem;
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .footer-column h3 {
      color: white;
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
    }
    
    .footer-contact-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1rem;
    }
    
    .footer-contact-icon {
      width: 18px;
      margin-right: 10px;
      flex-shrink: 0;
    }
    
    .footer-bottom {
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
    }
    
    @media (max-width: 768px) {
      .nav-list {
        display: none;
      }
      
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.1rem;
      }
    }
  </style>
</head>
<body>
  <div id="app">
    <header class="header">
      <div class="container header-container">
        <div class="logo">
          <a href="/" class="logo-text">Паскалеви</a>
        </div>
        
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="nav-item"><a href="/" class="active">Начало</a></li>
            <li class="nav-item"><a href="/about">За нас</a></li>
            <li class="nav-item"><a href="/gallery">Галерия</a></li>
            <li class="nav-item"><a href="/equipment">Оборудване</a></li>
            <li class="nav-item"><a href="/contact">Контакти</a></li>
          </ul>
        </nav>
      </div>
    </header>
    
    <main class="main-content">
      <section class="hero">
        <div class="hero-overlay"></div>
        <div class="container hero-container">
          <div class="hero-content">
            <h1 class="hero-title">
              <span class="hero-title-part">Извънгабаритен и</span>
              <span class="hero-title-part">тежкотоварен транспорт</span>
            </h1>
            <p class="hero-subtitle">Специализирани транспортни услуги из цяла Европа</p>
            
            <a href="/contact" class="cta-button hero-button">
              Запитване
            </a>
          </div>
        </div>
      </section>
      
      <section class="services-section" style="padding: 6rem 0; background-color: var(--background-light);">
        <div class="container">
          <h2 style="font-size: 2.5rem; margin-bottom: 2rem; text-align: center; position: relative;">Услуги</h2>
          <p style="text-align: center; max-width: 700px; margin: 0 auto 3rem; font-size: 1.2rem; color: rgba(37, 37, 37, 0.7);">
            Фирма Паскалеви предлага транспортни услуги из цяла Европа
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 3rem;">
            <div style="background-color: white; border-radius: 8px; padding: 2rem; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);">
              <div style="width: 40px; height: 40px; margin-bottom: 1rem;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style="width: 100%; height: 100%; fill: var(--primary-color);">
                  <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </svg>
              </div>
              <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">Извънгабаритен транспорт</h3>
              <p style="color: rgba(37, 37, 37, 0.8);">Транспорт на извънгабаритни товари, тежки машини и съоръжения със специализиран автопарк.</p>
            </div>
            
            <div style="background-color: white; border-radius: 8px; padding: 2rem; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);">
              <div style="width: 40px; height: 40px; margin-bottom: 1rem;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 100%; height: 100%; fill: var(--primary-color);">
                  <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/>
                </svg>
              </div>
              <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">Специализиран съпровод</h3>
              <p style="color: rgba(37, 37, 37, 0.8);">Осигуряваме специализиран съпровод за безопасно транспортиране на извънгабаритни товари.</p>
            </div>
            
            <div style="background-color: white; border-radius: 8px; padding: 2rem; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);">
              <div style="width: 40px; height: 40px; margin-bottom: 1rem;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="width: 100%; height: 100%; fill: var(--primary-color);">
                  <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z"/>
                </svg>
              </div>
              <h3 style="font-size: 1.4rem; margin-bottom: 1rem;">Транспортни разрешителни</h3>
              <p style="color: rgba(37, 37, 37, 0.8);">Съдействие при набавяне на всички необходими разрешителни за извънгабаритни превози.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section style="padding: 6rem 0; background-color: white;">
        <div class="container">
          <h2 style="font-size: 2.5rem; margin-bottom: 2rem; text-align: center; position: relative;">ФАКТОР - П ЕООД</h2>
          <h3 style="text-align: center; font-size: 1.5rem; margin-bottom: 2rem; color: rgba(37, 37, 37, 0.7);">
            Извънгабаритен и тежкотоварен транспорт из цяла Европа
          </h3>
          
          <p style="text-align: center; max-width: 800px; margin: 0 auto 2rem; line-height: 1.8;">
            Фирма Паскалеви е специализирана в извънгабаритния и тежкотоварен транспорт из цяла Европа. 
            Нашият опит и специализирана техника ни позволяват да предлагаме високо качество на обслужване 
            и безопасен транспорт на извънгабаритни товари.
          </p>
          
          <div style="text-align: center;">
            <a href="/about" class="cta-button">За нас</a>
          </div>
        </div>
      </section>
      
      <section style="padding: 6rem 0; background-color: var(--background-light);">
        <div class="container">
          <h2 style="font-size: 2.5rem; margin-bottom: 2rem; text-align: center; position: relative;">Свържете се с нас</h2>
          <p style="text-align: center; max-width: 700px; margin: 0 auto 3rem; font-size: 1.2rem; color: rgba(37, 37, 37, 0.7);">
            Имате запитване или се нуждаете от допълнителна информация?
          </p>
          
          <div style="max-width: 700px; margin: 0 auto; background-color: white; padding: 2rem; border-radius: 8px; box-shadow: var(--shadow-md);">
            <form>
              <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Вашето име *</label>
                <input type="text" style="width: 100%; padding: 0.8rem 1rem; border: 1px solid var(--gray); border-radius: var(--border-radius-sm);" required>
              </div>
              
              <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Имейл *</label>
                <input type="email" style="width: 100%; padding: 0.8rem 1rem; border: 1px solid var(--gray); border-radius: var(--border-radius-sm);" required>
              </div>
              
              <div style="margin-bottom: 1.5rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Съобщение *</label>
                <textarea style="width: 100%; padding: 0.8rem 1rem; border: 1px solid var(--gray); border-radius: var(--border-radius-sm); min-height: 150px;" required></textarea>
              </div>
              
              <div style="text-align: center;">
                <button type="submit" class="cta-button">Изпрати</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
    
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <h3>За Паскалеви</h3>
            <p>Фирма Паскалеви е специализирана в извънгабаритния и тежкотоварен транспорт из цяла Европа.</p>
          </div>
          
          <div class="footer-column">
            <h3>Контакти</h3>
            <div class="footer-contact-item">
              <div class="footer-contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="width: 100%; height: 100%; fill: var(--primary-color);">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                </svg>
              </div>
              <p>ул. Примерна 123, София, България</p>
            </div>
            
            <div class="footer-contact-item">
              <div class="footer-contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 100%; height: 100%; fill: var(--primary-color);">
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                </svg>
              </div>
              <p>+359 888 123 456</p>
            </div>
            
            <div class="footer-contact-item">
              <div class="footer-contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 100%; height: 100%; fill: var(--primary-color);">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                </svg>
              </div>
              <p>info@paskalevi.com</p>
            </div>
          </div>
          
          <div class="footer-column">
            <h3>Навигация</h3>
            <ul style="list-style: none;">
              <li style="margin-bottom: 0.7rem;"><a href="/" style="color: rgba(255, 255, 255, 0.8); transition: color 0.3s ease;">Начало</a></li>
              <li style="margin-bottom: 0.7rem;"><a href="/about" style="color: rgba(255, 255, 255, 0.8); transition: color 0.3s ease;">За нас</a></li>
              <li style="margin-bottom: 0.7rem;"><a href="/gallery" style="color: rgba(255, 255, 255, 0.8); transition: color 0.3s ease;">Галерия</a></li>
              <li style="margin-bottom: 0.7rem;"><a href="/equipment" style="color: rgba(255, 255, 255, 0.8); transition: color 0.3s ease;">Оборудване</a></li>
              <li style="margin-bottom: 0.7rem;"><a href="/contact" style="color: rgba(255, 255, 255, 0.8); transition: color 0.3s ease;">Контакти</a></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2025 Паскалеви. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  </div>
</body>
</html>`;
  
  fs.writeFileSync(indexHtml, htmlContent);
  console.log('HTML file generated successfully!');
}

// Main build process
console.log('Starting build process...');
copyPublicFiles();
generateHtml();
console.log('Build completed successfully!'); 