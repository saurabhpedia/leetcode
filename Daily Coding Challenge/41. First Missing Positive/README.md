
## findMissingPositive

### Description
This function takes an unsorted array of integers and returns the smallest positive integer that is not present in the array. The algorithm has a time complexity of O(n) and uses O(1) auxiliary space.

### Syntax
```javascript
function findMissingPositive(nums)
```

### Parameters
- `nums` (Array): An unsorted array of integers.

### Return Value
- (Number): The smallest positive integer that is missing from the array.

### Algorithm
1. Initialize an index variable `i` to 0.
2. Iterate over the array `nums` using a `while` loop until `i` is less than the array length:
   - Check if the current element `nums[i]` is a positive integer and is less than or equal to the array length.
     - If it is, check if the element at the correct position for `nums[i]` (i.e., `nums[nums[i] - 1]`) is already correct (equal to `nums[i]`).
       - If it is not correct, swap the elements `nums[i]` and `nums[nums[i] - 1]` to put `nums[i]` in its correct position.
       - If it is correct or if `nums[i]` is larger than the array length, move to the next element by incrementing `i`.
     - Repeat this process until `nums[i]` is not a positive integer or is already in its correct position.

3. After the loop ends, iterate over the modified array `nums` again to find the first missing positive integer:
   - If an element `nums[i]` is not equal to `i + 1`, return `i + 1` as the missing positive integer.
   - If all elements are in their correct positions, return `nums.length + 1` as the missing positive integer.

### Example
```javascript
// Example usage
let nums = [1, 2, 0];
let result = findMissingPositive(nums);
console.log(result);  // Output: 3
```

For more examples and usage instructions, refer to the code comments and the provided examples above.

That's the technical documentation for the JavaScript function in Markdown format.