import { season, YEAR_ROUND } from '../produce';
import type { StateData } from './types';

// Source: Arizona Department of Agriculture, "Arizona Harvest Schedule"
// (2019 Specialty Crop Guide). Where the schedule lists several varieties
// (apples, oranges, mandarins/tangerines), months are the combined range.
export const arizona: StateData = {
  code: 'az',
  name: 'Arizona',
  source: {
    label: 'Arizona Department of Agriculture · Arizona Harvest Schedule',
    url: 'https://agriculture.az.gov/sites/default/files/Harvest%20Calendar.pdf',
  },
  produce: [
    { id: 'apple', months: season([8, 12]) },
    { id: 'apricot', months: season([5, 6]) },
    { id: 'cherry', months: season([6, 6]) },
    { id: 'grapefruit', months: YEAR_ROUND },
    { id: 'lemon', months: season([1, 3], [8, 12]) },
    { id: 'cantaloupe', months: season([5, 11]) },
    { id: 'honeydew', months: season([6, 11]) },
    { id: 'watermelon', months: season([5, 11]) },
    { id: 'orange', months: season([11, 7]), description: 'Navels in winter, Valencias from late winter into summer.' },
    { id: 'mandarin', months: season([11, 3]), description: 'Includes tangerines and Minneola and Orlando tangelos.' },
    { id: 'peach', months: season([5, 6], [8, 8]) },
    { id: 'pear', months: season([8, 8]) },
    { id: 'plum', months: season([6, 8]) },
    { id: 'asparagus', months: season([2, 5]) },
    { id: 'snap-bean', months: season([5, 6], [9, 9]) },
    { id: 'broccoli', months: season([10, 3]) },
    { id: 'cabbage', months: YEAR_ROUND },
    { id: 'carrot', months: YEAR_ROUND },
    { id: 'cauliflower', months: season([11, 4]) },
    { id: 'collards', months: season([11, 4]) },
    { id: 'sweet-corn', months: season([5, 11]) },
    { id: 'cucumber', months: YEAR_ROUND },
    { id: 'kale', months: season([11, 4]) },
    { id: 'lettuce', months: season([11, 3]), description: 'Yuma is the winter lettuce capital of the U.S.' },
    { id: 'onion', months: season([4, 8]), description: 'Sweet onions.' },
    { id: 'bell-pepper', months: season([7, 10]) },
    { id: 'hot-pepper', months: season([6, 11]), description: 'Green chiles from June, red chiles into November.' },
    { id: 'potato', months: season([4, 7]) },
    { id: 'pumpkin', months: season([9, 10]) },
    { id: 'spinach', months: season([10, 3]) },
    { id: 'summer-squash', months: season([6, 10]) },
    { id: 'winter-squash', months: season([9, 11]) },
    { id: 'tomato', months: YEAR_ROUND },
  ],
};
