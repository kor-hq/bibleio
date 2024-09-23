import React from 'react';
import { Logo, ThemeSwitcher } from '@bibleio/design';

export const Footer = () => {
  return (
    <footer className="relative grid grid-cols-4 items-center border-t border-t-stroke px-[256px] text-text max-[1550px]:px-0 max-[1100px]:grid-cols-1 max-[1100px]:divide-y max-[1100px]:border-none">
      <a
        className="absolute bottom-[85%] left-1/2 flex size-72 -translate-x-1/2 items-center justify-center rounded-full border border-stroke bg-bg-1 duration-150 ease-out hover:-translate-y-6 hover:drop-shadow-xl max-[1100px]:bottom-[96%]"
        href="/"
      >
        <Logo size={32} />
      </a>
      <div className="flex h-full flex-col gap-16 border-l border-stroke p-32">
        <div className="flex items-center justify-between">
          <h2 className="text-h2 font-medium">Bibleio</h2>
          <p className="text-right font-mono text-sub leading-none">
            0.1-alpha 2024
          </p>
        </div>
        <p className="text-body leading-[220%]">
          Innovating the industry of Bible software.{' '}
          <FooterItem href="https://dukc.dev" newTab>
            By dukc.
          </FooterItem>
        </p>
        <ThemeSwitcher />
      </div>
      <div className="flex h-full flex-col gap-16 border-l border-stroke p-32">
        <h2 className="text-h2 font-medium">Products</h2>
        <div className="flex flex-col gap-24">
          <FooterItem href="https://app.bibleio.com">Web App</FooterItem>
        </div>
      </div>
      <div className="=items-start flex h-full flex-col gap-16 border-l border-stroke p-32">
        <h2 className="text-h2 font-medium">Developers</h2>
        <div className="flex flex-col items-start gap-24">
          <FooterItem href="/api">API</FooterItem>
          <FooterItem href="/design">Design</FooterItem>
          <FooterItem href="/biblejson">BibleJSON</FooterItem>
        </div>
      </div>
      <div className="flex h-full flex-col gap-16 border-x border-stroke p-32">
        <h2 className="text-h2 font-medium">About</h2>
        <div className="flex flex-col gap-24">
          <FooterItem href="https://app.bibleio.com">About</FooterItem>
          <FooterItem href="https://app.bibleio.com">Media</FooterItem>
        </div>
        <div className="flex gap-24">
          <a
            href="https://dukc.notion.site/Bibleio-781f29eb2433420d8dbd98feaa584237?pvs=74"
            target="_blank"
          >
            <IconNotion />
          </a>
          <a href="https://www.youtube.com/@bibleio" target="_blank">
            <IconYouTube />
          </a>
          <a href="https://github.com/bibleio" target="_blank">
            <IconGitHub />
          </a>

          <a href="https://discord.gg/7eVCyQ5GGb" target="_blank">
            <IconDiscord />
          </a>
        </div>
      </div>
    </footer>
  );
};

const FooterItem = ({
  href,
  newTab,
  children,
}: {
  href: string;
  newTab?: boolean;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target={newTab ? '_blank' : ''}
    className="duration-150 ease-out hover:text-accent-reversed"
  >
    {children}
  </a>
);

// icons

const IconYouTube = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-text duration-150 ease-out hover:text-accent-reversed"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
    <path d="M10 9l5 3l-5 3z" />
  </svg>
);

const IconNotion = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-text duration-150 ease-out hover:text-accent-reversed"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11 17.5v-6.5h.5l4 6h.5v-6.5" />
    <path d="M19.077 20.071l-11.53 .887a1 1 0 0 1 -.876 -.397l-2.471 -3.294a1 1 0 0 1 -.2 -.6v-10.741a1 1 0 0 1 .923 -.997l11.389 -.876a2 2 0 0 1 1.262 .33l1.535 1.023a2 2 0 0 1 .891 1.664v12.004a1 1 0 0 1 -.923 .997z" />
    <path d="M4.5 5.5l2.5 2.5" />
    <path d="M20 7l-13 1v12.5" />
  </svg>
);

const IconDiscord = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-text duration-150 ease-out hover:text-accent-reversed"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
    <path d="M7 16.5c3.5 1 6.5 1 10 0" />
  </svg>
);

const IconGitHub = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-text duration-150 ease-out hover:text-accent-reversed"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
);
