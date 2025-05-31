import React from "react";
import type { TranslationBookChapter } from "~/types/chapter";
import { formatChapterContent } from "~/utils/FormatVerses";

interface ChapterContentProps {
  data: TranslationBookChapter;
}

export const ChapterContent = React.memo(({ data }: ChapterContentProps) => {
  const chapterContent = formatChapterContent(data);

  return (
    <article className="bible-content motion-preset-fade-lg motion-delay-100 pb-128">
      {chapterContent}
    </article>
  );
});
ChapterContent.displayName = "ChapterContent";
