/*
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
Example 2:

Input: nums = [1,1,2]
Output: [1]
Example 3:

Input: nums = [1]
Output: []


*/


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