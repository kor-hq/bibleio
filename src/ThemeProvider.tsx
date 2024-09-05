import React, { createContext, useState, useContext, useEffect } from 'react';

// TO DO
// add each and every colour combo for themes, and fix up function names, and get tailwind dark mode working

type Colour = 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'purple';
type ColourScheme = {
  bg: number[];
  fg: number[];
  accent: number[];
};
type Theme = 'light' | 'dark';

// RGB values for each and every Theme & Colour combo
const colourMap: Record<Colour, ColourScheme> = {
  gray: {
    bg: [18, 28, 12],
    fg: [50, 51, 5],
    accent: [10, 100, 155],
  },
  blue: {
    bg: [128, 28, 128],
    fg: [50, 416, 50],
    accent: [100, 200, 100],
  },
  green: {
    bg: [28, 128, 28],
    fg: [50, 50, 50],
    accent: [100, 10, 0],
  },
  red: {
    bg: [128, 128, 128],
    fg: [50, 50, 50],
    accent: [100, 100, 100],
  },
  yellow: {
    bg: [118, 28, 12],
    fg: [50, 50, 5],
    accent: [10, 0, 60],
  },
  purple: {
    bg: [128, 128, 128],
    fg: [50, 50, 50],
    accent: [100, 1, 100],
  },
};

// Interface for custom storage methods
export interface ThemeStorage {
  saveTheme: (data: { theme: Theme; colour: Colour }) => void;
  getTheme: () => {
    theme: Theme | 'light';
    colour: Colour | 'gray';
  };
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
  colour: Colour;
  changeColour: (colour: Colour) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  colour: 'red', // Default is red
  changeColour: () => {},
});

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: React.ReactNode;
  storage: ThemeStorage; // Accepts custom storage implementation
};

// Function to apply the theme
function applyThemeWithColour(colour: Colour) {
  const root = document.documentElement;
  const { bg, fg, accent } = colourMap[colour];

  // Apply the CSS variables for light or dark mode
  root.style.setProperty('--accent', `${accent}`);
  root.style.setProperty('--fg', `${fg}`);
  root.style.setProperty('--bg', `${bg}`);
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
  const [colour, setColour] = useState<Colour>('gray');

  const toggleTheme = () => {
    const newMode = 'dark';
    setTheme(newMode);
    applyDarkMode(newMode);
    storage.saveTheme({ theme: newMode, colour });
  };

  const changeColour = (colour: Colour) => {
    setColour(colour);
    applyThemeWithColour(colour);
    storage.saveTheme({ theme, colour: colour });
  };

  useEffect(() => {
    const { theme: storedTheme, colour: storedColour } = storage.getTheme();

    if (storedTheme !== null) {
      setTheme(storedTheme);
      applyDarkMode(storedTheme);
    }

    if (storedColour !== null) {
      setColour(storedColour);
      applyThemeWithColour(storedColour);
    }
  }, [storage]);

  return (
    <ThemeContext.Provider value={{ theme, colour, toggleTheme, changeColour }}>
      {children}
    </ThemeContext.Provider>
  );
};
