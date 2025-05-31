import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface SettingsState {
  // Bible content styling settings
  redWordsOfJesus: boolean;
  textSize: number; // 0-100, where 25 is default
  lineHeight: number; // 0-100, where 50 is default (220%)
  // Flag to track if store has been hydrated from localStorage
  hydrated: boolean;

  // Actions
  setRedWordsOfJesus: (enabled: boolean) => void;
  setTextSize: (size: number) => void;
  setLineHeight: (height: number) => void;
  setHydrated: (state: boolean) => void;
}

// Helper to safely access localStorage (works in SSR context)
const getLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage;
  }
  // Return a mock storage for SSR
  return {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {}
  };
};

// Attempt to read initial values from localStorage
let initialValues = {
  redWordsOfJesus: true,
  textSize: 25,
  lineHeight: 50
};

try {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('settings-store');
    if (stored) {
      const data = JSON.parse(stored);
      if (data && data.state) {
        initialValues = {
          redWordsOfJesus: data.state.redWordsOfJesus ?? true,
          textSize: data.state.textSize ?? 25,
          lineHeight: data.state.lineHeight ?? 50
        };
        console.log("Loaded initial settings from localStorage:", initialValues);
      }
    }
  }
} catch (e) {
  console.warn("Failed to read settings from localStorage:", e);
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      // Use values from localStorage if available, otherwise defaults
      redWordsOfJesus: initialValues.redWordsOfJesus,
      textSize: initialValues.textSize,
      lineHeight: initialValues.lineHeight,
      hydrated: false,

      // Actions
      setRedWordsOfJesus: (enabled) => {
        set({ redWordsOfJesus: enabled });
        
        // Apply CSS variable immediately when setting changes
        if (typeof window !== 'undefined') {
          const root = document.documentElement;
          if (enabled) {
            root.style.removeProperty("--words-of-jesus-color");
          } else {
            root.style.setProperty("--words-of-jesus-color", "var(--color-text)");
          }
        }
      },
      setTextSize: (size) => {
        set({ textSize: size });
        
        // Apply CSS variables immediately when setting changes
        if (typeof window !== 'undefined') {
          const root = document.documentElement;
          // Map 0-100 to font size multipliers (0.8x to 1.5x at 25% default)
          const multiplier = 0.8 + (size / 100) * 0.7;
          root.style.setProperty("--bible-text-size", `${0.95 * multiplier}rem`);
          root.style.setProperty("--bible-heading-size", `${1.1875 * multiplier}rem`);
          root.style.setProperty("--bible-subtitle-size", `${0.875 * multiplier}rem`);
        }
      },
      setLineHeight: (height) => {
        set({ lineHeight: height });
        
        // Apply CSS variables immediately when setting changes
        if (typeof window !== 'undefined') {
          const root = document.documentElement;
          // Map 0-100 to line heights (150% to 290%, with 220% at 50%)
          const lineHeightPercent = 150 + (height / 100) * 140;
          root.style.setProperty("--bible-line-height", `${lineHeightPercent}%`);
        }
      },
      setHydrated: (hydrated) => set({ hydrated }),
    }),
    {
      name: "settings-store", // name for localStorage
      storage: createJSONStorage(getLocalStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated(true);
          console.log("Settings store hydrated with:", {
            redWordsOfJesus: state.redWordsOfJesus,
            textSize: state.textSize,
            lineHeight: state.lineHeight
          });
        }
      },
    }
  )
);