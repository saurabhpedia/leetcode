/*

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.

*/

let s = "hello";
let v = ['a', 'e', 'i', 'o', 'u'];

function reverseVowels(s) {
  let str = s.split('');
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (v.includes(str[i].toLowerCase()) && v.includes(str[j].toLowerCase())) {
      let temp = str[i];
      str[i] = str[j];
      str[j] = temp;
      i++;
      j--;
    } else if (v.includes(str[i].toLowerCase())) {
      j--;
    } else {
      i++;
    }
  }

  return str.join('');
}

console.log(reverseVowels(s));


