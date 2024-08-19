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
////////////////////////////////////////////////////////////////////////////

var calc = function(a) {
  return a.reduce((a,b,i)=>{
    b = b>0? b**2 : b
    b = (i+1)%3==0? b*3 : b
    b = (i+1)%5==0? -b:b
    return a+b
  },0)
}

/////////////////////////////////////////////////////////////////////
const calc = a => a.reduce((n, x, i) => n + (x > 0 ? x * x : x) * ((i + 1) % 3 ? 1 : 3) * ((i + 1) % 5 ? 1 : -1), 0)

/////////////////////////////////////////////////////////////////////////////
const calc = a =>
  a.reduce((pre, val, idx) => pre + (val > 0 ? val ** 2  : val) * (++idx % 3 ? 1 : 3) * (idx % 5 ? 1 : -1), 0);