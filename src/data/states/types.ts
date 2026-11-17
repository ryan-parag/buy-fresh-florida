import type { ProduceId } from '../produce';

export interface StateProduce {
  id: ProduceId;
  months: boolean[];
  description?: string;
}

export interface StateData {
  code: string; // two-letter postal code, lowercase
  name: string;
  source: { label: string; url: string };
  produce: StateProduce[];
}
