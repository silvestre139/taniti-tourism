#!/bin/bash

# Script to download all images from Unsplash to local public/images directory

cd "$(dirname "$0")/.."
mkdir -p public/images

echo "Downloading images to public/images/..."
echo ""

# Download each image
download_image() {
  local url=$1
  local filename=$2
  local filepath="public/images/$filename"
  
  if [ -f "$filepath" ]; then
    echo "✓ $filename already exists, skipping..."
  else
    echo "Downloading $filename..."
    if curl -L -o "$filepath" "$url" 2>/dev/null; then
      echo "✓ Successfully downloaded $filename"
    else
      echo "✗ Failed to download $filename"
    fi
  fi
}

# Download all images
download_image "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80" "hero.jpg"
download_image "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80" "beach.jpg"
download_image "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=800&q=80" "volcano.jpg"
download_image "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80" "rainforest.jpg"
download_image "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=800&q=80" "culture.jpg"
download_image "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80" "snorkeling.jpg"
download_image "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=800&q=80" "zipline.jpg"
download_image "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80" "resort.jpg"
download_image "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" "hotel.jpg"
download_image "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" "restaurant.jpg"
download_image "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80" "helicopter.jpg"
download_image "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80" "museum.jpg"
download_image "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80" "aerial.jpg"

echo ""
echo "Done! Images are now in public/images/"
echo "You can now use local image paths in your code."
