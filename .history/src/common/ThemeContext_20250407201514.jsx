import React, { createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const {theme, setTheme} = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.body.className = savedTheme;
    }, []);

    const toggleTheme = () => {
        console.log("Theme switched");
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem("theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}