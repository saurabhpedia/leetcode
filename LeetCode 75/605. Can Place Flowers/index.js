/*

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false

*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

fb = [1,0,0,0,0,1];
n = 2;

function canPlaceFlowers(fb, n) {
    let nf = 0;
  const length = fb.length;

  for (let i = 0; i < length; i++) {
    if (fb[i] === 0) {
      // Check if the current plot is empty
      if ((i === 0 || fb[i - 1] === 0) && (i === length - 1 || fb[i + 1] === 0)) {
        // Check if the previous and next plots are also empty (or edge cases)
        nf += 1; // Plant a flower
        i++; // Skip the next plot since it cannot have a flower
      }
    }
  }

  return nf >= n; // Return true if enough flowers are planted, false otherwise
};


console.log(canPlaceFlowers(fb, n))