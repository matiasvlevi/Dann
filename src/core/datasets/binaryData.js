/*
 * Undisplayed documentation
 * Compute the number of bits a Number needs to e represented in binary.
 * @method bitLength
 * @param {Number} x
 * @return {Number} The number of bits required to represent the value.
 */
function bitLength(x) {
  if (x < 1) {
    return 1;
  } else {
    return Math.floor(Math.log(x) / Math.log(2)) + 1;
  }
}

/*
 * Undisplayed documentation
 * Convert a Number value to an Array representing a binary value.
 * @method numberToBinary
 * @param {Number} x The number value to  convert to binary.
 * @param {Number} size Maximum size of the array representing the binary value.
 * @returns
 */
function numberToBinary(x, size) {
  let value = x;
  let sample = value.toString(2);
  let arr = [];
  let k = bitLength(x) - 1;
  for (let i = size - 1; i >= 0; i--) {
    let char = sample.charAt(k);
    if (char === '') {
      arr[i] = 0;
    } else {
      arr[i] = JSON.parse(char);
    }
    k--;
  }
  return arr;
}

/*
 * Undisplayed documentation
 * Make a dataset consisting of binary values represented as arrays.
 * Made for testing & example purposes.
 * @method makeBinary
 * @param {Number} size Number of bits
 * @param {Function} [func] The function of the increment.
 * @returns {Array} The dataset
 * @example
 * <code>
 * let dataset = makeBinary(3);
 * console.log(dataset);
 * // [
 * //   {
 * //     input: [0,0,0],
 * //     output: [0,0,1]
 * //   },
 * //   {
 * //     input: [0,0,1],
 * //     output: [0,1,0]
 * //   },
 * //   {
 * //     input: [0,1,0],
 * //     output: [0,1,1]
 * //   },
 * //   ... //
 * //   {
 * //     input: [1,0,1],
 * //     output: [1,1,0]
 * //   },
 * //   {
 * //     input: [1,1,0],
 * //     output: [1,1,1]
 * //   }
 * // ]
 * </code>
 */
function makeBinary(size, func) {
  let f;
  if (func !== undefined) {
    f = func;
  } else {
    f = function (x) {
      return x + 1;
    };
  }
  let data = [];
  for (let i = 0; i < Math.pow(2, size) - 1; i++) {
    let targetNum = f(i);
    if (bitLength(targetNum) <= size) {
      let obj = {
        input: numberToBinary(i, size),
        output: numberToBinary(targetNum, size),
      };
      data.push(obj);
    }
  }
  return data;
}
