import { areAnagram } from '../anagram/anagram';

test('should return true', () => {
    expect(areAnagram('listen', 'silent')).toBe(true);
})

test('should return false', () => {
    expect(areAnagram('bar', 'baf')).toBe(false);
})

test('should return true, if anagrams and words contain repeating charecters', () => {
    expect(areAnagram('liss', 'ssil')).toBe(true);
})

