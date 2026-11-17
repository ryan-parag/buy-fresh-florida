import { season, YEAR_ROUND } from '../produce';
import type { StateData } from './types';

// Source: CDFA "California Fruits and Vegetables Seasonal Chart".
// Months below are the chart's "Peak Season" cells.
export const california: StateData = {
  code: 'ca',
  name: 'California',
  source: {
    label: 'CDFA · California Fruits and Vegetables Seasonal Chart',
    url: 'https://cdn.agclassroom.org/ca/resources/gardens/seasonalchart.pdf',
  },
  produce: [
    { id: 'apple', months: season([7, 10]) },
    { id: 'asparagus', months: season([3, 7]) },
    { id: 'avocado', months: season([2, 9]) },
    { id: 'cherry', months: season([5, 6]) },
    { id: 'orange', months: YEAR_ROUND, description: 'Navels peak in winter and spring; Valencias take over for summer.' },
    { id: 'mandarin', months: season([12, 1]) },
    { id: 'garlic', months: season([4, 7], [9, 9]) },
    { id: 'kiwi', months: season([11, 1]) },
    { id: 'cantaloupe', months: season([7, 9]) },
    { id: 'nectarine', months: season([7, 7]) },
    { id: 'peach', months: season([6, 9]) },
    { id: 'pear', months: season([7, 10]) },
    { id: 'plum', months: season([6, 9]) },
    { id: 'strawberry', months: season([3, 9]) },
    { id: 'grape', months: season([5, 12]), description: 'Table grapes.' },
    { id: 'tomato', months: season([6, 10]) },
  ],
};
