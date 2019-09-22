import { twoSum } from '../two-sum/two-sum';

test('should return correct indices', () => {
    const expected: number[] = [0,1];
    const result = twoSum([1,3,4], 4);
    expect(result).toEqual(expected);
})

test('should return empty array if no match found', () => {
    const expected: number[] = [];
    const result = twoSum([1,3,4], 0);
    expect(result).toEqual(expected);
})

test('should return empty array if the input array is empty', () => {
    const expected: number[] = [];
    const result = twoSum([], 0);
    expect(result).toEqual(expected);
})