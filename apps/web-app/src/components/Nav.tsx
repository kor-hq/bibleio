import { Logo } from "@bibleio/design";
import React, { useState, useMemo } from "react";
import { QuickSettings } from "./settings/QuickSettings";

// ------------------------------ DESKTOP NAV MENU ------------------------------

const DesktopNavMenu = React.memo(({ path }: { path: string }) => {
  const homeClassName = useMemo(
    () =>
      `text-body hover:text-accent-reversed focus-visible:text-accent-reversed leading-none outline-none duration-150 ease-out ${path === "/" ? "font-semibold" : ""}`,
    [path]
  );

  const bibleClassName = useMemo(
    () =>
      `text-body hover:text-accent-reversed focus-visible:text-accent-reversed leading-none outline-none duration-150 ease-out ${path === "/bible" ? "font-semibold" : ""}`,
    [path]
  );

  return (
    <div className="flex gap-12">
      <div className="border-stroke bg-fg-1 backdrop-blur-popup shadow-popup flex h-[2.5rem] w-fit items-center gap-24 rounded-full border px-24 py-12 max-[770px]:hidden">
        <a href="/" className={homeClassName}>
          Home
        </a>
        <a href="/bible" className={bibleClassName}>
          Bible
        </a>
      </div>
      <QuickSettings />
    </div>
  );
});

export function Nav({ path }: { path: string }) {
  return (
    <nav
      className={`text-text fixed z-50 flex h-fit max-h-screen min-h-0 w-screen flex-col`}
    >
      <div className="flex justify-between p-16">
        <div className="flex w-fit min-w-0 flex-wrap gap-8">
          <div className="border-stroke bg-fg-1 backdrop-blur-popup shadow-popup flex h-[2.5rem] items-center rounded-full border px-24 py-12">
            <a
              href="/"
              className="focus-visible:outline-accent-reversed outline-none duration-150 ease-out hover:-translate-y-2 focus-visible:outline active:translate-y-2"
            >
              <Logo size={26} subText="App" />
            </a>
          </div>
        </div>
        <DesktopNavMenu path={path} />
      </div>
    </nav>
  );
}
