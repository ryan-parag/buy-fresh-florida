import { Tooltip } from '@base-ui/react';
import { MONTHS_SHORT } from '../data/produce';

interface SeasonBarProps {
  months: boolean[];
  currentMonth: number;
}

export function SeasonBar({ months, currentMonth }: SeasonBarProps) {

  console.log(months)
  return (
    <div className="flex gap-1 w-full mt-3">
      {months.map((active, i) => (
        <Tooltip.Provider key={i} delay={200}>
          <Tooltip.Root>
            <Tooltip.Trigger
              className={[
                'inline-flex h-2 w-7 rounded-sm transition-colors transform',
                active
                  ? i === currentMonth
                    ? 'bg-florida-orange ring-2 ring-florida-orange/30'
                    : 'bg-florida-orange/50'
                  : 'bg-zinc-200 dark:bg-zinc-700',
              ].join(' ')}
              aria-label={`${MONTHS_SHORT[i]}: ${active ? 'in season' : 'out of season'}`}
            />
            <Tooltip.Portal>
              <Tooltip.Positioner sideOffset={6}>
                <Tooltip.Popup className="rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white text-xs px-2 py-1 shadow-lg">
                  {MONTHS_SHORT[i]}: {active ? '✅ In season' : '❌ Out of season'}
                </Tooltip.Popup>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      ))}
    </div>
  );
}
