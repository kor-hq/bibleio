import React, { useMemo } from "react";
import type {
  ChapterContent,
  FormattedText,
  InlineHeading,
  InlineLineBreak,
  VerseFootnoteReference,
  ChapterFootnote,
} from "~/types/chapter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@bibleio/design";

type VersePart =
  | string
  | FormattedText
  | InlineHeading
  | InlineLineBreak
  | VerseFootnoteReference;

// Cache for footnote symbols
const FOOTNOTE_SYMBOLS = ["*", "†", "‡", "§", "‖", "¶", "#", "**", "††", "‡‡"];

// Create footnote lookup maps and caller cache
const createFootnoteMaps = (footnotes: ChapterFootnote[]) => {
  const footnoteMap = new Map<number, ChapterFootnote>();
  const autoFootnotes: ChapterFootnote[] = [];
  const callerCache = new Map<number, string>();

  // Build maps in single pass
  footnotes.forEach((footnote) => {
    footnoteMap.set(footnote.noteId, footnote);
    if (footnote.caller === "+") {
      autoFootnotes.push(footnote);
    }
  });

  // Pre-calculate auto-generated callers
  autoFootnotes.forEach((footnote, index) => {
    const caller = index < FOOTNOTE_SYMBOLS.length 
      ? FOOTNOTE_SYMBOLS[index] 
      : `(${index + 1})`;
    callerCache.set(footnote.noteId, caller);
  });

  return { footnoteMap, callerCache };
};

export const handleVersePart = (
  versePart: VersePart,
  footnoteMap: Map<number, ChapterFootnote>,
  callerCache: Map<number, string>,
  partKey: string
): React.ReactNode => {
  if (typeof versePart === "string") {
    return versePart;
  }

  if ("text" in versePart) {
    return versePart.text;
  }

  if ("heading" in versePart) {
    return <span key={`${partKey}-heading`}>{versePart.heading}</span>;
  }

  if ("lineBreak" in versePart) {
    return <br key={`${partKey}-br`} />;
  }

  if ("noteId" in versePart) {
    const footnote = footnoteMap.get(versePart.noteId);
    if (footnote) {
      const caller = footnote.caller === "+" 
        ? callerCache.get(footnote.noteId)!
        : footnote.caller || footnote.noteId.toString();

      return (
        <TooltipProvider
          delayDuration={0}
          skipDelayDuration={0}
          key={`${partKey}-footnote-${footnote.noteId}`}
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <sup className="text-text/60 sml-2 mr-6 cursor-help text-[0.875rem]">
                {caller}
              </sup>
            </TooltipTrigger>
            <TooltipContent>{footnote.text}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }
    return `[${versePart.noteId}]`;
  }

  return "unknown"; // fallback for unexpected type
};

// Memoized component for individual verse parts
const VersePart = React.memo(({ 
  part, 
  footnoteMap, 
  callerCache, 
  partKey 
}: {
  part: VersePart;
  footnoteMap: Map<number, ChapterFootnote>;
  callerCache: Map<number, string>;
  partKey: string;
}) => (
  <span key={partKey}>
    {handleVersePart(part, footnoteMap, callerCache, partKey)}
  </span>
));
VersePart.displayName = 'VersePart';

export function formatChapterContent(data: any): React.ReactNode[] {
  return useMemo(() => {
    if (!data?.chapter?.content) return [];

    const footnotes = data.chapter.footnotes || [];
    const { footnoteMap, callerCache } = createFootnoteMaps(footnotes);

    let headingCounter = 0;
    let lineBreakCounter = 0;
    let subtitleCounter = 0;

    return data.chapter.content.map((item: ChapterContent, contentIndex: number) => {
      const baseKey = `content-${contentIndex}`;

      switch (item.type) {
        case "heading":
          if (Array.isArray(item.content)) {
            headingCounter++;
            return (
              <h4 key={`${baseKey}-heading-${headingCounter}`}>
                {item.content.join("")}
              </h4>
            );
          }
          break;

        case "verse":
          if (Array.isArray(item.content)) {
            const verseContent = item.content.map((part, index) => (
              <VersePart
                key={`${baseKey}-verse-${item.number}-part-${index}`}
                part={part}
                footnoteMap={footnoteMap}
                callerCache={callerCache}
                partKey={`${baseKey}-verse-${item.number}-part-${index}`}
              />
            ));
            return (
              <p key={`${baseKey}-verse-${item.number}`}>
                <span className="verseNumber">{item.number}</span>{" "}
                {verseContent}
              </p>
            );
          }
          break;

        case "line_break":
          lineBreakCounter++;
          return <br key={`${baseKey}-linebreak-${lineBreakCounter}`} />;

        case "hebrew_subtitle":
          if (Array.isArray(item.content)) {
            subtitleCounter++;
            const subtitleContent = item.content.map((part, index) => (
              <VersePart
                key={`${baseKey}-subtitle-${subtitleCounter}-part-${index}`}
                part={part}
                footnoteMap={footnoteMap}
                callerCache={callerCache}
                partKey={`${baseKey}-subtitle-${subtitleCounter}-part-${index}`}
              />
            ));
            return (
              <h5 key={`${baseKey}-subtitle-${subtitleCounter}`}>
                {subtitleContent}
              </h5>
            );
          }
          break;

        default:
          break;
      }
      return "unknown"; // fallback for unexpected type
    });
  }, [data?.chapter?.content, data?.chapter?.footnotes]);
}
