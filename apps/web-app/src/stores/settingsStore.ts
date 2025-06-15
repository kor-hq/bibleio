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
  if (typeof window !== "undefined") {
    return localStorage;
  }
  // Return a mock storage for SSR
  return {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
  };
};

// Utility function to apply all CSS variables based on current state
export const applyAllCssVariables = (state: SettingsState) => {
  if (typeof window !== "undefined") {
    const root = document.documentElement;

    // Apply red words of Jesus setting
    if (state.redWordsOfJesus) {
      root.style.removeProperty("--words-of-jesus-color");
    } else {
      root.style.setProperty("--words-of-jesus-color", "var(--color-text)");
    }

    // Apply text size setting
    const sizeMultiplier = 0.8 + (state.textSize / 100) * 0.7;
    root.style.setProperty("--bible-text-size", `${0.95 * sizeMultiplier}rem`);
    root.style.setProperty(
      "--bible-heading-size",
      `${1.1875 * sizeMultiplier}rem`
    );
    root.style.setProperty(
      "--bible-subtitle-size",
      `${0.875 * sizeMultiplier}rem`
    );

    // Apply line height setting
    const lineHeightPercent = 150 + (state.lineHeight / 100) * 140;
    root.style.setProperty("--bible-line-height", `${lineHeightPercent}%`);
  }
};

// Attempt to read initial values from localStorage
let initialValues = {
  redWordsOfJesus: true,
  textSize: 25,
  lineHeight: 50,
};

try {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("settings-store");
    if (stored) {
      const data = JSON.parse(stored);
      if (data || data.state) {
        initialValues = {
          redWordsOfJesus: data.state.redWordsOfJesus ?? true,
          textSize: data.state.textSize ?? 25,
          lineHeight: data.state.lineHeight ?? 50,
        };
        console.log(
          "Loaded initial settings from localStorage:",
          initialValues
        );
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

        // Apply CSS variables immediately when setting changes
        applyAllCssVariables({
          ...useSettingsStore.getState(),
          redWordsOfJesus: enabled,
        });
      },
      setTextSize: (size) => {
        set({ textSize: size });

        // Apply CSS variables immediately when setting changes
        applyAllCssVariables({
          ...useSettingsStore.getState(),
          textSize: size,
        });
      },
      setLineHeight: (height) => {
        set({ lineHeight: height });

        // Apply CSS variables immediately when setting changes
        applyAllCssVariables({
          ...useSettingsStore.getState(),
          lineHeight: height,
        });
      },
      setHydrated: (hydrated) => set({ hydrated }),
    }),
    {
      name: "settings-store", // name for localStorage
      storage: createJSONStorage(getLocalStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated(true);

          // Apply CSS variables based on hydrated state
          applyAllCssVariables(state);

          console.log("Settings store hydrated with:", {
            redWordsOfJesus: state.redWordsOfJesus,
            textSize: state.textSize,
            lineHeight: state.lineHeight,
          });
        }
      },
    }
  )
);
