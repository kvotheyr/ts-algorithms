/**
 * Return longest common prefix in an array of strings.
 * @param input - array of strings
 * Time Complexity - 0(m * n) where n - number of strings in array and m - length of each string
 * In best case, this takes (length of shortest string in the array) * n
 * Space Complexity - O(1)
 */

export function longestCommonPrefix(input: string[]) {
    let longestCommonPrefix = '';

    if(input === null || input.length === 0)
        return longestCommonPrefix;
    
    let index = 0;
    // Compare each charecter from first string in the array with all other strings.
    for(const char of input[0]){
        for(let i=1 ; i<input.length; i++){
            // compares only until the length of the shortest string in the array
            if(index > input[i].length || char !== input[i].charAt(index))
                return longestCommonPrefix;
        }
        longestCommonPrefix += char;
        index += 1;
    }
    return longestCommonPrefix;
}