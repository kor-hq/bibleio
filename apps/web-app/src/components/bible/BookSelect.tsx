import {
  Select,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "@bibleio/design";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

export function BookSelect() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <RadixDropdown.Root
      onOpenChange={(value) => {
        setIsOpen(value);
      }}
      open={isOpen}
    >
      <RadixDropdown.Trigger className="text-body text-text hover:text-accent-reversed focus-visible:text-accent-reversed flex items-center gap-4 outline-none duration-150 ease-out">
        <p className="duration-150 ease-out">Book & Chapter</p>
        <IconChevronDown
          strokeWidth={1.5}
          className={`size-16 ${isOpen ? "rotate-180" : "rotate-0"} duration-150 ease-out`}
        />
      </RadixDropdown.Trigger>
      <RadixDropdown.Portal>
        <RadixDropdown.Content className="rounded-12 border-stroke bg-fg-2 shadow-material-component data-[state='open']:animate-scale-in relative z-50 mt-4 max-h-[512px] w-full overflow-hidden border p-12 font-serif">
          asd
        </RadixDropdown.Content>
      </RadixDropdown.Portal>
    </RadixDropdown.Root>
  );
}
