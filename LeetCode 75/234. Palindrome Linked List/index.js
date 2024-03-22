/*
Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.

Example 1:

Input: head = [1,2,2,1]
Output: true
Example 2:

Input: head = [1,2]
Output: false
 
Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 
Follow up: Could you do it in O(n) time and O(1) space?


*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var head = [1,2,2,1];

function isPalindrome(head) {
  if (!head || !head.next) {
    return true; // An empty list or a list with a single node is considered a palindrome
  }
  
  // Find the middle of the linked list using the "slow and fast pointer" technique
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  // Reverse the second half of the linked list
  let prev = null;
  let curr = slow;
  
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  // Compare the reversed second half with the first half of the linked list
  let left = head;
  let right = prev;
  
  while (right) {
    if (left.val !== right.val) {
      return false; // The list is not a palindrome
    }
    left = left.next;
    right = right.next;
  }
  
  return true; // The list is a palindrome
}

console.log(isPalindrome(head));