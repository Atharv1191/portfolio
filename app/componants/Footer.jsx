import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Footer = ({ isDarkMode }) => {
  return (
    <div className={`mt-20 ${isDarkMode ? 'bg-darkTheme text-white' : 'bg-gray-100 text-gray-800'}`}>
      {/* Logo and Email Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-36 mx-auto" />
        <div className="w-max flex items-center mx-auto gap-2 mt-4">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="Mail Icon" className="w-6" />
          <a href="mailto:atharvj07@gmail.com" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>atharvj07@gmail.com</a>
        </div>
      </motion.div>

      {/* Footer Navigation Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`text-center sm:flex items-center justify-between border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-400'} mx-[10%] mt-12 py-6`}
      >
        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm sm:text-base`}>
          © 2025 William Mark. All rights reserved.
        </p>
        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/Atharv1191?tab=repositories"
              className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/atharv-joshi-056153236"
              className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Footer;
