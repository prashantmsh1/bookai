import { data } from "autoprefixer";
import React from "react";
import { FaCheckCircle, FaCogs, FaMagic, FaPencilAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";

const Workflow = () => {
    const data = [
        {
            icon: <FaMagic />,
            title: "Choose Your Genre",
            description: "Select a genre or blend multiple styles to create a unique story.",
        },
        {
            icon: <FaPencilAlt />,
            title: "Provide Key Details",
            description:
                "Enter the key details such as character names, locations, and plot points.",
        },
        {
            icon: <FaCogs />,
            title: "AI Generation",
            description:
                "Our advanced AI technology generates high-quality content based on your input.",
        },
        {
            icon: <FaCheckCircle />,
            title: "Review & Download",
            description:
                "Review the generated content and download the completed book in various formats.",
        },
    ];
    return (
        <div>
            <div className="relative p-10 mx-auto mt-12 bg-gray-600 dark:bg-violet-300 bg-opacity-10 dark:bg-opacity-10 rounded-xl md:w-11/12">
                <h1 className="text-4xl font-bold text-center dark:text-white">How it Works</h1>
                <div className="grid items-center justify-between grid-cols-1 mt-12 md:grid-cols-2 gap-y-8 gap-x-8 md:flex-row">
                    {data.map((item, index) => (
                        <div key={index} className="flex gap-x-2">
                            <div className="p-4  text-xl rounded-full bg-violet-700 *:text-white w-fit h-fit">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold dark:text-white">{item.title}</h3>
                                <p className="mt-1 text-gray-700 dark:text-white">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Workflow;
