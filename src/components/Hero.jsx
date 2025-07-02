import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiActivity, FiTarget, FiTrendingUp, FiZap, FiPlay } = FiIcons;

function Hero() {
  return (
    <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-ocean-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Revolutionizing{' '}
              <span className="bg-gradient-to-r from-ocean-600 to-forest-600 bg-clip-text text-transparent">
                Fishing
              </span>{' '}
              Through Technology
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              An industry leader committed to revolutionizing the fishing experience through cutting-edge technology and ecological insights. Our innovative range of AI-enhanced fishing gear is crafted with precision to enrich your outdoor adventures and strengthen your connection to the natural world.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/get-started"
                  className="inline-flex items-center space-x-2 bg-ocean-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-ocean-700 transition-colors shadow-lg"
                >
                  <SafeIcon icon={FiPlay} className="h-5 w-5" />
                  <span>Get Started</span>
                </Link>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-ocean-600 text-ocean-600 px-8 py-4 rounded-xl font-semibold hover:bg-ocean-50 transition-colors"
              >
                Watch Demo
              </motion.button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <SafeIcon icon={FiActivity} className="h-8 w-8 text-ocean-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <SafeIcon icon={FiTarget} className="h-8 w-8 text-forest-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Anglers</div>
              </div>
              <div className="text-center">
                <SafeIcon icon={FiTrendingUp} className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">3x</div>
                <div className="text-sm text-gray-600">More Catches</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Smart Fishing Rod"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Floating UI Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiZap} className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">AI Active</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
              >
                <div className="text-sm">
                  <div className="font-medium text-ocean-600">Cast Distance</div>
                  <div className="text-gray-700">47.3m</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;