import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiGlobe, FiPackage, FiSettings, FiUsers, FiTarget } = FiIcons;

const roadmapItems = [
  {
    phase: 'Q2 2024',
    title: 'Smart Fishing Nets',
    description: 'AI-powered nets with catch analysis and species identification capabilities',
    icon: FiTarget,
    gradient: 'from-blue-500 to-cyan-500',
    status: 'In Development'
  },
  {
    phase: 'Q3 2024',
    title: 'Underwater Drones',
    description: 'Autonomous underwater vehicles for fish tracking and environmental monitoring',
    icon: FiSettings,
    gradient: 'from-green-500 to-emerald-500',
    status: 'Planning'
  },
  {
    phase: 'Q4 2024',
    title: 'Global Expansion',
    description: 'International market entry with localized products and partnerships',
    icon: FiGlobe,
    gradient: 'from-purple-500 to-violet-500',
    status: 'Research'
  },
  {
    phase: 'Q1 2025',
    title: 'Advanced Analytics Platform',
    description: 'Enhanced AI platform with predictive weather and fish behavior modeling',
    icon: FiTrendingUp,
    gradient: 'from-orange-500 to-red-500',
    status: 'Conceptual'
  }
];

const upcomingFeatures = [
  {
    title: 'Over-the-Air Updates',
    description: 'Seamless firmware updates for all connected devices',
    icon: FiPackage
  },
  {
    title: 'Community Features',
    description: 'Social platform for anglers to share experiences and tips',
    icon: FiUsers
  },
  {
    title: 'Advanced Integrations',
    description: 'Third-party app integrations and API access for developers',
    icon: FiSettings
  },
  {
    title: 'Global Partnerships',
    description: 'Collaborations with fishing organizations worldwide',
    icon: FiGlobe
  }
];

function FutureRoadmap() {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
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
            Future Innovation Roadmap
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover what's coming next in our journey to revolutionize fishing technology. 
            Our roadmap showcases upcoming products, features, and market expansions.
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`bg-gradient-to-r ${item.gradient} p-3 rounded-full`}>
                      <SafeIcon icon={item.icon} className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">{item.phase}</div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'In Development' ? 'bg-green-500/20 text-green-300' :
                        item.status === 'Planning' ? 'bg-blue-500/20 text-blue-300' :
                        item.status === 'Research' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-gray-500/20 text-gray-300'
                      }`}>
                        {item.status}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Upcoming Platform Features
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all"
              >
                <SafeIcon icon={feature.icon} className="h-12 w-12 text-ocean-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-ocean-600 to-forest-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-6">Join Our Innovation Journey</h3>
            <p className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Be among the first to experience cutting-edge fishing technology. 
              Stay updated on our latest developments and early access opportunities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-ocean-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Subscribe for Updates
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Join Beta Program
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FutureRoadmap;