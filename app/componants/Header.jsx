import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6">
      {/* Profile Image */}
      <div>
        <Image
          src={assets.profile_img}
          alt="Profile"
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>

      {/* Intro Heading */}
      <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-[Ovo]">
        Hi, I'm William Mark{" "}
        <Image
          src={assets.hand_icon}
          alt="Waving Hand"
          className="w-6 h-6"
        />
      </h3>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-[Ovo] leading-tight">
        Frontend Web Developer Based in London
      </h1>

      {/* Description */}
      <p className="max-w-2xl mx-auto font-[Ovo] text-gray-700">
        I am a frontend developer from California, USA with 10 years of experience 
        working with companies like Microsoft, Tesla, and Apple.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition"
          href="#contact"
        >
          Contact Me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Arrow Icon"
            className="w-4 h-4"
          />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:border-gray-800 transition"
        >
          My Resume{" "}
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className="w-4 h-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
