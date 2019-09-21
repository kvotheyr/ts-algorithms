export function areAnagram(input1: string, input2: string): boolean {
    const map = new Map();

    for(let i=0; i<input1.length; i++){
        if(map.get(input2.charAt(i))) {
            map.set(input1.charAt(i), map.get(input2.charAt(i)) + 1);
        }
        else {
            map.set(input1.charAt(i), 1);
        }
    }

    for(let i=0; i<input2.length; i++){
        if(map.get(input2.charAt(i))) {
            map.set(input2.charAt(i), map.get(input2.charAt(i)) - 1);
        }
        else {
            return false;
        }
    }
    
    return true;
}