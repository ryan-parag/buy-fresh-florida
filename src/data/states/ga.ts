import { season } from '../produce';
import type { StateData } from './types';

// Source: Georgia Department of Agriculture — Georgia Grown crop pages and the
// Atlanta State Farmers Market FAQ. GDA doesn't publish a single statewide chart,
// so this list only covers crops where GDA states a season.
export const georgia: StateData = {
  code: 'ga',
  name: 'Georgia',
  source: {
    label: 'Georgia Department of Agriculture · Georgia Grown',
    url: 'https://georgiagrown.com/find-georgia-grown/fruits-vegetables/',
  },
  produce: [
    { id: 'apple', months: season([7, 12]), description: 'Grown in the North Georgia mountains, with varieties ripening from July into December.' },
    { id: 'blackberry', months: season([6, 6]), description: 'Georgia blackberry harvest peaks in mid-June.' },
    { id: 'cantaloupe', months: season([5, 10]), description: 'Sweetest in June, July and August.' },
    { id: 'carrot', months: season([12, 6]), description: 'Grown mainly in South Georgia and harvested December through June.' },
    { id: 'collards', months: season([1, 6], [10, 12]) },
    { id: 'cucumber', months: season([5, 11]) },
    { id: 'grape', months: season([7, 10]), description: 'Muscadines — thick-skinned, sweet and a Southern favorite.' },
    { id: 'peach', months: season([5, 8]), description: 'Georgia peaches are only around for about 12 weeks a year.' },
    { id: 'strawberry', months: season([3, 7]) },
    { id: 'watermelon', months: season([6, 8]), description: 'Georgia\'s number one produce crop.' },
    { id: 'peas', months: season([5, 10]) },
    { id: 'pumpkin', months: season([9, 10]) },
    { id: 'onion', months: season([4, 6]), description: 'Vidalia onions — Georgia\'s official state vegetable.' },
    { id: 'winter-squash', months: season([8, 3]) },
  ],
};
