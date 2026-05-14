import type { Dispatch, SetStateAction } from 'react';
import { Toggle, ToggleGroup } from '@base-ui/react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeToggleProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SystemIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const ITEMS: { value: Theme; label: string; icon: React.ReactNode }[] = [
  { value: 'light', label: 'Light', icon: <SunIcon /> },
  { value: 'dark', label: 'Dark', icon: <MoonIcon /> },
  { value: 'system', label: 'System', icon: <SystemIcon /> },
];

export function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  return (
    <ToggleGroup
      value={[theme]}
      onValueChange={(values) => {
        if (values.length > 0) setTheme(values[values.length - 1] as Theme);
      }}
      className="inline-flex gap-0.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 overflow-hidden p-0.5"
    >
      {ITEMS.map(({ value, label, icon }) => (
        <Toggle
          key={value}
          value={value}
          aria-label={`${label} mode`}
          className="inline-flex items-center px-2 py-2 text-xs font-medium transition-colors cursor-pointer
            text-zinc-600 dark:text-zinc-400 border border-transparent
            hover:bg-zinc-50 dark:hover:bg-zinc-700 data-pressed:shadow-xs data-pressed:border-black/10 dark:data-pressed:border-white/10
            data-pressed:bg-white data-pressed:text-zinc-950 dark:data-pressed:bg-zinc-900 dark:data-pressed:text-white
            focus:outline-none focus-visible:ring-2 focus-visible:ring-florida-orange focus-visible:ring-inset rounded-md transform active:scale-95"
        >
          {icon}
        </Toggle>
      ))}
    </ToggleGroup>
  );
}
