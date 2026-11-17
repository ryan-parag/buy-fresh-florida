import { season } from '../produce';
import type { StateData } from './types';

// Source: NYS Department of Agriculture and Markets, "From A(pples) to Z(ucchini)".
// Months below are the chart's "Harvest Period" (not the longer storage availability).
export const newYork: StateData = {
  code: 'ny',
  name: 'New York',
  source: {
    label: 'NYS Agriculture & Markets · From A(pples) to Z(ucchini)',
    url: 'https://www.ny.gov/sites/default/files/atoms/files/HarvestChart.pdf',
  },
  produce: [
    { id: 'apple', months: season([7, 11]), description: 'Harvest season shown — stored New York apples are available year-round.' },
    { id: 'blackberry', months: season([8, 9]) },
    { id: 'blueberry', months: season([7, 9]) },
    { id: 'cantaloupe', months: season([8, 9]) },
    { id: 'cherry', months: season([6, 7]) },
    { id: 'grape', months: season([8, 10]) },
    { id: 'peach', months: season([7, 9]) },
    { id: 'pear', months: season([8, 10]) },
    { id: 'plum', months: season([7, 9]) },
    { id: 'raspberry', months: season([7, 7], [9, 10]) },
    { id: 'strawberry', months: season([6, 7]) },
    { id: 'watermelon', months: season([9, 10]) },
    { id: 'asparagus', months: season([5, 6]) },
    { id: 'snap-bean', months: season([7, 10]) },
    { id: 'broccoli', months: season([6, 11]) },
    { id: 'cabbage', months: season([7, 12]) },
    { id: 'carrot', months: season([7, 11]) },
    { id: 'cauliflower', months: season([8, 11]) },
    { id: 'collards', months: season([7, 12]) },
    { id: 'sweet-corn', months: season([8, 10]) },
    { id: 'cucumber', months: season([7, 10]) },
    { id: 'eggplant', months: season([8, 10]) },
    { id: 'garlic', months: season([6, 7]) },
    { id: 'kale', months: season([8, 11]) },
    { id: 'lettuce', months: season([5, 10]) },
    { id: 'onion', months: season([7, 11]) },
    { id: 'peas', months: season([6, 7], [9, 10]) },
    { id: 'bell-pepper', months: season([7, 10]) },
    { id: 'potato', months: season([7, 10]) },
    { id: 'pumpkin', months: season([9, 10]) },
    { id: 'spinach', months: season([5, 10]) },
    { id: 'summer-squash', months: season([6, 10]) },
    { id: 'winter-squash', months: season([8, 11]) },
    { id: 'tomato', months: season([7, 10]) },
  ],
};
