/*Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

The collections can contain any character and can contain duplicates.

Example
A = [a, a, t, e, f, i, j]

B = [t, g, g, i, k, f]

difference = [a, e, g, j, k]*/

const diff = (a, b) => {
  return [...new Set(a.concat(b).filter(x => a.includes(x) ^ b.includes(x)))].sort()
}

//////////////////////////////////////////////////////////////////////////////////////
function diff(a, b){
  const sortA =  a.filter(sum => !b.includes(sum));
  const sortB=  b.filter(sum => !a.includes(sum));
  return [...new Set(sortA.concat(sortB).sort())];
}

///////////////////////////////////////////

function diff(a, b){
  var arr=[];
  for (var i=0; i<a.length; ++i)
    if (b.indexOf(a[i])==-1 && arr.indexOf(a[i])==-1)
      arr.push(a[i]);
  for (var i=0; i<b.length; ++i)
    if (a.indexOf(b[i])==-1 && arr.indexOf(b[i])==-1)
      arr.push(b[i]);
  arr.sort();
  return arr;
}