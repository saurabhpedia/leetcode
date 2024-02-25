/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var str1 = "ABCABC";
var str2 = "ABC";

function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const gcdLength = gcd(str1.length, str2.length);
  return str1.substring(0, gcdLength);
}

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

//console.log(createUniq(y0))
console.log(gcdOfStrings(str1, str2));