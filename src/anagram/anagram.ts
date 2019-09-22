/**
 * Given two strings, the function determines if they are anagrams
 * @param input1 - first string
 * @param input2 - second string
 */
export function areAnagram(input1: string, input2: string): boolean {
    const charMap = new Map();

    for(const char of input1.split('')){
        charMap.set(char, charMap.get(char)? charMap.get(char) + 1: 1);
    }

    for(const char of input2.split('')){
        if(!charMap.get(char))
            return false;
        else
            charMap.set(char, charMap.get(char) - 1);
    }
    
    return true;
}