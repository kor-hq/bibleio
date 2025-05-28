import React, { useState, useEffect, useCallback, useMemo } from "react";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = React.memo(({ className = "" }) => {
  // Get the initial theme from document class
  const getThemeFromDocument = (): "light" | "dark" => {
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getThemeFromDocument);

  // Keep theme state in sync with document class
  useEffect(() => {
    const handleStorageChange = () => {
      const storedTheme = localStorage.getItem("theme") as
        | "light"
        | "dark"
        | null;
      if (storedTheme) {
        setTheme(storedTheme === "dark" ? "dark" : "light");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleToggleClick = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    const element = document.documentElement;
    if (newTheme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);
  }, [theme]);

  const ariaLabel = useMemo(
    () => `Switch to ${theme === "light" ? "dark" : "light"} theme`,
    [theme]
  );

  const sunClassName = useMemo(
    () => `sun ${theme === "dark" ? "opacity-100" : "opacity-0"} transition-opacity duration-150`,
    [theme]
  );

  const moonClassName = useMemo(
    () => `moon ${theme === "light" ? "opacity-100" : "opacity-0"} transition-opacity duration-150`,
    [theme]
  );

  return (
    <button
      aria-label={ariaLabel}
      onClick={handleToggleClick}
      className={`hover:stroke-accent-reversed text-text hover:text-accent-reversed size-[1.5rem] duration-150 ${className}`}
    >
      <svg
        width="1.5rem"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fillRule="evenodd"
          className={sunClassName}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fillRule="evenodd"
          className={moonClassName}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
        </svg>
      </svg>
    </button>
  );
});

export default ThemeSwitcher;
