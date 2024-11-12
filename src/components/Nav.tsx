import { useState } from 'react';
import { Logo } from '@bibleio/design';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export function Nav({ path }: { path: string }) {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { text: 'Home', link: '/' },
    { text: 'Apps', link: '/apps' },
    { text: 'Products', link: '/#apps' },
    { text: 'Why Believe?', link: '/why-believe' },
    { text: 'Roadmap', link: '/roadmap' },
    { text: 'Contribute', link: '/roadmap#contribute' },
    { text: 'Blog', link: '/blog' },
  ];

  return (
    <nav className="fixed z-50 flex h-72 w-screen flex-col">
      <div className="flex justify-between p-16">
        <div className="flex h-[2.5rem] items-center rounded-full border border-stroke bg-fg-1 px-24 py-12 shadow-popup">
          <a
            href="/"
            className="duration-150 ease-out hover:-translate-y-2 active:translate-y-2"
          >
            <Logo size={26} subText="Website" />
          </a>
        </div>
        <NavigationMenu.Root className="flex h-fit w-fit flex-col items-end gap-6">
          <NavigationMenu.List className="flex h-[2.5rem] w-fit items-center gap-24 rounded-full border border-stroke bg-fg-1 px-24 py-12 shadow-popup">
            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="/"
                className={`text-body leading-none text-text duration-150 ease-out hover:text-accent-reversed ${path == '/' && 'font-semibold'}`}
              >
                Home
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="/why-believe"
                className={`text-body leading-none text-text duration-150 ease-out hover:text-accent-reversed ${path == '/why-believe' && 'font-semibold'}`}
              >
                Why believe?
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group flex items-center gap-6 text-body leading-none text-text duration-150 ease-out hover:text-accent-reversed">
                Products <ChevronDown />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="grid h-[12.5rem] w-[43rem] animate-scale-in grid-cols-3 gap-12 rounded-[20px] border border-stroke bg-fg-1 p-12 text-text shadow-popup">
                <NavigationMenu.Link
                  href="/apps#web"
                  className="flex flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed"
                >
                  <h4 className="text-h4 text-text">Web</h4>
                  <p className="text-body leading-[140%] text-text">
                    Simple Bible study app in the web
                  </p>
                </NavigationMenu.Link>

                <NavigationMenu.Link
                  href="/apps#mobile"
                  className="flex flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed"
                >
                  <h4 className="text-h4 text-text">Mobile</h4>
                  <p className="text-body leading-[140%] text-text">
                    Bible study environment on the go
                  </p>
                </NavigationMenu.Link>

                <NavigationMenu.Link
                  href="/apps#desktop"
                  className="flex flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed"
                >
                  <h4 className="text-h4 text-text">Desktop</h4>
                  <p className="text-body leading-[140%] text-text">
                    Fully featured Bible study envrionment
                  </p>
                </NavigationMenu.Link>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group flex items-center gap-6 text-body leading-none text-text duration-150 ease-out hover:text-accent-reversed">
                You <ChevronDown />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="grid h-[12.5rem] animate-scale-in grid-cols-3 gap-12 rounded-[20px] border border-stroke bg-fg-1 p-12 text-text shadow-popup">
                <NavigationMenu.Link
                  href="https://cat-skate-e91.notion.site/Onboarding-132aafe2ea3c800ab45ddbe0a5db3da8?pvs=4"
                  className="flex flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed"
                >
                  <h4 className="text-h4 text-text">Contribute</h4>
                  <p className="text-body leading-[140%] text-text">
                    Help us build Bibleio
                  </p>
                </NavigationMenu.Link>

                <NavigationMenu.Link
                  href="/why-believe"
                  className="flex flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed"
                >
                  <h4 className="text-h4 text-text">Why believe?</h4>
                  <p className="text-body leading-[140%] text-text">
                    Why believe in God or Jesus?
                  </p>
                </NavigationMenu.Link>

                <NavigationMenu.Link
                  href="/give-your-rights"
                  className="flex flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed"
                >
                  <h4 className="text-h4 text-text">Give your rights</h4>
                  <p className="text-body leading-[140%] text-text">
                    For the sake of the gospel
                  </p>
                </NavigationMenu.Link>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="group flex items-center gap-6 text-body leading-none text-text duration-150 ease-out hover:text-accent-reversed">
                Us <ChevronDown />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="flex h-[18rem] animate-scale-in gap-12 rounded-[20px] border border-stroke bg-fg-1 p-12 text-text shadow-popup">
                <div className="grid h-full min-h-0 w-fit grid-cols-1 grid-rows-5 gap-12">
                  <NavigationMenu.Link
                    href="https://github.com/bibleio"
                    className="flex h-full w-fit items-center gap-8 rounded-8 border border-stroke bg-fg-2 p-8 shadow-material-component duration-150 ease-out hover:border-accent-reversed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5rem"
                      height="1.5rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link
                    href="https://x.com/bibleioo"
                    className="flex h-full w-fit items-center gap-8 rounded-8 border border-stroke bg-fg-2 p-8 shadow-material-component duration-150 ease-out hover:border-accent-reversed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5rem"
                      height="1.5rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link
                    href="https://mastodon.social/@bibleio"
                    className="flex h-full w-fit items-center gap-8 rounded-8 border border-stroke bg-fg-2 p-8 shadow-material-component duration-150 ease-out hover:border-accent-reversed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5rem"
                      height="1.5rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-mastodon"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18.648 15.254c-1.816 1.763 -6.648 1.626 -6.648 1.626a18.262 18.262 0 0 1 -3.288 -.256c1.127 1.985 4.12 2.81 8.982 2.475c-1.945 2.013 -13.598 5.257 -13.668 -7.636l-.026 -1.154c0 -3.036 .023 -4.115 1.352 -5.633c1.671 -1.91 6.648 -1.666 6.648 -1.666s4.977 -.243 6.648 1.667c1.329 1.518 1.352 2.597 1.352 5.633s-.456 4.074 -1.352 4.944z" />
                      <path d="M12 11.204v-2.926c0 -1.258 -.895 -2.278 -2 -2.278s-2 1.02 -2 2.278v4.722m4 -4.722c0 -1.258 .895 -2.278 2 -2.278s2 1.02 2 2.278v4.722" />
                    </svg>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link
                    href="https://discord.gg/7eVCyQ5GGb"
                    className="flex h-full w-fit items-center gap-8 rounded-8 border border-stroke bg-fg-2 p-8 shadow-material-component duration-150 ease-out hover:border-accent-reversed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5rem"
                      height="1.5rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-discord"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                      <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                      <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
                      <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                    </svg>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link
                    href="https://www.youtube.com/@bibleio"
                    className="flex h-full w-fit items-center gap-8 rounded-8 border border-stroke bg-fg-2 p-8 shadow-material-component duration-150 ease-out hover:border-accent-reversed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5rem"
                      height="1.5rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                      <path d="M10 9l5 3l-5 3z" />
                    </svg>
                  </NavigationMenu.Link>
                </div>

                <div className="grid h-full min-h-0 grid-cols-1 grid-rows-2 gap-12">
                  <NavigationMenu.Link
                    href="/blog"
                    className="flex flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed"
                  >
                    <h4 className="text-h4 text-text">Blog</h4>
                    <p className="text-body leading-[140%] text-text">
                      Updates & Christian content
                    </p>
                  </NavigationMenu.Link>
                  <NavigationMenu.Link
                    href="/roadmap"
                    className="flex w-[15rem] flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed"
                  >
                    <h4 className="text-h4 text-text">Roadmap</h4>
                    <p className="text-body leading-[140%] text-text">
                      Our plans & progress
                    </p>
                  </NavigationMenu.Link>
                </div>

                <NavigationMenu.Link
                  href="/readme"
                  className="flex h-full min-h-0 w-[15rem] flex-col justify-end gap-8 rounded-8 border border-stroke bg-fg-2 p-16 shadow-material-component duration-150 ease-out hover:border-accent-reversed"
                >
                  <h4 className="text-h4 text-text">README</h4>
                  <p className="text-body leading-[140%] text-text">About us</p>
                </NavigationMenu.Link>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>

          <NavigationMenu.Viewport />
        </NavigationMenu.Root>
      </div>
      <div
        className={`m-16 mt-0 flex-col items-center gap-36 rounded-16 border border-stroke bg-fg-2 p-24 shadow-popup ${navOpen ? 'flex animate-scale-in' : 'hidden'}`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`text-h4 leading-none text-text ${path == item.link && 'font-semibold'}`}
            onClick={() => {
              setNavOpen(false);
            }}
          >
            {item.text}
          </a>
        ))}
      </div>
    </nav>
  );
}

const Menu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-text"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 8l16 0" />
    <path d="M4 16l16 0" />
  </svg>
);
const Close = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-text"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="origin-center text-text duration-150 ease-out group-hover:text-accent-reversed group-data-[state=open]:-rotate-180"
  >
    <path d="M4 6L8 10L12 6" />
  </svg>
);
