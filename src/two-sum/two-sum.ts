/**
 * https://leetcode.com/problems/two-sum/
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * @param nums - array of numbers
 * @param target - target value
 */
export function twoSum(nums: number[], target: number): number[] {
    let map: Map<number, number> = new Map();
    let result: number[] = new Array<number>();

    for (let i: number = 0; i < nums.length; i++) {
        const value: number = target - nums[i];
        if (map.has(value)) {
            result = [...[map.get(value)!, i]];
            return result;
        }
        map.set(nums[i], i);
    }
    
    return result;
}