import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="mt-20 bg-gray-100 text-gray-800">
      {/* Logo and Email Section */}
      <div className="text-center">
        <Image src={assets.logo} alt="Logo" className="w-36 mx-auto" />
        <div className="w-max flex items-center mx-auto gap-2 mt-4">
          <Image src={assets.mail_icon} alt="Mail Icon" className="w-6" />
          <span className="text-gray-600">atharvj07@gmail.com</span>
        </div>
      </div>

      {/* Footer Navigation Section */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="text-sm sm:text-base text-gray-600">
          © 2025 William Mark. All rights reserved.
        </p>
        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/Atharv1191?tab=repositories"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/atharv-joshi-056153236"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
