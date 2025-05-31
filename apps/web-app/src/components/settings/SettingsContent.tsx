import { Tabs } from "@ark-ui/react/tabs";
import { ListItem, Slider, Switch } from "@bibleio/design";
import { IconBrush, IconInfoCircle } from "@tabler/icons-react";
import { useState } from "react";
import ThemeSwitcher from "../ThemeSwitcher";
import { useSettingsStore } from "~/stores/settingsStore";

export function SettingsContent() {
  const [value, setValue] = useState<string | null>("appearance");
  return (
    <Tabs.Root
      id="container"
      value={value}
      onValueChange={(e) => setValue(e.value)}
      className="flex h-full w-full max-w-[64rem] gap-12 px-12"
    >
      <Tabs.List
        id="sidebar"
        className="flex w-[16rem] min-w-0 flex-col gap-20"
      >
        <h2 className="text-h2 text-text">Settings</h2>
        <div className="flex flex-col gap-0">
          <SidebarLabel>App</SidebarLabel>
          <Tabs.Trigger value="appearance">
            <ListItem selected={value === "appearance"}>
              <IconBrush strokeWidth={1.5} />
              Appearance
            </ListItem>
          </Tabs.Trigger>
          <Tabs.Trigger value="info">
            <ListItem selected={value === "info"}>
              <IconInfoCircle strokeWidth={1.5} />
              Info
            </ListItem>
          </Tabs.Trigger>
        </div>
      </Tabs.List>
      <AppearanceContent />
      <InfoContent />
    </Tabs.Root>
  );
}

function AppearanceContent() {
  const {
    redWordsOfJesus,
    setRedWordsOfJesus,
    textSize,
    setTextSize,
    lineHeight,
    setLineHeight,
    hydrated,
  } = useSettingsStore();

  return (
    <Tabs.Content
      value="appearance"
      className="bg-fg-2 border-stroke rounded-16 px-128 flex h-full w-full flex-col gap-24 overflow-y-auto border p-32"
    >
      <h3 className="text-h3 text-text">Theme</h3>
      <div className="flex items-center justify-between">
        <p className="text-body text-text/80">Theme</p>
        <ThemeSwitcher />
      </div>
      <h3 className="text-h3 text-text">Bible</h3>
      <div className="flex items-center justify-between">
        <p className="text-body text-text/80">Text size</p>
        <div className="w-[50%]">
          <Slider
            max={100}
            value={[textSize]}
            onValueChange={(values) => setTextSize(values[0])}
            disabled={!hydrated}
            step={8}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-body text-text/80">Line height</p>
        <div className="w-[50%]">
          <Slider
            max={100}
            value={[lineHeight]}
            onValueChange={(values) => setLineHeight(values[0])}
            disabled={!hydrated}
            step={8}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-body text-text/80">Red words of Jesus</p>
        <Switch
          checked={redWordsOfJesus}
          onCheckedChange={(checked) => setRedWordsOfJesus(checked)}
          disabled={!hydrated}
        />
      </div>
      <BibleContentSettingsPreview />
    </Tabs.Content>
  );
}

function InfoContent() {
  return (
    <Tabs.Content
      value="info"
      className="bg-fg-2 border-stroke rounded-16 flex h-full w-full flex-col gap-16 overflow-y-auto border p-32"
    >
      <img
        className="border-stroke rounded-16 size-72 border"
        src="/appicon.png"
        width={72}
        height={72}
        alt="bibleio app icon"
      />
      <h2 className="text-h2">Bibleio Web App</h2>
      <div className="flex gap-16">
        <p className="text-body text-text/80 font-mono">v0.1.0-development</p>
        <p className="text-body text-text/80">June 2025</p>
      </div>
      <div className="flex gap-16">
        <a
          href="https://bibleio.com"
          className="text-body text-text/80 hover:text-accent-reversed duration-150 ease-out"
        >
          Homepage
        </a>
        <a
          href="https://bibleio.com/contact"
          className="text-body text-text/80 hover:text-accent-reversed duration-150 ease-out"
        >
          Community, support & feedback
        </a>
      </div>
      <a
        href="https://korhq.com"
        className="text-body text-text/50 hover:text-accent-reversed duration-150 ease-out"
      >
        Made with love by KOR. Thanks for using Bibleio!
      </a>
    </Tabs.Content>
  );
}

function SidebarLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col pb-6 pl-14">
      <h6 className="text-body text-text/75">{children}</h6>
    </div>
  );
}

function BibleContentSettingsPreview() {
  return (
    <article className="bible-content shadow-material-component bg-fg-2 border-stroke rounded-16 motion-delay-100 h-fit border p-12">
      <h4 className="heading">Matthew 10 WEBP</h4>
      <h5 className="subtitle">Example</h5>
      <span className="verseNumber">5</span>
      <span>Jesus sent these twelve out and commanded them, saying,</span>
      <span>
        <span className="wj">
          “Don’t go among the Gentiles, and don’t enter into any city of the
          Samaritans.
        </span>
      </span>
      <span className="verseNumber">6</span>
      <span>
        <span className="wj">
          Rather, go to the lost sheep of the house of Israel.
        </span>
      </span>
      <span className="verseNumber">7</span>
      <span>
        <span className="wj">
          As you go, preach, saying, ‘The Kingdom of Heaven is at hand!’
        </span>
      </span>
      <span className="verseNumber">8</span>
      <span>
        <span className="wj">Heal the sick, cleanse the lepers,</span>
      </span>
      <span>
        <span className="wj">
          and cast out demons. Freely you received, so freely give.
        </span>
      </span>
      <span className="verseNumber">9</span>
      <span>
        <span className="wj">
          Don’t take any gold, silver, or brass in your money belts.
        </span>
      </span>
    </article>
  );
}
