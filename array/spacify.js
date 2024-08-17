/*Description:
Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d"*/
function spacify(str) {
  return str.split("").join(" ");
}

/////////////////////////////////////////

const spacify = str => [...str].join(' ');

//////////////////////////////////////////////////

const spacify = str => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    result = result + str[i] + (i === (str.length - 1) ? '' : ' ')
  }
  return result
}

/////////////////////////////////////////////////////////
const spacify = $ => $.replace(/./g, e => e + ' ').trim()