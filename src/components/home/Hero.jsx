import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <div>
            <h1 className="mt-24 leading-[80px] text-[54px] font-bold text-center dark:text-white">
                Explore the Possiblities of{" "}
                <span className=" relative text-violet-700 underline-offset-[16px]">
                    <span className="absolute left-0 w-full h-[3px]  -bottom-2 bg-[linear-gradient(45deg,_#726bff,_#57b6fe)] "></span>
                    AI Book Writing
                </span>{" "}
                with BookAI
            </h1>
            <h2 className="w-3/5 mx-auto mt-12 text-lg font-medium text-center text-gray-700 opacity-90 dark:text-gray-400">
                Unleash the power of AI to write captivating books in minutes. Download, Distribute
                wherever you want. Generate unlimited free books
            </h2>
            <div className="mx-auto text-white font-medium *:text-xl  *:py-2 *:px-4 mt-8 gap-x-4 flex items-center *:rounded-3xl w-fit">
                <motion.button
                    whileHover={{ y: -4 }}
                    className="  bg-[linear-gradient(45deg,_#726bff,_#57b6fe)]">
                    Get Started
                </motion.button>
                <motion.button
                    whileHover={{ y: -4 }}
                    className="  bg-[linear-gradient(45deg,_#726bff,_#57b6fe)]">
                    Get API Access
                </motion.button>
            </div>
        </div>
    );
};

export default Hero;
