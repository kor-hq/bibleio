import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import type { TranslationBookChapter } from "~/types/chapter";

interface ControlButtonsProps {
  chapterData: TranslationBookChapter | null;
}

export function ControlButtons({ chapterData }: ControlButtonsProps) {
  const canGoToPrevious = chapterData?.previousChapterApiLink !== null;
  const canGoToNext = chapterData?.nextChapterApiLink !== null;

  // Parse API link to extract book and chapter
  const parseApiLink = (apiLink: string | null) => {
    if (!apiLink) return null;

    // Format: /api/{translation}/{book}/{chapter}.json
    const parts = apiLink.split("/");
    if (parts.length >= 5) {
      const book = parts[3];
      const chapterWithExtension = parts[4];
      const chapter = chapterWithExtension.replace(".json", "");
      console.log("Parsed API link:", { apiLink, book, chapter });
      return { book, chapter };
    }
    console.warn("Failed to parse API link:", apiLink);
    return null;
  };

  const handlePrevious = () => {
    if (!canGoToPrevious || !chapterData?.previousChapterApiLink) return;

    const parsed = parseApiLink(chapterData.previousChapterApiLink);
    if (!parsed) return;

    const { book, chapter } = parsed;

    // Update URL
    const url = new URL(window.location.href);
    url.searchParams.set("book", book);
    url.searchParams.set("chapter", chapter);
    window.location.href = url.toString();
  };

  const handleNext = () => {
    if (!canGoToNext || !chapterData?.nextChapterApiLink) return;

    const parsed = parseApiLink(chapterData.nextChapterApiLink);
    if (!parsed) return;

    const { book, chapter } = parsed;

    // Update URL
    const url = new URL(window.location.href);
    url.searchParams.set("book", book);
    url.searchParams.set("chapter", chapter);
    window.location.href = url.toString();
  };

  return (
    <div className="rounded-4 border-stroke bg-fg-1 shadow-popup backdrop-blur-popup flex h-full w-fit items-center justify-between overflow-clip border pl-16 pr-24 first:rounded-l-full last:rounded-r-full">
      <div className="flex max-[700px]:gap-8">
        <button
          id="prev"
          className={`size-24 duration-150 ease-out ${
            canGoToPrevious
              ? "text-text hover:text-accent-reversed cursor-pointer"
              : "cursor-not-allowed opacity-50"
          }`}
          onClick={handlePrevious}
          disabled={!canGoToPrevious}
        >
          <IconChevronLeft strokeWidth={1.5} />
        </button>
        <button
          id="next"
          className={`size-24 duration-150 ease-out ${
            canGoToNext
              ? "text-text hover:text-accent-reversed cursor-pointer"
              : "cursor-not-allowed opacity-50"
          }`}
          onClick={handleNext}
          disabled={!canGoToNext}
        >
          <IconChevronRight strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
