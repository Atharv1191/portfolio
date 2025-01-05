import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
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
      <nav
        className={`w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white bg-opacity-70 shadow-md"
          }`}
        >
          <li>
            <a className="font-[Ovo]" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-[Ovo]" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-[Ovo]" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-[Ovo]" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-[Ovo]" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>

        {/* Right-side icons and buttons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button>
            <Image src={assets.moon_icon} alt="Theme Toggle" className="w-6" />
          </button>

          {/* Contact Button */}
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-[Ovo]"
            href="#contact"
          >
            Contact
            <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu Icon" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenu}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 bottom-0 w-64 h-screen bg-rose-50 transform translate-x-full transition-transform duration-500 z-50 shadow-lg"
        >
          {/* Close Button */}
          <div onClick={closeMenu} className="absolute right-6 top-6 cursor-pointer">
            <Image src={assets.close_black} alt="Close Icon" className="w-5" />
          </div>
          <li>
            <a onClick={closeMenu} className="font-[Ovo]" href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-[Ovo]" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-[Ovo]" href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-[Ovo]" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-[Ovo]" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
