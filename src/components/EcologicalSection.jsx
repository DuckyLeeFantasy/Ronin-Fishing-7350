import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGlobe, FiTrendingUp, FiEye, FiDatabase, FiCloud, FiActivity } = FiIcons;

function EcologicalSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-ocean-900 via-blue-900 to-forest-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="w-full h-full bg-white bg-opacity-5 bg-repeat" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ecological Intelligence Platform
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Leverage the capabilities of our advanced Ecological Intelligence Platform, where artificial intelligence intersects with environmental data to deliver comprehensive analyses that guide anglers in their pursuits. This powerful tool allows for the precise prediction of fish behavior and the strategic identification of prime fishing locations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Advanced Environmental Analysis</h3>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Our platform consistently monitors crucial factors including atmospheric conditions, water quality metrics, seasonal fluctuations, and the health of local ecosystems, delivering actionable insights tailored to your specific fishing conditions.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <SafeIcon icon={FiCloud} className="h-8 w-8 text-blue-300 mb-3" />
                <h4 className="font-semibold mb-2">Weather Integration</h4>
                <p className="text-sm text-blue-200">Real-time weather updates and thorough forecasts</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <SafeIcon icon={FiActivity} className="h-8 w-8 text-green-300 mb-3" />
                <h4 className="font-semibold mb-2">Water Quality Monitoring</h4>
                <p className="text-sm text-blue-200">Temperature, pH, and oxygen level assessment</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <SafeIcon icon={FiTrendingUp} className="h-8 w-8 text-purple-300 mb-3" />
                <h4 className="font-semibold mb-2">Seasonal Patterns</h4>
                <p className="text-sm text-blue-200">Migration and breeding cycle analysis</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <SafeIcon icon={FiDatabase} className="h-8 w-8 text-yellow-300 mb-3" />
                <h4 className="font-semibold mb-2">Historical Data</h4>
                <p className="text-sm text-blue-200">Comprehensive ecological research insights</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold mb-6 text-center">Predictive Analytics Dashboard</h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiGlobe} className="h-5 w-5 text-blue-300" />
                    <span>Location Score</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-white/20 rounded-full">
                      <div className="w-20 h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">87%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiEye} className="h-5 w-5 text-purple-300" />
                    <span>Fish Activity Level</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-white/20 rounded-full">
                      <div className="w-16 h-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">73%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiTrendingUp} className="h-5 w-5 text-yellow-300" />
                    <span>Success Probability Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-white/20 rounded-full">
                      <div className="w-22 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">94%</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-400/30">
                <div className="flex items-center space-x-2 mb-2">
                  <SafeIcon icon={FiActivity} className="h-4 w-4 text-green-300" />
                  <span className="text-sm font-medium text-green-200">Optimal Conditions Detected</span>
                </div>
                <p className="text-xs text-green-200">
                  Peak feeding time in 2 hours. Water temperature optimal for bass activity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Discover Untapped Ecological Niches</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our platform facilitates the detection of hidden fishing opportunities through advanced ecosystem analysis and predictive algorithms, enabling you to discover the most fruitful locations for your angling adventures.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all">
            Explore Ecological Data
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default EcologicalSection;