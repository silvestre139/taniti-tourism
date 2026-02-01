# Taniti Island Tourism Website

A professional interactive prototype for the Taniti Island tourism website, built with React and Tailwind CSS.

## Features

- **Home Page**: Hero section with call-to-action, category exploration, popular activities, and lodging preview
- **Activities Page**: Filterable/searchable activity listings with category, price, and sort options
- **Activity Detail**: Full activity information with multi-step booking flow
- **Lodging Page**: Accommodation listings with type filtering
- **Dining Page**: Restaurant listings with cuisine filtering
- **Transport Page**: Information about getting to and around Taniti
- **About Page**: Essential visitor information

## Design Highlights

- Professional tropical resort aesthetic
- Warm, inviting color palette (teal, emerald, stone, amber)
- Elegant serif headings with clean sans-serif body text
- High-quality Unsplash imagery
- Fully responsive design
- Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username:
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/taniti-tourism"
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. Enable GitHub Pages in your repository settings (Settings > Pages > Source: gh-pages branch)

## Project Structure

```
taniti-prototype/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Activities.jsx
│   │   ├── ActivityDetail.jsx
│   │   ├── Lodging.jsx
│   │   ├── Pages.jsx (Dining, Transport, About)
│   │   └── UI.jsx (shared components)
│   ├── data/
│   │   └── siteData.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Technologies Used

- React 18
- React Router v6
- Tailwind CSS
- Unsplash (images)
- Google Fonts (Playfair Display, Source Sans Pro)

## Guerrilla Testing Feedback Incorporated

- ✅ Price filtering with defined ranges
- ✅ Multi-step booking flow with clear progress
- ✅ Requirements section on activity details
- ✅ Gallery navigation with arrows and indicators
- ✅ Search bar on activities page
- ✅ Clear sorting options dropdown
- ✅ "What to Bring" section
- ✅ Descriptive navigation labels

## License

This project was created as a UX design prototype for educational purposes.
