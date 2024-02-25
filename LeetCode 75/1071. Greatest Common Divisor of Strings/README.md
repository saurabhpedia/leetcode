
# GCD of Strings

## Introduction
The "GCD of Strings" algorithm aims to find the largest common divisor string that divides both `str1` and `str2`. A string `t` is said to divide another string `s` if `s` can be formed by concatenating `t` multiple times.

## Algorithm
The algorithm follows an optimized approach based on the Euclidean algorithm to find the greatest common divisor (GCD) of the lengths of `str1` and `str2`. Once the GCD is obtained, the common string is extracted from either `str1` or `str2` and checked if it can form both strings.

The algorithm consists of the following steps:

1. Check if `str1 + str2` is equal to `str2 + str1`. If the condition fails, there is no common divisor, and the algorithm returns an empty string.
2. Calculate the GCD of the lengths of `str1` and `str2` using the Euclidean algorithm.
3. Extract the common string from either `str1` or `str2` by taking a substring from index 0 to the GCD length.
4. Return the common string as the result.

## Pseudocode
The pseudocode for the "GCD of Strings" algorithm is as follows:

```
function gcdOfStrings(str1, str2):
    if str1 + str2 is not equal to str2 + str1:
        return ""

    gcdLength = gcd(str1.length, str2.length)
    return str1.substring(0, gcdLength)

function gcd(a, b):
    while b is not 0:
        temp = b
        b = a % b
        a = temp
    return a
```

## Time and Space Complexity
The time complexity of the algorithm is determined by the Euclidean algorithm used to calculate the GCD of the string lengths. It has a time complexity of `O(log(min(n1, n2)))`, where `n1` and `n2` are the lengths of `str1` and `str2`, respectively.

The space complexity of the algorithm is `O(1)` as it uses a constant amount of additional space to store variables.

## Example
Here's an example demonstrating the usage of the algorithm:

```javascript
console.log(gcdOfStrings("ABCABC", "ABC"));  // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB"));  // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE"));  // Output: ""
```

In this example, the algorithm correctly identifies the largest common divisor strings for the given inputs.

## Conclusion
The "GCD of Strings" algorithm provides an optimized approach to find the largest string that divides both `str1` and `str2`. By utilizing the Euclidean algorithm to calculate the GCD of string lengths, the algorithm achieves improved efficiency. It can be used in scenarios where determining the largest common divisor string is required, such as string manipulation or pattern matching applications.