'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 w-full font-popins transition-transform duration-300 ease-in-out hidden lg:block">
      <div className="px-2 lg:px-14 w-full">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/logo.png" 
              alt="3DIMLI Logo" 
              className="h-8 w-auto"
              onError={(e) => {
                // Fallback if logo image doesn't exist
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="flex items-center space-x-1">
              <span className="text-lg font-bold text-gray-900 dark:text-white">3DIMLI</span>
              <div className="flex items-center space-x-1">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">BETA</span>
                <span className="text-xs text-gray-500">1.0.1</span>
              </div>
            </div>
          </motion.a>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <a 
              href="/" 
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium flex items-center">
                Discover
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a 
              href="/features" 
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              Features
            </a>
            <a 
              href="/pricing" 
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              Pricing
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="search"
                className="w-32 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Discord */}
            <motion.a
              href="https://discord.gg/d48csuWe46"
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/discord-icon.png" 
                alt="Discord" 
                className="w-5 h-5"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-sm font-medium">Discord</span>
            </motion.a>

            {/* Upload */}
            <motion.div
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/upload-icon.png" 
                alt="Upload" 
                className="w-5 h-5"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-sm font-medium">Upload</span>
            </motion.div>

            {/* User Menu */}
            <motion.button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/user-icon.png" 
                alt="User" 
                className="w-6 h-6"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
