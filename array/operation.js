/*Description:
Steps

Square the numbers that are greater than zero.
Multiply by 3 every third number.
Multiply by -1 every fifth number.
Return the sum of the sequence.
Example
{ -2, -1, 0, 1, 2 } returns -6

1. { -2, -1, 0, 1 * 1, 2 * 2 }
2. { -2, -1, 0 * 3, 1, 4 }
3. { -2, -1, 0, 1, -1 * 4 }
4. -6
P.S.: The sequence consists only of integers. And try not to use "for", "while" or "loop" statements.*/

function calc(a) {
  return a.reduce((a, elt, i) => {
      if (elt > 0) elt *= elt;
      if ((i + 1) % 3 === 0) elt *= 3;
      if ((i + 1) % 5 === 0) elt *= -1;
      return a + elt;
    }, 0);
}