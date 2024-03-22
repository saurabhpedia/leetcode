/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
n = 12, k = 3

function kthFactor(n, k) {
  const factors = [];
  
  // Find all factors of n
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  
  // Return the kth factor or -1 if it doesn't exist
  return k <= factors.length ? factors[k - 1] : -1;
}

console.log(kthFactor(n,k))