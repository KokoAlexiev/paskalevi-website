import requests
import os
import urllib.request

def download_image(url, save_path, filename):
    try:
        # Create directory if it doesn't exist
        os.makedirs(save_path, exist_ok=True)
        
        # Full path for the image
        full_path = os.path.join(save_path, filename)
        
        # Download the image
        urllib.request.urlretrieve(url, full_path)
        print(f'Downloaded: {full_path}')
    except Exception as e:
        print(f'Error downloading {url}: {e}')

def main():
    # Create base directories
    os.makedirs('public/images', exist_ok=True)
    os.makedirs('public/images/gallery', exist_ok=True)
    os.makedirs('public/images/equipment', exist_ok=True)
    
    # List of images to download
    images = [
        {
            'url': 'https://paskalevi.com/wp-content/uploads/2023/08/hero-bg.jpg',
            'path': 'public/images',
            'filename': 'hero-bg.jpg'
        },
        {
            'url': 'https://paskalevi.com/wp-content/uploads/2023/08/about-hero.jpg',
            'path': 'public/images',
            'filename': 'about-hero.jpg'
        },
        {
            'url': 'https://paskalevi.com/wp-content/uploads/2023/08/gallery-hero.jpg',
            'path': 'public/images',
            'filename': 'gallery-hero.jpg'
        },
        {
            'url': 'https://paskalevi.com/wp-content/uploads/2023/08/equipment-hero.jpg',
            'path': 'public/images',
            'filename': 'equipment-hero.jpg'
        },
        {
            'url': 'https://paskalevi.com/wp-content/uploads/2023/08/contact-hero.jpg',
            'path': 'public/images',
            'filename': 'contact-hero.jpg'
        }
    ]
    
    # Download each image
    for img in images:
        download_image(img['url'], img['path'], img['filename'])

if __name__ == '__main__':
    main() 