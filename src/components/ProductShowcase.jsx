import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiActivity, FiTarget, FiZap, FiRadio, FiEye, FiCpu, FiArrowRight } = FiIcons;

const featuredProducts = [
  {
    id: 'smart-rod',
    title: 'Smart Fishing Rods',
    subtitle: 'AI-Powered Precision for Enhanced Performance',
    description: 'Unleash your full fishing potential with our flagship smart fishing rods, expertly engineered from high-quality, lightweight graphite. Each rod features an advanced network of micro-sensors.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    icon: FiActivity,
    features: [
      'Micro-sensor network for continuous performance metrics',
      'Cast distance tracking to refine your skills',
      'Vibration analysis detecting fish movements',
      'Mobile application integration for strategic decisions'
    ],
    price: 'From $499',
    gradient: 'from-ocean-500 to-blue-600',
    productCount: '4 Models Available'
  },
  {
    id: 'ai-reel',
    title: 'AI-Enhanced Reels',
    subtitle: 'Your Intelligent Companion for Unmatched Adventures',
    description: 'Experience the pinnacle of fishing technology with our AI-enhanced reels, designed with robust, corrosion-resistant materials and advanced machine learning algorithms.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    icon: FiCpu,
    features: [
      'Automatic drag adjustment based on fish behavior',
      'Behavior analysis leveraging data from each trip',
      'Trip logging documenting fishing activities',
      'Performance optimization for maximum efficiency'
    ],
    price: 'From $899',
    gradient: 'from-forest-500 to-green-600',
    productCount: '4 Models Available'
  },
  {
    id: 'adaptive-lures',
    title: 'Adaptive Lures',
    subtitle: 'Dynamic Fishing Solutions for Relentless Anglers',
    description: 'Transform your baiting strategy with our innovative adaptive lures, engineered to adapt fluidly to their environment with advanced color-changing technology.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    icon: FiEye,
    features: [
      'Color adaptation to suit underwater environment',
      'Environmental sensors monitoring conditions',
      'Lifelike movements mimicking distressed prey',
      'Species targeting for different fish types'
    ],
    price: 'From $149',
    gradient: 'from-purple-500 to-pink-600',
    productCount: '5 Models Available'
  },
  {
    id: 'smart-bobbers',
    title: 'Smart Bobbers & Indicators',
    subtitle: 'Innovative Technology for Accurate Bite Detection',
    description: 'Enhance your fishing experience with our state-of-the-art smart bobbers, designed with sophisticated bite detection technology and wireless connectivity.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    icon: FiRadio,
    features: [
      'Advanced bite detection with impressive accuracy',
      'Real-time alerts sent to your smartphone',
      'Pattern analysis compiling historical data',
      'Exceptional stability in challenging conditions'
    ],
    price: 'From $99',
    gradient: 'from-orange-500 to-red-600',
    productCount: '4 Models Available'
  }
];

function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:scale-105">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
          
          <div className="absolute top-4 left-4">
            <div className={`bg-gradient-to-r ${product.gradient} p-3 rounded-full shadow-lg`}>
              <SafeIcon icon={product.icon} className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-semibold text-gray-900">{product.price}</span>
          </div>
          
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-xs font-medium text-gray-700">{product.productCount}</span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-2">
            <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
            <p className="text-sm text-gray-500 font-medium">{product.subtitle}</p>
          </div>
          
          <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
          
          <div className="space-y-2 mb-6">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient}`}></div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex-1 bg-gradient-to-r ${product.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all`}
            >
              View Collection
            </motion.button>
            <Link
              to="/catalog"
              className="px-4 py-3 border-2 border-gray-200 text-gray-600 rounded-xl hover:border-gray-300 transition-colors flex items-center"
            >
              <SafeIcon icon={FiArrowRight} className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProductShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI-Enhanced Gear
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each piece of equipment is meticulously crafted with cutting-edge technology, transforming 
            traditional fishing into a sophisticated, data-driven experience that enriches your outdoor adventures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/catalog"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-ocean-600 to-forest-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            <span>View Complete Collection</span>
            <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
          </Link>
          <p className="text-gray-600 mt-4">
            Over 17 specialized products across 4 categories
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductShowcase;