import type { ChapterContent, FormattedText } from "~/types/chapter";

export const handleVersePart = (versePart: any): string => {
  if (typeof versePart === "string") {
    return versePart;
  }
  if (typeof versePart === "object" && versePart !== null) {
    if ("text" in versePart) {
      return (versePart as FormattedText).text as string;
    }
    if ("heading" in versePart) {
      return `<span>${versePart.heading}</span>`;
    }
    if ("lineBreak" in versePart) {
      return "<br>";
    }
    if ("noteId" in versePart) {
      return `[${versePart.noteId}]`;
    }
  }

  return "unknown"; // fallback for unexpected type
};

export function formatChapterContent(data: any): string[] {
  let chapterContent: string[] = [];

  if (data?.chapter?.content) {
    chapterContent = data.chapter.content.map((item: ChapterContent) => {
      switch (item.type) {
        case "heading":
          if (Array.isArray(item.content)) {
            return `<h4>${item.content.join("")}</h4>`;
          }
          break;
        case "verse":
          if (Array.isArray(item.content)) {
            const verseContent = (item.content as any[])
              .map(handleVersePart)
              .join("");
            return `<p><span class="verseNumber">${item.number}</span> ${verseContent}</p>`;
          }
          break;
        case "line_break":
          return "<br>";
        default:
          break;
      }
      return "unknown"; // fallback for unexpected type
    });
  }

  return chapterContent;
}
