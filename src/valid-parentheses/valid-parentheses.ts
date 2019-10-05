/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param input : string containing brackets
 */
export function isValidParentheses(input: string) {
    // Store corresponding braces as key/value pairs in map.
    let map: Map<string,string> = new Map<string, string>();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');

    let stack = new Array();

    // Use stack to push element if the key exists in map. if not,
    // popped element should match the next charecter in the input.
    for(const char of input){
        if(map.get(char)) {
            stack.push(map.get(char));
        }
        else {
            if(char != stack.pop())
                return false;
        }
    }

    // If stack is empty, return true 
    return stack.length == 0;
}