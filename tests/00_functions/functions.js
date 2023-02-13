/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
function max(num1, num2, num3) {
  var highest = 0;
  if (num1 >= num2 && num1 >= num3) {
    highest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    highest = num2;
  } else {
    highest = num3;
  }
  return highest;
}

function addUnknown() {
  var sum = 0;
  for (var i=0; i<arguments.length; i++) {
   sum = sum + (arguments[i]);
  }
  return sum;
}

function evenOrOdd(number) {
  var result;
  if (number % 2 == 0) {
    result = "even";
  } else {
    result = "odd";
  }
return result;
}

function operator(num1, num2, num3) {
  var result;
  if (num1+num2==num3) {
    result = "plus";
  } else if (num1-num2==num3) {
    result = "minus";
  } else if (num1*num2==num3) {
    result = "multiply";
  } else if (num1/num2==num3) {
    result = "divide";
  } else {
    result = null;
  }
  return result;
}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
