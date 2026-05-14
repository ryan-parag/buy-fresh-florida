import React, { useState } from 'react';
import { type ProduceItem } from '../data/produce';

interface SeasonDashboardProps {
  items: ProduceItem[];
  month: number;
  monthName: string;
}

export function SeasonDashboard({ items, monthName }: SeasonDashboardProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 p-6 text-center text-zinc-500 dark:text-zinc-400 text-sm">
        No produce in season this month matching your filters.
      </div>
    );
  }

  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
      <button
        className="flex items-center gap-2 px-4 py-2 hover:bg-zinc-100 dark:hover:bg-white/5 w-full transition cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex flex-1 items-center gap-2 w-full">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/50 rounded-full px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600" />
            </span>
            Peak Season in {monthName}
          </span>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">{items.length} items fresh right now</span>
        </div>
        <div className={`inline-flex transition transform ${!open ? '-rotate-90' : ''}`}>
          <svg className="text-zinc-500" width="16" height="16" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>
      {
        open && (
          <div className="flex flex-wrap gap-1 px-4 py-3 border-t border-black/10 dark:border-white/10">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.name.toLowerCase().replace(/\s/g, '-')}`}
                className="transform scale-95 transition flex items-center gap-1.5 rounded-full bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-black/10 dark:border-white/10 px-2 py-1 shadow-sm"
              >
                <span className="text-sm leading-none" role="img" aria-label={item.name}>{item.emoji}</span>
                <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200">{item.name}</span>
              </a>
            ))}
          </div>
        )
      }
    </div>
  );
}
