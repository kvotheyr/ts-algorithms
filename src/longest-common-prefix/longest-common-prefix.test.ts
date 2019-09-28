import { longestCommonPrefix } from '../longest-common-prefix/longest-common-prefix';

test('should return longest common prefix', () => {
    const result = longestCommonPrefix(["flower","flow","flight"]);
    expect(result).toBe("fl");
})

test('should return empty string', () => {
    const result = longestCommonPrefix(["car","racecar","dog"]);
    expect(result).toBe("");
})

test('should return empty string if array is empty', () => {
    const result = longestCommonPrefix([]);
    expect(result).toBe("");
})