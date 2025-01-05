import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Make sure motion is imported

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenu = useRef();

  const openMenu = () => {
    if (sideMenu.current) {
      sideMenu.current.style.transform = "translateX(0)";
    }
  };

  const closeMenu = () => {
    if (sideMenu.current) {
      sideMenu.current.style.transform = "translateX(100%)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 
          ${isScroll
            ? "bg-white dark:bg-darkTheme bg-opacity-50 backdrop-blur-lg shadow-sm"
            : "bg-transparent dark:bg-darkTheme dark:shadow-white/20"
          }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Menu */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
            ${isScroll 
              ? "dark:bg-darkTheme dark:shadow-white/20"
              : "bg-white bg-opacity-70 shadow-md dark:border dark:border-white/50 dark:bg-darkTheme"
            }`}
        >
          {['Home', 'About Me', 'Services', 'My Work', 'Contact Me'].map((item, index) => (
            <li key={index}>
              <a className="font-[Ovo] dark:text-white" href={`#${item.replace(/\s+/g, '').toLowerCase()}`} aria-label={item}>{item}</a>
            </li>
          ))}
        </motion.ul>

        {/* Right-side icons and buttons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button onClick={() => setIsDarkMode(prev => !prev)} aria-label="Toggle Dark Mode">
            <Image 
              src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
              alt="Theme Toggle" 
              className="w-6" 
            />
          </button>

          {/* Contact Button */}
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 font-[Ovo] 
              border-gray-500 dark:border-white/50 dark:text-white"
            href="#contact"
            aria-label="Go to Contact Section"
          >
            Contact
            <Image 
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} 
              alt="Arrow Icon" 
              className="w-3" 
            />
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3" onClick={openMenu} aria-label="Open Mobile Menu">
            <Image 
              src={isDarkMode ? assets.menu_white : assets.menu_black} 
              alt="Menu Icon" 
              className="w-6" 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.ul
          ref={sideMenu}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 bottom-0 w-64 h-screen 
            bg-rose-50 dark:bg-darkTheme transform translate-x-full transition-transform duration-500 z-50 shadow-lg"
          style={{ willChange: "transform" }}
        >
          {/* Close Button */}
          <div onClick={closeMenu} className="absolute right-6 top-6 cursor-pointer">
            <Image 
              src={isDarkMode ? assets.close_white : assets.close_black} 
              alt="Close Icon" 
              className="w-5" 
            />
          </div>
          {['Home', 'About Me', 'Services', 'My Work', 'Contact Me'].map((item, index) => (
            <li key={index}>
              <a onClick={closeMenu} className="font-[Ovo] dark:text-white" href={`#${item.replace(/\s+/g, '').toLowerCase()}`} aria-label={item}>{item}</a>
            </li>
          ))}
        </motion.ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
