/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  if (str.indexOf(letter)==-1) {
    return false;
  } else {
    return true;
  }
}

function cap(str, letter) {
  const nextlLetter = str.slice(str.indexOf(letter)+1, str.indexOf(letter) + 2);
  const upper = nextlLetter.toUpperCase();
  return upper;
}

function firstCharacter(str1, str2) {
  const start1 = str1.slice(0, 1);
  const start2 = str2.slice(0, 1);

  if (start1 === start2){
    return true;
  } else if (start1.toUpperCase() === start2 || start1 === start2.toUpperCase()){
    return true;
  } else {
    return false;
  }
}

module.exports = {
  cap, firstCharacter, doesInclude,
};
