/*

Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
*/

var firstMissingPositive = function(nums) {
    let i = 0;

 while (i < nums.length) {
   if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
     const temp = nums[nums[i] - 1];
     nums[nums[i] - 1] = nums[i];
     nums[i] = temp;
   } else {
     i++;
   }
 }

 for (let i = 0; i < nums.length; i++) {
   if (nums[i] !== i + 1) {
     return i + 1;
   }
 }

 return nums.length + 1;
};



let nums = [1, 2, 0];
let result = firstMissingPositive(nums);
console.log(result);  // Output: 3