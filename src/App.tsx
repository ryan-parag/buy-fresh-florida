import { useState } from 'react';
import { MONTHS, type Category } from './data/produce';
import { useSeasonality } from './hooks/useSeasonality';
import { useTheme } from './hooks/useTheme';
import { MonthSelect } from './components/MonthSelect';
import { ThemeToggle } from './components/ThemeToggle';
import { CategoryTabs } from './components/CategoryTabs';
import { SeasonDashboard } from './components/SeasonDashboard';
import { ProduceCard } from './components/ProduceCard';
import Logo from './components/Logo';
import RyanLogo from './components/RyanLogo';

export default function App() {
  const { theme, setTheme } = useTheme();
  const [month, setMonth] = useState(() => new Date().getMonth());
  const [category, setCategory] = useState<Category | 'All'>('All');
  const [search, setSearch] = useState('');

  const { inSeason, filtered } = useSeasonality({ month, category, search });

  return (
    <div className="min-h-screen relative bg-white dark:bg-zinc-900 transition-colors duration-300">
      {/* Header */}
      <div className="absolute top-4 left-4 w-10 h-10 rounded-xl border border-black/10 dark:border-white/10 shadow-sm overflow-hidden">
        <Logo />
      </div>
      <div className="absolute top-4 right-4">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
      <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
          What's in season in Florida in
          <MonthSelect value={month} onChange={setMonth} />
          ?
        </h1>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Dashboard */}

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <CategoryTabs value={category} onChange={setCategory} />
          <div className="relative sm:ml-auto flex-shrink-0">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500 pointer-events-none"
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="search"
              placeholder="Search produce…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-600
                bg-white dark:bg-zinc-800 text-sm text-zinc-900 dark:text-zinc-100
                placeholder:text-zinc-400 dark:placeholder:text-zinc-500
                focus:outline-none focus-visible:ring-2 focus-visible:ring-florida-orange
                w-48 transition-all"
            />
          </div>
        </div>
        <SeasonDashboard items={inSeason} month={month} monthName={MONTHS[month]} />
        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-zinc-400 dark:text-zinc-600">
            <p className="text-4xl mb-3">🌿</p>
            <p className="text-sm">No produce found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filtered
              .slice()
              .sort((a, b) => {
                const aIn = a.months[month] ? 1 : 0;
                const bIn = b.months[month] ? 1 : 0;
                return bIn - aIn || a.name.localeCompare(b.name);
              })
              .map((item) => (
                <ProduceCard
                  key={item.id}
                  item={item}
                  currentMonth={month}
                  inSeason={item.months[month]}
                />
              ))}
              <div className="bg-zinc-50 rounded-lg dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-3 text-xs text-zinc-500 dark:text-zinc-400">
                  Note: Weather conditions can affect the harvest schedule.
              </div>
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16 py-6 text-xs text-zinc-600 dark:text-zinc-400 flex items-center justify-between gap-1 px-4">
        <a href="https://www.fdacs.gov/consumer-resources/buy-fresh-from-florida/crops-in-season" className="hover:underline font-medium transition hover:text-zinc-950 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
          Data sourced from FDACS · Florida Fresh Produce Guide
        </a>
        <a href="https://ryanparag.com" className="hover:underline inline-flex items-center font-medium transition hover:text-zinc-950 dark:hover:text-white" target="_blank" rel="noopener noreferrer">
          <div className="w-4 h-4 mr-1">
            <RyanLogo />
          </div>
          Ryan Parag
        </a>
      </footer>
    </div>
  );
}
