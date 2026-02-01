const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create images directory
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Image URLs and their local filenames
const images = [
  { url: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80', filename: 'hero.jpg' },
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', filename: 'beach.jpg' },
  { url: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=800&q=80', filename: 'volcano.jpg' },
  { url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80', filename: 'rainforest.jpg' },
  { url: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=800&q=80', filename: 'culture.jpg' },
  { url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80', filename: 'snorkeling.jpg' },
  { url: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=800&q=80', filename: 'zipline.jpg' },
  { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', filename: 'resort.jpg' },
  { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', filename: 'hotel.jpg' },
  { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', filename: 'restaurant.jpg' },
  { url: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80', filename: 'helicopter.jpg' },
  { url: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80', filename: 'museum.jpg' },
  { url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80', filename: 'aerial.jpg' },
  // Restaurant-specific images - each matched to cuisine type
  { url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80', filename: 'restaurant-seafood.jpg' }, // Seafood restaurant - fresh fish dishes
  { url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', filename: 'restaurant-american.jpg' }, // American grill - burgers and comfort food
  { url: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80', filename: 'restaurant-asian.jpg' }, // Asian restaurant - sushi and Asian cuisine
  { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80', filename: 'restaurant-beachside.jpg' }, // Beachside dining - casual outdoor setting
];

function handleResponse(response, file, filepath, filename, url, resolve, reject) {
  if (response.statusCode === 301 || response.statusCode === 302) {
    // Handle redirects
    return downloadImage(response.headers.location, filename)
      .then(resolve)
      .catch(reject);
  }
  
  if (response.statusCode !== 200) {
    if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
    reject(new Error(`Failed to download: ${response.statusCode}`));
    return;
  }
  
  response.pipe(file);
  
  file.on('finish', () => {
    file.close();
    console.log(`✓ Successfully downloaded ${filename}`);
    resolve();
  });
  
  file.on('error', (err) => {
    if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
    reject(err);
  });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);
    
    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`✓ ${filename} already exists, skipping...`);
      resolve();
      return;
    }

    console.log(`Downloading ${filename}...`);
    
    const file = fs.createWriteStream(filepath);
    
    const options = {
      rejectUnauthorized: false // Allow self-signed certificates (for development)
    };
    
    const request = url.startsWith('https') 
      ? https.get(url, options, (response) => {
          handleResponse(response, file, filepath, filename, url, resolve, reject);
        })
      : http.get(url, (response) => {
          handleResponse(response, file, filepath, filename, url, resolve, reject);
        });
    
    request.on('error', (err) => {
      if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
      console.log(`✗ Failed to download ${filename}: ${err.message}`);
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Downloading images to public/images/...\n');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      // Continue with next image even if one fails
    }
  }
  
  console.log('\nDone! Images are now in public/images/');
  console.log('You can now use local image paths in your code.');
}

downloadAllImages().catch(console.error);
