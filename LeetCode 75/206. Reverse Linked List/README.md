
## Function: reverseList

The `reverseList` function takes the head of a singly linked list as input and returns the reversed linked list.

### Parameters
- `head`: The head node of the singly linked list.

### Return Value
- Returns the head node of the reversed linked list.

### Code Example

```javascript
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
```

### Usage Example

```javascript
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
```

Output:
```
[5, 4, 3, 2, 1]
```

### Explanation

1. The `reverseList` function takes the head node of a singly linked list as input.
2. It initializes two variables: `prev` which represents the previous node, and `current` which represents the current node initially set to the head node.
3. The function enters a `while` loop that continues until the `current` node becomes `null`, indicating the end of the original linked list.
4. Inside the loop, the function stores the next node in `nextTemp` to prevent losing its reference during the reversal process.
5. The `next` pointer of the current node is updated to point to the previous node (`prev`).
6. Then, `prev` is updated to the current node, and `current` moves forward to the next node (`nextTemp`).
7. After the loop completes, the `prev` node becomes the new head node of the reversed linked list.
8. Finally, the function returns the new head node.
9. In the usage example, a linked list with values 1, 2, 3, 4, and 5 is created.
10. The `reverseList` function is called with the head node of the original linked list.
11. The resulting reversed linked list is traversed, and the values are stored in an array.
12. The array is printed to the console, showing the reversed order of the values [5, 4, 3, 2, 1].