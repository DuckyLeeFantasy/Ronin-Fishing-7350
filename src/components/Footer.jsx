import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } = FiIcons;

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <SafeIcon icon={FiTarget} className="h-8 w-8 text-ocean-400" />
              <span className="text-xl font-bold">Ronin Fishing Company</span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing outdoor adventures with AI-enhanced fishing gear and ecological intelligence.
            </p>
            <div className="flex space-x-4">
              <SafeIcon icon={FiFacebook} className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <SafeIcon icon={FiTwitter} className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <SafeIcon icon={FiInstagram} className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <SafeIcon icon={FiLinkedin} className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Smart Fishing Rods</a></li>
              <li><a href="#" className="hover:text-white">AI-Enhanced Reels</a></li>
              <li><a href="#" className="hover:text-white">Adaptive Lures</a></li>
              <li><a href="#" className="hover:text-white">Smart Bobbers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Technology</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">AI Platform</a></li>
              <li><a href="#" className="hover:text-white">Mobile App</a></li>
              <li><a href="#" className="hover:text-white">Ecological Data</a></li>
              <li><a href="#" className="hover:text-white">Research</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="h-4 w-4" />
                <span>hello@roninfishing.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMapPin} className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ronin Fishing Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;