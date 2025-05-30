import { Moon, Sun } from "lucide-react"; /* imports icons */
import { useEffect, useState } from "react"
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
    // variables used to check if dark mode is on
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // stores last used theme option and uses it next time user loads page
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            /* set light mode */
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light"); /* stores that user prefers light */
            setIsDarkMode(false);
        } else {
            /* set dark mode */
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark"); /* stores that user prefers dark */
            setIsDarkMode(true);
        }
    };

    return (
        // light mode / dark mode buttons
        <button 
            onClick={toggleTheme}
            className={cn(
                'fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300',
                'focus:outline-hidden'
            )}
        >
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" /> // sun icon
            ) : (
                <Moon className="h-6 w-6 text-blue-900" /> // moon icon
            )}
        </button>
    );
};