import { CATALOG, type ProduceItem } from '../produce';
import type { StateData } from './types';
import { arizona } from './az';
import { california } from './ca';
import { florida } from './fl';
import { georgia } from './ga';
import { newJersey } from './nj';
import { newYork } from './ny';
import { ohio } from './oh';
import { texas } from './tx';
import { washington } from './wa';

export type { StateData } from './types';

export const STATES: StateData[] = [
  arizona,
  california,
  florida,
  georgia,
  newJersey,
  newYork,
  ohio,
  texas,
  washington,
];

export const DEFAULT_STATE = florida.code;

export function getState(code: string): StateData {
  return STATES.find((s) => s.code === code.toLowerCase()) ?? florida;
}

export function getStateProduce(code: string): ProduceItem[] {
  return getState(code).produce.map(({ id, months, description }) => ({
    id,
    ...CATALOG[id],
    months,
    description,
  }));
}
