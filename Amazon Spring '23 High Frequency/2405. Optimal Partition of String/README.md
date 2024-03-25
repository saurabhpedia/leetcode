
# minUniqueSubstrings Function

The `minUniqueSubstrings` function is used to partition a given string `s` into one or more substrings such that each substring contains unique characters. The function returns the minimum number of substrings required to satisfy this condition.

## Syntax

```javascript
var minUniqueSubstrings = function(s) {
    var uniqueChars = new Set();
    var count = 0;
    
    for (let c of s) {
        if (!uniqueChars.has(c)) {
            uniqueChars.add(c);
        } else {
            count++;
            uniqueChars.clear();
            uniqueChars.add(c);
        }
    }
    
    return count + 1;
};

var s = "abacaba";
console.log(minUniqueSubstrings(s)); // Output: 4

s = "ssssss";
console.log(minUniqueSubstrings(s)); // Output: 6
```

## Parameters

- `s` (string): The input string to be partitioned.

## Return Value

- The minimum number of substrings required to partition the input string `s` such that each substring contains unique characters.

## Algorithm

The function follows the following algorithm to determine the minimum number of substrings:

1. Initialize an empty set `uniqueChars` to store the unique characters encountered.
2. Initialize a variable `count` to keep track of the number of substrings.
3. Iterate over each character `c` in the input string `s`.
    - If `c` is not present in the `uniqueChars` set, add it to the set.
    - Otherwise, increment the `count` variable by 1 and clear the `uniqueChars` set.
4. After iterating through all the characters in `s`, return the `count` variable as the minimum number of substrings.

## Example Usage

```javascript
var s = "abacaba";
console.log(minUniqueSubstrings(s)); // Output: 4

s = "ssssss";
console.log(minUniqueSubstrings(s)); // Output: 6
```

In the above examples, we demonstrate the usage of the `minUniqueSubstrings` function with different input strings. The function correctly determines the minimum number of substrings required to partition the strings such that each substring contains unique characters and returns the expected output.

That's the technical documentation for the `minUniqueSubstrings` function.