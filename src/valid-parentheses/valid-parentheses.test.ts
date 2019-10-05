import { isValidParentheses } from './valid-parentheses';

test('should return true', () => {
    expect(isValidParentheses("()")).toBe(true);
})

test('should return true if brackets are nested', () => {
    expect(isValidParentheses("([{}])")).toBe(true);
})

test('should return false', () => {
    expect(isValidParentheses("(]")).toBe(false);
})