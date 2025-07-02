import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiTarget, FiActivity, FiTrendingUp, FiPlay, FiGrid } = FiIcons;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-ocean-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <SafeIcon icon={FiTarget} className="h-8 w-8 text-ocean-600" />
            <span className="text-xl font-bold text-gray-900">Ronin Fishing Company</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/catalog" 
              className="flex items-center space-x-1 text-gray-700 hover:text-ocean-600 transition-colors"
            >
              <SafeIcon icon={FiGrid} className="h-4 w-4" />
              <span>Products</span>
            </Link>
            <Link to="/" className="text-gray-700 hover:text-ocean-600 transition-colors">
              Technology
            </Link>
            <Link to="/" className="text-gray-700 hover:text-ocean-600 transition-colors">
              Ecology
            </Link>
            <Link 
              to="/get-started" 
              className="flex items-center space-x-2 bg-ocean-600 text-white px-4 py-2 rounded-lg hover:bg-ocean-700 transition-colors"
            >
              <SafeIcon icon={FiPlay} className="h-4 w-4" />
              <span>Get Started</span>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <SafeIcon icon={isOpen ? FiX : FiMenu} className="h-6 w-6" />
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/catalog" 
                className="flex items-center space-x-2 px-3 py-2 text-gray-700"
              >
                <SafeIcon icon={FiGrid} className="h-4 w-4" />
                <span>Products</span>
              </Link>
              <Link to="/" className="block px-3 py-2 text-gray-700">
                Technology
              </Link>
              <Link to="/" className="block px-3 py-2 text-gray-700">
                Ecology
              </Link>
              <Link 
                to="/get-started" 
                className="flex items-center space-x-2 bg-ocean-600 text-white px-3 py-2 rounded-lg mt-2"
              >
                <SafeIcon icon={FiPlay} className="h-4 w-4" />
                <span>Get Started</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;