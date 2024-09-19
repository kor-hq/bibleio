import { useState } from 'react';
import { Logo } from '@bibleio/design';

export function Nav({ path }: { path: string }) {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { text: 'Home', link: '/' },
    { text: 'Apps', link: '/apps' },
    { text: 'Products', link: '/products' },
    { text: 'Why Believe?', link: '/why-believe' },
    { text: 'About', link: '/about' },
    { text: 'Media', link: '/media' },
  ];

  return (
    <nav className="sticky top-0 z-50 flex h-72 w-screen flex-col">
      <div className="flex justify-between p-16">
        <div className="bg-fg-2 shadow-popup border-stroke flex h-[40px] items-center rounded-full border px-24 py-12">
          <a
            href="/"
            className="duration-150 ease-out hover:-translate-y-2 active:translate-y-2"
          >
            <Logo size={26} subText="Website" />
          </a>
        </div>
        <div className="bg-fg-2 shadow-popup border-stroke flex h-[40px] items-center gap-24 rounded-full border px-24 py-12">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`text-body text-text hover:text-accent-reversed leading-none duration-150 ease-out max-[680px]:hidden ${path == item.link && 'font-semibold'}`}
            >
              {item.text}
            </a>
          ))}
          <div className="items-center max-[680px]:flex min-[680px]:hidden">
            {navOpen ? (
              <button
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
                className="animate-scale-in"
              >
                <Close />
              </button>
            ) : (
              <button
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
                className="active:animate-scale-out"
              >
                <Menu />
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={`bg-fg-2 shadow-popup border-stroke rounded-16 m-16 mt-0 flex-col items-center gap-36 border p-24 ${navOpen ? 'animate-scale-in flex' : 'hidden'}`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`text-h4 text-text leading-none ${path == item.link && 'font-semibold'}`}
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

const Menu = () => {
  return (
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
      className="text-text"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8l16 0" />
      <path d="M4 16l16 0" />
    </svg>
  );
};
const Close = () => {
  return (
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
      className="text-text"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
