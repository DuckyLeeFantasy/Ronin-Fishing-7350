import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiHeart, FiShield, FiUsers, FiTrendingUp, FiAward } = FiIcons;

const values = [
  {
    icon: FiTrendingUp,
    title: 'Innovation',
    description: 'Continuously push the boundaries of technology to create groundbreaking fishing gear.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FiHeart,
    title: 'Sustainability',
    description: 'Promote eco-friendly fishing practices and preserve aquatic environments.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: FiUsers,
    title: 'Customer Satisfaction',
    description: 'Ensure that our products exceed customer expectations and enhance their fishing experiences.',
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    icon: FiShield,
    title: 'Integrity',
    description: 'Maintain transparency and honesty in all our business practices.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: FiTarget,
    title: 'Passion',
    description: 'Foster a love for fishing and the outdoors in everything we do.',
    gradient: 'from-pink-500 to-rose-500'
  }
];

function CompanyOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Story & Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Founded in 2020, Ronin Fishing Company has quickly established itself as an industry disruptor. 
            Our journey began with a passion for fishing and a vision to leverage technology to enhance the sport.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-ocean-600 to-forest-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed mb-6">
                To empower anglers with advanced technology and ecological insights, creating unforgettable 
                fishing experiences while promoting sustainability.
              </p>
              
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be the global leader in smart fishing technology, known for our innovative products 
                and commitment to preserving aquatic ecosystems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <SafeIcon icon={FiAward} className="h-8 w-8 text-ocean-600" />
                  <h4 className="text-xl font-bold text-gray-900">Industry Leadership</h4>
                </div>
                <p className="text-gray-600">
                  Recognized as a pioneer in smart fishing technology with over 50,000 satisfied anglers worldwide.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <SafeIcon icon={FiTrendingUp} className="h-8 w-8 text-forest-600" />
                  <h4 className="text-xl font-bold text-gray-900">Proven Results</h4>
                </div>
                <p className="text-gray-600">
                  Our technology delivers a 98% success rate and helps anglers achieve 3x more catches.
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
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`bg-gradient-to-r ${value.gradient} p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <SafeIcon icon={value.icon} className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CompanyOverview;