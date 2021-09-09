/**
 * Pool selection functions
 * For Layer class, these are not used in Dann.
 */
let poolfuncs = {
  max: function (arr) {
    let record = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (arr[i] > record) {
        record = arr[i];
      }
    }
    return record;
  },
  min: function (arr) {
    let record = Infinity;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (arr[i] < record) {
        record = arr[i];
      }
    }
    return record;
  },
  avg: function (arr) {
    let sum = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      sum += arr[i];
    }
    return sum / len;
  },
};
