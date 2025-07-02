import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiCheck, FiStar, FiActivity, FiCpu, FiEye, FiRadio } = FiIcons;

const productDetails = {
  'smart-rod': {
    title: 'Smart Fishing Rods',
    subtitle: 'AI-Powered Precision for Enhanced Performance',
    price: '$899',
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: FiActivity,
    gradient: 'from-ocean-500 to-blue-600',
    description: 'Unleash your full fishing potential with our flagship smart fishing rods, expertly engineered from high-quality, lightweight graphite, renowned for its superior strength and sensitivity. Each rod is integrated with state-of-the-art micro-sensors that provide invaluable data on casting distance, vibrations, and real-time fish activity while you fish. As you strike the water, these sensors relay vital information to our sophisticated mobile application, empowering you to make informed, strategic decisions based on immediate environmental feedback.',
    features: [
      'High-modulus graphite construction for superior strength and sensitivity',
      'Network of micro-sensors for comprehensive data collection',
      'Cast distance measurement with GPS precision',
      'Vibration analysis to detect fish activity and underwater structures',
      'Real-time data transmission to mobile application',
      'Weather-resistant design for all fishing conditions',
      'Ergonomic textured grip for comfort during extended use',
      'Compatible with all major reel types'
    ],
    specs: {
      'Length': '7\' 6" (2.29m)',
      'Weight': '4.2 oz (119g)',
      'Power': 'Medium Heavy',
      'Action': 'Fast',
      'Line Weight': '12-25 lb',
      'Lure Weight': '1/4 - 1 oz',
      'Battery Life': '200+ hours',
      'Connectivity': 'Bluetooth 5.0'
    },
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ]
  },
  'ai-reel': {
    title: 'AI-Enhanced Reels',
    subtitle: 'Your Intelligent Companion for Unmatched Adventures',
    price: '$1,299',
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: FiCpu,
    gradient: 'from-forest-500 to-green-600',
    description: 'Experience the pinnacle of fishing technology with our AI-enhanced reels, designed with robust, corrosion-resistant materials to withstand the most demanding marine environments. These reels are equipped with advanced machine learning algorithms capable of observing fish behavior, enabling them to adjust drag settings dynamically based on real-time conditions. Imagine experiencing the seamless synergy between angler and equipment, where your reel learns from each outing and continually optimizes itself for maximum performance and efficiency.',
    features: [
      'Corrosion-resistant aluminum construction',
      'Machine learning algorithms for behavior analysis',
      'Automatic drag adjustment based on fish fighting patterns',
      'Real-time fish behavior monitoring',
      'Trip logging and performance analytics',
      'Adaptive learning from each fishing session',
      'Waterproof electronics with IPX8 rating',
      'Ultra-smooth carbon fiber drag system'
    ],
    specs: {
      'Gear Ratio': '6.2:1',
      'Weight': '8.4 oz (238g)',
      'Line Capacity': '150/12, 125/14, 100/17',
      'Drag': '18 lbs (8.2 kg)',
      'Ball Bearings': '10+1',
      'Battery Life': '300+ hours',
      'Memory': '32GB internal storage',
      'Connectivity': 'WiFi + Bluetooth'
    },
    gallery: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ]
  },
  'adaptive-lures': {
    title: 'Adaptive Lures',
    subtitle: 'Dynamic Fishing Solutions for Relentless Anglers',
    price: '$199',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: FiEye,
    gradient: 'from-purple-500 to-pink-600',
    description: 'Transform your baiting strategy with our innovative adaptive lures, engineered to adapt fluidly to their environment. These cutting-edge lures feature advanced technology that allows them to change color and patterns based on surrounding water conditions and the detected presence of fish, making them incredibly effective in a variety of situations. Coupled with AI-driven movements that replicate the erratic action of distressed prey, these lures create an irresistible allure for fish.',
    features: [
      'Color adaptation automatically altering hues and patterns',
      'Environmental sensors monitoring temperature and light',
      'Lifelike movements mimicking distressed prey',
      'Species targeting designed for different fish types',
      'Waterproof electronics with advanced circuitry',
      'Rechargeable battery with 50+ hour life',
      'Multiple predefined behavior patterns',
      'Smartphone app for customization'
    ],
    specs: {
      'Length': '3.5" (89mm)',
      'Weight': '0.8 oz (23g)',
      'Depth Range': '0-15 feet',
      'Battery Life': '50+ hours',
      'Color Modes': '16 adaptive patterns',
      'Water Rating': 'IPX8 waterproof',
      'Connectivity': 'Bluetooth 5.0',
      'Charging': 'Wireless charging dock'
    },
    gallery: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ]
  },
  'smart-bobbers': {
    title: 'Smart Bobbers',
    subtitle: 'Innovative Technology for Accurate Bite Detection',
    price: '$149',
    rating: 4.6,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    icon: FiRadio,
    gradient: 'from-orange-500 to-red-600',
    description: 'Enhance your fishing experience with our state-of-the-art smart bobbers, designed to be both lightweight and remarkably durable. These advanced bobbers incorporate sophisticated bite detection technology that alerts you in real time via your smartphone, ensuring you never miss the crucial moment when fish are biting. Moreover, they engage in meticulous analysis of bite patterns over time, providing insightful data that can refine your fishing strategies.',
    features: [
      'Advanced bite detection with impressive accuracy',
      'Real-time alerts sent directly to smartphone',
      'Pattern analysis compiling historical data',
      'Exceptional stability in challenging conditions',
      'Long-range wireless connectivity up to 300 feet',
      'Weather-resistant construction',
      'Multiple sensitivity settings',
      'Detailed fishing session analytics'
    ],
    specs: {
      'Dimensions': '2" x 1.5" (51mm x 38mm)',
      'Weight': '0.3 oz (8g)',
      'Battery Life': '100+ hours',
      'Range': '300 feet (91m)',
      'Water Rating': 'IPX8 submersible',
      'Sensitivity': '5 adjustable levels',
      'Connectivity': 'Bluetooth 5.0',
      'Alerts': 'Sound, vibration, visual'
    },
    gallery: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    ]
  }
};

function ProductDetail() {
  const { id } = useParams();
  const product = productDetails[id];

  if (!product) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/" className="text-ocean-600 hover:text-ocean-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8"
          >
            <SafeIcon icon={FiArrowLeft} className="h-4 w-4" />
            <span>Back to Products</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((img, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={img} 
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className={`bg-gradient-to-r ${product.gradient} p-2 rounded-lg`}>
                  <SafeIcon icon={product.icon} className="h-6 w-6 text-white" />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <SafeIcon 
                        key={i} 
                        icon={FiStar} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{product.subtitle}</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">{product.price}</div>

              <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>

              <div className="space-y-3 mb-8">
                <h3 className="text-lg font-semibold text-gray-900">Key Features:</h3>
                {product.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 bg-gradient-to-r ${product.gradient} text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all`}
                >
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-colors"
                >
                  Try Demo
                </motion.button>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* All Features */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Feature List</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductDetail;