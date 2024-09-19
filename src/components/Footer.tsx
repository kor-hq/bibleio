import React from 'react';
import { Logo } from '@bibleio/design';

export const Footer = () => {
  return (
    <footer className="relative grid grid-cols-3 items-center border-t border-t-stroke px-[256px] text-text max-[1550px]:px-0 max-[1100px]:grid-cols-1 max-[1100px]:divide-y max-[1100px]:border-none">
      <a
        className="absolute bottom-[85%] left-1/2 flex size-72 -translate-x-1/2 items-center justify-center rounded-full border border-stroke bg-bg-1 duration-150 ease-out hover:-translate-y-6 hover:drop-shadow-xl max-[1100px]:bottom-[96%]"
        href="/"
      >
        <Logo size={32} />
      </a>
      <div className="flex h-full flex-col gap-16 border-l border-stroke p-32">
        <div className="flex items-center justify-between">
          <h2 className="text-h2 font-medium">Bibleio Dev</h2>
          <p className="text-right font-mono text-sub leading-none">
            0.1-alpha 2024
          </p>
        </div>
        <p className="text-body leading-[220%]">
          Innovating the industry of Bible <strong>developer</strong> software.{' '}
          <FooterItem href="https://dukc.dev" newTab>
            By dukc.
          </FooterItem>
        </p>
        <div className="flex gap-24">
          <a
            href="https://dukc.notion.site/Bibleio-781f29eb2433420d8dbd98feaa584237?pvs=74"
            target="_blank"
          ></a>
          <a href="https://www.youtube.com/@bibleio" target="_blank"></a>
          <a href="https://github.com/bibleio" target="_blank"></a>

          <a href="https://discord.gg/7eVCyQ5GGb" target="_blank"></a>
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
        <h2 className="text-h2 font-medium">Products</h2>
        <div className="flex flex-col gap-24">
          <FooterItem href="https://app.bibleio.com">Web App</FooterItem>
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
