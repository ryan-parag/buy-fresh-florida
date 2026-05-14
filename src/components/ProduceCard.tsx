import React, { useState } from 'react';
import { type ProduceItem } from '../data/produce';
import { SeasonBar } from './SeasonBar';
import { MONTHS_SHORT } from '../data/produce';

interface ProduceCardProps {
  item: ProduceItem;
  currentMonth: number;
  inSeason: boolean;
}

export function ProduceCard({ item, currentMonth, inSeason }: ProduceCardProps) {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={[
        'group relative flex flex-col rounded-2xl border pb-2 pt-6 px-2 md:py-4 md:px-4 transition-all duration-200',
        inSeason
          ? 'bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-800 shadow-sm'
          : 'hidden',
      ].join(' ')}
      id={item.name.toLowerCase().replace(/\s/g, '-')}
    >
      <div className="inline-flex items-center gap-1 absolute top-3 right-3">
        <span className="text-[10px] font-semibold tracking-wide uppercase text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900/50 rounded-full px-2 py-0.5">{item.category}</span>
        {inSeason && (
          <span className="text-[10px] font-semibold tracking-wide uppercase text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/50 rounded-full px-2 py-0.5">
            In Season
          </span>
        )}
      </div>

      <div className="flex items-start gap-3 mb-2">
        <div className="text-6xl leading-none rounded-xl p-2 bg-zinc-100 dark:bg-black/20 border border-black/5 dark:border-white/5" role="img" aria-label={item.name}>
          {item.emoji}
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm leading-tight">
            {item.name}
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1">
            {item.description}
          </p>
          <div className="flex md:hidden flex-col items-start mt-1">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-xs underline text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white font-semibold cursor-pointer"
            >
              {showDetails ? 'Hide' : 'Show'} Details
            </button>
            {
              showDetails && (
                <div className="flex flex-wrap gap-1 mt-1 items-center">
                  <span className="text-[10px] text-zinc-600 dark:text-zinc-400">In season:</span>
                  {
                    item.months.map((active, i) => (
                      active && (
                        <span className={`text-[10px] font-semibold text-florida-orange border border-florida-orange/20 bg-florida-orange/10 py-0.5 px-2 rounded-full`}>{MONTHS_SHORT[i]}</span>
                      )
                    ))
                  }
                </div>
              )
            }
          </div>
          <div className="w-full flex-col gap-1 hidden md:flex">
            <SeasonBar months={item.months} currentMonth={currentMonth} />
            <div className="flex gap-1 w-full">
              {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((l, i) => (
                <span
                  key={i}
                  className={[
                    'text-center text-[9px] leading-none w-7 block m-0 p-0',
                    i === currentMonth ? 'font-bold text-florida-orange' : 'text-zinc-500 dark:text-zinc-400',
                  ].join(' ')}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
