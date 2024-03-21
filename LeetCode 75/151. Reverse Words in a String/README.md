## Function: reverseWords

The `reverseWords` function takes a string `s` as input and returns the reversed string with extra spaces removed.

### Parameters
- `s`: A string containing words separated by spaces.

### Return Value
- Returns a string where the words are reversed and any extra spaces between words are removed.

### Code Example

```javascript
var reverseWords = (s) => {
    let words = s.split(/\s+/);
    let reversedWords = words.reverse();
    let reversedString = reversedWords.join(" ").trim();
    return reversedString;
}
```

### Usage Example

```javascript
let s = "the sky    is blue";
console.log(reverseWords(s));
```

Output:
```
blue is sky the
```

In this example, the input string `s` is "the sky    is blue". After applying the `reverseWords` function, the reversed string "blue is sky the" is returned, with any extra spaces between words removed.

### Explanation

1. The input string `s` is split into an array of words using the `split(/\s+/)` method. The regular expression `/\s+/` matches one or more consecutive spaces as the separator, effectively removing any extra spaces between words.
2. The order of the words in the array is reversed using the `reverse()` method.
3. The reversed words are joined back together into a string using a single space as the separator using the `join(" ")` method.
4. Any leading or trailing spaces in the resulting string are removed using the `trim()` method.
5. The reversed and trimmed string is returned as the output.