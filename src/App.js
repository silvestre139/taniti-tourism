import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Activities from './components/Activities';
import ActivityDetail from './components/ActivityDetail';
import Lodging from './components/Lodging';
import LodgingDetail from './components/LodgingDetail';
import { Dining, Transport, About } from './components/Pages';
import PhotoCredits from './components/PhotoCredits';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-stone-50 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/:id" element={<ActivityDetail />} />
            <Route path="/lodging" element={<Lodging />} />
            <Route path="/lodging/:id" element={<LodgingDetail />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/about" element={<About />} />
            <Route path="/photo-credits" element={<PhotoCredits />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
