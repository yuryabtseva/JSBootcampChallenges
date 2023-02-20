/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
let sum = 1;
for (let i = 1; i <= num; i++) {
  sum = sum*i;
}
return sum;
}

function stringReverse(str) {
  let newStr = "";
  for (let i = str.length-1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {
  if (startIdx === undefined) {
    return originalString;
  }
  if (endIdx === undefined) {
    endIdx = originalString.length;
  }
  let newStr = "";
  for (let i = startIdx; i < endIdx; i++) {
    newStr = newStr + originalString[i];
  }
  // let first = 0;
  // if (startIdx!=null) {
  //   first = startIdx;
  // } 
  // let last = "";
  // if (endIdx!=null) {
  //   last = endIdx;
  // } else {
  //   last = originalString.length;
  // }
  // let newStr = "";
  // for (let i = startIdx; i < last; i++) {
  //   newStr = newStr + originalString[i];
  // }
  return newStr;
}

function addTheEvens(num) {
let sum = 0;
for (let i = 0; i <= num; i++) {
  if (i%2===0) {
    sum = sum + i;
  }
}
return sum;
}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
