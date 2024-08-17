import React, { useContext, useEffect } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <button onClick={toggleDarkMode} className="p-2 md:p-4 ">
            {isDarkMode ? <MdOutlineLightMode className="dark:text-neutral-200" /> : <MdDarkMode />}
        </button>
    );
};

export default DarkModeToggle;
