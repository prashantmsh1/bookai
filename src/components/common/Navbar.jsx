import React from "react";
import { useContext } from "react";
import DarkModeToggle from "./DarkModeToggle";
const Navbar = () => {
    return (
        <div className="z-50 flex justify-between py-4">
            <div className="flex items-center ">
                <div className=" bg-[linear-gradient(45deg,_#726bff,_#57b6fe)] p-4 rounded-full"></div>
                <div className="flex items-center ">
                    <img
                        className=" h-[50px] w-[50px]"
                        src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
                        alt=""
                    />
                    <h1 className="text-xl font-bold md:text-3xl dark:text-white">BookAI</h1>
                </div>
            </div>
            <div className="flex items-center gap-x-2">
                <div className="flex items-center cursor-pointer gap-x-4">
                    <ul className="hidden text-lg hover:*:text-violet-900 dark:hover:*:text-violet-600  lg:flex dark:text-white gap-x-4">
                        <li>Features</li>
                        <li>How It Works</li>
                        <li>Roadmap</li>
                        <li>API</li>
                        <li>Price</li>
                        <li>Models</li>
                    </ul>
                    <div className="px-4 py-2 md:text-xl font-medium text-white bg-[linear-gradient(45deg,_#726bff,_#57b6fe)] rounded-lg ">
                        Login/Sign Up
                    </div>
                </div>
                <div className="  dark:bg-gray-700 rounded-full bg-[linear-gradient(45deg,_#726bff,_#57b6fe)]">
                    <DarkModeToggle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
