import sum from '../basic';


import { indicate, sorting } from '../app';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

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

test('should sort', () => {
  const result = sorting([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  const equivalent = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(result).toEqual(equivalent);
});
