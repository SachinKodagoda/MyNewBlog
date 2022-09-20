import { addCurrency, normalizedCurrency, sortBy } from '../src/common/util/normalize';
test('addCurrency1', () => {
  expect(addCurrency(1000, 'euro')).toBe('1000 €');
});

test('addCurrency2', () => {
  expect(addCurrency(1000, 'dollar')).toBe('1000 $');
});

test('normalizedCurrency1', () => {
  expect(normalizedCurrency(1000, 'euro')).toBe('1000,00 €');
});

test('normalizedCurrency2', () => {
  expect(normalizedCurrency(1000, 'dollar')).toBe('1000,00 $');
});

test('sortBy', () => {
  expect(sortBy([{ name: 100 }, { name: 300 }, { name: 200 }, { name: 400 }], 'name')).toStrictEqual([
    { name: 100 },
    { name: 200 },
    { name: 300 },
    { name: 400 },
  ]);
});
