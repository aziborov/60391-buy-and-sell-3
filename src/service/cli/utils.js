'use strict';

module.exports.getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports.shuffle = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    const randomPosition = Math.floor(Math.random() * i);
    let tmp = arr[randomPosition];
    arr[randomPosition] = arr[i];
    arr[i] = tmp;
  }
  return arr;
};

module.exports.getPictureFileName = (number) => {
  const num = (`0` + number).substr(-2);
  return `item${num}`;
};
