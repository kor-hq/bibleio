import { Button, Logo, WarningNote } from "@bibleio/design";
import { IconX, IconMenu } from "@tabler/icons-react";
import { useState } from "react";

// ------------------------------ DESKTOP NAV MENU ------------------------------

function DesktopNavMenu({ path }: { path: string }) {
  return (
    <div className="border-stroke bg-fg-1 backdrop-blur-popup shadow-popup flex h-[2.5rem] w-fit items-center gap-24 rounded-full border px-24 py-12 max-[770px]:hidden">
      <a
        href="/"
        className={`text-body hover:text-accent-reversed leading-none duration-150 ease-out ${path === "/" && "font-semibold"}`}
      >
        Home
      </a>
      <a
        href="/bible"
        className={`text-body hover:text-accent-reversed leading-none duration-150 ease-out ${path === "/bible" && "font-semibold"}`}
      >
        Bible
      </a>
    </div>
  );
}

// ------------------------------ MOBILE NAV MENU ------------------------------

function MobileNavMenuButton({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (newValue: boolean) => void;
}) {
  return (
    <div className="border-stroke bg-fg-1 backdrop-blur-popup shadow-popup h-[2.5rem] w-fit items-center justify-center gap-24 rounded-full border px-24 max-[970px]:flex min-[970px]:hidden">
      {value ? (
        <button
          type="button"
          onClick={() => {
            onChange(!value);
          }}
          className="animate-scale-in"
        >
          <IconX strokeWidth={1.5} />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            onChange(!value);
          }}
          className="active:animate-scale-out"
        >
          <IconMenu strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
}

function MobileNavMenu({ value }: { value: boolean }) {
  return (
    <div
      className={`rounded-16 border-stroke bg-fg-1 backdrop-blur-popup shadow-popup m-16 mt-0 h-full min-h-0 flex-col items-start gap-[40px] overflow-y-scroll border p-24 ${value ? "motion-scale-in-95 motion-duration-150 flex" : "hidden"}`}
    >
      asdasd
    </div>
  );
}

// ------------------------------ MAIN NAV COMPONENT ------------------------------

export function Nav({ path }: { path: string }) {
  const CF_PAGES_BRANCH = "main";

  const [navOpen, setNavOpen] = useState<boolean>(false);
  const isPreview = import.meta.env.PROD && CF_PAGES_BRANCH !== "main";
  const isDev = import.meta.env.DEV;

  const handleNavOpenChange = (newValue: boolean) => {
    setNavOpen(newValue);
  };

  return (
    <nav
      className={`text-text fixed z-50 flex h-fit max-h-screen min-h-0 w-screen flex-col ${navOpen ? "h-screen" : ""}`}
    >
      <div className="flex justify-between p-16">
        <div className="flex w-fit min-w-0 flex-wrap gap-8">
          <div className="border-stroke bg-fg-1 backdrop-blur-popup shadow-popup flex h-[2.5rem] items-center rounded-full border px-24 py-12">
            <a
              href="/"
              className="duration-150 ease-out hover:-translate-y-2 active:translate-y-2"
            >
              <Logo size={26} subText="App" />
            </a>
          </div>
          {/** isPreview && (
						<div className="flex h-[2.5rem] items-center rounded-full border border-yellow-reversed bg-fg-1 backdrop-blur-popup px-12 py-12 shadow-popup">
							<WarningNote>Preview Deployment</WarningNote>
						</div>
					)}
					{isDev && (
						<div className="flex h-[2.5rem] items-center rounded-full border border-yellow-reversed bg-fg-1 backdrop-blur-popup px-12 py-12 shadow-popup">
							<WarningNote>Development Mode</WarningNote>
						</div>
						) */}
        </div>
        <DesktopNavMenu path={path} />
        <MobileNavMenuButton value={navOpen} onChange={handleNavOpenChange} />
      </div>
      <MobileNavMenu value={navOpen} />
    </nav>
  );
}
