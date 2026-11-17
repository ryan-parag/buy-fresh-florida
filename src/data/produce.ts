export type Category = 'Fruit' | 'Vegetable';

export interface ProduceItem {
  id: ProduceId;
  name: string;
  category: Category;
  emoji: string;
  // months is a 12-element boolean array, index 0 = January
  months: boolean[];
  description?: string;
}

interface CatalogEntry {
  name: string;
  category: Category;
  emoji: string;
}

// Shared produce catalog. Each state's data file references these ids and
// supplies its own months (and optional description).
export const CATALOG = {
  // Fruit
  apple: { name: 'Apples', category: 'Fruit', emoji: '🍎' },
  apricot: { name: 'Apricots', category: 'Fruit', emoji: '🍑' },
  avocado: { name: 'Avocados', category: 'Fruit', emoji: '🥑' },
  blackberry: { name: 'Blackberries', category: 'Fruit', emoji: '🫐' },
  blueberry: { name: 'Blueberries', category: 'Fruit', emoji: '🫐' },
  cantaloupe: { name: 'Cantaloupe', category: 'Fruit', emoji: '🍈' },
  cherry: { name: 'Cherries', category: 'Fruit', emoji: '🍒' },
  grape: { name: 'Grapes', category: 'Fruit', emoji: '🍇' },
  grapefruit: { name: 'Grapefruit', category: 'Fruit', emoji: '🍊' },
  'honey-tangerine': { name: 'Honey Tangerines', category: 'Fruit', emoji: '🍊' },
  honeydew: { name: 'Honeydew', category: 'Fruit', emoji: '🍈' },
  kiwi: { name: 'Kiwifruit', category: 'Fruit', emoji: '🥝' },
  lemon: { name: 'Lemons', category: 'Fruit', emoji: '🍋' },
  mandarin: { name: 'Mandarins', category: 'Fruit', emoji: '🍊' },
  mango: { name: 'Mangoes', category: 'Fruit', emoji: '🥭' },
  nectarine: { name: 'Nectarines', category: 'Fruit', emoji: '🍑' },
  orange: { name: 'Oranges', category: 'Fruit', emoji: '🍊' },
  papaya: { name: 'Papayas', category: 'Fruit', emoji: '🍈' },
  peach: { name: 'Peaches', category: 'Fruit', emoji: '🍑' },
  pear: { name: 'Pears', category: 'Fruit', emoji: '🍐' },
  plum: { name: 'Plums', category: 'Fruit', emoji: '🟣' },
  raspberry: { name: 'Raspberries', category: 'Fruit', emoji: '🍓' },
  strawberry: { name: 'Strawberries', category: 'Fruit', emoji: '🍓' },
  watermelon: { name: 'Watermelons', category: 'Fruit', emoji: '🍉' },

  // Vegetables
  asparagus: { name: 'Asparagus', category: 'Vegetable', emoji: '🌱' },
  'bell-pepper': { name: 'Bell Peppers', category: 'Vegetable', emoji: '🫑' },
  broccoli: { name: 'Broccoli', category: 'Vegetable', emoji: '🥦' },
  cabbage: { name: 'Cabbage', category: 'Vegetable', emoji: '🥬' },
  carrot: { name: 'Carrots', category: 'Vegetable', emoji: '🥕' },
  cauliflower: { name: 'Cauliflower', category: 'Vegetable', emoji: '🥦' },
  collards: { name: 'Collard Greens', category: 'Vegetable', emoji: '🥬' },
  cucumber: { name: 'Cucumbers', category: 'Vegetable', emoji: '🥒' },
  eggplant: { name: 'Eggplant', category: 'Vegetable', emoji: '🍆' },
  garlic: { name: 'Garlic', category: 'Vegetable', emoji: '🧄' },
  'hot-pepper': { name: 'Hot Peppers', category: 'Vegetable', emoji: '🌶️' },
  kale: { name: 'Kale', category: 'Vegetable', emoji: '🥬' },
  lettuce: { name: 'Lettuce', category: 'Vegetable', emoji: '🥬' },
  onion: { name: 'Onions', category: 'Vegetable', emoji: '🧅' },
  peas: { name: 'Peas', category: 'Vegetable', emoji: '🫛' },
  potato: { name: 'Potatoes', category: 'Vegetable', emoji: '🥔' },
  pumpkin: { name: 'Pumpkins', category: 'Vegetable', emoji: '🎃' },
  'snap-bean': { name: 'Snap Beans', category: 'Vegetable', emoji: '🫘' },
  spinach: { name: 'Spinach', category: 'Vegetable', emoji: '🥬' },
  squash: { name: 'Squash', category: 'Vegetable', emoji: '🎃' },
  'summer-squash': { name: 'Summer Squash', category: 'Vegetable', emoji: '🥒' },
  'sweet-corn': { name: 'Sweet Corn', category: 'Vegetable', emoji: '🌽' },
  'sweet-potato': { name: 'Sweet Potatoes', category: 'Vegetable', emoji: '🍠' },
  tomato: { name: 'Tomatoes', category: 'Vegetable', emoji: '🍅' },
  'winter-squash': { name: 'Winter Squash', category: 'Vegetable', emoji: '🎃' },
} as const satisfies Record<string, CatalogEntry>;

export type ProduceId = keyof typeof CATALOG;

// Helper: build months array from 1-based month ranges (inclusive)
// Supports multiple ranges for split seasons
export function season(...ranges: [number, number][]): boolean[] {
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

export const YEAR_ROUND = season([1, 12]);

export const CATEGORIES: Category[] = ['Fruit', 'Vegetable'];

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export const MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];
