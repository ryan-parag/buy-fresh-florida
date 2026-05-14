import { useMemo } from 'react';
import { PRODUCE, type Category, type ProduceItem } from '../data/produce';

interface UseSeasonalityOptions {
  month: number; // 0-based (0 = January)
  category: Category | 'All';
  search: string;
}

interface SeasonalityResult {
  inSeason: ProduceItem[];
  outOfSeason: ProduceItem[];
  filtered: ProduceItem[];
  peakCount: number;
}

export function useSeasonality({ month, category, search }: UseSeasonalityOptions): SeasonalityResult {
  return useMemo(() => {
    const q = search.toLowerCase().trim();

    const filtered = PRODUCE.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category;
      const matchesSearch = q === '' || item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });

    const inSeason = filtered.filter((item) => item.months[month]);
    const outOfSeason = filtered.filter((item) => !item.months[month]);

    return {
      inSeason,
      outOfSeason,
      filtered,
      peakCount: inSeason.length,
    };
  }, [month, category, search]);
}
