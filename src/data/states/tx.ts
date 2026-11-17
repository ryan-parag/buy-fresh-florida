import { season, YEAR_ROUND } from '../produce';
import type { StateData } from './types';

// Source: Texas Department of Agriculture, "Texas Produce: Always in Season".
export const texas: StateData = {
  code: 'tx',
  name: 'Texas',
  source: {
    label: 'Texas Department of Agriculture · Texas Produce: Always in Season',
    url: 'https://texasagriculture.gov/Portals/0/forms/MKT/TDA%20Produce%20Commodity%20Card.pdf',
  },
  produce: [
    { id: 'apple', months: season([6, 11]) },
    { id: 'blackberry', months: season([4, 6]) },
    { id: 'blueberry', months: season([5, 7]) },
    { id: 'cantaloupe', months: season([5, 7], [10, 11]) },
    { id: 'grapefruit', months: season([10, 5]), description: 'Red grapefruit is native to Texas.' },
    { id: 'honeydew', months: season([5, 7], [10, 11]) },
    { id: 'orange', months: season([9, 4]) },
    { id: 'peach', months: season([4, 8]) },
    { id: 'pear', months: season([6, 9]) },
    { id: 'watermelon', months: season([5, 11]), description: 'Texas is the country\'s top watermelon producer.' },
    { id: 'broccoli', months: season([12, 3]) },
    { id: 'cabbage', months: YEAR_ROUND },
    { id: 'carrot', months: YEAR_ROUND, description: 'Texas is the second-largest carrot producer in the U.S.' },
    { id: 'cauliflower', months: season([11, 4]) },
    { id: 'cucumber', months: season([4, 12]) },
    { id: 'kale', months: season([11, 4]) },
    { id: 'lettuce', months: season([4, 10]) },
    { id: 'onion', months: season([3, 8]), description: 'Includes the TX1015 sweet onion, harvested March through May.' },
    { id: 'peas', months: season([4, 12]), description: 'Field peas.' },
    { id: 'hot-pepper', months: season([5, 12]) },
    { id: 'bell-pepper', months: season([5, 6], [8, 12]) },
    { id: 'potato', months: season([4, 9]) },
    { id: 'pumpkin', months: season([9, 11]) },
    { id: 'spinach', months: season([11, 4]) },
    { id: 'summer-squash', months: season([4, 11]) },
    { id: 'sweet-potato', months: season([8, 5]) },
    { id: 'tomato', months: season([5, 11]), description: 'Field tomatoes — greenhouse tomatoes are grown year-round.' },
  ],
};
