import { season } from '../produce';
import type { StateData } from './types';

// Source: FDACS "Crops in Season"
export const florida: StateData = {
  code: 'fl',
  name: 'Florida',
  source: {
    label: 'FDACS · Florida Fresh Produce Guide',
    url: 'https://www.fdacs.gov/consumer-resources/buy-fresh-from-florida/crops-in-season',
  },
  produce: [
    { id: 'avocado', months: season([6, 1]), description: 'Florida avocados are larger and creamier than their California cousins.' },
    { id: 'blueberry', months: season([3, 5]), description: 'Florida blueberries arrive earlier than most U.S. states — a true spring treat.' },
    { id: 'cabbage', months: season([12, 6]), description: 'Florida cabbage thrives in the mild winter and spring months.' },
    { id: 'carrot', months: season([12, 5]), description: 'Sweet and crisp, Florida winter carrots are harvested from December through May.' },
    { id: 'sweet-corn', months: season([10, 6]), description: 'Florida supplies most of the U.S. winter sweet corn.' },
    { id: 'grapefruit', months: season([9, 6]), description: 'Florida grows the majority of U.S. grapefruit, harvested fall through early summer.' },
    { id: 'orange', months: season([10, 6]), description: 'Florida\'s iconic crop — Valencia and Navel oranges anchor the citrus season.' },
    { id: 'peach', months: season([4, 5]), description: 'Florida peaches ripen fast and early — blink and the season\'s gone.' },
    { id: 'strawberry', months: season([12, 4]), description: 'Plant City is the Winter Strawberry Capital of the World.' },
    { id: 'tomato', months: season([10, 6]), description: 'Florida is one of the top tomato-producing states, especially in winter.' },
    { id: 'watermelon', months: season([4, 7], [10, 11]), description: 'Florida produces two watermelon crops — spring/summer and a fall harvest.' },
    { id: 'bell-pepper', months: season([10, 6]), description: 'Florida\'s warm winters make it a top U.S. bell pepper supplier.' },
    { id: 'cucumber', months: season([10, 6]), description: 'Florida cucumbers are harvested from fall through late spring.' },
    { id: 'eggplant', months: season([11, 6]), description: 'Glossy Florida eggplants peak in winter and spring.' },
    { id: 'snap-bean', months: season([10, 5]), description: 'Also called green beans — Florida snap beans are a winter staple.' },
    { id: 'squash', months: season([3, 6], [9, 11]), description: 'Florida grows both summer squash and specialty winter varieties.' },
    { id: 'honey-tangerine', months: season([3, 4]), description: 'Murcott honey tangerines are Florida\'s sweetest citrus, available in spring.' },
    { id: 'lemon', months: season([9, 5]), description: 'Florida lemons are available from fall through late spring.' },
    { id: 'mango', months: season([5, 9]), description: 'South Florida grows hundreds of mango varieties in its tropical climate.' },
    { id: 'papaya', months: season([5, 11]), description: 'Florida\'s tropical south allows papaya to grow nearly year-round.' },
  ],
};
