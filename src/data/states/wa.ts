import { season } from '../produce';
import type { StateData } from './types';

// Source: Washington State Department of Agriculture, "Washington Grown Produce
// Seasonality Chart" (Fruits and Herbs; Vegetables and Legumes). For crops the
// chart marks as stored year-round, months below are the peak harvest season.
export const washington: StateData = {
  code: 'wa',
  name: 'Washington',
  source: {
    label: 'WSDA · Washington Grown Produce Seasonality Chart',
    url: 'https://ospi.k12.wa.us/sites/default/files/2023-08/fruitherbsseasonalitychart.pdf',
  },
  produce: [
    { id: 'apple', months: season([9, 11]), description: 'Peak harvest shown — Washington apples come out of storage year-round.' },
    { id: 'apricot', months: season([6, 8]) },
    { id: 'blackberry', months: season([6, 8]) },
    { id: 'blueberry', months: season([7, 9]) },
    { id: 'cantaloupe', months: season([8, 9]) },
    { id: 'cherry', months: season([6, 8]), description: 'Bings and Rainiers.' },
    { id: 'grape', months: season([8, 11]) },
    { id: 'honeydew', months: season([8, 9]) },
    { id: 'nectarine', months: season([6, 9]) },
    { id: 'peach', months: season([7, 9]) },
    { id: 'pear', months: season([9, 11]), description: 'Peak harvest shown — stored pears are available year-round.' },
    { id: 'plum', months: season([6, 9]) },
    { id: 'raspberry', months: season([6, 8]) },
    { id: 'strawberry', months: season([5, 9]) },
    { id: 'watermelon', months: season([8, 10]) },
    { id: 'asparagus', months: season([4, 6]) },
    { id: 'snap-bean', months: season([7, 10]) },
    { id: 'broccoli', months: season([6, 11]) },
    { id: 'cabbage', months: season([7, 12]) },
    { id: 'carrot', months: season([6, 10]) },
    { id: 'cauliflower', months: season([6, 11]) },
    { id: 'collards', months: season([5, 12]) },
    { id: 'sweet-corn', months: season([7, 10]) },
    { id: 'cucumber', months: season([6, 10]) },
    { id: 'kale', months: season([7, 4]) },
    { id: 'lettuce', months: season([5, 11]) },
    { id: 'onion', months: season([6, 9]), description: 'Walla Walla sweet onions.' },
    { id: 'peas', months: season([5, 8]) },
    { id: 'bell-pepper', months: season([7, 10]) },
    { id: 'pumpkin', months: season([9, 11]) },
    { id: 'spinach', months: season([4, 12]) },
    { id: 'summer-squash', months: season([6, 10]) },
    { id: 'tomato', months: season([7, 10]) },
    { id: 'winter-squash', months: season([9, 12]) },
  ],
};
