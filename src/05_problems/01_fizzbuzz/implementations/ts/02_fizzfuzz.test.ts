import { fizzBuzz } from './02_fizzfuzz';

describe('FizzBuzz', () => {
  // test('Returns correct result', async () => {
  //   const result = fizzBuzz(3);
  //
  //   expect(result).toEqual(['1', '2', 'Fizz']);
  // });
  // test('Returns correct result', async () => {
  //   const result = fizzBuzz(5);
  //
  //   expect(result).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
  // });
  test('Returns correct result', async () => {
    const result = fizzBuzz(15);

    expect(result).toEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ]);
  });
});
