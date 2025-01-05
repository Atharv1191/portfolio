import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Welcome to my web-development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
            </p>

            <div className="grid grid-cols-auto gap-5 my-10">
                {workData.map((project, index) => (
                    <div
                        key={index}
                        className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                        style={{
                            backgroundImage: `url(${project.bgImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            aspectRatio: "4/3",
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-white text-lg font-bold">{project.title}</h2>
                            <p className="text-white text-sm">{project.description}</p>
                            <div className="mt-4 flex items-center">
                                <Image
                                    src={assets.send_icon}
                                    alt="send icon"
                                    width={20}
                                    height={20}
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <a
    href=""
    className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500"
>
    Show More
    <Image
        src={assets.right_arrow_bold}
        alt="Right arrow"
        className="w-4"
    />
</a>

        </div>
    );
};

export default Work;
