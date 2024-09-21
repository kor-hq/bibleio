import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

const applyTheme = (theme: string) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const ThemeSwitcher = () => {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem('theme') || 'system';
  });
  React.useEffect(() => {
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () =>
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  React.useEffect(() => {
    if (theme === 'system') {
      applyTheme(getSystemTheme());
    } else {
      applyTheme(theme);
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ToggleGroup.Root
      type="single"
      value={theme}
      defaultValue="system"
      onValueChange={(theme) => {
        if (theme) setTheme(theme);
      }}
      className="flex h-fit w-fit gap-6"
    >
      <ToggleGroup.Item
        value="system"
        className="flex size-32 items-center justify-center rounded-full border border-stroke text-text shadow-material-component data-[state=on]:bg-accent-reversed data-[state=on]:text-text-reversed data-[state=on]:shadow-colored-component"
      >
        <IconSystem />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="light"
        className="flex size-32 items-center justify-center rounded-full border border-stroke text-text shadow-material-component data-[state=on]:bg-accent-reversed data-[state=on]:text-text-reversed data-[state=on]:shadow-colored-component"
      >
        <IconSun />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="dark"
        className="flex size-32 items-center justify-center rounded-full border border-stroke text-text shadow-material-component data-[state=on]:bg-accent-reversed data-[state=on]:text-text-reversed data-[state=on]:shadow-colored-component"
      >
        <IconMoon />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};

const IconSystem = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
      <path d="M7 20h10" />
      <path d="M9 16v4" />
      <path d="M15 16v4" />
    </svg>
  );
};
const IconSun = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-sun"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
  );
};

const IconMoon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
    </svg>
  );
};
