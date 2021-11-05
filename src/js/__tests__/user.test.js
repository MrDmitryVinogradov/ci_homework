import { indicate } from '../app';

describe.each([
  ['Маг', 90, 'healthy'],
  ['Маг', 30, 'wounded'],
  ['Маг', 10, 'critical'],
])(
  ('should indicate status for %i health'),
  (name, health, expected) => {
    const result = indicate({ name, health });
    expect(result).toBe(expected);
  },
);
