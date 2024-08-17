import React, { useContext, useEffect } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const useCheckDarkMode = () => {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    return isDarkMode;
};

export default useCheckDarkMode;
