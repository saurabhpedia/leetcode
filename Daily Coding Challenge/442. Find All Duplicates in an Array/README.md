
# findDuplicates Function

The `findDuplicates` function is used to find the integers that appear twice in an integer array `nums`. The function returns an array containing all the integers that appear twice in the input array.

## Syntax

```javascript
var findDuplicates = function(nums) {
    var result = [];
    
    for (let num of nums) {
        let idx = Math.abs(num) - 1;
        
        if (nums[idx] < 0) {
            result.push(idx + 1);
        } else {
            nums[idx] *= -1;
        }
    }
    
    return result;
};

var nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums)); // Output: [2, 3]
```

## Parameters

- `nums` (array of integers): The input array of integers. All the integers in `nums` are in the range [1, n], where n is the length of the array. Each integer appears once or twice in the array.

## Return Value

- An array containing all the integers that appear twice in the input array `nums`.

## Algorithm

The function follows the following algorithm to find the integers that appear twice:

1. Initialize an empty array `result` to store the integers that appear twice.
2. Iterate over each element `num` in the input array `nums`.
3. Calculate the index `idx` as the absolute value of `num` minus 1 (since the integers are in the range [1, n]).
4. If the element at index `idx` is positive, it means we haven't encountered `num` before. Set the element at index `idx` to its negative value to mark its presence.
5. Otherwise, if the element at index `idx` is already negative, it means we have encountered `num` before. Add the absolute value of `num` to the `result` array.
6. After iterating through all the elements in `nums`, return the `result` array containing the integers that appear twice.

## Example Usage

```javascript
var nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums)); // Output: [2, 3]
```

In the above example, we demonstrate the usage of the `findDuplicates` function with the input array `[4, 3, 2, 7, 8, 2, 3, 1]`. The function correctly identifies the integers `2` and `3` as the ones that appear twice in the array and returns `[2, 3]` as the output.

That's the technical documentation for the `findDuplicates` function.