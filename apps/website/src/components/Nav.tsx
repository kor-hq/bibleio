import { Button, Logo, WarningNote } from "@bibleio/design";
import {
  IconChevronDown,
  IconX,
  IconArrowUpRight,
  IconMenu,
  IconBrandYoutube,
  IconBrandDiscord,
  IconBrandX,
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useState } from "react";

// ------------------------------ DESKTOP NAV MENU ------------------------------

function DesktopNavMenuProductsContent() {
  return (
    <NavigationMenu.Content className="animate-scale-in border-stroke bg-fg-1 backdrop-blur-popup shadow-popup grid h-[12.5rem] w-[43rem] grid-cols-3 gap-12 rounded-[20px] border p-12">
      <NavigationMenu.Link
        href="/apps#web"
        className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex flex-col justify-end gap-8 border p-16 duration-150 ease-out"
      >
        <h4 className="text-h4">Web</h4>
        <p className="text-body leading-[140%]">
          Simple Bible study app in the web
        </p>
      </NavigationMenu.Link>

      <NavigationMenu.Link
        href="/apps#mobile"
        className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex flex-col justify-end gap-8 border p-16 duration-150 ease-out"
      >
        <h4 className="text-h4">Mobile</h4>
        <p className="text-body leading-[140%]">
          Bible study environment on the go
        </p>
      </NavigationMenu.Link>

      <NavigationMenu.Link
        href="/apps#desktop"
        className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex flex-col justify-end gap-8 border p-16 duration-150 ease-out"
      >
        <h4 className="text-h4">Desktop</h4>
        <p className="text-body leading-[140%]">
          Fully featured Bible study environment
        </p>
      </NavigationMenu.Link>
    </NavigationMenu.Content>
  );
}

// nav menu popup contents

function DesktopNavMenuYouContent() {
  return (
    <NavigationMenu.Content className="animate-scale-in border-stroke bg-fg-1 backdrop-blur-popup shadow-popup grid h-[12.5rem] grid-cols-3 gap-12 rounded-[20px] border p-12">
      <NavigationMenu.Link
        href="https://cat-skate-e91.notion.site/Onboarding-132aafe2ea3c800ab45ddbe0a5db3da8?pvs=4"
        className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex flex-col justify-end gap-8 border p-16 duration-150 ease-out"
      >
        <h4 className="text-h4">Contribute</h4>
        <p className="text-body leading-[140%]">Help us build Bibleio</p>
      </NavigationMenu.Link>

      <NavigationMenu.Link
        href="/why-believe"
        className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex flex-col justify-end gap-8 border p-16 duration-150 ease-out"
      >
        <h4 className="text-h4">Why believe?</h4>
        <p className="text-body leading-[140%]">Why believe in God or Jesus?</p>
      </NavigationMenu.Link>

      <NavigationMenu.Link
        href="/give-your-rights"
        className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex flex-col justify-end gap-8 border p-16 duration-150 ease-out"
      >
        <h4 className="text-h4">Give your rights</h4>
        <p className="text-body leading-[140%]">For the sake of the gospel</p>
      </NavigationMenu.Link>
    </NavigationMenu.Content>
  );
}

function DesktopNavMenuUsContent() {
  return (
    <NavigationMenu.Content className="animate-scale-in border-stroke bg-fg-1 backdrop-blur-popup shadow-popup relative flex h-fit min-h-0 gap-12 rounded-[20px] border p-12">
      <div className="grid h-fit min-h-0 w-fit grid-cols-1 grid-rows-6 gap-12">
        <NavigationMenu.Link
          href="https://discord.gg/7eVCyQ5GGb"
          target="_blank"
          rel="noreferrer"
          className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex h-full w-fit items-center gap-8 border p-8 duration-150 ease-out"
        >
          <IconBrandDiscord strokeWidth={1.5} />
        </NavigationMenu.Link>
        <NavigationMenu.Link
          href="https://www.youtube.com/@bibleio"
          target="_blank"
          rel="noreferrer"
          className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex h-full w-fit items-center gap-8 border p-8 duration-150 ease-out"
        >
          <IconBrandYoutube strokeWidth={1.5} />
        </NavigationMenu.Link>
        <NavigationMenu.Link
          href="https://www.instagram.com/bibleioo/"
          target="_blank"
          rel="noreferrer"
          className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex h-full w-fit items-center gap-8 border p-8 duration-150 ease-out"
        >
          <IconBrandInstagram strokeWidth={1.5} />
        </NavigationMenu.Link>
        <NavigationMenu.Link
          href="https://bsky.app/profile/bibleio.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex h-full w-fit items-center gap-8 border p-8 duration-150 ease-out"
        >
          <IconBrandBluesky strokeWidth={1.5} />
        </NavigationMenu.Link>
        <NavigationMenu.Link
          href="https://x.com/bibleioo"
          target="_blank"
          rel="noreferrer"
          className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex h-full w-fit items-center gap-8 border p-8 duration-150 ease-out"
        >
          <IconBrandX strokeWidth={1.5} />
        </NavigationMenu.Link>
        <NavigationMenu.Link
          href="https://github.com/bibleio"
          target="_blank"
          rel="noreferrer"
          className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex h-full w-fit items-center gap-8 border p-8 duration-150 ease-out"
        >
          <IconBrandGithub strokeWidth={1.5} />
        </NavigationMenu.Link>
      </div>

      <div className="grid h-full min-h-0 grid-cols-1 grid-rows-2 gap-12">
        <NavigationMenu.Link
          href="/blog"
          className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex flex-col justify-end gap-8 border p-16 duration-150 ease-out"
        >
          <h4 className="text-h4">Blog</h4>
          <p className="text-body leading-[140%]">
            Updates & Christian content
          </p>
        </NavigationMenu.Link>
        <NavigationMenu.Link
          href="https://github.com/bibleio/bibleio/projects?query=is%3Aopen"
          target="_blank"
          className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex w-[15rem] flex-col justify-end gap-8 border p-16 duration-150 ease-out"
        >
          <h4 className="text-h4">Roadmap</h4>
          <p className="text-body leading-[140%]">Our plans & progress</p>
        </NavigationMenu.Link>
      </div>

      <NavigationMenu.Link
        href="/handbook/about-us"
        className="rounded-8 border-stroke bg-fg-2 shadow-material-component hover:border-accent-reversed hover:text-accent-reversed flex h-full min-h-0 w-[15rem] flex-col justify-end gap-8 border p-16 duration-150 ease-out"
      >
        <h4 className="text-h4">Handbook</h4>
        <p className="text-body leading-[140%]">About what and how we do</p>
      </NavigationMenu.Link>
    </NavigationMenu.Content>
  );
}

// main component

function DesktopNavMenu({ path }: { path: string }) {
  return (
    <div className="min-h-0 w-fit min-w-0 max-[970px]:hidden max-[970px]:h-full">
      <NavigationMenu.Root className="flex h-fit w-fit flex-col items-end gap-6 max-[770px]:hidden">
        <div className="flex gap-4 max-[770px]:hidden">
          <NavigationMenu.List className="border-stroke bg-fg-1 backdrop-blur-popup shadow-popup flex h-[2.5rem] w-fit items-center gap-24 rounded-full border px-24 py-12 max-[770px]:hidden">
            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="/"
                className={`text-body hover:text-accent-reversed leading-none duration-150 ease-out ${path === "/" && "font-semibold"}`}
              >
                Home
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className="max-[770px]:hidden">
              <NavigationMenu.Link
                href="/why-believe"
                className={`text-body hover:text-accent-reversed leading-none duration-150 ease-out ${path === "/why-believe" && "font-semibold"}`}
              >
                Why believe?
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-body hover:text-accent-reversed group flex items-center gap-6 leading-none duration-150 ease-out">
                Products
                <IconChevronDown
                  strokeWidth={1.5}
                  className="group-hover:text-accent-reversed size-20 origin-center duration-150 ease-out group-data-[state=open]:-rotate-180"
                />
              </NavigationMenu.Trigger>
              <DesktopNavMenuProductsContent />
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-body hover:text-accent-reversed group flex items-center gap-6 leading-none duration-150 ease-out">
                You
                <IconChevronDown
                  strokeWidth={1.5}
                  className="group-hover:text-accent-reversed size-20 origin-center duration-150 ease-out group-data-[state=open]:-rotate-180"
                />
              </NavigationMenu.Trigger>
              <DesktopNavMenuYouContent />
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-body hover:text-accent-reversed group flex items-center gap-6 leading-none duration-150 ease-out">
                Us
                <IconChevronDown
                  strokeWidth={1.5}
                  className="group-hover:text-accent-reversed size-20 origin-center duration-150 ease-out group-data-[state=open]:-rotate-180"
                />
              </NavigationMenu.Trigger>
              <DesktopNavMenuUsContent />
            </NavigationMenu.Item>
          </NavigationMenu.List>
          {/* <a href="https://app.bibleio.com" className="max-[770px]:hidden"> */}
          <Button disabled>
            Web App
            <IconArrowUpRight className="size-20" strokeWidth={1.5} />
          </Button>
          {/*</a> */}
        </div>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
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
      <section className="flex flex-col gap-[28px]">
        <p className="text-sub text-text/75">Website</p>
        <a href="/" className="text-h4">
          Home
        </a>
      </section>

      <section className="flex flex-col gap-[28px]">
        <p className="text-sub text-text/75">Products</p>
        <a href="/apps" className="text-h4">
          App
        </a>
      </section>

      <section className="flex flex-col gap-[28px]">
        <p className="text-sub text-text/75">You</p>
        <a href="/why-believe" className="text-h4">
          Why believe?
        </a>
        <a href="/give-your-rights" className="text-h4">
          Give your rights
        </a>
      </section>

      <section className="flex flex-col gap-[28px]">
        <p className="text-sub text-text/75">Us</p>
        <a href="/handbook" className="text-h4">
          Handbook
        </a>
        <a href="/blog" className="text-h4">
          Blog
        </a>
      </section>
      <div className="flex flex-wrap gap-32">
        <a
          href="https://discord.gg/7eVCyQ5GGb"
          className="text-text hover:text-accent-reversed duration-150 ease-out"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandDiscord strokeWidth={1.5} />
        </a>
        <a
          href="https://www.youtube.com/@bibleio"
          className="text-text hover:text-accent-reversed duration-150 ease-out"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandYoutube strokeWidth={1.5} />
        </a>
        <a
          href="https://www.instagram.com/bibleioo/"
          className="text-text hover:text-accent-reversed duration-150 ease-out"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandInstagram strokeWidth={1.5} />
        </a>
        <a
          href="https://bsky.app/profile/bibleio.com"
          className="text-text hover:text-accent-reversed duration-150 ease-out"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandBluesky strokeWidth={1.5} />
        </a>
        <a
          href="https://x.com/bibleioo"
          className="text-text hover:text-accent-reversed duration-150 ease-out"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandX strokeWidth={1.5} />
        </a>
        <a
          href="https://github.com/bibleio"
          className="text-text hover:text-accent-reversed duration-150 ease-out"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandGithub strokeWidth={1.5} />
        </a>
      </div>
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
              <Logo size={26} subText="Website" />
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
