import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCpu, FiCode, FiBrain, FiHardDrive, FiWifi, FiBatteryCharging } = FiIcons;

const techCategories = [
  {
    title: 'Hardware Components',
    icon: FiCpu,
    gradient: 'from-blue-500 to-cyan-500',
    items: [
      'MEMS sensors for precise motion detection',
      'ARM Cortex-M series microcontrollers',
      'Bluetooth 5.0 communication modules',
      'Rechargeable lithium-ion batteries'
    ]
  },
  {
    title: 'Software Stack',
    icon: FiCode,
    gradient: 'from-green-500 to-emerald-500',
    items: [
      'Custom lightweight embedded OS',
      'C/C++ and Python development',
      'Arduino and ESP-IDF frameworks',
      'Real-time data processing systems'
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: FiBrain,
    gradient: 'from-purple-500 to-violet-500',
    items: [
      'TensorFlow Lite for embedded inference',
      'Supervised learning for behavior analysis',
      'Custom neural network models',
      'Real-time predictive algorithms'
    ]
  }
];

const specifications = [
  {
    category: 'Smart Fishing Rods',
    specs: [
      { label: 'Material', value: 'High-quality graphite' },
      { label: 'Sensor Type', value: 'MEMS sensors' },
      { label: 'Battery Life', value: 'Up to 20 hours' },
      { label: 'Connectivity', value: 'Bluetooth 5.0' },
      { label: 'Weight', value: '~150 grams' }
    ]
  },
  {
    category: 'AI-Enhanced Reels',
    specs: [
      { label: 'Material', value: 'Anodized aluminum' },
      { label: 'Gear Ratio', value: '6.2:1 high-speed' },
      { label: 'Drag System', value: 'Carbon fiber washers' },
      { label: 'Battery Life', value: 'Up to 30 hours' },
      { label: 'Connectivity', value: 'Bluetooth 5.0' }
    ]
  },
  {
    category: 'Adaptive Lures',
    specs: [
      { label: 'Material', value: 'Eco-friendly plastics' },
      { label: 'Sensors', value: 'Optical & environmental' },
      { label: 'Battery Life', value: 'Up to 15 hours' },
      { label: 'Connectivity', value: 'Bluetooth 5.0' },
      { label: 'Adaptability', value: 'Color & pattern changing' }
    ]
  },
  {
    category: 'Smart Bobbers',
    specs: [
      { label: 'Material', value: 'High-density foam' },
      { label: 'Sensors', value: 'Pressure & motion' },
      { label: 'Battery Life', value: 'Up to 24 hours' },
      { label: 'Connectivity', value: 'Bluetooth 5.0' },
      { label: 'Detection', value: 'High-accuracy bite alerts' }
    ]
  }
];

function TechnologyStack() {
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
            Advanced Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our products are built on cutting-edge technology, combining hardware innovation with 
            sophisticated software and AI capabilities to deliver unparalleled fishing experiences.
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className={`bg-gradient-to-r ${category.gradient} p-4 rounded-full w-16 h-16 mb-6`}>
                <SafeIcon icon={category.icon} className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
              
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technical Specifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {specifications.map((product, index) => (
              <motion.div
                key={product.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-ocean-600 to-forest-600 p-6">
                  <h4 className="text-xl font-bold text-white">{product.category}</h4>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-700">{spec.label}</span>
                        <span className="text-gray-900 font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-ocean-600 to-forest-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Agile Development Process</h3>
            <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              We follow industry-leading Agile and Scrum methodologies, ensuring iterative development, 
              continuous testing, and seamless integration of hardware and software components.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <SafeIcon icon={FiCode} className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Design</h4>
                <p className="text-sm opacity-90">Concept & Prototyping</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <SafeIcon icon={FiCpu} className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Develop</h4>
                <p className="text-sm opacity-90">Hardware & Software</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <SafeIcon icon={FiHardDrive} className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Test</h4>
                <p className="text-sm opacity-90">Quality Assurance</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <SafeIcon icon={FiWifi} className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Deploy</h4>
                <p className="text-sm opacity-90">OTA Updates</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TechnologyStack;