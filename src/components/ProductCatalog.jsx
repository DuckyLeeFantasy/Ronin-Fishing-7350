import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiActivity, FiCpu, FiEye, FiRadio, FiZap, FiTarget, FiSettings, FiWifi, FiX } = FiIcons;

const productCategories = {
  'smart-rods': {
    title: 'Smart Fishing Rods',
    icon: FiActivity,
    gradient: 'from-ocean-500 to-blue-600',
    description: 'AI-powered rods with advanced sensor networks for precision fishing',
    products: [
      {
        id: 'ronin-pro-7ft',
        name: 'Ronin Pro 7\'',
        subtitle: 'Professional Grade Smart Rod',
        price: '$899',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Length': '7\' 0" (2.13m)',
          'Power': 'Medium Heavy',
          'Action': 'Fast',
          'Weight': '4.2 oz (119g)',
          'Line Weight': '12-25 lb',
          'Lure Weight': '1/4 - 1 oz',
          'Battery Life': '200+ hours',
          'Sensors': '12 MEMS sensors'
        },
        features: [
          'High-modulus graphite construction',
          '12-sensor micro-network for data collection',
          'GPS-enabled cast distance tracking',
          'Real-time vibration analysis',
          'Weather-resistant titanium guides',
          'Ergonomic cork grip with sensor integration'
        ],
        bestFor: 'Professional anglers and tournament fishing'
      },
      {
        id: 'ronin-elite-6ft',
        name: 'Ronin Elite 6\'6"',
        subtitle: 'Versatile All-Purpose Smart Rod',
        price: '$699',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Length': '6\' 6" (1.98m)',
          'Power': 'Medium',
          'Action': 'Moderate Fast',
          'Weight': '3.8 oz (108g)',
          'Line Weight': '8-17 lb',
          'Lure Weight': '1/8 - 5/8 oz',
          'Battery Life': '180+ hours',
          'Sensors': '10 MEMS sensors'
        },
        features: [
          'Premium graphite composite construction',
          '10-sensor network for comprehensive monitoring',
          'Bluetooth 5.0 connectivity',
          'Automatic bite detection alerts',
          'Corrosion-resistant hardware',
          'Split-grip design for comfort'
        ],
        bestFor: 'Versatile freshwater and light saltwater fishing'
      },
      {
        id: 'ronin-compact-5ft',
        name: 'Ronin Compact 5\'6"',
        subtitle: 'Portable Travel Smart Rod',
        price: '$499',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Length': '5\' 6" (1.68m)',
          'Power': 'Light Medium',
          'Action': 'Fast',
          'Weight': '3.2 oz (91g)',
          'Line Weight': '6-12 lb',
          'Lure Weight': '1/16 - 3/8 oz',
          'Battery Life': '150+ hours',
          'Sensors': '8 MEMS sensors'
        },
        features: [
          'Ultra-portable 4-piece construction',
          '8-sensor compact network',
          'Travel case with charging dock',
          'Lightweight carbon fiber blank',
          'Quick-connect sensor modules',
          'Compact grip with touch controls'
        ],
        bestFor: 'Travel fishing and urban angling'
      },
      {
        id: 'ronin-surf-9ft',
        name: 'Ronin Surf 9\'',
        subtitle: 'Long-Range Surf Casting Rod',
        price: '$1,099',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Length': '9\' 0" (2.74m)',
          'Power': 'Heavy',
          'Action': 'Fast',
          'Weight': '6.8 oz (193g)',
          'Line Weight': '17-40 lb',
          'Lure Weight': '1-6 oz',
          'Battery Life': '250+ hours',
          'Sensors': '15 MEMS sensors'
        },
        features: [
          'Extra-heavy duty graphite construction',
          '15-sensor long-range network',
          'Saltwater corrosion protection',
          'Extended casting distance tracking',
          'Wave pattern analysis',
          'Reinforced guides for heavy lines'
        ],
        bestFor: 'Surf fishing and long-distance casting'
      }
    ]
  },
  'ai-reels': {
    title: 'AI-Enhanced Reels',
    icon: FiCpu,
    gradient: 'from-forest-500 to-green-600',
    description: 'Intelligent reels with machine learning and adaptive drag systems',
    products: [
      {
        id: 'ronin-ai-spinning-3000',
        name: 'Ronin AI Spinning 3000',
        subtitle: 'Smart Spinning Reel with AI Learning',
        price: '$1,299',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Size': '3000',
          'Gear Ratio': '6.2:1',
          'Weight': '8.4 oz (238g)',
          'Line Capacity': '150/12, 125/14, 100/17',
          'Drag': '18 lbs (8.2 kg)',
          'Ball Bearings': '10+1 stainless steel',
          'Battery Life': '300+ hours',
          'AI Processing': 'ARM Cortex-M7'
        },
        features: [
          'Machine learning drag adjustment',
          'Fish behavior pattern recognition',
          'Automatic line tension optimization',
          'Trip logging and analytics',
          'Weather-sealed construction',
          'Carbon fiber drag washers'
        ],
        bestFor: 'Versatile freshwater and inshore saltwater'
      },
      {
        id: 'ronin-ai-baitcasting-200',
        name: 'Ronin AI Baitcasting 200',
        subtitle: 'Professional Baitcaster with Smart Controls',
        price: '$1,499',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Size': '200',
          'Gear Ratio': '7.3:1',
          'Weight': '7.2 oz (204g)',
          'Line Capacity': '120/12, 100/14, 80/17',
          'Drag': '22 lbs (10 kg)',
          'Ball Bearings': '12+1 ceramic hybrid',
          'Battery Life': '280+ hours',
          'Brake System': 'AI-controlled magnetic'
        },
        features: [
          'Intelligent backlash prevention',
          'Adaptive casting control',
          'Precision drag modulation',
          'Tournament mode settings',
          'Titanium frame construction',
          'Digital display interface'
        ],
        bestFor: 'Bass fishing and precision casting'
      },
      {
        id: 'ronin-ai-offshore-6000',
        name: 'Ronin AI Offshore 6000',
        subtitle: 'Heavy-Duty Saltwater Smart Reel',
        price: '$1,899',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Size': '6000',
          'Gear Ratio': '5.2:1',
          'Weight': '18.2 oz (516g)',
          'Line Capacity': '300/20, 250/25, 200/30',
          'Drag': '40 lbs (18.1 kg)',
          'Ball Bearings': '14+1 sealed stainless',
          'Battery Life': '400+ hours',
          'Corrosion Rating': 'IPX8'
        },
        features: [
          'Saltwater corrosion resistance',
          'High-torque drag system',
          'Deep-sea pressure compensation',
          'Large fish detection algorithms',
          'Reinforced gear train',
          'Emergency manual override'
        ],
        bestFor: 'Offshore and big game fishing'
      },
      {
        id: 'ronin-ai-fly-78',
        name: 'Ronin AI Fly 7/8',
        subtitle: 'Intelligent Fly Reel System',
        price: '$899',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Line Weight': '7/8 weight',
          'Diameter': '3.8" (97mm)',
          'Weight': '5.6 oz (159g)',
          'Backing Capacity': '150 yards 20lb',
          'Drag': 'Sealed carbon fiber',
          'Arbor': 'Large arbor design',
          'Battery Life': '200+ hours',
          'Waterproof Rating': 'IPX7'
        },
        features: [
          'Silent retrieve operation',
          'Temperature compensation',
          'Current analysis for drift fishing',
          'Fly line management system',
          'Precision drag control',
          'Lightweight aerospace aluminum'
        ],
        bestFor: 'Fly fishing in rivers and streams'
      }
    ]
  },
  'adaptive-lures': {
    title: 'Adaptive Lures',
    icon: FiEye,
    gradient: 'from-purple-500 to-pink-600',
    description: 'Color-changing lures with environmental adaptation technology',
    products: [
      {
        id: 'ronin-chameleon-bass',
        name: 'Ronin Chameleon Bass',
        subtitle: 'Adaptive Bass Lure with Color Morphing',
        price: '$199',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Length': '4.5" (114mm)',
          'Weight': '1.2 oz (34g)',
          'Depth Range': '2-8 feet',
          'Battery Life': '60+ hours',
          'Color Modes': '24 adaptive patterns',
          'Water Rating': 'IPX8 submersible',
          'Action': 'Suspending/Slow sinking',
          'Hooks': 'VMC treble hooks #4'
        },
        features: [
          'Real-time color adaptation',
          'Water clarity sensors',
          'Predatory fish attraction patterns',
          'Erratic swimming action',
          'Temperature-responsive behavior',
          'Smartphone app control'
        ],
        bestFor: 'Bass fishing in varying water conditions'
      },
      {
        id: 'ronin-phantom-trout',
        name: 'Ronin Phantom Trout',
        subtitle: 'Ultra-Realistic Trout Mimicking Lure',
        price: '$149',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Length': '3" (76mm)',
          'Weight': '0.6 oz (17g)',
          'Depth Range': '1-4 feet',
          'Battery Life': '45+ hours',
          'Color Modes': '16 trout patterns',
          'Water Rating': 'IPX8 submersible',
          'Action': 'Floating/Diving',
          'Hooks': 'Barbless single hook #8'
        },
        features: [
          'Insect hatch pattern matching',
          'Natural swimming movements',
          'Light sensitivity adaptation',
          'Minimal splash entry',
          'Eco-friendly materials',
          'Catch and release friendly'
        ],
        bestFor: 'Trout fishing in streams and lakes'
      },
      {
        id: 'ronin-predator-pike',
        name: 'Ronin Predator Pike',
        subtitle: 'Large Predator Adaptive Lure',
        price: '$249',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Length': '6" (152mm)',
          'Weight': '2.1 oz (60g)',
          'Depth Range': '3-12 feet',
          'Battery Life': '80+ hours',
          'Color Modes': '20 baitfish patterns',
          'Water Rating': 'IPX8 submersible',
          'Action': 'Fast sinking',
          'Hooks': 'Heavy duty trebles #2'
        },
        features: [
          'Aggressive predator targeting',
          'High-contrast flash patterns',
          'Vibration pattern generation',
          'Wounded baitfish simulation',
          'Heavy duty construction',
          'Wire leader compatibility'
        ],
        bestFor: 'Pike, muskie, and large predator fishing'
      },
      {
        id: 'ronin-saltwater-snapper',
        name: 'Ronin Saltwater Snapper',
        subtitle: 'Corrosion-Resistant Saltwater Lure',
        price: '$219',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Length': '5" (127mm)',
          'Weight': '1.8 oz (51g)',
          'Depth Range': '5-20 feet',
          'Battery Life': '70+ hours',
          'Color Modes': '18 saltwater patterns',
          'Water Rating': 'IPX8 saltwater rated',
          'Action': 'Slow sinking',
          'Hooks': 'Stainless steel #1'
        },
        features: [
          'Saltwater corrosion resistance',
          'Tidal current adaptation',
          'Baitfish school simulation',
          'UV-reactive color changes',
          'Heavy current stability',
          'Reinforced electronics housing'
        ],
        bestFor: 'Inshore saltwater fishing'
      },
      {
        id: 'ronin-ice-walleye',
        name: 'Ronin Ice Walleye',
        subtitle: 'Cold Water Specialized Lure',
        price: '$179',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Length': '3.5" (89mm)',
          'Weight': '0.8 oz (23g)',
          'Depth Range': '10-40 feet',
          'Battery Life': '100+ hours (cold weather)',
          'Color Modes': '12 ice fishing patterns',
          'Water Rating': 'IPX8 freeze resistant',
          'Action': 'Vertical jigging',
          'Hooks': 'Single hook #6'
        },
        features: [
          'Cold weather battery optimization',
          'Ice fishing specific patterns',
          'Subtle movement algorithms',
          'Low-light visibility enhancement',
          'Freeze-resistant housing',
          'Vertical presentation optimization'
        ],
        bestFor: 'Ice fishing and deep water applications'
      }
    ]
  },
  'smart-bobbers': {
    title: 'Smart Bobbers & Indicators',
    icon: FiRadio,
    gradient: 'from-orange-500 to-red-600',
    description: 'Advanced bite detection with wireless connectivity and analytics',
    products: [
      {
        id: 'ronin-precision-bobber',
        name: 'Ronin Precision Bobber',
        subtitle: 'High-Sensitivity Smart Float',
        price: '$149',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Dimensions': '2.5" x 1.5" (64mm x 38mm)',
          'Weight': '0.4 oz (11g)',
          'Battery Life': '120+ hours',
          'Range': '400 feet (122m)',
          'Water Rating': 'IPX8 submersible',
          'Sensitivity': '7 adjustable levels',
          'Connectivity': 'Bluetooth 5.0',
          'LED Colors': '12 customizable'
        },
        features: [
          'Ultra-sensitive bite detection',
          'Customizable alert patterns',
          'Wind and wave compensation',
          'Night fishing LED system',
          'Multiple rod monitoring',
          'Historical bite analysis'
        ],
        bestFor: 'Still fishing and live bait presentations'
      },
      {
        id: 'ronin-stealth-indicator',
        name: 'Ronin Stealth Indicator',
        subtitle: 'Minimal Profile Smart Indicator',
        price: '$99',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Dimensions': '1.5" x 1" (38mm x 25mm)',
          'Weight': '0.2 oz (6g)',
          'Battery Life': '80+ hours',
          'Range': '250 feet (76m)',
          'Water Rating': 'IPX8 submersible',
          'Sensitivity': '5 preset levels',
          'Connectivity': 'Bluetooth 5.0',
          'Profile': 'Low visibility design'
        },
        features: [
          'Minimal water disturbance',
          'Stealth mode operation',
          'Quick-attach system',
          'Vibration-only alerts',
          'Compact carrying case',
          'Single-button operation'
        ],
        bestFor: 'Finesse fishing and spooky fish conditions'
      },
      {
        id: 'ronin-surf-beacon',
        name: 'Ronin Surf Beacon',
        subtitle: 'Long-Range Surf Fishing Indicator',
        price: '$199',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Dimensions': '3" x 2" (76mm x 51mm)',
          'Weight': '0.8 oz (23g)',
          'Battery Life': '150+ hours',
          'Range': '800 feet (244m)',
          'Water Rating': 'IPX8 saltwater rated',
          'Sensitivity': '10 adjustable levels',
          'Connectivity': 'Long-range radio',
          'Visibility': 'High-intensity LED'
        },
        features: [
          'Extended range communication',
          'Saltwater corrosion resistance',
          'Wave action filtering',
          'GPS location tracking',
          'Emergency beacon mode',
          'Solar charging capability'
        ],
        bestFor: 'Surf fishing and long-distance applications'
      },
      {
        id: 'ronin-ice-alert',
        name: 'Ronin Ice Alert',
        subtitle: 'Cold Weather Smart Tip-Up',
        price: '$129',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        specs: {
          'Dimensions': '2" x 1.5" (51mm x 38mm)',
          'Weight': '0.3 oz (9g)',
          'Battery Life': '200+ hours (cold)',
          'Range': '300 feet (91m)',
          'Water Rating': 'IPX8 freeze resistant',
          'Sensitivity': '6 cold-weather levels',
          'Connectivity': 'Cold-weather Bluetooth',
          'Temperature Range': '-40°F to 120°F'
        },
        features: [
          'Freeze-resistant operation',
          'Cold weather battery optimization',
          'Ice hole compatibility',
          'Flag-up simulation',
          'Multiple hole monitoring',
          'Heated carrying case'
        ],
        bestFor: 'Ice fishing and sub-zero conditions'
      }
    ]
  }
};

function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('smart-rods');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const currentCategory = productCategories[selectedCategory];

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
            Complete Product Catalog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of AI-enhanced fishing gear, each meticulously designed 
            to enhance your angling experience with cutting-edge technology.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(productCategories).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedCategory === key
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <SafeIcon icon={category.icon} className="h-5 w-5" />
              <span>{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Category Header */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <div className={`inline-flex items-center space-x-3 bg-gradient-to-r ${currentCategory.gradient} text-white px-8 py-4 rounded-2xl mb-4`}>
            <SafeIcon icon={currentCategory.icon} className="h-8 w-8" />
            <h3 className="text-2xl font-bold">{currentCategory.title}</h3>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {currentCategory.description}
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {currentCategory.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentCategory.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-900">{product.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h4>
                <p className="text-sm text-gray-500 font-medium mb-3">{product.subtitle}</p>
                <p className="text-xs text-gray-600 mb-4">{product.bestFor}</p>
                
                <div className="space-y-2 mb-4">
                  {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-xs">
                      <span className="text-gray-500">{key}:</span>
                      <span className="text-gray-700 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${currentCategory.gradient} text-white py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all`}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h3>
                    <p className="text-gray-600">{selectedProduct.subtitle}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <SafeIcon icon={FiX} className="h-6 w-6" />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="w-full h-64 object-cover rounded-xl mb-4"
                    />
                    <div className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.price}</div>
                    <p className="text-gray-600 mb-4">{selectedProduct.bestFor}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Technical Specifications</h4>
                    <div className="space-y-2 mb-6">
                      {Object.entries(selectedProduct.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-1 border-b border-gray-100">
                          <span className="text-gray-600">{key}</span>
                          <span className="text-gray-900 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentCategory.gradient} mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 bg-gradient-to-r ${currentCategory.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all`}
                  >
                    Add to Cart
                  </motion.button>
                  <Link
                    to={`/product/${selectedProduct.id}`}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-colors text-center"
                  >
                    Full Details
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ProductCatalog;