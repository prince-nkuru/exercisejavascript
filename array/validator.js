/*Description:
Create a function that will return true if all numbers in the sequence follow the same counting pattern. If the sequence of numbers does not follow the same pattern, the function should return false.

Sequences will be presented in an array of varied length. Each array will have a minimum of 3 numbers in it.

The sequences are all simple and will not step up in varying increments such as a Fibonacci sequence.

JavaScript examples:

validateSequence([1,2,3,4,5,6,7,8,9]) === true
validateSequence([1,2,3,4,5,8,7,8,9]) === false
validateSequence([2,4,6,8,10]) === true
validateSequence([0,2,4,6,8]) === true
validateSequence([1,3,5,7,9]) === true
validateSequence([1,2,4,8,16,32,64]) === false
validateSequence([0,1,1,2,3,5,8,13,21,34]) === false*/

function validateSequence(x) {
  var n = x[1] - x[0]
  for (var i = 2; i < x.length; i++) {
    if (x[i - 1] + n !== x[i]) return false
  }
  
  return true
}

///////////////////////////////////////////////////////////

function validateSequence(x) {
  return x.every(function(num,i){
     return -num === (x[0]-x[1])*i - x[0]
  })
}