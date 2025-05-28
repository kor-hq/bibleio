import { SelectItem } from "@bibleio/design";
import * as RadixSelect from "@radix-ui/react-select";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, { useState, useEffect, useCallback } from "react";
import { useBibleStore } from "~/stores/bibleStore";
import type { TranslationBooks } from "~/types/book";

export const BookSelect = React.memo(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [books, setBooks] = useState<TranslationBooks["books"]>([]);

  const { translation, book, setBook, setAvailableChapters } = useBibleStore();

  // Fetch books for the current translation
  useEffect(() => {
    // Fetch books data
    fetch(`https://bible.helloao.org/api/${translation}/books.json`)
      .then((request) => request.json())
      .then((availableBooks) => {
        setBooks(availableBooks.books);

        // Initialize availableChapters if we have the current book
        const currentBook = availableBooks.books.find(
          (b: { id: string }) => b.id === book
        );
        if (currentBook) {
          setAvailableChapters(currentBook.numberOfChapters);
        }
      })
      .catch((error) => {
        console.error("Error fetching available books:", error);
      });
  }, [translation, book, setAvailableChapters]);

  // Handle book selection
  const handleBookChange = useCallback(
    (value: string) => {
      // Don't proceed if it's the same book
      if (value === book) return;

      // Find the selected book to get its number of chapters
      const selectedBook = books.find((b) => b.id === value);
      if (selectedBook) {
        // Update selected book data in the store (includes availableChapters)
        setAvailableChapters(selectedBook.numberOfChapters);
        // Update book in the store
        setBook(value);

        // Update URL with new book value
        const url = new URL(window.location.href);
        url.searchParams.set("book", value);
        // Set chapter to 1 when changing books
        url.searchParams.set("chapter", "1");

        // Navigate to the new URL
        window.location.href = url.toString();
      }
    },
    [book, books, setAvailableChapters, setBook]
  );

  if (books.length > 0)
    return (
      <RadixSelect.Root
        value={book}
        onOpenChange={setIsOpen}
        onValueChange={handleBookChange}
        open={isOpen}
      >
        <RadixSelect.Trigger className="text-body text-text hover:text-accent-reversed focus-visible:text-accent-reversed flex items-center gap-4 outline-none duration-150 ease-out">
          <RadixSelect.Value
            placeholder={"Book"}
            className="duration-150 ease-out"
          />
          <RadixSelect.Icon>
            <IconChevronDown
              strokeWidth={1.5}
              className={`size-16 ${isOpen ? "rotate-180" : "rotate-0"} duration-150 ease-out`}
            />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content
            position="popper"
            className="rounded-12 border-stroke bg-fg-2 shadow-material-component data-[state='open']:animate-scale-in relative z-50 mt-4 max-h-[512px] w-full overflow-hidden border font-serif"
          >
            <RadixSelect.ScrollUpButton className="flex h-fit cursor-default items-center justify-center py-2">
              <IconChevronUp />
            </RadixSelect.ScrollUpButton>
            <RadixSelect.Viewport className="flex flex-col gap-14 p-16">
              {books.map((bookItem) => (
                <SelectItem key={bookItem.id} value={bookItem.id}>
                  {bookItem.commonName}
                </SelectItem>
              ))}
            </RadixSelect.Viewport>
            <RadixSelect.ScrollDownButton className="flex h-fit cursor-default items-center justify-center py-2">
              <IconChevronDown />
            </RadixSelect.ScrollDownButton>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    );
  return <div />;
});
