import { Select } from '@base-ui/react';
import { MONTHS } from '../data/produce';

interface MonthSelectProps {
  value: number;
  onChange: (month: number) => void;
}

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 12 12" fill="none" aria-hidden>
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function MonthSelect({ value, onChange }: MonthSelectProps) {
  return (
    <Select.Root
      value={String(value)}
      onValueChange={(v) => onChange(Number(v))}
    >
      <Select.Trigger
        className="mx-1 py-0.5 md:py-1 px-1 inline-flex items-center gap-1.5 cursor-pointer border-b-3 transition hover:text-zinc-500 dark:hover:text-zinc-400"
        aria-label="Select month"
      >
        <Select.Value>{MONTHS[value]}</Select.Value>
        <Select.Icon className="relative top-1">
          <ChevronIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Positioner sideOffset={6}>
          <Select.Popup className="z-50 min-w-35 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow-xl py-1 focus:outline-none">
            <Select.List>
              {MONTHS.map((month, i) => (
                <Select.Item
                  key={i}
                  value={String(i)}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-800 dark:text-zinc-200
                    cursor-pointer select-none transition-colors
                    data-highlighted:bg-orange-50 dark:data-highlighted:bg-orange-900/20 data-highlighted:text-orange-600
                    data-selected:font-semibold data-selected:text-orange-600"
                >
                  <Select.ItemIndicator className="w-4">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Select.ItemIndicator>
                  <Select.ItemText>{month}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
