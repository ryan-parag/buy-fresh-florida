import { season } from '../produce';
import type { StateData } from './types';

// Source: Farm Flavor's Ohio Produce Calendar, published in partnership with the
// Ohio Department of Agriculture (data originally from the Ohio Farm Bureau).
// ODA's own Ohio Proud availability page was offline when this was compiled.
export const ohio: StateData = {
  code: 'oh',
  name: 'Ohio',
  source: {
    label: 'Ohio Department of Agriculture & Farm Flavor · Ohio Produce Calendar',
    url: 'https://farmflavor.com/ohio/ohio-farm-to-table/whats-season-ohio-produce-calendar/',
  },
  produce: [
    { id: 'apple', months: season([8, 10]) },
    { id: 'blackberry', months: season([7, 9]) },
    { id: 'blueberry', months: season([6, 9]) },
    { id: 'cantaloupe', months: season([7, 10]) },
    { id: 'grape', months: season([8, 10]) },
    { id: 'peach', months: season([7, 9]) },
    { id: 'raspberry', months: season([6, 10]) },
    { id: 'strawberry', months: season([5, 7]) },
    { id: 'watermelon', months: season([8, 10]) },
    { id: 'asparagus', months: season([4, 7]) },
    { id: 'snap-bean', months: season([6, 10]) },
    { id: 'broccoli', months: season([6, 7], [9, 10]) },
    { id: 'cabbage', months: season([5, 11]) },
    { id: 'carrot', months: season([7, 10]) },
    { id: 'cauliflower', months: season([9, 11]) },
    { id: 'collards', months: season([5, 10]) },
    { id: 'cucumber', months: season([6, 10]) },
    { id: 'eggplant', months: season([7, 10]) },
    { id: 'kale', months: season([5, 10]) },
    { id: 'lettuce', months: season([5, 10]) },
    { id: 'onion', months: season([6, 10]) },
    { id: 'peas', months: season([6, 7]) },
    { id: 'bell-pepper', months: season([6, 10]) },
    { id: 'potato', months: season([7, 11]) },
    { id: 'pumpkin', months: season([9, 11]) },
    { id: 'spinach', months: season([5, 10]) },
    { id: 'summer-squash', months: season([6, 10]) },
    { id: 'sweet-corn', months: season([6, 10]) },
    { id: 'tomato', months: season([6, 10]) },
    { id: 'winter-squash', months: season([8, 11]) },
  ],
};
