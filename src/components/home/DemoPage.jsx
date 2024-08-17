import React from "react";
import { motion } from "framer-motion";

const DemoPage = () => {
    return (
        <div className="relative p-10 mx-auto mt-12 bg-gray-600 dark:bg-violet-300 bg-opacity-10 dark:bg-opacity-10 rounded-xl md:w-11/12">
            <motion.div
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="relative object-contain opacity-100 *:rounded-xl ">
                <img
                    src="	https://raw.githubusercontent.com/adarshagupta/trybookai/main/book2.png
"
                    alt=""
                />
            </motion.div>
        </div>
    );
};

export default DemoPage;
