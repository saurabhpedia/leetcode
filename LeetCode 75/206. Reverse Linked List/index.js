/*
Given the head of a singly linked list, reverse the list, and return the reversed list.
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
};

// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Reverse the linked list
let reversedList = reverseList(head);

// Print the reversed list
let result = [];
let current = reversedList;
while (current !== null) {
    result.push(current.val);
    current = current.next;
}

console.log(result);