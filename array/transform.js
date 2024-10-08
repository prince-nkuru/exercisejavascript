/*Description:
Given an array of numbers, return a string made up of four parts:

a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),

the same as above, post sorting the array into ascending order,

the same as above, post sorting the array into descending order,

the same as above, post converting the array into ASCII characters and sorting alphabetically.

The four parts should form a single string, each part separated by a hyphen (-).

Example format of solution: "asdf-tyui-ujng-wedg"

Examples
[111, 112, 113, 114, 115, 113, 114, 110]  -->  "oprn-nors-sron-nors"
[66, 101, 55, 111, 113]                   -->  "Beoq-7Boq-qoB7-7Boq"
[99, 98, 97, 96, 81, 82, 82]              -->  "cbRR-QRbc-cbRQ-QRbc"*/

function sortTransform(a){
  let first = transform(a);
  let second = transform(a.sort((a,b) => a - b));
  let third = transform(a.sort((a,b) => b - a));
  return `${first}-${second}-${third}-${second}`;
}

let transform = (arr) => [...arr.slice(0,2), ...arr.slice(arr.length - 2)].map(a => String.fromCharCode(a)).join('');

//////////////////////////////////////////////////////////////

const sortTransform = (arr) => {
  const letter = el => String.fromCodePoint( ...el.slice(0, 2).concat(el.slice(-2)) )
  const choose = [...arr].sort((a, b) => a - b)
  
  return [letter(arr), letter(choose), letter( [ ...choose ].reverse() ), letter(choose) ].join('-')
}
///////////////////////////////////////////////////////////////////////

const getItems = a => a.slice(0, 2).concat(a.slice(-2))
const sortTransform = a => {
  const str1 = String.fromCharCode(...getItems(a))
  const str2 = String.fromCharCode(...getItems(a.sort((a, b) => a - b)))
  const str3 = String.fromCharCode(...getItems(a.sort((a, b) => b - a)))
  
  return `${str1}-${str2}-${str3}-${str2}`
}
//////////////////////////////////////////////////////////////////

const sortTransform = arr =>
  (val => `${val(arr)}-${val(arr.sort((a, b) => a - b))}-${val(arr.reverse())}-${val(arr.reverse())}`)
  (val => [...val.slice(0, 2), ...val.slice(-2)].map(val => String.fromCharCode(val)).join(``));