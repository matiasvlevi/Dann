Dann.range = function range(predictions, thruth, func, range) {
  let arr = [];
  for (let i = 0; i <= 1; i += range) {
    arr.push(func(predictions, thruth, i));
  }
  return arr;
};
