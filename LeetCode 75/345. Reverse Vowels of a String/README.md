
# Reverse Vowels in a String - Technical Documentation

## Description
This solution provides a JavaScript function to reverse only the vowels in a given string. The function takes a string as input and returns the modified string with reversed vowels.

## Function Signature
```javascript
function reverseVowels(s: string): string
```

## Input
- `s` (string): The input string to be processed. It consists of printable ASCII characters.

## Output
- Returns a string with reversed vowels.

## Algorithm
1. Split the input string `s` into an array of individual characters.
2. Initialize two pointers, `i` and `j`, pointing to the start and end of the array, respectively.
3. Iterate through the array using a `while` loop until `i` is less than `j`.
   - If the character at index `i` is a vowel and the character at index `j` is also a vowel:
     - Swap the characters at indices `i` and `j`.
     - Increment `i` and decrement `j`.
   - If the character at index `i` is a vowel and the character at index `j` is not a vowel:
     - Decrement `j` only.
   - If the character at index `i` is not a vowel:
     - Increment `i` only.
4. Join the modified array back into a string.
5. Return the modified string.

## Example
```javascript
let s = "hello";
let result = reverseVowels(s);
console.log(result);
```
Output:
```
"holle"
```

## Complexity Analysis
- Time Complexity: O(n), where n is the length of the input string `s`. The function iterates through the string once to reverse the vowels.
- Space Complexity: O(n), where n is the length of the input string `s`. The function creates an array of individual characters, which requires additional space.

