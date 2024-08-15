function dropWhile(arr, pred) {
  for (var i = 0; i < arr.length && pred(arr[i]); ++i) ;
  return arr.slice(i)
}

////////////////////////////////////////////////////////

function dropWhile(arr, pred) {
  const idx = arr.findIndex(elem => !pred(elem));
  return idx < 0 ? [] : arr.slice(idx);
}

///////////////////////////////////////////////////////////////////

function dropWhile(arr, pred) {
  // Your Kafkaesque code here, plox...
  return (arr.length !== 0 && pred(arr[0])) ? dropWhile(arr.slice(1), pred) : arr;
}