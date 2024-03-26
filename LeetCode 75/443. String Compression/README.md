
## Compress Characters in Array

### Description
This function compresses an array of characters using a specific algorithm. The algorithm replaces consecutive repeating characters with either the character itself or the character followed by the count of repetitions. The compressed string is stored in the original character array.

### Syntax
```javascript
function compress(chars)
```

### Parameters
- `chars` (Array): An array of characters to be compressed.

### Return Value
- (Number): The new length of the compressed array.

### Algorithm
1. Initialize three variables:
   - `anchor`: Keeps track of the start of each group.
   - `write`: Tracks the current position in the compressed string.
   - `count`: Counts the length of each group. Initialized to 1.

2. Iterate over the original array starting from the second element (index 1). For each element `i` from `1` to `n-1`:
   - If `chars[i]` is equal to `chars[i-1]`, increment `count` by 1.
   - If `chars[i]` is not equal to `chars[i-1]`:
     - Write the current character `chars[anchor]` to `chars[write]`.
     - Increment `write` by 1.
     - If `count` is greater than `1`, convert `count` to a string and write each digit to `chars[write]` (splitting the digits if `count` is 10 or larger).
     - Update `anchor` to the next group's starting position (i.e., `i`).
     - Reset `count` to 1.

3. After the loop ends, write the last character and its count (if applicable) using the same steps as in the previous step.

4. Return the value of `write`, which represents the new length of the compressed array.

### Example
```javascript
// Example usage
let chars = ["a", "a", "b", "b", "c", "c", "c"];
let length = compress(chars);
console.log(length);  // Output: 6
console.log(chars.slice(0, length));  // Output: ["a", "2", "b", "2", "c", "3"]
```

For more examples and usage instructions, refer to the code comments and the provided examples above.

That's the technical documentation for the JavaScript code in Markdown format.