import React from "react";
import { FaRobot, FaBook, FaDownload, FaLanguage } from "react-icons/fa6";
import { motion } from "framer-motion";
const Features = () => {
    const data = [
        {
            icon: <FaRobot />,
            title: "AI-Powered Writing",
            description: "Generate high-quality content with advanced AI technology.",
        },
        {
            icon: <FaBook />,
            title: "Custom Genre",
            description: "Create stories in any genre or blend multiple styles.",
        },
        {
            icon: <FaDownload />,
            title: "Instant Downloads",
            description: "Get your completed book in various formats instantly.",
        },
        {
            icon: <FaLanguage />,
            title: "Mutlitlingual",
            description: "Generate content in multiple languages effortlessly.",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-between p-4 mt-16 md:flex-row">
            {data.map((item, index) => (
                <motion.div
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    key={index}
                    className="flex flex-col items-center justify-center p-4">
                    <div className="p-4 text-4xl rounded-full bg-violet-700 *:text-white w-fit">
                        {item.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-bold dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-center text-gray-700 dark:text-white">
                        {item.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default Features;
