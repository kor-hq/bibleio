import React, { createContext, useState, useContext, useEffect } from 'react';
import { colorMap, themeMap } from './colorThemeMap';

export type Color =
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'teal'
  | 'blue'
  | 'purple'
  | 'pink';
export type Theme = 'light' | 'dark';

// Interface for custom storage methods
export interface ThemeStorage {
  saveTheme: (data: { theme: Theme; color: Color }) => void;
  getTheme: () => {
    theme: Theme;
    color: Color;
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
  color: 'gray',
  changeColor: () => {},
});

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: React.ReactNode;
  storage: ThemeStorage; // Accepts custom storage implementation
};

function applyThemeWithColor(color: Color, theme: Theme) {
  const themeVars = themeMap[theme];
  const accentVars = colorMap[color][theme];

  const styleSheet = document.styleSheets[0];

  const lightModeRules = `:root {
    ${Object.entries(themeVars)
      .map(([key, value]) => `${key}: ${value};`)
      .join(' ')}
    ${Object.entries(accentVars)
      .map(([key, value]) => `${key}: ${value};`)
      .join(' ')}
  }`;

  const darkModeRules = `[class='dark'] {
    ${Object.entries(themeMap.dark)
      .map(([key, value]) => `${key}: ${value};`)
      .join(' ')}
    ${Object.entries(colorMap[color].dark)
      .map(([key, value]) => `${key}: ${value};`)
      .join(' ')}
  }`;

  clearInsertedRules(styleSheet);

  styleSheet.insertRule(lightModeRules, styleSheet.cssRules.length);

  if (theme === 'dark') {
    styleSheet.insertRule(darkModeRules, styleSheet.cssRules.length);
  }
}

function clearInsertedRules(styleSheet: CSSStyleSheet) {
  while (styleSheet.cssRules.length > 0) {
    styleSheet.deleteRule(0);
  }
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
    applyThemeWithColor(color, theme);
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
      applyThemeWithColor(storedColor, storedTheme);
    } else {
      setColor('gray');
      applyThemeWithColor('gray', 'light');
    }
  }, [storage]);

  return (
    <ThemeContext.Provider value={{ theme, color, toggleTheme, changeColor }}>
      <div className="font-serif">{children}</div>
    </ThemeContext.Provider>
  );
};
