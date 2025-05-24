import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { TranslationBook } from "~/types/book";

export interface BibleState {
  // Current selections
  translation: string;
  book: string;
  chapter: string;
  availableChapters: number;
  selectedBookData: TranslationBook | null;
  // Flag to track if store has been hydrated from localStorage
  hydrated: boolean;

  // Actions
  setTranslation: (translation: string) => void;
  setBook: (book: string) => void;
  setChapter: (chapter: string) => void;
  setAvailableChapters: (chapters: number) => void;
  setSelectedBookData: (bookData: TranslationBook) => void;
  setAll: (translation: string, book: string, chapter: string) => void;
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
  translation: "BSB",
  book: "MAT",
  chapter: "1"
};

try {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('bible-store');
    if (stored) {
      const data = JSON.parse(stored);
      if (data && data.state) {
        initialValues = {
          translation: data.state.translation || "BSB",
          book: data.state.book || "MAT",
          chapter: data.state.chapter || "1"
        };
        console.log("Loaded initial values from localStorage:", initialValues);
      }
    }
  }
} catch (e) {
  console.warn("Failed to read from localStorage:", e);
}

export const useBibleStore = create<BibleState>()(
  persist(
    (set) => ({
      // Use values from localStorage if available, otherwise defaults
      translation: initialValues.translation,
      book: initialValues.book,
      chapter: initialValues.chapter,
      availableChapters: 28,
      selectedBookData: null,
      hydrated: false,

      // Actions
      setTranslation: (translation) => set({ translation }),
      setBook: (book) => set({ book }),
      setChapter: (chapter) => set({ chapter }),
      setAvailableChapters: (chapters) => set({ availableChapters: chapters }),
      setSelectedBookData: (bookData) =>
        set({
          selectedBookData: bookData,
          availableChapters: bookData.numberOfChapters,
        }),
      setAll: (translation, book, chapter) =>
        set({ translation, book, chapter }),
      setHydrated: (hydrated) => set({ hydrated }),
    }),
    {
      name: "bible-store", // name for localStorage
      storage: createJSONStorage(getLocalStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated(true);
          console.log("Store hydrated with:", {
            translation: state.translation,
            book: state.book,
            chapter: state.chapter
          });
        }
      },
    }
  )
);
