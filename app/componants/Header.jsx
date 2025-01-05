import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Correct import

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6">
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="William Mark - Frontend Web Developer"
          className="rounded-full w-32 h-32 object-cover"
        />
      </motion.div>

      {/* Intro Heading */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-[Ovo]"
      >
        Hi, I'm William Mark{" "}
        <Image
          src={assets.hand_icon}
          alt="Waving Hand Icon"
          className="w-6 h-6"
        />
      </motion.h3>

      {/* Main Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-[Ovo] leading-tight"
      >
        Frontend Web Developer Based in London
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-[Ovo] text-gray-700"
      >
        I am a frontend developer from California, USA with 10 years of experience working with companies like Microsoft, Tesla, and Apple.
      </motion.p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition dark:bg-transparent"
          href="#contact"
          aria-label="Contact Me"
        >
          Contact Me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Arrow Icon"
            className="w-4 h-4"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:border-gray-800 transition bg-white dark:text-black"
          aria-label="Download My Resume"
        >
          My Resume{" "}
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className="w-4 h-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
