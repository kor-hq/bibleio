import { SelectItem } from "@bibleio/design";
import * as RadixSelect from "@radix-ui/react-select";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { useBibleStore } from "~/stores/bibleStore";

export function ChapterSelect() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { availableChapters, chapter, setChapter } = useBibleStore();
  
  // Handle chapter selection
  const handleChapterChange = (value: string) => {
    // Don't proceed if it's the same chapter
    if (value === chapter) return;
    
    // Update chapter in the store
    setChapter(value);
    
    // Update URL with new chapter value
    const url = new URL(window.location.href);
    url.searchParams.set("chapter", value);
    
    // Navigate to the new URL
    window.location.href = url.toString();
  };
  
  if (availableChapters)
    return (
      <RadixSelect.Root
        value={chapter}
        onOpenChange={(value) => {
          setIsOpen(value);
        }}
        onValueChange={handleChapterChange}
        open={isOpen}
      >
        <RadixSelect.Trigger className="text-body text-text hover:text-accent-reversed focus-visible:text-accent-reversed flex items-center gap-4 outline-none duration-150 ease-out">
          <RadixSelect.Value
            placeholder={"Chapter"}
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
              {Array.from({ length: availableChapters }, (_, index) => (
                <SelectItem key={index + 1} value={`${index + 1}`}>
                  {index + 1}
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
}
