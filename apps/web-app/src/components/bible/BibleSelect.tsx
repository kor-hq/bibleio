import {
  Select,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "@bibleio/design";
import * as RadixSelect from "@radix-ui/react-select";
import { IconChevronUp, IconChevronDown } from "@tabler/icons-react";

export function BibleSelect() {
  return (
    <RadixSelect.Root defaultValue="BSB">
      <RadixSelect.Trigger className="text-body text-text hover:text-accent-reversed outline-none duration-150 ease-out">
        <RadixSelect.Value placeholder={"Bible"} />
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
            <SelectItem value="BSB">BSB</SelectItem>
            <SelectItem value="WEB">WEB</SelectItem>
            <SelectItem value="KJV">KJV</SelectItem>
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="flex h-fit cursor-default items-center justify-center py-2">
            <IconChevronDown />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
