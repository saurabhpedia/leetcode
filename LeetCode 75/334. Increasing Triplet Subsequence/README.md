
# increasingTriplet Function

The `increasingTriplet` function is used to determine whether there exists a triplet of indices (i, j, k) in an integer array where i < j < k and `nums[i] < nums[j] < nums[k]`. It returns `true` if such a triplet exists and `false` otherwise.

## Syntax

```javascript
var increasingTriplet = function(nums) {
    var first = Infinity;
    var second = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= first) {
            first = nums[i]; // Update the smallest number
        } else if (nums[i] <= second) {
            second = nums[i]; // Update the second smallest number
        } else {
            return true; // Found a triplet where nums[i] > first and nums[i] > second
        }
    }
    
    return false; // No triplet found
};

```

## Parameters

- `nums` (array of integers): The input array of integers.

## Return Value

- `true` if there exists an increasing triplet (i, j, k) such that `i < j < k` and `nums[i] < nums[j] < nums[k]`.
- `false` if no such triplet exists.

## Algorithm

The function follows the following algorithm to determine the existence of an increasing triplet:

1. Initialize two variables, `first` and `second`, to `Infinity`.
2. Iterate over each element, `num`, in the input array `nums`.
    - If `num` is less than or equal to `first`, update `first` to `num`.
    - Otherwise, if `num` is less than or equal to `second`, update `second` to `num`.
    - If `num` is greater than both `first` and `second`, return `true` as an increasing triplet has been found.
3. If no increasing triplet is found after iterating through the entire array, return `false`.

## Example Usage

```javascript
var nums = [1, 2, 3, 4, 5];
console.log(increasingTriplet(nums)); // Output: true

nums = [5, 4, 3, 2, 1];
console.log(increasingTriplet(nums)); // Output: false

nums = [2, 1, 5, 0, 4, 6];
console.log(increasingTriplet(nums)); // Output: true

nums = [2, 4, -2, -3];
console.log(increasingTriplet(nums)); // Output: false
```

In the above example, we demonstrate the usage of the `increasingTriplet` function with different input arrays. The function correctly determines the existence of increasing triplets in each case and returns the expected output.

That's the technical documentation for the `increasingTriplet` function.