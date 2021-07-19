const isBrowser = typeof process !== 'object';
const VERSION = 'v2.2.10';

/**
 * Add a new custom function to Dannjs.
 * @class Add
 */
Add = function Add() {};

/**
 * Add a custom activation function.
 * @method activation
 * @param {string} name the name of the new activation function.
 * @param {function} activation the activation function.
 * @param {function} derivative the derivative of this activation function.
 * @example
 * <code>
 * Add.activation('myfunc',
 *   (x) => {
 *     if (x <= 0) {
 *       return 0;
 *     } else {
 *       return 1;
 *     }
 *   },
 *   (x) => {
 *     return 0;
 *   }
 * );
 * let nn = new Dann();
 * nn.outputActivation('myfunc');
 * nn.log();
 * </code>
 */
Add.activation = function (name, activation, derivative) {
  if (typeof name !== 'string') {
    DannError.error('The name argument is not a string.', 'Add.activation');
    return;
  }
  if (activation.length !== 1 || derivative.length !== 1) {
    DannError.error(
      'One of the functions specified does not have only 1 argument.',
      'Add.activation'
    );
    return;
  } else {
    activations[name] = activation;
    activations[name + '_d'] = derivative;
    return;
  }
};

/**
 * Add a custom loss function.
 * @method loss
 * @param {string} name the name of the new loss function.
 * @param {function} loss the loss function.
 * @example
 * <code>
 * Add.loss('myfunc',
 *   (predictions, target) => {
 *     let sum = 0;
 *     let ans = 0;
 *     let n = target.length;
 *     for (let i = 0; i < n; i++) {
 *       let y = target[i];
 *       let yHat = predictions[i];
 *       sum += abs(y - yHat);
 *     }
 *     ans = sum / n;
 *     return ans;
 *   }
 * );
 * let nn = new Dann();
 * nn.setLossFunction('myfunc');
 * nn.log();
 * </code>
 */
Add.loss = function (name, loss) {
  if (typeof name !== 'string') {
    DannError.error('The name argument is not a string.', 'Add.loss');
    return;
  }
  if (loss.length === 2) {
    lossfuncs[name] = loss;
  } else {
    DannError.error(
      'The loss function specified can only have 2 argument.',
      'newActivation'
    );
    return;
  }
};

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

/*
 * XOR dataset made for testing & example purposes.
 */

/*
 * Undisplayed documentation
 * Make a dataset consisting of binary values represented as arrays and XOR result of the binary values
 * Made for testing & example purposes.
 * @method makeXOR
 * @param {Number} size Number of bits
 * @returns {Array} The dataset
 * @example
 * <code>
 *  let dataset = makeXOR(3);
 *  console.log(dataset);
 * // [
 * //   { input: [ 0, 0, 0 ], output: [ 0 ] },
 * //   { input: [ 0, 0, 1 ], output: [ 1 ] },
 * //   { input: [ 0, 1, 0 ], output: [ 1 ] },
 * //   { input: [ 0, 1, 1 ], output: [ 0 ] },
 * //   { input: [ 1, 0, 0 ], output: [ 1 ] },
 * //   { input: [ 1, 0, 1 ], output: [ 0 ] },
 * //   { input: [ 1, 1, 0 ], output: [ 0 ] },
 * //   { input: [ 1, 1, 1 ], output: [ 1 ] }
 * // ]
 * </code>
 */
function makeXOR(number) {
  if (number < 2) return [];
  let data = makeBinary(number);
  let lastElement = { input: data[data.length - 1].output, output: [] };
  data.push(lastElement);
  data.forEach((element) => {
    delete element['output'];
    element.output = [element.input.reduce((a, b) => a + b, 0) % 2];
  });
  return data;
}

const XOR = makeXOR(2);

DannError = function DannError(msg, method) {
  this.msg = msg;
  this.method = method;
};

// Non-static
DannError.prototype.warn = function () {
  if (isBrowser) {
    console.error('DannWarning: ' + this.msg);
    console.error('> ' + this.method);
  } else {
    console.error('\x1b[33m' + 'DannWarning: ' + this.msg + '\x1b[0m');
    console.error('\x1b[33m' + '> ' + this.method + '\x1b[0m');
  }
  console.trace();
};

DannError.prototype.error = function () {
  if (isBrowser) {
    console.warn('DannError: ' + this.msg);
    console.warn('> ' + this.method);
  } else {
    console.warn('\x1b[31m' + 'DannError: ' + this.msg + '\x1b[0m');
    console.warn('\x1b[31m' + '> ' + this.method + '\x1b[0m');
  }
  console.trace();
};

// Static
DannError.warn = function (warning, method) {
  if (isBrowser) {
    console.warn('DannWarning: ' + warning);
    console.warn('> ' + method);
  } else {
    console.warn('\x1b[33m' + 'DannWarning: ' + warning + '\x1b[0m');
    console.warn('\x1b[33m' + '> ' + method + '\x1b[0m');
  }
  console.trace();
};

DannError.error = function (error, method) {
  if (isBrowser) {
    console.error('DannError: ' + error);
    console.error('> ' + method);
  } else {
    console.error('\x1b[31m' + 'DannError: ' + error + '\x1b[0m');
    console.error('\x1b[31m' + '> ' + method + '\x1b[0m');
  }
  console.trace();
};

//Activation functions:
function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}
function sigmoid_d(x) {
  let x1 = sigmoid(x);
  return x1 * (1 - x1);
}
function leakySigmoid(x) {
  return 1 / (1 + Math.exp(-x)) + x / 100;
}
function leakySigmoid_d(x) {
  let x1 = leakySigmoid(x);
  return x1 * (1 - x1);
}
function siLU(x) {
  return x / (1 + Math.exp(-x));
}
function siLU_d(x) {
  let top = 1 + Math.exp(-x) + x * Math.exp(-x);
  let down = Math.pow(1 + Math.exp(-x), 2);
  return top / down;
}
function tanH(x) {
  let top = Math.exp(x) - Math.exp(-x);
  let down = Math.exp(x) + Math.exp(-x);
  return top / down;
}
function tanH_d(x) {
  return 1 - Math.pow(tanH(x), 2);
}
function leakyReLUCapped(x) {
  if (x >= 0 && x <= 6) {
    return x;
  } else if (x < 0) {
    return 0.1 * x;
  } else {
    return 6;
  }
}
function leakyReLUCapped_d(x) {
  if (x >= 0 && x <= 6) {
    return 1;
  } else if (x < 0) {
    return 0.1;
  } else {
    return 0;
  }
}
function leakyReLU(x) {
  if (x >= 0) {
    return 1 * x;
  } else {
    return 0.01 * x;
  }
}
function leakyReLU_d(x) {
  if (x >= 0) {
    return 1;
  } else {
    return 0.01;
  }
}
function reLU(x) {
  if (x >= 0) {
    return 1 * x;
  } else {
    return 0;
  }
}
function reLU_d(x) {
  if (x >= 0) {
    return 1;
  } else {
    return 0;
  }
}
function sinc(x) {
  if (x === 0) {
    return 1;
  } else {
    return Math.sin(x) / x;
  }
}
function sinc_d(x) {
  if (x === 0) {
    return 0;
  } else {
    return Math.cos(x) / x - Math.sin(x) / (x * x);
  }
}
function softsign(x) {
  return x / (1 + Math.abs(x));
}
function softsign_d(x) {
  let down = 1 + Math.abs(x);
  return 1 / (down * down);
}
function binary(x) {
  if (x <= 0) {
    return 0;
  } else {
    return 1;
  }
}
function binary_d(x) {
  return 0;
}
function softplus(x) {
  return Math.log(1 + Math.exp(x));
}
function softplus_d(x) {
  return sigmoid(x);
}

// Exporting Functions:
let activations = {
  //Basic:
  sigmoid: sigmoid,
  sigmoid_d: sigmoid_d,
  tanH: tanH,
  tanH_d: tanH_d,
  siLU: siLU,
  siLU_d: siLU_d,
  reLU: reLU,
  reLU_d: reLU_d,
  leakyReLU: leakyReLU,
  leakyReLU_d: leakyReLU_d,
  sinc: sinc,
  sinc_d: sinc_d,
  softsign: softsign,
  softsign_d: softsign_d,
  binary: binary,
  binary_d: binary_d,
  softplus: softplus,
  softplus_d: softplus_d,
  //Experimental:
  leakySigmoid: leakySigmoid,
  leakySigmoid_d: leakySigmoid_d,
  leakyReLUCapped: leakyReLUCapped,
  leakyReLUCapped_d: leakyReLUCapped_d,
};

// loss functions:
function mae(predictions, target) {
  let sum = 0;
  let ans = 0;
  let n = target.length;
  for (let i = 0; i < n; i++) {
    let y = target[i];
    let yHat = predictions[i];
    sum += abs(y - yHat);
  }
  ans = sum / n;
  return ans;
}
function bce(predictions, target) {
  let sum = 0;
  let ans = 0;
  let n = target.length;
  for (let i = 0; i < n; i++) {
    let y = target[i];
    let yHat = predictions[i];
    sum += y * log(yHat) + (1 - y) * log(1 - yHat);
  }
  ans = -sum / n;
  return ans;
}
function lcl(predictions, target) {
  let sum = 0;
  let ans = 0;
  let n = target.length;
  for (let i = 0; i < n; i++) {
    let y = target[i];
    let yHat = predictions[i];
    sum += log(cosh(yHat - y));
  }
  ans = sum / n;
  return ans;
}
function mbe(predictions, target) {
  let sum = 0;
  let ans = 0;
  let n = target.length;
  for (let i = 0; i < n; i++) {
    let y = target[i];
    let yHat = predictions[i];
    sum += y - yHat;
  }
  ans = sum / n;
  return ans;
}
//New experimental function: Mean absolute exponential loss
function mael(predictions, target) {
  let sum = 0;
  let ans = 0;
  let n = target.length;
  for (let i = 0; i < n; i++) {
    let y = target[i];
    let yHat = predictions[i];
    let x = y - yHat;

    //Mean absolute exponential function
    let top = -x * (exp(-x) - 1);
    let down = exp(-x) + 1;
    sum += top / down;
  }
  ans = sum / n;
  return ans;
}
function rmse(predictions, target) {
  let sum = 0;
  let ans = 0;
  let n = target.length;
  for (let i = 0; i < n; i++) {
    let y = target[i];
    let yHat = predictions[i];
    sum += pow(y - yHat, 2);
  }
  ans = sqrt(sum / n);
  return ans;
}
function mce(predictions, target) {
  let sum = 0;
  let ans = 0;
  let n = target.length;
  for (let i = 0; i < n; i++) {
    let y = target[i];
    let yHat = predictions[i];
    sum += pow(abs(y - yHat), 3);
  }
  ans = sum / n;
  return ans;
}
function mse(predictions, target) {
  let sum = 0;
  let ans = 0;
  let n = target.length;
  for (let i = 0; i < n; i++) {
    let y = target[i];
    let yHat = predictions[i];
    sum += pow(y - yHat, 2);
  }
  ans = sum / n;
  return ans;
}
let lossfuncs = {
  //Basic
  mae: mae,
  bce: bce,
  lcl: lcl,
  mbe: mbe,
  mce: mce,
  mse: mse,
  rmse: rmse,
  //Experimental:
  mael: mael,
};

//Shortening Mathjs functions:
const random = (a, b) => Math.random(1) * (b - a) + a;
const exp = (x) => Math.exp(x);
const abs = (x) => Math.abs(x);
const log = (x) => Math.log(x);
const pow = (x, e) => Math.pow(x, e);
const round = (x) => Math.round(x);
const sqrt = (x) => Math.sqrt(x);

//Other math functions:
const cosh = (x) => (exp(x) + exp(-x)) / 2;

// Pooling functions:
function max(arr) {
  let record = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] > record) {
      record = arr[i];
    }
  }
  return record;
}
function min(arr) {
  let record = Infinity;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] < record) {
      record = arr[i];
    }
  }
  return record;
}
function avg(arr) {
  let sum = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }
  return sum / len;
}
let poolfuncs = {
  max: max,
  min: min,
  avg: avg,
};

/**
 * @module Matrix
 */

/**
 * A way to describe matrices and perform operations with them.
 * @class Matrix
 * @constructor
 * @param {Number} rows the number of rows.
 * @param {Number} cols the number of columns.
 * @example
 * <code>
 * const m = new Matrix(3,4);
 * m.log();
 * </code>
 */
Matrix = function Matrix(rows = 0, cols = 0) {
  this.rows = rows;
  this.cols = cols;
  this.shape = '( ' + this.rows + ' , ' + this.cols + ' )';
  let m = [[]];
  for (let i = 0; i < rows; i++) {
    m[i] = [];
    for (let j = 0; j < cols; j++) {
      m[i][j] = 0;
    }
  }
  this.matrix = m;
};

/**
 * Add a value or Matrix to a Matrix object.
 * @method add
 * @param {Number | Matrix} n Number value or Matrix to add to the Matrix object.
 * @chainable
 * @example
 * <code>
 * const m = new Matrix(3,3);
 * m.set([
 *    [1, 1, 1],
 *    [5, 3, 2],
 *    [2, 4, 4]
 * ]);
 * m.add(1);
 * m.log();
 * //   [2, 2, 2]
 * //   [6, 4, 3]
 * //   [2, 4, 4]
 * </code>
 * @example
 * <code>
 * const a = new Matrix(3,3);
 * a.set([
 *    [1, 1, 1],
 *    [5, 3, 2],
 *    [2, 4, 4]
 * ]);
 * const b = new Matrix(3,3);
 * b.set([
 *    [1, 4, 1],
 *    [2, 2, 1],
 *    [2, 1, 0]
 * ]);
 * a.add(b);
 * a.log();
 * //   [2, 5, 2]
 * //   [7, 7, 3]
 * //   [4, 5, 4]
 * </code>
 */

Matrix.prototype.add = function add(n) {
  if (n instanceof Matrix) {
    if (this.rows !== n.rows || this.cols !== n.cols) {
      DannError.error('Matrix dimensions should match', 'Matrix.prototype.add');
      return;
    } else {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.matrix[i][j] += n.matrix[i][j];
        }
      }
      return this;
    }
  } else {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] += n;
      }
    }
    return this;
  }
};

/**
 * Add two Matrix objects together.
 * @method add
 * @static
 * @param {Matrix} a The first Matrix object in the operation.
 * @param {Matrix} b The second Matrix object in the operation.
 * @return {Matrix} the result Matrix.
 * @example
 * <code>
 * const a = new Matrix(3,3);
 * a.set([
 *    [4, 2, 1],
 *    [2, 3, 2],
 *    [1, 1, 4]
 * ]);
 * const b = new Matrix(3,3);
 * b.set([
 *    [1, 4, 1],
 *    [2, 2, 1],
 *    [2, 1, 0]
 * ]);
 * const c = Matrix.add(a, b);
 * c.log();
 * //   [5, 6, 1]
 * //   [4, 5, 3]
 * //   [3, 2, 4]
 * </code>
 */
Matrix.add = function add(a, b) {
  let ans = new Matrix(a.rows, a.cols);
  if (a.rows !== b.rows || a.cols !== b.cols) {
    DannError.error('Matrix dimensions should match', 'Matrix.add');
    return;
  } else {
    for (let i = 0; i < ans.rows; i++) {
      for (let j = 0; j < ans.cols; j++) {
        ans.matrix[i][j] = a.matrix[i][j] + b.matrix[i][j];
      }
    }
  }
  return ans;
};

Matrix.addGrid = function addGrid(m1, m2) {
  let a = m1.matrix;
  let b = m2.matrix;
  let ans = [];
  for (let i = 0; i < a[0].length; i++) {
    ans[i] = [];
    for (let j = 0; j < a[0].length; j++) {
      ans[i].push(a[0][i] + b[j][0]);
    }
  }
  return new Matrix().set(ans);
};

Matrix.addColumn = function addColumn(m1, m2) {
  let a;
  let b;
  if (m1.cols === 1) {
    a = m1;
    b = m2;
  } else if (m2.cols === 1) {
    a = m2;
    b = m1;
  }
  let ans = new Matrix(b.rows, b.cols);
  for (let i = 0; i < b.rows; i++) {
    for (let j = 0; j < b.cols; j++) {
      ans.matrix[i][j] = b.matrix[i][j] + a.matrix[i][0];
    }
  }
  return ans;
};

/*
 * Undisplayed documentation
 *
 * @method addPercent
 * @param {Number} magnitude The scalar applied to the value
 */
Matrix.prototype.addPercent = function addPrecent(scalar) {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      let w = this.matrix[i][j];
      this.matrix[i][j] += w * scalar;
    }
  }
};

/*
 * Undisplayed documentation
 *
 * @method addRandom
 * @param {Number} magnitude The range in which to initiate a random value in the equation.
 * @param {Number} prob The probability of a value being affected (between 0 and 1)
 */
Matrix.prototype.addRandom = function addRandom(magnitude, prob) {
  let newMatrix = Matrix.make(this.rows, this.cols);
  if (prob <= 0 || prob > 1) {
    DannError.error(
      'Probability argument must be between 0 and 1',
      'Matrix.prototype.addRandom'
    );
  } else {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let w = this.matrix[i][j];
        let ran = random(0, 1);
        if (ran < prob) {
          newMatrix[i][j] = w + w * random(-magnitude, magnitude);
        }
      }
    }
  }
  this.set(newMatrix);
};

/**
 * Convert an Array into a Matrix Object
 * @method fromArray
 * @static
 * @param {Array} array The array to convert into a Matrix.
 * @param {Object} options Options to specify. As of now, only the 'flip' property is supported which flips the output matrix removing the need of a transpose method.
 * @return {Matrix} 1 row, n col Matrix Object
 * @example
 * <code>
 * let a = [1, 0, 1, 1];
 * let m = Matrix.fromArray(a);
 * m.log();
 * </code>
 */
Matrix.fromArray = function fromArray(array, options) {
  let flip = false;
  if (options !== undefined) {
    flip = options.flip;
  }
  let m = new Matrix(array.length, 1);
  for (let i = 0; i < array.length; i++) {
    if (flip === false) {
      m.matrix[i][0] = array[i];
    } else if (flip === true) {
      m.matrix[0][i] = array[i];
    }
  }
  return m;
};

/**
 * Initiate a matrix with a certain value.
 * @method initiate
 * @param {Number} [value] The value to initiate te Matrix with, set to 0 by default.
 * @chainable
 * @example
 * <code>
 * const m = new Matrix(2, 2);
 * m.initiate(100);
 * m.log();
 * // [100, 100]
 * // [100, 100]
 * </code>
 */
Matrix.prototype.initiate = function initiate(value = 0) {
  if (value !== undefined) {
    if (typeof value === 'number') {
      for (let i = 0; i < this.matrix.length; i++) {
        for (let j = 0; j < this.matrix[i].length; j++) {
          this.matrix[i][j] = value;
        }
      }
      return this;
    } else {
      DannError.error(
        'The value entered as an argument is not a number',
        'Matrix.prototype.initiate'
      );
      return;
    }
  }
};

/**
 * Set a specific value at a coordinate in the matrix.
 * @method insert
 * @param {Number} value The value to be inserted into the specified coordinates in the matrix
 * @param {Number} x Row index
 * @param {Number} y Column index
 * @chainable
 * @example
 * <code>
 * const m1 = new Matrix(3,4);
 * m1.log();
 * // [0, 0, 0, 0]
 * // [0, 0, 0, 0]
 * // [0, 0, 0, 0]
 * let value = 1;
 * m1.insert(value, 2, 3);
 * m1.log();
 * // [0, 0, 0, 0]
 * // [0, 0, 0, 0]
 * // [0, 0, 0, 1]
 * </code>
 */
Matrix.prototype.insert = function insert(value, x, y) {
  if (typeof value !== 'number') {
    DannError.error(
      'Expected Number for "value" argument',
      'Matrix.prototype.insert'
    );
    return;
  }
  if (typeof x !== 'number') {
    DannError.error(
      'Expected Number for "x" argument',
      'Matrix.prototype.insert'
    );
    return;
  }
  if (typeof y !== 'number') {
    DannError.error(
      'Expected Number for "y" argument',
      'Matrix.prototype.insert'
    );
    return;
  }
  if (x < this.rows && y < this.cols) {
    this.matrix[x][y] = value;
    return this;
  } else {
    DannError.error(
      ' x, y arguments exceed the matrix dimensions.',
      'Matrix.prototype.insert'
    );
  }
};

/**
 * Logs information about the matrix.
 * @method log
 * @param {Object} [options] Object including specific properties.
 * @example
 * <code>
 * const m = new Matrix(3, 6);
 * // log
 * m.log();
 * // log as a table
 * m.log({table:true});
 * // log with rounded values
 * m.log({decimals:3});
 * </code>
 */
Matrix.prototype.log = function log(options) {
  let table = false;
  if (options !== undefined) {
    if (options.table) {
      table = options.table;
    }
  }
  if (table) {
    console.table(this.matrix);
  } else {
    console.log(this);
  }
};

/**
 * Create a Number[][] matrix, all values set to 0.
 * @method make
 * @static
 * @param {Number} x the x component of the Number[][] matrix.
 * @param {Number} y the y component of the Number[][] matrix.
 * @return {Number[][]}
 * @example
 * <code>
 * let rawMatrix = Matrix.make(3, 4);
 * console.log(rawMatrix);
 * </code>
 */
Matrix.make = function make(rows = 0, cols = 0) {
  let m = [[]];
  for (let i = 0; i < rows; i++) {
    m[i] = [];
    for (let j = 0; j < cols; j++) {
      m[i][j] = 0;
    }
  }
  return m;
};

Matrix.prototype.makeShape = function makeShape() {
  let str = '( ' + this.rows + ' , ' + this.cols + ' )';
  return str;
};

/**
 * Map matrix values to a function
 * @method map
 * @param {Function} f The function with which to map the matrix values.
 * @chainable
 * @example
 * <code>
 * const m = new Matrix(2, 2);
 * m.initiate(4);
 * m.log();
 * // [4, 4]
 * // [4, 4]
 * m.map(x => x*x);
 * m.log();
 * // [16, 16]
 * // [16, 16]
 * </code>
 */
Matrix.prototype.map = function map(f) {
  if (typeof f === 'function') {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let v = this.matrix[i][j];
        this.matrix[i][j] = f(v);
      }
    }
    return this;
  } else {
    DannError.error('Argument must be a function', 'Matrix.prototype.map');
    return;
  }
};

/**
 * Map matrix values to a function
 * @method map
 * @static
 * @param {Function} m The Matrix with which to apply the operation.
 * @return {Matrix}
 * @example
 * <code>
 * const m = new Matrix(2, 2);
 * m.initiate(4);
 * m.log();
 * // [4, 4]
 * // [4, 4]
 * let m1 = Matrix.map(m, x => x*x*x);
 * m1.log();
 * // [64, 64]
 * // [64, 64]
 * </code>
 */
Matrix.map = function map(m, f) {
  if (m instanceof Matrix) {
    let ans = new Matrix(m.rows, m.cols);
    for (let i = 0; i < m.rows; i++) {
      for (let j = 0; j < m.cols; j++) {
        let v = m.matrix[i][j];
        ans.matrix[i][j] = f(v);
      }
    }
    return ans;
  } else {
    DannError.error(
      'First argument must be an instance of Matrix',
      'Matrix.map'
    );
    return;
  }
};

/**
 * Finds the largest value in a matrix.
 * @method max
 * @return {Number} the largest value
 */
Matrix.prototype.max = function max() {
  let max = 0;
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      let v = this.matrix[i][j];
      if (max < v) {
        max = v;
      }
    }
  }
  return max;
};

/**
 * Finds the smallest value in a matrix.
 * @method min
 * @return {Number} the smallest value
 */
Matrix.prototype.min = function min() {
  let min = 10000000000;
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      let v = this.matrix[i][j];
      if (min > v) {
        min = v;
      }
    }
  }
  return min;
};

/**
 * Multiply a Matrix object by an other matrix or a scalar
 * @method mult
 * @param {Matrix|Number} n Scalar or Matrix to multiply to the Matrix object.
 * @chainable
 * @example
 * <code>
 * const m = new Matrix(2, 2);
 * m.set([
 *    [1, 2],
 *    [2, 3]
 * ]);
 * m.mult(2);
 * m.log();
 * //  [2, 4],
 * //  [4, 6]
 * </code>
 * @example
 * <code>
 * const a = new Matrix(2, 2);
 * a.set([
 *    [1, 2],
 *    [2, 3]
 * ]);
 * const b = new Matrix(2, 2);
 * b.set([
 *    [2, 2],
 *    [2, 0.5]
 * ]);
 * a.mult(b);
 * a.log();
 * //  [2, 4],
 * //  [4, 1.5]
 * </code>
 */
Matrix.prototype.mult = function mult(n) {
  if (n instanceof Matrix) {
    if (this.rows !== n.rows || this.cols !== n.cols) {
      DannError.error(
        'The matrix dimensions should match in order to multiply their values. If you are looking for dot product, try Matrix.mult',
        'Matrix.prototype.mult'
      );
      return;
    } else {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.matrix[i][j] *= n.matrix[i][j];
        }
      }
      return this;
    }
  } else {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] *= n;
      }
    }
    return this;
  }
};

/**
 * Matrix Multiplication, also commonly refered as Matrix dot product. The rows of B must match the columns of A.
 * @method mult
 * @static
 * @param {Matrix} a The first matrix in the operation.
 * @param {Matrix} b The second matrix in the operation.
 * @param {Object} [options] Optional parameters.
 * @return {Matrix} The resultant Matrix Object.
 * @example
 * <code>
 * let a = new Matrix(4, 3);
 * a.set([
 *   [1, 0, 1, 0],
 *   [0, 1, 0, 0],
 *   [0, 1, 1, 1]
 * ]);
 * let b = new Matrix(3, 4);
 * b.set([
 *    [1, 0, 1],
 *    [0, 1, 0],
 *    [0, 1, 1],
 *    [1, 0, 0]
 * ]);
 * let c = Matrix.mult(a,b);
 * c.log();
 * // c.matrix is
 * // [1, 1, 2]
 * // [0, 1, 0]
 * // [1, 2, 1]
 * </code>
 */
Matrix.mult = function mult(a, b, options = { mode: 'cpu' }) {
  if (options !== undefined) {
    if (options.mode) {
      mode = options.mode;
    }
  }
  if (mode === 'cpu') {
    let ans = new Matrix(a.rows, b.cols);
    if (a instanceof Matrix && b instanceof Matrix) {
      if (a.cols !== b.rows) {
        DannError.error(
          'The rows of B must match the columns of A',
          'Matrix.mult'
        );
        return;
      } else {
        for (let i = 0; i < ans.rows; i++) {
          for (let j = 0; j < ans.cols; j++) {
            let sum = 0;
            for (let k = 0; k < a.cols; k++) {
              sum += a.matrix[i][k] * b.matrix[k][j];
            }
            ans.matrix[i][j] = sum;
          }
        }
      }
      return ans;
    }
  } else {
    DannError.error('mode specified is not valid', 'Matrix.prototype.mult');
    return;
  }
};

/**
 * Randomize a Matrix Object's values
 * @method randomize
 * @param {Number} min the minimum possible random value.
 * @param {Number} max the maximum possible random value.
 * @chainable
 * @example
 * <code>
 * const a = new Matrix(3,3);
 * a.randomize(-1, 1);
 * a.log();
 * </code>
 */
Matrix.prototype.randomize = function randomize(min, max) {
  for (let i = 0; i < this.matrix.length; i++) {
    for (let j = 0; j < this.matrix[i].length; j++) {
      this.matrix[i][j] = random(min, max);
    }
  }
  return this;
};

/**
 * Set a Matrix object.
 * @method set
 * @param { Number[][] } matrix A matrix with which to set the current Matrix object with.
 * @chainable
 * @example
 * <code>
 * const a = new Matrix(0,0);
 * const rawMatrix = [
 *    [1, 0],
 *    [0, 1]
 * ];
 * a.set(rawMatrix);
 * a.log();
 * </code>
 */
Matrix.prototype.set = function set(matrix) {
  if (
    typeof matrix.length === 'number' &&
    typeof matrix[0].length === 'number' &&
    typeof matrix === 'object'
  ) {
    this.matrix = matrix;
    this.rows = matrix.length;
    this.cols = matrix[0].length;
    this.shape = this.makeShape();
    return this;
  } else {
    DannError.error(
      'the argument of set(); must be an array within an array. Here is an example: [[1,0],[0,1]]',
      'Matrix.prototype.set'
    );
    return;
  }
};

/**
 * Subtract a value or Matrix to a matrix object.
 * @method sub
 * @param {Number | Matrix} n Number to subtract to the matrix.
 * @chainable
 * @example
 * <code>
 * const m = new Matrix(3,3);
 * m.set([
 *    [1, 2, 1],
 *    [2, 2, 3],
 *    [2, 1, 4]
 * ]);
 * m.sub(1);
 * m.log();
 * //   [0, 1, 0]
 * //   [1, 1, 2]
 * //   [1, 0, 3]
 * </code>
 */
Matrix.prototype.sub = function sub(n) {
  if (n instanceof Matrix) {
    if (this.rows !== n.rows || this.cols !== n.cols) {
      DannError.error('Matrix dimensions should match', 'Matrix.prototype.sub');
      return;
    } else {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.matrix[i][j] -= n.matrix[i][j];
        }
      }
      return this;
    }
  } else {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.matrix[i][j] -= n;
      }
    }
    return this;
  }
};
/**
 * Subtract two Matrix objects together.
 * @method sub
 * @static
 * @param {Matrix} a The first Matrix object in the operation.
 * @param {Matrix} b The second Matrix object in the operation.
 * @return {Matrix} the result Matrix.
 * @example
 * <code>
 * const a = new Matrix(3,3);
 * a.set([
 *    [4, 2, 1],
 *    [2, 3, 2],
 *    [1, 1, 4]
 * ]);
 * const b = new Matrix(3,3);
 * b.set([
 *    [1, 4, 1],
 *    [2, 2, 1],
 *    [2, 1, 0]
 * ]);
 * const c = Matrix.sub(a, b);
 * c.log();
 * //   [3, -2, 0]
 * //   [0,  1, 1]
 * //   [-1, 0, 4]
 * </code>
 */
Matrix.sub = function sub(a, b) {
  if (a instanceof Matrix && b instanceof Matrix) {
    if (a.rows !== b.rows || a.cols !== b.cols) {
      DannError.error('The matrix dimensions should match', 'Matrix.sub');
      return undefined;
    } else {
      let result = new Matrix(a.rows, a.cols);
      for (let i = 0; i < result.rows; i++) {
        for (let j = 0; j < result.cols; j++) {
          result.matrix[i][j] = a.matrix[i][j] - b.matrix[i][j];
        }
      }
      return result;
    }
  } else {
    DannError.error('The arguments should be Matrices', 'Matrix.sub');
    return undefined;
  }
};

/**
 * Convert a (1 by n) or (n by 1) Matrix object to an array.
 * @method toArray
 * @return {Array}
 * @example
 * <code>
 * let m = new Matrix(4, 1);
 * let a = m.toArray();
 * console.log(a);
 * </code>
 */
Matrix.prototype.toArray = function toArray() {
  let ans = [];
  if (this.cols === 1) {
    for (let i = 0; i < this.rows; i++) {
      ans[i] = this.matrix[i][0];
    }
    return ans;
  } else if (this.rows === 1) {
    ans = this.matrix[0];
    return ans;
  } else {
    DannError.error(
      'None of the lengths of the matrix equal 1',
      'Matrix.prototype.toArray'
    );
    return undefined;
  }
};

/**
 * Convert a (1 by n) or (n by 1) Matrix object to an array.
 * @method toArray
 * @static
 * @return {Array}
 * @example
 * <code>
 * let m = new Matrix(4, 1);
 * let a = Matrix.toArray(m);
 * console.log(a);
 * </code>
 */
Matrix.toArray = function toArray(m) {
  let ans = [];
  if (m.cols === 1) {
    for (let i = 0; i < m.rows; i++) {
      ans[i] = m.matrix[i][0];
    }
    return ans;
  } else if (m.rows === 1) {
    ans = m.matrix[0];
    return ans;
  } else {
    DannError.error(
      'None of the lengths of the matrix equal 1',
      'Matrix.toArray'
    );
    return undefined;
  }
};

/**
 * Transpose operation of a matrix. Invert row coordinates with column coordinates
 * @method transpose
 * @param {Matrix} m The matrix to be transposed.
 * @return {Matrix}
 * @example
 * <code>
 * const m1 = new Matrix(2,4);
 * m1.log({table:true});
 * const m2 = Matrix.transpose(m1);
 * m2.log({table:true});
 * </code>
 */
Matrix.transpose = function transpose(m) {
  let result = new Matrix(m.cols, m.rows);
  for (let i = 0; i < m.rows; i++) {
    for (let j = 0; j < m.cols; j++) {
      result.matrix[j][i] = m.matrix[i][j];
    }
  }
  return result;
};

/**
 * @module Layer
 */

/**
 * A way to descript downsampling layers.
 * @class Layer
 * @constructor
 * @param {String} type A string representing the type of this layer.
 * @param {Number} Size The size of the downsampling layer.
 * @param {Number} Sample The size of the 2d sample iterating trough the array.
 * @param {Number} Stride The number of jumps the sample is going to perform for each iteration.
 * @example
 * <code>
 * const l1 = new Layer('avgpool', 16, 2, 2);
 * l1.log();
 * </code>
 */
/*
 * NOTE:
 * This is also the same instance of hidden layers.
 * Documentation is not provided for creating Hidden layers because the user should not create Hidden Neuron Layers this way.
 * Use Dann.addHiddenLayer to create hidden layers instead.
 */
Layer = function Layer(type, arg1, arg2, arg3, arg4, arg5) {
  this.type = type;
  this.subtype = this.getSubtype();
  if (this.subtype !== 'pool') {
    // Neuron Layers
    if (this.type === 'hidden' || this.type === 'output') {
      this.size = arg1;
      this.setFunc(arg2);
      this.layer = new Matrix(this.size, 1);
    } else if (this.type === 'input') {
      this.size = arg1;
      this.layer = new Matrix(this.size, 1);
    }
  } else if (this.subtype === 'pool') {
    // Pooling Layers
    this.stride = arg3;
    this.sampleSize = arg2;
    this.inputSize = arg1;

    //Optional X&Y size parameters
    if (arg4 !== undefined && arg5 !== undefined) {
      this.sizeX = arg4;
      this.sizeY = arg5;
    } else {
      this.sizeX = Math.sqrt(this.inputSize);
      this.sizeY = this.sizeX;
      if (this.sizeX !== Math.floor(this.sizeX)) {
        console.error(
          'Dann Error: the array can not be set in a square matrix'
        );
        console.trace();
        return;
      }
    }
    //get the size of output.
    this.size = Layer.getPoolOutputLength(arg2, arg3, this.sizeX, this.sizeY);
    let divx = this.inputSize / this.sizeX;
    let divy = this.inputSize / this.sizeY;

    // Handle Unvalid Layer Formats
    if (divx !== Math.floor(divx) && divy !== Math.floor(divy)) {
      console.error(
        'Dann Error: the width & height value specified to arrange the inputted array as a matrix are not valid. (The array length must be divisible by the width & height values.)'
      );
      console.trace();
      return;
    }
    if (this.size !== Math.floor(this.size)) {
      console.error(
        "Dann Error: the Width must be divisible by the stride (jumps size). Width is the root of the array's length."
      );
      console.trace();
      return;
    }

    //Input values.
    this.input = new Matrix(this.inputSize, 1);
    //Output values.
    this.layer = new Matrix(this.size, 1);

    // picking the pooling function:
    this.prefix = this.getPrefix();
    this.poolfunc = poolfuncs[this.prefix];

    //Downsampling function, appling the pool function to the segmented arrays.
    this.downsample = function (data, f, s) {
      this.input = Matrix.fromArray(data);
      //Split inputs in smaller pool arrays.
      let samples = Layer.selectPools(data, f, s, this.sizeX, this.sizeY);
      let output = [];
      for (let i = 0; i < samples.length; i++) {
        output[i] = this.poolfunc(samples[i]);
      }
      this.layer = Matrix.fromArray(output);
      return output;
    };
  } else {
    // Handle Unvalid Layer types.
    if (typeof this.type === 'string') {
      console.error(
        "Dann Error: The Layer type '" + this.type + "' is not valid."
      );
      console.trace();
    } else {
      console.error('Dann Error: You need to specify a valid type of Layer');
      console.trace();
    }
  }
};

/**
 * Feed data through the layer to obtain an output.
 * @method feed
 * @param {Array} data Takes an array of numbers to feed through the layer.
 * @param {Object} [options] An object including specific properties.
 * <table>
 * <thead>
 * <tr>
 * <th style="text-align:center">Property</th>
 * <th style="text-align:center">Type</th>
 * <th>Function</th>
 * </tr>
 * </thead>
 * <tbody>
 * <tr>
 * <td style="text-align:center">log</td>
 * <td style="text-align:center">Boolean</td>
 * <td>Whether or not to log the output.</td>
 * </tr>
 * <tr>
 * <td style="text-align:center">table</td>
 * <td style="text-align:center">Boolean</td>
 * <td>Whether or not we want to print the result in the form of a table or a normal console log.</td>
 * </tr>
 * </tbody>
 * </table>
 * @return {Array} Array of outputs values.
 */
Layer.prototype.feed = function feed(data, options) {
  if (this.subtype !== 'pool') {
    DannError.error(
      "This function can only be used by Layers with 'pool' subtype",
      'Layer.prototype.feed'
    );
  } else {
    let showLog = false;
    let table = false;
    let f = this.sampleSize;
    let s = this.stride;
    if (options !== undefined) {
      if (options.log) {
        showLog = options.log;
      }
      if (options.table) {
        table = options.table;
      }
    }
    if (data.length !== this.inputSize) {
      DannError.error(
        'Dann Error: The data you are trying to feed to this ' +
          this.type +
          ' layer is not the same length as the number of input this layer has.',
        'Layer.prototype.feed'
      );
      return;
    } else {
      let downsampled = this.downsample(data, f, s);
      if (showLog) {
        if (table) {
          console.table(downsampled);
        } else {
          console.log(downsampled);
        }
      }
      return downsampled;
    }
  }
};

/*
 * Undisplayed documentation
 *
 * Get the length of the output of the layer depending on it's parameters.
 * @method getPoolOutputLength
 * @param {Number} f Sample Size
 * @param {Number} s Stride
 * @param {Number} w Size X
 * @param {Number} h Size Y
 * @return {Number} The size of the layer's output.
 */
Layer.getPoolOutputLength = function getPoolOutputLength(f, s, w, h) {
  return ((w - f) / s + 1) * ((h - f) / s + 1);
};

/*
 * Undisplayed documetation
 *
 * @method getSqIndex
 * @param {Number} w width
 * @param {Number} i row index
 * @param {Number} j column index
 * @returns
 */
Layer.getSqIndex = function getSqIndex(w, i, j) {
  return w * j + i;
};

/**
 * Log the layer in the console.
 * @method log
 * @example
 * <code>
 * const l1 = new Layer('maxpool', 16, 4, 4);
 * l1.log();
 * </code>
 */
Layer.prototype.log = function log() {
  console.log(this);
};

/*
 * Undisplayed documentation
 *
 * @method selectPools
 * @param {*} arr data to be passed trough de downsampling layer.
 * @param {*} f Sample Size
 * @param {*} s Stride
 * @param {*} w size X
 * @param {*} h size Y
 * @returns
 */
Layer.selectPools = function selectPools(arr, f, s, w, h) {
  let len = arr.length;
  if (w !== Math.floor(w)) {
    return;
  } else if (w / s !== Math.floor(w / s)) {
    return;
  }
  let samples = [];
  for (let y = 0; y + f <= h; y += s) {
    for (let x = 0; x + f <= w; x += s) {
      let sample = [];
      for (let j = 0; j < f; j++) {
        for (let i = 0; i < f; i++) {
          sample.push(arr[Layer.getSqIndex(w, i + x, j + y)]);
        }
      }
      samples.push(sample);
    }
  }
  return samples;
};

/*
 * Undisplayed documentation

 * @method setFunc
 * @param {String} act The activation function name
 */
Layer.prototype.setFunc = function setFunc(act) {
  let obj = Layer.stringTofunc(act);
  if (obj !== undefined) {
    this.actname = obj.name;
    this.actname_d = obj.name_d;
    this.actfunc = obj.func;
    this.actfunc_d = obj.func_d;
  } else {
    DannError.error('Bad activation information', 'Layer.prototype.setFunc');
    return;
  }
};

/*
 * Undisplayed documentation
 *
 * @method stringTofunc
 * @param {String} str String to convert into activation function object info.
 * @return {Object} Object containing information about an activation function.
 */
Layer.stringTofunc = function stringTofunc(str) {
  let act = str;
  let der = act + '_d';
  let func;
  let func_d;
  func = activations[act];
  func_d = activations[der];

  if (func !== undefined) {
    if (func_d !== undefined) {
      return { name: act, name_d: der, func: func, func_d: func_d };
    } else {
      DannError.error(
        "Dann Error: You need to create the derivative of your custom function. The activation function specified '" +
          str +
          "' does not have a derivative assigned. The activation function was set to the default 'sigmoid'.",
        'Layer.stringTofunc'
      );
      return;
    }
  } else {
    DannError.error(
      "Dann Error: the activation function '" +
        str +
        "' is not a valid activation function. The activation function was set to the default 'sigmoid'.",
      'Layer.stringTofunc'
    );
    return;
  }
};

/*
 * Undisplayed documentation
 *
 * @method getPrefix
 * @return {String} prefix
 */
Layer.prototype.getPrefix = function getPrefix() {
  let str = this.type;
  let len = str.length;
  let prefix = str.slice(0, len - 4);
  return prefix;
};

/*
 * Undisplayed documentation
 *
 * @method getSubtype
 * @returns {String} subtype
 */
Layer.prototype.getSubtype = function getSubtype() {
  let str = this.type;
  let len = str.length;
  let subtype = str.slice(len - 4, len);
  if (subtype === 'pool') {
    return subtype;
  } else {
    return str;
  }
};

/**
 * @module Rann
 */

/**
 * Recurrent Neural Network object. Feature still in development.
 * @class Rann
 * @constructor
 * @param {Number} i The number of input neurons, must be the same length as the sequences to input.
 * @param {Number} h The number of hidden neurons
 * @param {Number} o The number of output neurons
 * @example
 * <code>
 * const rnn = new Rann(10, 32, 10);
 * rnn.log();
 * </code>
 */
Rann = function Rann(i = 2, h = 8, o = 2) {
  // Structure Values
  this.i = i;
  this.o = o;
  this.h = h;
  this.lr = 0.001;
  this.arch = [this.i, this.h, this.o];

  this.layers = [];

  // Weights
  this.U = new Matrix(this.h, this.i);
  this.V = new Matrix(this.o, this.h);
  this.W = new Matrix(this.h, this.h);

  // Gradients
  this.dU = new Matrix(this.h, this.i);
  this.dV = new Matrix(this.o, this.h);
  this.dW = new Matrix(this.h, this.h);

  this.dU_t = new Matrix(this.h, this.i);
  this.dV_t = new Matrix(this.o, this.h);
  this.dW_t = new Matrix(this.h, this.h);

  this.dU_i = new Matrix(this.h, this.i);
  this.dW_i = new Matrix(this.h, this.h);

  // Randomize
  this.U.randomize(-1, 1);
  this.V.randomize(-1, 1);
  this.W.randomize(-1, 1);

  // Mult values
  this.mulv;
  this.mulw;
  this.mulu;

  // Set hidden activation
  this.actname = 'sigmoid';
  let funcData = Layer.stringTofunc(this.actname);
  this.actfunc = funcData['func'];
  this.actfunc_d = funcData['func_d'];

  // Set output activation
  this.o_actname = 'linear';
  this.o_actfunc = (x) => x;
  this.o_actfunc_d = (x) => 1;

  // Data values
  this.previous;
  this.input;
  this.output;

  // Other values
  this.largestSequenceValue = 1;
  this.truncate = 5;
  this.loss = 100;
  this.epoch = 0;
  this.lossfunc_s = 'mse';
  this.lossfunc = lossfuncs[this.lossfunc_s];
};

/*
 * Undisplayed documentation
 * Check if sequences are the right format for a given Rann model.
 * @param {Array} input Array of input sequences.
 * @param {Number} sequence The sequence length
 * @return {Boolean} If the sequences are valid for the given Rann model
 */
Rann.prototype.validateSequences = function checkSequences(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i].length !== this.i) {
      return false;
    }
  }
  return true;
};

/*
 * Undisplaed documentation,
 * This method allows for the gradients to keep a certan threshold value in order to avoid 'gradient explosion'
 * @method clipGradients
 * @param {Number} min_clip
 * @param {Number} max_clip
 * @returns
 */
Rann.prototype.clipGradients = function clipGradients(min_clip, max_clip) {
  // Clip maximum
  let dUmax = this.dU.max();
  if (dUmax > max_clip) {
    let s = max_clip / dUmax;
    this.dU.map((x) => x * s);
  }
  let dVmax = this.dV.max();
  if (dVmax > max_clip) {
    let s = max_clip / dVmax;
    this.dV.map((x) => x * s);
  }
  let dWmax = this.dW.max();
  if (dWmax > max_clip) {
    let s = max_clip / dWmax;
    this.dW.map((x) => x * s);
  }
  // Clip minimum
  let dUmin = this.dU.min();
  if (dUmin < min_clip) {
    let s = min_clip / dUmin;
    this.dU.map((x) => x * s);
  }
  let dVmin = this.dV.min();
  if (dVmin < min_clip) {
    let s = min_clip / dVmin;
    this.dV.map((x) => x * s);
  }
  let dWmin = this.dW.min();
  if (dWmin < min_clip) {
    let s = min_clip / dWmin;
    this.dW.map((x) => x * s);
  }

  return;
};

/**
 * Feed data to the Reccurent Neural Network.
 * @method feed
 * @param {Array} input An array of input sequences
 * @param {Object} [options] Object including specific properties.
 * <table>
 * <thead>
 * <tr>
 * <th>Property</th>
 * <th>Type</th>
 * <th>Function</th>
 * </tr>
 * </thead>
 * <tbody>
 * <tr>
 * <td>log</td>
 * <td>Boolean</td>
 * <td>If set to true, it will log a report in the console.</td>
 * </tr>
 * <tr>
 * <td>table</td>
 * <td>Boolean</td>
 * <td>If the &#39;log&#39; option is set to true, setting this value to true will print the arrays of this function in tables.</td>
 * </tr>
 * <tr>
 * <td>decimals</td>
 * <td>Integer</td>
 * <td>If used, the output of this function will be rounded to the number of decimals specified.</td>
 * </tr>
 * <tr>
 * <td>normalize</td>
 * <td>Boolean</td>
 * <td>If set to true, input values will be normalized. You also need to train the neural network with this option on.</td>
 * </tr>
 * </tbody>
 * </table>
 * @return {Array} The output sequence
 * @example
 * <code>
 * const rnn = new Rann(2, 10, 2);
 * rnn.feed([
 *  [1,2],
 *  [2,3],
 *  [4,5]
 * ]);
 * </code>
 */
Rann.prototype.feed = function feed(input, options) {
  // options
  let log = false;
  let logTime = false;
  let roundData = false;
  let table = false;
  let dec = 21;
  let normalize = false;
  if (options !== undefined) {
    if (options.log !== undefined) {
      log = options.log;
    }
    if (options.table !== undefined) {
      table = options.table;
    }
    if (options.normalize !== undefined) {
      normalize = options.normalize;
    }
    if (options.decimals !== undefined) {
      if (options.decimals > 21) {
        DannError.warn(
          'Maximum number of decimals is 21, was set to 21 by default.',
          'Rann.prototype.feed'
        );
        options.decimals = 21;
      } else {
        dec = Math.pow(10, options.decimals);
        roundData = true;
      }
    }
  }

  if (this.validateSequences(input)) {
    // Normalize input
    if (normalize) {
      input = this.normalizeSequence(input);
    }
    for (let d = 0; d < input.length; d++) {
      // First previous values
      this.previous = new Matrix(this.h, 1);
      // Input sequence
      let input_s = input[d];
      // Sequence length
      let sequence = input[d].length;
      for (let t = 0; t < sequence; t++) {
        // New input for sequence
        new_input = new Matrix(sequence, 1);
        new_input.matrix[t][0] = input_s[t];

        // Mult input to hidden
        this.mulu = Matrix.mult(this.U, new_input);

        // Mult previous hidden to current hidden
        this.mulw = Matrix.mult(this.W, this.previous);

        // Add two matrices as a grid
        let sum = Matrix.add(this.mulw, this.mulu);

        // Map to activation function
        let mapped = Matrix.map(sum, this.actfunc);

        this.mulv = Matrix.mult(this.V, mapped);
        if (logTime === true) {
          console.log('Time: ' + t);
          console.log(Matrix.toArray(this.mulv));
        }
        this.previous = mapped;
        this.output = this.mulv;
      }
    }
    let out = Matrix.map(this.output, this.o_actfunc);

    let outArray = Matrix.toArray(out);

    // Un normalize output
    if (normalize) {
      outArray = this.unNormalizeSequence([outArray])[0];
    }

    if (roundData) {
      outArray = outArray.map((x) => {
        return Math.round(x * dec) / dec;
      });
    }
    if (log) {
      if (table) {
        console.log('Prediction:');
        console.table(outArray);
      } else {
        console.log('Prediction:');
        console.log(outArray);
      }
    }
    return outArray;
  } else {
    DannError.error(
      'Input sequences length must equal the number of input neurons the Rann model has',
      'Rann.prototype.feed'
    );
    return undefined;
  }
};

Rann.prototype.fromJSON = function fromJSON(data) {
  // Meta data
  this.i = data.i;
  this.h = data.h;
  this.o = data.o;
  this.arch = JSON.parse(data.arch);

  // Neural network data
  this.lr = data.lr;
  this.largestSequenceValue = data.lsv;
  this.truncate = data.trun;
  this.epoch = data.e;
  this.loss = data.loss;

  this.layers = [];
  let layers = JSON.parse(data.layers);
  for (let i = 0; i < layers.length; i++) {
    let current = new Matrix().set(layers[i].current.matrix);
    let previous = new Matrix().set(layers[i].previous.matrix);
    this.layers[i] = {
      current: current,
      previous: previous,
    };
  }

  // Weights

  this.U = new Matrix().set(JSON.parse(data.U));

  this.V = new Matrix().set(JSON.parse(data.V));

  this.W = new Matrix().set(JSON.parse(data.W));

  // Gradients
  this.dU = new Matrix().set(JSON.parse(data.dU));
  this.dV = new Matrix().set(JSON.parse(data.dV));
  this.dW = new Matrix().set(JSON.parse(data.dW));

  this.dU_t = new Matrix().set(JSON.parse(data.dU_t));
  this.dV_t = new Matrix().set(JSON.parse(data.dV_t));
  this.dW_t = new Matrix().set(JSON.parse(data.dW_t));

  this.dU_i = new Matrix().set(JSON.parse(data.dU_i));
  this.dW_i = new Matrix().set(JSON.parse(data.dW_i));

  // Set model's loss function
  this.setLossFunction(data.lf);

  // Set hidden layer activation
  this.setActivation(data.act);

  // Set output activation (Only linear is supported as of now)
  this.o_actname = 'linear';
  this.o_actfunc = (x) => x;
  this.o_actfunc_d = (x) => 1;
};

/**
 * Displays information about the model in the console.
 * @method log
 * @param {Object} [options] An object including specific properties.
 * <table>
 * <thead>
 * <tr>
 * <th>Property</th>
 * <th>Type</th>
 * <th>Function</th>
 * </tr>
 * </thead>
 * <tbody>
 * <tr>
 * <td>details</td>
 * <td>Boolean</td>
 * <td>If set to true, the function will log more advanced details about the model.</td>
 * </tr>
 * <tr>
 * <td>table</td>
 * <td>Boolean</td>
 * <td>Whether or not we want to print our matrices in the form of a table or Matrix object log.</td>
 * </tr>
 * <tr>
 * <td>gradients</td>
 * <td>Boolean</td>
 * <td>If this is set to true, the the function will log the gradients of the model.</td>
 * </tr>
 * <tr>
 * <td>weights</td>
 * <td>Boolean</td>
 * <td>If this is set to true, the the function will log the weights of the model.</td>
 * </tr>
 * <tr>
 * <td>struct</td>
 * <td>Boolean</td>
 * <td>If this is set to true, the the function will log the structure of the model.</td>
 * </tr>
 * <tr>
 * <td>misc</td>
 * <td>Boolean</td>
 * <td>If this is set to true, the the function will log the loss of the model, the learning rate of the model and the loss function.</td>
 * </tr>
 * </tbody>
 * </table>
 * @example
 * <code>
 * const rnn = new Rann(4, 20, 4);
 * rnn.log();
 * </code>
 */
Rann.prototype.log = function log(options) {
  let log;
  let weights = false;
  let gradients = false;
  let struct = false;
  let misc = false;
  let table = false;
  if (options === undefined) {
    console.log('Rann model:');
    // Structure
    console.log('Layers:');
    for (let i = 0; i < this.arch.length; i++) {
      if (i !== 0 && i !== this.arch.length - 1) {
        console.log(
          '     hidden layer: ' + this.arch[i] + '   (' + this.actname + ')'
        );
      } else if (i === 0) {
        console.log('     Input layer: ' + this.arch[i]);
      } else if (i === this.arch.length - 1) {
        console.log(
          '     output layer: ' + this.arch[i] + '   (' + this.o_actname + ')'
        );
      }
    }
    // Other values
    console.log('Other values');
    console.log('     Learning rate: ' + this.lr);
    console.log('     Loss function: ' + this.lossfunc_s);
    console.log('     Current epoch: ' + this.epoch);
    console.log('     Latest loss: ' + this.loss);
  } else {
    log = console.log;
    if (options.weights !== undefined) {
      weights = options.weights;
    }
    if (options.gradients !== undefined) {
      gradients = options.gradients;
    }
    if (options.struct !== undefined) {
      struct = options.struct;
    }
    if (options.misc !== undefined) {
      misc = options.misc;
    }
    if (options.table !== undefined) {
      table = options.table;
    }
    if (options.details !== undefined) {
      if (options.details === true) {
        struct = options.details;
        gradients = options.details;
        misc = options.details;
        weights = options.details;
      }
    }
    // Logs
    if (struct) {
      console.log('Rann model:');
      console.log('Layers:');
      for (let i = 0; i < this.arch.length; i++) {
        if (i !== 0 && i !== this.arch.length - 1) {
          console.log(
            '     hidden layer: ' + this.arch[i] + '   (' + this.actname + ')'
          );
        } else if (i === 0) {
          console.log('     Input layer: ' + this.arch[i]);
        } else if (i === this.arch.length - 1) {
          console.log(
            '     output layer: ' + this.arch[i] + '   (' + this.o_actname + ')'
          );
        }
      }
    }
    if (misc) {
      console.log('Other values');
      console.log('     Learning rate: ' + this.lr);
      console.log('     Loss function: ' + this.lossfunc_s);
      console.log('     Current epoch: ' + this.epoch);
      console.log('     Latest loss: ' + this.loss);
    }
    if (misc && weights) {
      // Line break
      console.log('');
    }
    if (weights) {
      let w0, w1, w2;
      if (table) {
        log = console.table;
        w0 = this.U.matrix;
        w1 = this.W.matrix;
        w2 = this.V.matrix;
      } else {
        log = console.log;
        w0 = this.U;
        w1 = this.W;
        w2 = this.V;
      }
      console.log('U: input to hidden weights');
      log(w0);
      console.log('W: shared hidden weights');
      log(w1);
      console.log('V: hidden to output weights');
      log(w2);
    }
    if (weights && gradients) {
      // Line break
      console.log('');
    }
    if (gradients) {
      let g0, g1, g2;
      if (table) {
        log = console.table;
        g0 = this.dU.matrix;
        g1 = this.dW.matrix;
        g2 = this.dV.matrix;
      } else {
        log = console.log;
        g0 = this.dU;
        g1 = this.dW;
        g2 = this.dV;
      }
      console.log('Gradients of U:');
      log(g0);
      console.log('Gradients of W:');
      log(g1);
      console.log('Gradients of V:');
      log(g2);
    }
  }
};

/**
 * Change the intiated weight values of a model.
 * This method is optional in the creation of a Rann model.
 * @method makeWeights
 * @param {Number} min The minium value.
 * @param {Number} max The maximum value.
 * @example
 * <code>
 * const rnn = new Rann(4, 10, 4);
 * rnn.makeWeights(-0.1, 0.1);
 * </code>
 */
Rann.prototype.makeWeights = function makeWeights(min, max) {
  if (min !== undefined || max !== undefined) {
    this.U.randomize(min, max);
    this.V.randomize(min, max);
    this.W.randomize(min, max);
    return;
  } else {
    DannError.error(
      'Must specify minimum and maximum values for weights',
      'Rann.prototype.makeWeights'
    );
  }
};

Rann.prototype.normalizeSequence = function normalizeSequence(
  sequence,
  record
) {
  // Find largest value
  if (record !== undefined) {
    if (record === true) {
      let max_arr = [];
      for (let i = 0; i < sequence.length; i++) {
        max_arr.push(Math.max(sequence[i]));
      }
      this.largestSequenceValue = Math.max(max);
    }
  }
  // Normalize sequence
  let new_sequence = [];
  for (let i = 0; i < sequence.length; i++) {
    new_sequence[i] = [];
    for (let j = 0; j < sequence[0].length; j++) {
      new_sequence[i].push(sequence[i][j] / this.largestSequenceValue);
    }
  }
  return new_sequence;
};

/*
 * @method numToString
 * @param {Array} num list of number to convert to string
 * @return {String} converted string
 */
Rann.numToString = function numToString(num) {
  let supported = Rann.ascii();
  let ans = '';
  for (let i = 0; i < num.length; i++) {
    let letter = Math.floor(num[i] * supported.length);
    ans += supported[letter];
  }
  return ans;
};

/**
 * Set the activation function of the shared hidden layer.
 * @method setActivation
 * @param {String} act The name of the activation function
 * <table>
 * <thead>
 *   <tr>
 *     <th>Name</th>
 *     <th>Desmos</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *     <td>Sigmoid</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/so8eiigug4">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>leakyReLU</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/pxqqqxd3tz">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>reLU</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/jdb8dfof6x">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>siLU</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/f4nhtck5dr">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>tanH</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/eai4bialus">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>binary</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/zq8s1ixyp8">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>softsign</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/vmuhohc3da">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>sinc</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/6u4ioz8lhs">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>softplus</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/aegpfcyniu">See graph</a></td>
 *   </tr>
 * </tbody>
 * </table>
 * <br/>
 * See how to add more <a href="./Add.html#method_activation">Here</a>
 * @example
 * <code>
 * const rnn = new Rann(3, 20, 3);
 * rnn.setActivation('tanH');
 * rnn.log();
 * </code>
 */
Rann.prototype.setActivation = function setActivation(act) {
  if (activations[act] === undefined && !isBrowser) {
    if (typeof act === 'string') {
      DannError.error(
        "'" +
          act +
          "' is not a valid activation function, as a result, the activation function is set to 'sigmoid' by default.",
        'Rann.prototype.setActivation'
      );
      return;
    } else {
      DannError.error(
        "Did not detect a string value, as a result, the activation function is set to 'sigmoid' by default.",
        'Rann.prototype.setActivation'
      );
      return;
    }
  }
  this.actname = act;
  let funcData = Layer.stringTofunc(this.actname);
  this.actfunc = funcData['func'];
  this.actfunc_d = funcData['func_d'];
};

/**
 * Set the loss function of a Rann model
 * @method setLossFunction
 * @param {String} name Takes a string of the loss function's name. If this function is not called, the loss function will be set to 'mse' by default. See available loss functions <a target="_blank" href="dannjs.org">Here</a>.
 * <table>
 * <thead>
 *   <tr>
 *     <th>Name</th>
 *     <th>Desmos</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *     <td>mse</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/msg3bebyhe">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>mae</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/sqyudacjzb">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>lcl</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/ropuc3y6sa">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>mbe</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/xzp1hr0vin">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>mael</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/dimqieesut">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>rmse</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/x7efwdfada">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>mce</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/bzlqe7bafx">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>bce</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/ri1bj9gw4l">See graph</a></td>
 *   </tr>
 * </tbody>
 * </table>
 * <br/>
 * See how to add more <a class="hyperlink" href="./Add.html#method_loss">Here</a>
 * @example
 * <code>
 * const rnn = new Rann(4, 21, 4);
 * rnn.setLossFunction('mael');
 * rnn.log();
 * </code>
 */
Rann.prototype.setLossFunction = function setLossFunction(name) {
  if (lossfuncs[name] === undefined) {
    if (typeof name === 'string') {
      DannError.error(
        "'" +
          name +
          "' is not a valid loss function, as a result, the model's loss function is set to 'mse' by default.",
        'Rann.prototype.setLossFunction'
      );
      return;
    } else {
      DannError.error(
        "Did not detect string value, as a result, the loss function is set to 'mse' by default.",
        'Rann.prototype.setLossFunction'
      );
      return;
    }
  }
  this.lossfunc_s = name;
  this.lossfunc = lossfuncs[name];
};

/*
 * Undisplayed documentation
 * Convert a string to an array of values.
 * @param {String} str The string to convert to an array of values.
 * @returns
 */
Rann.stringToNum = function stringToNum(str) {
  let supported = Rann.ascii();
  let letters = str.split('');
  let numbers = [];
  for (letter of letters) {
    let ascii_value = supported.indexOf(letter);
    let value = (ascii_value + 1) / (supported.length + 1);
    numbers.push(value);
  }
  return numbers;
};

Rann.ascii = function ascii() {
  return ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
};

Rann.prototype.toJSON = function toJSON() {
  // Meta
  let strarch = JSON.stringify(this.arch);

  // Weights
  let wstrU = JSON.stringify(this.U.matrix);
  let wstrV = JSON.stringify(this.V.matrix);
  let wstrW = JSON.stringify(this.W.matrix);

  // Gradients
  let gstrU = JSON.stringify(this.dU.matrix);
  let gstrV = JSON.stringify(this.dV.matrix);
  let gstrW = JSON.stringify(this.dW.matrix);

  let gstrUt = JSON.stringify(this.dU_t.matrix);
  let gstrVt = JSON.stringify(this.dV_t.matrix);
  let gstrWt = JSON.stringify(this.dW_t.matrix);

  let gstrUi = JSON.stringify(this.dU_i.matrix);
  let gstrWi = JSON.stringify(this.dW_i.matrix);

  // Layers
  let strlayers = JSON.stringify(this.layers);

  return {
    i: this.i,
    h: this.h,
    o: this.o,
    act: this.actname,
    act_o: this.o_actname,
    lsv: this.largestSequenceValue,
    trun: this.truncate,
    loss: this.loss,
    e: this.epoch,
    lf: this.lossfunc_s,
    lr: this.lr,
    arch: strarch,
    layers: strlayers,
    U: wstrU,
    V: wstrV,
    W: wstrW,
    dU: gstrU,
    dV: gstrV,
    dW: gstrW,
    dU_t: gstrUt,
    dV_t: gstrVt,
    dW_t: gstrWt,
    dU_i: gstrUi,
    dW_i: gstrWi,
  };
};

/**
 * Train a Rann model according to sequence data.
 * @method train
 * @param {Array} input An array of sequences.
 * @param {Object} [options] Object including specific properties.
 * <table>
 * <thead>
 * <tr>
 * <th>Property</th>
 * <th>Type</th>
 * <th>Function</th>
 * </tr>
 * </thead>
 * <tbody>
 * <tr>
 * <td>log</td>
 * <td>Boolean</td>
 * <td>If set to true, the loss value is going to be logged in the console.</td>
 * </tr>
 * <tr>
 * <td>normalize</td>
 * <td>Boolean</td>
 * <td>If set to true, input values will be normalized. You also need to feed the neural network with this option on.</td>
 * </tr>
 * </tbody>
 * </table>
 * @example
 * <code>
 * const rnn = new Rann(2, 10, 2);
 * for (let i = 0; i < 10000; i++) {
 *  rnn.train([
 *    [1, 2],
 *    [3, 4],
 *    [5, 6],
 *    [7, 8]
 *  ], {
 *    normalize: true
 *  });
 * }
 * rnn.feed([
 *  [1, 2],
 *  [3, 4]
 * ], {
 *    normalize: true
 * });
 * // Outputs close to [5, 6]
 * </code>
 */
Rann.prototype.train = function train(input, options) {
  let normalize = false;
  let logloss = false;
  if (options !== undefined) {
    if (options.normalize !== undefined) {
      normalize = options.normalize;
    }
    if (options.log !== undefined) {
      logloss = options.log;
    }
  }
  if (normalize) {
    // Normalize input
    input = this.normalizeSequence(input, true);
  }
  if (this.validateSequences(input)) {
    let length = input.length - 1;
    for (let i = 0; i < length; i++) {
      let target = input.splice(input.length - 1, 1);
      this.trainSequence(input, target[0]);
    }
    if (logloss) {
      console.log('Loss: ', this.loss);
    }
  } else {
    DannError.error(
      'Input sequences length must equal the number of input neurons the Rann model has',
      'Rann.prototype.train'
    );
    return undefined;
  }
};

/*
 * Undisplayed documentation.
 * Train a Rann model according to sequence data.
 * @method trainSequence
 * @param {Array} input An array of sequences.
 * @param {Array} target An expected output sequence
 * @example
 * <code>
 * const rnn = new Rann(2, 10, 2);
 * rnn.train([
 *  [1, 2],
 *  [3, 4],
 *  [5, 6]
 * ],
 * [7, 8]
 * );
 * </code>
 */
Rann.prototype.trainSequence = function trainSequence(input, target) {
  if (this.validateSequences(input)) {
    let y = Matrix.fromArray(target);
    let sequence;
    let input_s;
    for (let d = 0; d < input.length; d++) {
      this.previous = new Matrix(this.h, 1);

      input_s = input[d];
      sequence = input_s.length;

      this.layers = [];

      this.dU = new Matrix(this.h, this.i);
      this.dV = new Matrix(this.o, this.h);
      this.dW = new Matrix(this.h, this.h);

      this.dU_t = new Matrix(this.h, this.i);
      this.dV_t = new Matrix(this.o, this.h);
      this.dW_t = new Matrix(this.h, this.h);

      this.dU_i = new Matrix(this.h, this.i);
      this.dW_i = new Matrix(this.h, this.h);

      for (let t = 0; t < sequence; t++) {
        // New input for sequence
        new_input = new Matrix(sequence, 1);
        new_input.matrix[t][0] = input_s[t];

        // Mult input to hidden
        this.mulu = Matrix.mult(this.U, new_input);

        // Mult previous hidden to current hidden
        this.mulw = Matrix.mult(this.W, this.previous);

        // Add two matrices as a grid
        let sum = Matrix.add(this.mulw, this.mulu);
        this.sum = sum;
        // Map to activation function
        let mapped = Matrix.map(sum, this.actfunc);

        this.mulv = Matrix.mult(this.V, mapped);
        this.layers.push({ current: mapped, previous: this.previous });
        this.previous = mapped;
      }
      // Error difference
      this.dmulv = Matrix.sub(this.mulv, y);
      this.loss = this.lossfunc(Matrix.toArray(this.mulv), target);
    }
    for (let t = 0; t < sequence; t++) {
      // Derivative of V
      this.dV_t = Matrix.mult(
        this.dmulv,
        Matrix.transpose(this.layers[t]['current'])
      );
      // Derivative of mulv
      let dsv = Matrix.mult(Matrix.transpose(this.V), this.dmulv);
      // Copy previous forward sums
      let sum = this.sum;
      let sum_ = this.sum;
      // Create all 1 matrix
      let submatrix = new Matrix(sum.rows, sum.cols);
      submatrix.initiate(1);

      // Find dadd
      let sumsub = Matrix.sub(submatrix, sum_);
      let summult = sum.mult(dsv);
      let dadd = sumsub.mult(summult);

      // Derivative of mulw
      let ones_mulw = new Matrix(this.mulw.rows, this.mulw.cols);
      ones_mulw.initiate(1);
      this.dmulw = dadd.mult(ones_mulw);
      let max_ = Math.max(-1, t - this.truncate - 1);

      for (let i = t - 1; i > max_; i -= 1) {
        // Derivative of mulu
        let ones_mulu = new Matrix(this.mulu.rows, this.mulu.cols);
        ones_mulu.initiate(1);
        this.dmulu = dadd.mult(ones_mulu);

        this.dW_i = Matrix.mult(this.W, this.layers[t]['previous']);

        let new_input = new Matrix(sequence, 1);
        new_input.matrix[t][0] = input_s[t];

        this.dU_i = Matrix.mult(this.U, new_input);

        this.dU_t = Matrix.addColumn(this.dU_t, this.dU_i);
        this.dW_t = Matrix.addColumn(this.dW_t, this.dW_i);
      }
      this.dV.add(this.dV_t);
      this.dU.add(this.dU_t);
      this.dW.add(this.dW_t);
    }

    this.clipGradients(-10, 10);

    this.U.sub(this.dU.mult(this.lr));
    this.V.sub(this.dV.mult(this.lr));
    this.W.sub(this.dW.mult(this.lr));

    return undefined;
  } else {
    DannError.error(
      'Input sequences length must equal the number of input neurons the Rann model has',
      'Rann.prototype.trainSequence'
    );
  }
};

Rann.prototype.unNormalizeSequence = function unNormalizeSequence(sequence) {
  // Normalize sequence
  let new_sequence = [];
  for (let i = 0; i < sequence.length; i++) {
    new_sequence[i] = [];
    for (let j = 0; j < sequence[0].length; j++) {
      new_sequence[i].push(sequence[i][j] * this.largestSequenceValue);
    }
  }
  return new_sequence;
};

//Node Module Exports:
if (!isBrowser) {
  module.exports = {
    dann: Dann,
    rann: Rann,
    layer: Layer,
    matrix: Matrix,
    activations: activations,
    lossfuncs: lossfuncs,
    poolfuncs: poolfuncs,
    xor: XOR,
    makeXOR: makeXOR,
    makeBinary: makeBinary,
    add: Add,
  };
}
