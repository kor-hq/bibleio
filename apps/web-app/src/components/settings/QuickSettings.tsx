import { Popover } from "@ark-ui/react/popover";
import React, { useState } from "react";
import {
  IconHeart,
  IconHome,
  IconMail,
  IconMenu,
  IconX,
} from "@tabler/icons-react";
import ThemeSwitcher from "../ThemeSwitcher";

export function QuickSettings() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover.Root
      open={isOpen}
      onOpenChange={(details) => setIsOpen(details.open)}
    >
      <Popover.Trigger className="border-stroke focus-visible:border-accent-reversed bg-fg-1 backdrop-blur-popup shadow-popup flex size-[2.5rem] items-center justify-center rounded-full border outline-none">
        {isOpen ? (
          <IconX
            strokeWidth={1.5}
            className="motion-preset-fade-sm motion-duration-150"
          />
        ) : (
          <IconMenu
            strokeWidth={1.5}
            className="motion-preset-fade-sm motion-duration-150"
          />
        )}
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content className="focus-visible:border-accent-reversed border-stroke bg-fg-1 backdrop-blur-popup shadow-popup rounded-28 motion-preset-slide-up-sm motion-duration-150 flex h-fit w-[16rem] flex-col items-center gap-4 border p-8 outline-none">
          <QuickSettingsSection>
            <a
              href="https://bibleio.com"
              rel="noreferrer"
              className="group flex items-center gap-8 px-12 py-8"
            >
              <IconHome
                className="group-hover:text-accent-reversed duration-150 ease-out"
                strokeWidth={1.5}
              />
              <p className="text-body">Homepage</p>
            </a>
            <a
              href="https://bibleio.com/contact"
              rel="noreferrer"
              className="group flex items-center gap-8 px-12 py-8"
            >
              <IconMail
                className="group-hover:text-accent-reversed duration-150 ease-out"
                strokeWidth={1.5}
              />
              <p className="text-body">Community & support</p>
            </a>
          </QuickSettingsSection>
          <QuickSettingsSection>
            <div className="flex items-center justify-between px-12 py-8">
              <p className="text-body">Theme</p>
              <ThemeSwitcher />
            </div>
          </QuickSettingsSection>
          <QuickSettingsSection>
            <div className="flex items-center gap-8 px-12 py-8">
              <IconHeart strokeWidth={1.5} />
              <p className="text-sub text-text/60">
                Thank you for using Bibleio
              </p>
            </div>
          </QuickSettingsSection>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
}

const QuickSettingsSection = React.memo(
  ({ children }: { children: React.ReactNode }) => {
    return (
      <section className="bg-fg-2 border-stroke/50 first:rounded-t-20 last:rounded-b-20 rounded-4 flex w-full flex-col gap-4 border p-12">
        {children}
      </section>
    );
  }
);
