/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function deleteProp(obj, prop) {
  delete obj[prop];
  return obj;
}

function numObjectProps(obj) {
  return Object.keys(obj).length;
}

function shoppingCart(cart) {
  let sum = 0;
  for (let i = 0; i<cart.length; i++) {
    sum+=cart[i].amount;
  }
  return sum;
}

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const values1 = Object.values(obj1);
  const values2 = Object.values(obj2);
  
  for (let i = 0; i < keys2.length; i++) {
    if (!(keys2[i] === keys1[i]) || !(values2[i] === values1[i])) {
        return false;
    }
  }
  // const values1 = Object.values(obj1);
  // const values2 = Object.values(obj2);

  // for (let i = 0; i < values2.length; i++) {
  //     if (!(values2[i] === values1[i])) {
  //         return false;
  //     }
  // }

  return true;
}

module.exports = {
  compareObjects, deleteProp, numObjectProps, shoppingCart,
};
