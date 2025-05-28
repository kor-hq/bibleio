import { SelectItem } from "@bibleio/design";
import * as RadixSelect from "@radix-ui/react-select";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import type { AvailableTranslations } from "~/types/bible";
import { useBibleStore } from "~/stores/bibleStore";

export const TranslationSelect = React.memo(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [translations, setTranslations] = useState<
    AvailableTranslations["translations"]
  >([]);

  // Get state and actions from the store
  const { translation, setTranslation } = useBibleStore();
  
  // Find the selected translation object
  const selectedTranslation = useMemo(
    () => translations.find((t) => t.id === translation),
    [translations, translation]
  );

  // Memoize filtered translations
  const filteredTranslations = useMemo(
    () => translations.filter((bible) => bible.language === "eng"),
    [translations]
  );

  useEffect(() => {
    fetch("https://bible.helloao.org/api/available_translations.json")
      .then((request) => request.json())
      .then((availableTranslations) => {
        setTranslations(availableTranslations.translations);
        
        // Log the current translation for debugging
        console.log("Current translation:", translation);
      })
      .catch((error) => {
        console.error("Error fetching Bible translations:", error);
      });
  }, [translation]);

  // Handle translation change
  const handleTranslationChange = useCallback((value: string) => {
    // Don't proceed if it's the same translation
    if (value === translation) return;
    
    // Update the store
    setTranslation(value);
    
    // Update URL with new translation value
    const url = new URL(window.location.href);
    url.searchParams.set("translation", value);
    
    // Navigate to the new URL, causing a page reload
    window.location.href = url.toString();
  }, [translation, setTranslation]);

  // Memoize chevron className
  const chevronClassName = useMemo(
    () => `size-16 ${isOpen ? "rotate-180" : "rotate-0"} duration-150 ease-out`,
    [isOpen]
  );

  return (
    <RadixSelect.Root
      value={translation}
      onOpenChange={setIsOpen}
      onValueChange={handleTranslationChange}
      open={isOpen}
    >
      <RadixSelect.Trigger className="text-body text-text hover:text-accent-reversed focus-visible:text-accent-reversed flex items-center gap-4 outline-none duration-150 ease-out">
        <RadixSelect.Value
          placeholder={"Bible"}
          className="duration-150 ease-out"
        >
          {selectedTranslation?.shortName || translation}
        </RadixSelect.Value>
        <RadixSelect.Icon>
          <IconChevronDown
            strokeWidth={1.5}
            className={chevronClassName}
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
            {filteredTranslations.map((bible) => (
              <SelectItem key={bible.id} value={bible.id}>
                {bible.name}
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
});
