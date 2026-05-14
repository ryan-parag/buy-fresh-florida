import { Tabs } from '@base-ui/react';
import { type Category, CATEGORIES } from '../data/produce';

interface CategoryTabsProps {
  value: Category | 'All';
  onChange: (cat: Category | 'All') => void;
}

const ALL_TABS = ['All', ...CATEGORIES] as const;

const CATEGORY_EMOJI: Record<string, string> = {
  All: '🌿',
  Fruit: '🍑',
  Vegetable: '🥦',
};

export function CategoryTabs({ value, onChange }: CategoryTabsProps) {
  return (
    <Tabs.Root
      value={value}
      onValueChange={(v) => onChange(v as Category | 'All')}
      className="w-full"
    >
      <Tabs.List className="inline-flex gap-0.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 overflow-hidden p-0.5">
        {ALL_TABS.map((tab) => (
          <Tabs.Tab
            key={tab}
            value={tab}
            className="inline-flex items-center px-2 py-1 gap-1 text-sm font-medium transition-colors cursor-pointer
            text-zinc-600 dark:text-zinc-400 border border-transparent
            hover:bg-zinc-50 dark:hover:bg-zinc-700 data-active:shadow-xs data-active:border-black/10 dark:data-active:border-white/10
            data-active:bg-white data-active:text-zinc-950 dark:data-active:bg-zinc-900 dark:data-active:text-white data-active:font-semibold
            focus:outline-none focus-visible:ring-2 focus-visible:ring-florida-orange focus-visible:ring-inset rounded-md transform active:scale-95"
          >
            <span>{CATEGORY_EMOJI[tab]}</span>
            {tab}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
}
