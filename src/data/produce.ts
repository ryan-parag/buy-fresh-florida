export type Category = 'Fruit' | 'Vegetable';

export interface ProduceItem {
  id: string;
  name: string;
  category: Category;
  emoji: string;
  // months is a 12-element boolean array, index 0 = January
  months: boolean[];
  description: string;
}

// Helper: build months array from 1-based month ranges (inclusive)
// Supports multiple ranges for split seasons
function season(...ranges: [number, number][]): boolean[] {
  const arr = Array(12).fill(false);
  for (const [start, end] of ranges) {
    if (start <= end) {
      for (let i = start - 1; i <= end - 1; i++) arr[i] = true;
    } else {
      // wraps around year-end, e.g. Oct-Jan
      for (let i = start - 1; i <= 11; i++) arr[i] = true;
      for (let i = 0; i <= end - 1; i++) arr[i] = true;
    }
  }
  return arr;
}

export const PRODUCE: ProduceItem[] = [
  {
    id: 'avocado',
    name: 'Avocados',
    category: 'Fruit',
    emoji: '🥑',
    months: season([6, 1]),
    description: 'Florida avocados are larger and creamier than their California cousins.',
  },
  {
    id: 'blueberry',
    name: 'Blueberries',
    category: 'Fruit',
    emoji: '🫐',
    months: season([3, 5]),
    description: 'Florida blueberries arrive earlier than most U.S. states — a true spring treat.',
  },
  {
    id: 'cabbage',
    name: 'Cabbage',
    category: 'Vegetable',
    emoji: '🥬',
    months: season([12, 6]),
    description: 'Florida cabbage thrives in the mild winter and spring months.',
  },
  {
    id: 'carrot',
    name: 'Carrots',
    category: 'Vegetable',
    emoji: '🥕',
    months: season([12, 5]),
    description: 'Sweet and crisp, Florida winter carrots are harvested from December through May.',
  },
  {
    id: 'sweet-corn',
    name: 'Sweet Corn',
    category: 'Vegetable',
    emoji: '🌽',
    months: season([10, 6]),
    description: 'Florida supplies most of the U.S. winter sweet corn.',
  },
  {
    id: 'grapefruit',
    name: 'Grapefruit',
    category: 'Fruit',
    emoji: '🍊',
    months: season([9, 6]),
    description: 'Florida grows the majority of U.S. grapefruit, harvested fall through early summer.',
  },
  {
    id: 'orange',
    name: 'Oranges',
    category: 'Fruit',
    emoji: '🍊',
    months: season([10, 6]),
    description: 'Florida\'s iconic crop — Valencia and Navel oranges anchor the citrus season.',
  },
  {
    id: 'peach',
    name: 'Peaches',
    category: 'Fruit',
    emoji: '🍑',
    months: season([4, 5]),
    description: 'Florida peaches ripen fast and early — blink and the season\'s gone.',
  },
  {
    id: 'strawberry',
    name: 'Strawberries',
    category: 'Fruit',
    emoji: '🍓',
    months: season([12, 4]),
    description: 'Plant City is the Winter Strawberry Capital of the World.',
  },
  {
    id: 'tomato',
    name: 'Tomatoes',
    category: 'Vegetable',
    emoji: '🍅',
    months: season([10, 6]),
    description: 'Florida is one of the top tomato-producing states, especially in winter.',
  },
  {
    id: 'watermelon',
    name: 'Watermelons',
    category: 'Fruit',
    emoji: '🍉',
    months: season([4, 7], [10, 11]),
    description: 'Florida produces two watermelon crops — spring/summer and a fall harvest.',
  },
  {
    id: 'bell-pepper',
    name: 'Bell Peppers',
    category: 'Vegetable',
    emoji: '🫑',
    months: season([10, 6]),
    description: 'Florida\'s warm winters make it a top U.S. bell pepper supplier.',
  },
  {
    id: 'cucumber',
    name: 'Cucumbers',
    category: 'Vegetable',
    emoji: '🥒',
    months: season([10, 6]),
    description: 'Florida cucumbers are harvested from fall through late spring.',
  },
  {
    id: 'eggplant',
    name: 'Eggplant',
    category: 'Vegetable',
    emoji: '🍆',
    months: season([11, 6]),
    description: 'Glossy Florida eggplants peak in winter and spring.',
  },
  {
    id: 'snap-bean',
    name: 'Snap Beans',
    category: 'Vegetable',
    emoji: '🫘',
    months: season([10, 5]),
    description: 'Also called green beans — Florida snap beans are a winter staple.',
  },
  {
    id: 'squash',
    name: 'Squash',
    category: 'Vegetable',
    emoji: '🎃',
    months: season([3, 6], [9, 11]),
    description: 'Florida grows both summer squash and specialty winter varieties.',
  },
  {
    id: 'honey-tangerine',
    name: 'Honey Tangerines',
    category: 'Fruit',
    emoji: '🍊',
    months: season([3, 4]),
    description: 'Murcott honey tangerines are Florida\'s sweetest citrus, available in spring.',
  },
  {
    id: 'lemon',
    name: 'Lemons',
    category: 'Fruit',
    emoji: '🍋',
    months: season([9, 5]),
    description: 'Florida lemons are available from fall through late spring.',
  },
  {
    id: 'mango',
    name: 'Mangoes',
    category: 'Fruit',
    emoji: '🥭',
    months: season([5, 9]),
    description: 'South Florida grows hundreds of mango varieties in its tropical climate.',
  },
  {
    id: 'papaya',
    name: 'Papayas',
    category: 'Fruit',
    emoji: '🍈',
    months: season([5, 11]),
    description: 'Florida\'s tropical south allows papaya to grow nearly year-round.',
  },
];

export const CATEGORIES: Category[] = ['Fruit', 'Vegetable'];

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];
