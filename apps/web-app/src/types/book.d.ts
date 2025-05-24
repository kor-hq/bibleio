import { Translation } from "./bible";

export interface TranslationBooks {
  /**
   * The translation information for the books.
   */
  translation: Translation;

  /**
   * The list of books that are available for the translation.
   */
  books: TranslationBook[];
}

interface TranslationBook {
  /**
   * The ID of the book.
   */
  id: string;

  /**
   * The name that the translation provided for the book.
   */
  name: string;

  /**
   * The common name for the book.
   */
  commonName: string;

  /**
   * The number of chapters that the book contains.
   */
  numberOfChapters: number;

  /**
   * The link to the first chapter of the book.
   */
  firstChapterApiLink: string;

  /**
   * The link to the last chapter of the book.
   */
  lastChapterApiLink: string;

  /**
   * The number of chapters that the book contains.
   */
  numberOfChapters: number;

  /**
   * The number of verses that the book contains.
   */
  totalNumberOfVerses: number;
}
