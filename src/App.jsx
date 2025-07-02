import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import { questConfig } from './config/questConfig';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyOverview from './components/CompanyOverview';
import ProductShowcase from './components/ProductShowcase';
import TechnologyStack from './components/TechnologyStack';
import EcologicalSection from './components/EcologicalSection';
import MarketingStrategy from './components/MarketingStrategy';
import FutureRoadmap from './components/FutureRoadmap';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import ProductCatalog from './components/ProductCatalog';
import GetStartedComponent from './components/GetStartedComponent';
import './App.css';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-ocean-50 via-blue-50 to-forest-50"
    >
      <Hero />
      <CompanyOverview />
      <ProductShowcase />
      <TechnologyStack />
      <EcologicalSection />
      <MarketingStrategy />
      <FutureRoadmap />
    </motion.div>
  );
}

function App() {
  return (
    <QuestProvider
      apiKey={questConfig.APIKEY}
      entityId={questConfig.ENTITYID}
      apiType="PRODUCTION"
    >
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<ProductCatalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/get-started" element={<GetStartedComponent />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </QuestProvider>
  );
}

export default App;