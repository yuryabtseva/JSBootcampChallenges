/* eslint-disable no-unused-vars */
function multiply(arr) {
  const flatArr = arr.flat(3);
  let sum = 1;
  for (i = 0; i< flatArr.length; i++) {
    sum = sum * flatArr[i];
  }
  return sum;
}

function includesCopy(arr, searchValue) {
  return arr.includes(searchValue);
}

function inventory(arr) {
  let output = [];
  let sentence = "";
  for (let i = 0; i <arr.length; i++) {
    sentence = "The " + arr[i][1][0] + " " + arr[i][0] + " is " + arr[i][1][1] + " dollars."
    output.push(sentence);
  }
  return output;
}

function camelCase(str) {
  const split = str.replace(/[.,?!;:'"()]/g, '').split(/\s+/)
  let output = "";
  for (let i = 0; i < split.length; i++){
    let capWord = "";
    if (i===0) {
      output = split[0].toLowerCase();
    } else {
      capWord = split[i].charAt(0).toUpperCase() + split[i].slice(1);
      output += capWord;
    } 
  }
  return output;
}

function joiner(arr, separator) {
  return arr.join(separator);
}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
