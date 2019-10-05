export function isValidParentheses(input: string) {
    // use stack to push a bracket and pop when you find closing bracket
    let map: Map<string,string> = new Map<string, string>();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');


    let stack = new Array();

    for(const char of input){
        if(map.get(char)) {
            stack.push(map.get(char));
        }
        else {
            if(char != stack.pop())
                return false;
        }
    }

    return stack.length == 0;
}