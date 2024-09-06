import React, { createContext, useState, useContext, useEffect } from 'react';
import { colorMap, themeMap } from './colorThemeMap';

export type Color = 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'purple';
export type Theme = 'light' | 'dark';

// Interface for custom storage methods
export interface ThemeStorage {
  saveTheme: (data: { theme: Theme; color: Color }) => void;
  getTheme: () => {
    theme: Theme | 'light';
    color: Color | 'gray';
  };
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
  color: Color;
  changeColor: (color: Color) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  color: 'red', // Default is red
  changeColor: () => {},
});

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: React.ReactNode;
  storage: ThemeStorage; // Accepts custom storage implementation
};

// Function to apply the theme
function applyThemeWithColor(color: Color) {
  const sheet = document.styleSheets[0];
  const { bg1 } = colorMap[color];

  // Apply the CSS variables for light or dark mode
  sheet.insertRule(`:root{--bg-1:${bg1}}`);
}

function applyDarkMode(theme: Theme) {
  const root = document.documentElement;
  if (theme == 'light') {
    root.classList.add('dark');
  } else if (theme == 'dark') {
    root.classList.remove('dark');
  }
}

export const ThemeProvider = ({ children, storage }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [color, setColor] = useState<Color>('gray');

  const toggleTheme = () => {
    const newMode = 'dark';
    setTheme(newMode);
    applyDarkMode(newMode);
    storage.saveTheme({ theme: newMode, color });
  };

  const changeColor = (color: Color) => {
    setColor(color);
    applyThemeWithColor(color);
    storage.saveTheme({ theme, color: color });
  };

  useEffect(() => {
    const { theme: storedTheme, color: storedColor } = storage.getTheme();

    if (storedTheme !== null) {
      setTheme(storedTheme);
      applyDarkMode(storedTheme);
    }

    if (storedColor !== null) {
      setColor(storedColor);
      applyThemeWithColor(storedColor);
    }
  }, [storage]);

  return (
    <ThemeContext.Provider value={{ theme, color, toggleTheme, changeColor }}>
      <div className="font-serif">{children}</div>
    </ThemeContext.Provider>
  );
};
