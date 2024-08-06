const diff = (a, b) => {
  return [...new Set(a.concat(b).filter(x => a.includes(x) ^ b.includes(x)))].sort()
}