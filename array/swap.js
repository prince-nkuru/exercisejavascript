/*Description:
You need to swap the head and the tail of the specified array:

the head (the first half) of array moves to the end, the tail (the second half) moves to the start. The middle element (if it exists) leaves on the same position.

Return new array.

For example:

   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
    \----/   \----/         
     head     tail 

   [ -1, 2 ]  => [ 2, -1 ] 
   [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]  */

   const swapHeadAndTail = (arr, mid = arr.length / 2) => [
    ...arr.slice(-mid),
    ...arr.slice(mid, -mid), 
    ...arr.slice(0, mid)
  ];

  //////////////////////////////////////////////////////////////

  const swapHeadAndTails  = (array) => {
    let l = array.length;
    let r = Math.round(l / 2);
    let f = Math.floor(l / 2);
    let a = array.splice(0, f);
    let b = array.splice(r - f);
    return b.concat(array, a);
}

//////////////////////////////////////////////////////////

const swapHeadAndTail3 = a => {
  const m = a.length/2
  return [].concat(
    a.slice(m+.5|0),
    m == (m|0) ? [] : a[m|0],
    a.slice(0,m)
  )
}