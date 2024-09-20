import { ListItem, ListItemCollapsible } from '@bibleio/design';
import { useState } from 'react';
import type { CollectionEntry } from 'astro:content';

type Item = CollectionEntry<'design'>;

function findChildren(items: any, parentSlug: string) {
  return items.filter((item: Item) => {
    return parentSlug === item.slug.split('/').slice(0, -1).join('/');
  });
}

function renderItems(
  items: any,
  projectSlug: string,
  parentSlug: string,
  currentSlug: string,
  isSidebarOpen: boolean
) {
  const children = findChildren(items, parentSlug);

  return (
    <ul className={`flex flex-col gap-8`}>
      {children.map((item: Item) => {
        const isDescendant = currentSlug.startsWith(
          `/${projectSlug}/docs/${item.slug}`
        );

        const isSelected = `/${projectSlug}/docs/${item.slug}` === currentSlug;
        const isOpen = isSelected || isDescendant;

        console.log(`isOpen ${item.slug}`, isOpen);
        if (item.data.directory) {
          return (
            <li key={item.slug} className="w-full">
              <ListItemCollapsible
                text={item.data.title}
                defaultOpen={isOpen}
                selected={isSelected}
              >
                {renderItems(
                  items,
                  projectSlug,
                  item.slug,
                  currentSlug,
                  isSidebarOpen
                )}
              </ListItemCollapsible>
            </li>
          );
        } else if (item.data.section) {
          return (
            <>
              <li key={item.slug} className="flex h-36 w-full items-center">
                <p className="text-sub leading-none text-text-subtle">
                  {item.data.title}
                </p>
              </li>
              <li key={item.slug} className="w-full">
                {renderItems(
                  items,
                  projectSlug,
                  item.slug,
                  currentSlug,
                  isSidebarOpen
                )}
              </li>
            </>
          );
        } else {
          return (
            <li key={item.slug} className="w-full">
              <a href={`/${projectSlug}/docs/${item.slug}`}>
                <ListItem
                  selected={isSelected}
                  className="w-full"
                  text={item.data.title}
                />
              </a>
            </li>
          );
        }
      })}
    </ul>
  );
}

export default function Sidebar({
  currentSlug,
  projectSlug,
  docs,
}: {
  currentSlug: string;
  projectSlug: string;
  docs: string[];
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className={`flex w-[18rem] flex-col`}>
      {renderItems(docs, projectSlug, '', currentSlug, isSidebarOpen)}
    </div>
  );
}

const XIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};

const Bars3Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
