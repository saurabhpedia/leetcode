/*
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

*/

let nums = [2,4,-2,-3]

// var increasingTriplet = function(nums) {
//     // Level One
//         for (let i=0; i < nums.length; i++){
//             if(nums[i] < nums [i+1]){
//             for(let j=1; j < nums.length; i++){
//                 if(nums[j] < nums[j+1]){
//                     for(let k=2; k <nums.length; k++){
//                         if(nums[k] < nums[k+1] ){
//                             return true;
//                         }else{
//                             return false;
//                         }
//                     }
//                 }else{
//                     return false;
//                 }
//             }
//         }else{
//             return false;
//         }
//     }        
// };

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


console.log(increasingTriplet(nums));