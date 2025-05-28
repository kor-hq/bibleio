import { TranslationSelect } from "./TranslationSelect";
import { BookSelect } from "./BookSelect";
import { ChapterSelect } from "./ChapterSelect";
import React, { useEffect } from "react";
import { useBibleStore } from "~/stores/bibleStore";

export const ControlBar = React.memo(({ urlParams }: { urlParams: { translation: string | null, book: string | null, chapter: string | null } }) => {
  const { setAll } = useBibleStore();
  
  // Sync URL parameters with store when they change
  useEffect(() => {
    if (urlParams.translation && urlParams.book && urlParams.chapter) {
      setAll(urlParams.translation, urlParams.book, urlParams.chapter);
    }
  }, [urlParams.translation, urlParams.book, urlParams.chapter, setAll]);
  return (
    <div className="mb fixed bottom-20 z-40 flex h-[2.5rem] w-full max-w-[32rem] gap-4">
      <div className="rounded-4 border-stroke bg-fg-1 shadow-popup backdrop-blur-popup flex h-full w-full items-center justify-between overflow-clip border px-20 first:rounded-l-full last:rounded-r-full">
        <div className="flex gap-8">
          <BookSelect />
          <ChapterSelect />
        </div>
        <TranslationSelect />
        <div className="bg-accent absolute bottom-[-70%] left-0 -z-50 h-[2rem] w-[5rem] rounded-full opacity-50 blur-[1.5rem]" />
      </div>
    </div>
  );
});
