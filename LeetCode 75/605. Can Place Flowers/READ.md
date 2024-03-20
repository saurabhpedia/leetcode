## Flowerbed Planting

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array `flowerbed` containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer `n`, the task is to determine whether `n` new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

### Example

**Input:**
```
flowerbed = [1,0,0,0,1]
n = 1
```

**Output:**
```
true
```

**Input:**
```
flowerbed = [1,0,0,0,1]
n = 2
```

**Output:**
```
false
```

### Algorithm

1. Initialize a variable `nf` (number of flowers) to 0.
2. Obtain the length of the `flowerbed` array.
3. Iterate through each plot of the flowerbed using a `for` loop.
4. Check if the current plot is empty (0).
5. If the current plot is empty, check if the previous plot (if it exists) and the next plot (if it exists) are also empty. If they are empty, it means a flower can be planted in the current plot.
6. If a flower can be planted in the current plot, increment `nf` by 1 and skip the next plot by incrementing `i` by 1. This is done to ensure that adjacent plots are not considered for planting flowers.
7. After iterating through all the plots, check if the number of planted flowers (`nf`) is greater than or equal to the required number of flowers (`n`).
8. Return `true` if enough flowers are planted (`nf >= n`), and `false` otherwise.

### JavaScript Implementation

```javascript
function canPlaceFlowers(flowerbed, n) {
  let nf = 0;
  const length = flowerbed.length;

  for (let i = 0; i < length; i++) {
    if (flowerbed[i] === 0) {
      if ((i === 0 || flowerbed[i - 1] === 0) && (i === length - 1 || flowerbed[i + 1] === 0)) {
        nf += 1;
        i++;
      }
    }
  }

  return nf >= n;
}

const flowerbed = [1,0,0,0,1];
const n = 1;

console.log(canPlaceFlowers(flowerbed, n));
```

The provided JavaScript code implements the `canPlaceFlowers` function according to the described algorithm. It defines the function, calls it with the provided `flowerbed` and `n` values, and logs the result to the console.