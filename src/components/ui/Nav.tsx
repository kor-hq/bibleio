import { useState } from "react";

export default function Nav({ path }: { path: string }) {
  const [navOpen, setNavOpen] = useState(false);
  console.log(path);
  function handleNavOpen() {
    setNavOpen(!navOpen);
  }
  function clickedLink() {
    setNavOpen(false);
  }
  const navItems = [
    { text: "Home", link: "/" },
    { text: "App", link: "https://app.bibleio.com" },
    { text: "Products", link: "/#products" },
    { text: "About", link: "/#about" },
    { text: "Blog", link: "/blog" },
    { text: "Why Believe?", link: "/why-believe" },
  ];
  return (
    <nav className="sticky top-0 flex flex-col w-screen h-[56px] gap-8 z-50">
      <div className="bg-light-fg-1 flex justify-between items-center px-32 py-12 border border-b-black">
        <a href="/">
          <img
            src={"/brand/logo-light.svg"}
            className="component-hover-effect"
            alt="Bibleio"
            height={32}
            width={57.04}
          />
        </a>
        <div className="flex gap-36 w-fit h-fit items-center max-[600px]:hidden">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={
                path === item.link
                  ? "font-semibold text-body text-light-text"
                  : "text-body text-light-text"
              }
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className="min-[600px]:hidden">
          {navOpen ? (
            <button
              onClick={() => {
                handleNavOpen();
              }}
            >
              <img src="/nav/close.svg" />
            </button>
          ) : (
            <button
              onClick={() => {
                handleNavOpen();
              }}
            >
              <img src="/nav/menu.svg" />
            </button>
          )}
        </div>
      </div>
      <div
        className={`bg-light-fg-1 flex-col p-32 gap-32 border border-black ${navOpen ? "flex" : "hidden"}`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={
              path === item.link
                ? "font-semibold text-body text-light-text"
                : "text-body text-light-text"
            }
            onClick={() => {
              clickedLink();
            }}
          >
            {item.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
