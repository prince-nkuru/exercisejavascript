function isAllPossibilities(x){
	return x.length > 0 ? x.every((a,i) => x.includes(i)) : false;
}

///////////////////////////////////////////////////

function isAllPossibilities(a){
  return a.length > 0 && a.every((x,i) => a.includes(i));
}

