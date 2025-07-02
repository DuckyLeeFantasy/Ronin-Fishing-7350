import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiTrendingUp, FiTarget, FiDollarSign, FiCalendar, FiAward } = FiIcons;

const targetAudience = [
  {
    title: 'Demographics',
    description: 'Age 25-55, predominantly male, passionate about fishing and technology',
    icon: FiUsers,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Fishing Preferences',
    description: 'Enthusiasts who enjoy freshwater and saltwater fishing, competitive anglers',
    icon: FiTarget,
    gradient: 'from-green-500 to-emerald-500'
  }
];

const marketingChannels = [
  {
    channel: 'Social Media',
    description: 'Engage with anglers on Instagram, Facebook, and YouTube',
    reach: '500K+ followers',
    icon: FiUsers
  },
  {
    channel: 'Content Marketing',
    description: 'Educational blog posts, videos, and infographics',
    reach: '100K+ monthly views',
    icon: FiTrendingUp
  },
  {
    channel: 'SEO Optimization',
    description: 'Improve search rankings and drive organic traffic',
    reach: '250K+ organic visits',
    icon: FiTarget
  },
  {
    channel: 'Influencer Partnerships',
    description: 'Collaborate with fishing professionals and content creators',
    reach: '1M+ combined reach',
    icon: FiAward
  }
];

const salesProjections = [
  {
    year: 'Year 1',
    revenue: '$500,000',
    focus: 'Establishing brand presence and gaining initial market traction',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    year: 'Year 2',
    revenue: '$1,200,000',
    focus: 'Expanding product offerings and increasing marketing efforts',
    color: 'from-green-500 to-emerald-500'
  },
  {
    year: 'Year 3',
    revenue: '$2,500,000',
    focus: 'Achieving market penetration and industry leadership',
    color: 'from-purple-500 to-violet-500'
  }
];

function MarketingStrategy() {
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
            Marketing & Growth Strategy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive marketing approach targets passionate anglers with innovative technology, 
            building a community of satisfied customers who drive organic growth.
          </p>
        </motion.div>

        {/* Target Audience */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Target Audience
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className={`bg-gradient-to-r ${audience.gradient} p-4 rounded-full w-16 h-16 mx-auto mb-6`}>
                  <SafeIcon icon={audience.icon} className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{audience.title}</h4>
                <p className="text-gray-600 leading-relaxed">{audience.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marketing Channels */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Marketing Channels
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingChannels.map((channel, index) => (
              <motion.div
                key={channel.channel}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-ocean-200 hover:shadow-lg transition-all"
              >
                <SafeIcon icon={channel.icon} className="h-12 w-12 text-ocean-600 mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-3">{channel.channel}</h4>
                <p className="text-gray-600 text-sm mb-3">{channel.description}</p>
                <div className="bg-ocean-50 px-3 py-1 rounded-full">
                  <span className="text-ocean-700 text-xs font-semibold">{channel.reach}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sales Projections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Growth Projections
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {salesProjections.map((projection, index) => (
              <motion.div
                key={projection.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${projection.color} rounded-2xl p-8 text-white h-full`}>
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-2xl font-bold">{projection.year}</h4>
                    <SafeIcon icon={FiDollarSign} className="h-8 w-8" />
                  </div>
                  
                  <div className="text-4xl font-bold mb-4">{projection.revenue}</div>
                  <p className="text-lg opacity-90">{projection.focus}</p>
                  
                  <div className="absolute -top-2 -right-2 bg-white rounded-full p-2">
                    <SafeIcon icon={FiCalendar} className="h-6 w-6 text-gray-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-ocean-600 to-forest-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Customer-Centric Approach</h3>
            <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              We provide comprehensive support through multiple channels with a response time of less than 24 hours, 
              ensuring every angler receives the assistance they need.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <SafeIcon icon={FiUsers} className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Multi-Channel Support</h4>
                <p className="text-sm opacity-90">Email, Phone & Live Chat</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <SafeIcon icon={FiTrendingUp} className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Fast Response</h4>
                <p className="text-sm opacity-90">Under 24 Hours</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <SafeIcon icon={FiAward} className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Continuous Improvement</h4>
                <p className="text-sm opacity-90">Feedback-Driven Updates</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MarketingStrategy;