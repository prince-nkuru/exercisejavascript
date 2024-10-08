/*Description:
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.

Note that the number will always be non-negative (>= 0).*/

function insertDash(num) {
  return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}

/////////////////////////////////////////////////////

function insertDash(num) {
  //code me
num = num.toString().split('')
 
 for(let i = 0; i < num.length; i++){
   if (num[i]%2 > 0 && num[i +1]%2 > 0){
     num[i] = num[i] + '-'
   }
 }

 return num.join('')
 
}
/////////////////////////////////////////////////////////////////

function insertDash(num) {
  return num.toString().split('').reduce((acc, c, i, arr) => {
    if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0)
      acc = acc + '-';
    
    return acc + c;
  }, '');
}