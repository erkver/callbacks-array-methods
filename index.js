// Please ensure your methods match the name below
// eg. const includes = () => || function includes() {}

/* includes */
const includes = (arr, item) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === item) {
      return true
    }
  }
  return false;
};
/* indexOf */
const indexOf = (arr, item) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === item) {
      return i;
    }
  }
  return -1;
};
/* forEach */
const forEach = (arr, cb) => {
  for(let i =0; i < arr.length; i++) {
    arr[i] = cb(arr[i], i, arr)
  }
  return arr;
};
/* map */
const map = (arr, cb) => {
  let copy = [];
  for(let i = 0; i < arr.length; i++) {
    copy.push(cb(arr[i], i, arr));
  }
  return copy;
};
/* filter */
const filter = (arr, cb) => {
  let copy = [];
  for(let i = 0; i < arr.length; i++) {
    arr[i] = cb(arr[i], i, arr);
    if(arr[i] === true) {
      copy.push(arr[i]);
    }
  }
  return copy;
};
/* reduce */
const reduce = (arr, cb, acc) => {
  if(!acc) {
    acc = 0;
  }
  for(let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}
module.exports = {
  includes,
  indexOf,
  forEach,
  map,
  filter,
  reduce
};
