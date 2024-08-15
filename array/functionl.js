function dropWhile(arr, pred) {
  for (var i = 0; i < arr.length && pred(arr[i]); ++i) ;
  return arr.slice(i)
}

////////////////////////////////////////////////////////

function dropWhile(arr, pred) {
  const idx = arr.findIndex(elem => !pred(elem));
  return idx < 0 ? [] : arr.slice(idx);
}