/*! Dann.js */
const isBrowser = typeof process !== 'object';
const VERSION = 'v2.4.0';

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

/*
 * Activation functions
 */
let activations = {
  // Basic
  sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
  },
  sigmoid_d(x) {
    let x1 = 1 / (1 + Math.exp(-x));
    return x1 * (1 - x1);
  },
  siLU(x) {
    return x / (1 + Math.exp(-x));
  },
  siLU_d(x) {
    let top = 1 + Math.exp(-x) + x * Math.exp(-x);
    let down = Math.pow(1 + Math.exp(-x), 2);
    return top / down;
  },
  tanH(x) {
    let top = Math.exp(x) - Math.exp(-x);
    let down = Math.exp(x) + Math.exp(-x);
    return top / down;
  },
  tanH_d(x) {
    let numer = Math.pow(Math.exp(2 * x) - 1, 2);
    let denom = Math.pow(Math.exp(2 * x) + 1, 2);
    return 1 - numer / denom;
  },
  leakyReLU(x) {
    return Math.max(x, x * 0.01);
  },
  leakyReLU_d(x) {
    if (x >= 0) {
      return 1;
    } else {
      return 0.01;
    }
  },
  reLU(x) {
    return Math.max(x, 0);
  },
  reLU_d(x) {
    if (x >= 0) {
      return 1;
    } else {
      return 0;
    }
  },
  sinc(x) {
    if (x === 0) {
      return 1;
    } else {
      return Math.sin(x) / x;
    }
  },
  sinc_d(x) {
    if (x === 0) {
      return 0;
    } else {
      return Math.cos(x) / x - Math.sin(x) / (x * x);
    }
  },
  softsign(x) {
    return x / (1 + Math.abs(x));
  },
  softsign_d(x) {
    let down = 1 + Math.abs(x);
    return 1 / (down * down);
  },
  binary(x) {
    if (x <= 0) {
      return 0;
    } else {
      return 1;
    }
  },
  binary_d(x) {
    return 0;
  },
  softplus(x) {
    return Math.log(1 + Math.exp(x));
  },
  softplus_d(x) {
    return this.sigmoid(x);
  },
  // Experimental
  leakyReLUCapped(x) {
    if (x >= 0 && x <= 6) {
      return x;
    } else if (x < 0) {
      return 0.1 * x;
    } else {
      return 6;
    }
  },
  leakyReLUCapped_d(x) {
    if (x >= 0 && x <= 6) {
      return 1;
    } else if (x < 0) {
      return 0.1;
    } else {
      return 0;
    }
  },
  leakySigmoid(x) {
    return 1 / (1 + Math.exp(-x)) + x / 100;
  },
  leakySigmoid_d(x) {
    let x1 = leakySigmoid(x);
    return x1 * (1 - x1);
  },
};

/*
 * Loss functions
 */
let lossfuncs = {
  mae(predictions, target) {
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
  },
  bce(predictions, target) {
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
  },
  lcl(predictions, target) {
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
  },
  mbe(predictions, target) {
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
  },
  mael(predictions, target) {
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
  },
  rmse(predictions, target) {
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
  },
  mce(predictions, target) {
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
  },
  mse(predictions, target) {
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
  },
  quantile(predictions, target, percentile) {
    let q = percentile;
    let sum = 0;
    for (let i = 0; i < target.length; i++) {
      if (target[i] - predictions[i] >= 0) {
        sum += q * (target[i] - predictions[i]);
      } else {
        sum += (q - 1) * (target[i] - predictions[i]);
      }
    }
    return sum / target.length;
  },
};

/*
 * Mathjs wrapper
 */
const random = (a, b) => Math.random(1) * (b - a) + a;
const exp = (x) => Math.exp(x);
const abs = (x) => Math.abs(x);
const log = (x) => Math.log(x);
const pow = (x, e) => Math.pow(x, e);
const round = (x) => Math.round(x);
const sqrt = (x) => Math.sqrt(x);
const cosh = (x) => (exp(x) + exp(-x)) / 2;

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

/**
 * Matrix component.
 * @class Matrix
 * @for Matrix
 * @constructor
 * @param {Number} rows the number of rows.
 * @param {Number} cols the number of columns.
 * @example
 * <code>
 * const { Matrix } = require('dannjs');
 * </code>
 * <code>
 * const m = new Matrix(3,4);
 * m.log();
 * </code>
 */
Matrix = function Matrix(rows = 0, cols = 0) {
  this.rows = rows;
  this.cols = cols;
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
 * Fill a culmn of a matrix with a value.
 * @method fillCol
 * @param {Number} col The column to fill
 * @param {Number} num The value to fill the column with
 * @chainable
 * @example
 * <code>
 * let m = new Matrix(3, 4);
 * // Fill column 3 with values of 100
 * m.fillCol(3, 100);
 * </code>
 */
Matrix.prototype.fillCol = function fillCol(col, num) {
  if (col >= this.cols) {
    DannError.error(
      'The column index specified is too large for this matrix.',
      'Matrix.prototype.fillCol'
    );
    return;
  }
  for (let i = 0; i < this.rows; i++) {
    this.matrix[i][col] = num;
  }
  return this;
};

/**
 * Fill a specific row in a matrix.
 * @method fillRow
 *
 * @param {Number} row The row index to fill
 * @param {Number} num The value to fill the row with
 * @chainable
 * @example
 * <code>
 * let m = new Matrix(3, 4);
 * // Fill row 2 with values of 100
 * m.fillRow(2, 100);
 * </code>
 */
Matrix.prototype.fillRow = function fillRow(row, num) {
  if (row >= this.rows) {
    DannError.error(
      'The row index specified is too large for this matrix.',
      'Matrix.prototype.fillRow'
    );
    return;
  }
  this.matrix[row].fill(num);
  return this;
};

/**
 * Convert an Array into a Matrix Object
 * @method fromArray
 * @static
 * @param {Array} array The array to convert into a Matrix.
 * @return {Matrix} 1 row, n col Matrix Object
 * @example
 * <code>
 * let a = [1, 0, 1, 1];
 * let m = Matrix.fromArray(a);
 * m.log();
 * </code>
 */
Matrix.fromArray = function fromArray(array) {
  let m = new Matrix(array.length, 1);
  for (let i = 0; i < array.length; i++) {
    m.matrix[i][0] = array[i];
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
Matrix.prototype.log = function log(
  options = {
    table: false,
    decimals: undefined,
  }
) {
  // Copy matrix
  let m = new Matrix(this.rows, this.cols);
  m.set(this.matrix);

  // round the values
  if (options.decimals !== undefined) {
    let dec = 1000;
    if (options.decimals > 21) {
      DannError.warn(
        'Maximum number of decimals is 21.',
        'Matrix.prototype.log'
      );
      dec = pow(10, 21);
    } else {
      dec = pow(10, options.decimals) || dec;
    }
    m.map((x) => round(x * dec) / dec);
  }

  // Log
  if (options.table) {
    console.table(m.matrix);
  } else {
    console.log(m);
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
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      let v = this.matrix[i][j];
      this.matrix[i][j] = f(v);
    }
  }
  return this;
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
    for (let i = 0; i < m.rows; i++) {
      for (let j = 0; j < m.cols; j++) {
        let v = m.matrix[i][j];
        m.matrix[i][j] = f(v);
      }
    }
    return m;
  } else {
    DannError.error(
      'First argument must be an instance of Matrix',
      'Matrix.map'
    );
    return;
  }
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
    this.rows = matrix.length;
    this.cols = matrix[0].length;

    for (let i = 0; i < this.rows; i++) {
      this.matrix[i] = [...matrix[i]];
    }
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
    DannError.error('The arguments should be p5.MatrixTensors', 'Matrix.sub');
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
 * Downsampling layer component
 * @class Layer
 * @for Layer
 * @constructor
 * @param {String} type A string representing the type of this layer.
 * @param {Number} Size The size of the downsampling layer.
 * @param {Number} Sample The size of the 2d sample iterating trough the array.
 * @param {Number} Stride The number of jumps the sample is going to perform for each iteration.
 * @example
 * <code>
 * const { Layer } = require('dannjs');
 * </code>
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
      DannError.error(
        'the width & height value specified to arrange the inputted array as a matrix are not valid. (The array length must be divisible by the width & height values.)',
        'Layer.constructor'
      );
      return;
    }
    if (this.size !== Math.floor(this.size)) {
      DannError.error(
        "the Width must be divisible by the stride (jumps size). Width is the root of the array's length.",
        'Layer.constructor'
      );
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
 * @module Dann
 * @submodule Create
 */
/**
 * Deep Neural Network component. Can be trained with data or by neuro-evolution.
 * @class Dann
 * @constructor
 * @method constructor
 * @param {Number} [input] the number of input neurons.
 * @param {Number} [output] the number of output neurons.
 * @example
 * <code>
 * const { Dann } = require('dannjs');
 * </code>
 * <code>
 * // 784 input, 2 output model
 * const nn = new Dann(784, 2);
 * nn.log();
 * </code>
 */
Dann = function Dann(i = 1, o = 1) {
  this.i = i;
  this.inputs = new Layer('input', i);

  this.o = o;
  this.outputs = new Layer('output', o, 'sigmoid');

  this.Layers = [this.inputs, this.outputs];
  this.weights = [];
  this.biases = [];
  this.errors = [];
  this.gradients = [];
  this.dropout = [];

  this.outs = [];
  this.loss = 0;
  this.losses = [];
  this.lr = 0.001;
  this.arch = [i, o];

  this.epoch = 0;
  this.recordLoss = false;

  this.lossfunc = lossfuncs.mse;
  this.lossfunc_s = this.lossfunc.name;
  this.percentile = 0.5;
};

Dann.asLabel = function asLabel(array) {
  return array.indexOf(Math.max(...array));
};

Dann.logDefaults = function logDefaults() {
  return {
    struct: true,
    misc: true,
    weights: false,
    gradients: false,
    errors: false,
    layers: false,
    table: false,
    decimals: undefined,
    details: false,
  };
};

Dann.ffwDefaults = function ffwDefaults() {
  return {
    log: false,
    table: false,
    decimals: undefined,
    asLabel: false,
  };
};

Dann.bckDefaults = function bckDefaults() {
  return {
    log: false,
    mode: 'cpu',
    saveLoss: false,
    table: false,
    dropout: undefined,
  };
};

Dann.print = function print(v, option = false) {
  if (option) {
    console.table(v);
  } else {
    console.log(v);
  }
};

Dann.prototype.checkArrayLength = function checkArrayLength(arr, n) {
  if (arr.length === n) {
    return true;
  } else {
    return false;
  }
};

Dann.prototype.checkLearningRate = function checkLearningRate() {
  if (typeof this.lr !== 'number') {
    DannError.error(
      'The learning rate specified (Dann.lr property) is not a number.',
      'Dann.prototype.backpropagate'
    );
    return false;
  } else {
    if (this.lr >= 1) {
      DannError.error(
        'The learning rate specified is greater or equal to 1',
        'Dann.prototype.backpropagate'
      );
      return false;
    }
  }
  return true;
};

Dann.prototype.checkDropoutRate = function (dropout) {
  if (dropout >= 1) {
    DannError.error(
      'The probability value can not be bigger or equal to 1',
      'Dann.prototype.backpropagate'
    );
    return false;
  } else if (dropout <= 0) {
    DannError.error(
      'The probability value can not be smaller or equal to 0',
      'Dann.prototype.backpropagate'
    );
    return false;
  }
  return true;
};

/*
 * Undisplayed documentation
 * Creates dropout matrices
 * @method addDropout
 * @param {Number} rate The probability of a neuron being idle during the backwards pass, preventing it from learning during this pass. A number ranging in between 0 and 1.
 */
Dann.prototype.addDropout = function addDropout(rate) {
  // if weights do not exist, cancel.
  if (this.weights.length === 0) {
    DannError.error(
      'You need to initialize weights before using this function, use Dann.prototype.makeWeights();',
      'Dann.prototype.addDropout'
    );
    return;
  }

  // Set the map function argument 'rate'
  let func = ((v) => {
    let a = 1 - rate;
    return Math.floor(Math.random() + a);
  })
    .toString()
    .replace(/rate/gm, rate);
  let randomMap = eval(func);

  // Determine randomly based on the rate which neuron is inactive
  let inactive = [];
  for (let i = 0; i < this.Layers.length; i++) {
    let neuronList = new Array(this.Layers[i].size).fill(1).map(randomMap);
    inactive.push(neuronList);
  }

  // Create the dropout matrices, which are the same dimensions as a weight matrix
  this.dropout = [];
  for (let i = 0; i < this.weights.length; i++) {
    this.dropout.push(
      new Matrix(this.weights[i].rows, this.weights[i].cols).initiate(1)
    );
  }

  // Iterate through dropout matrices and add a 0 value to every row or column affected by an idle neuron
  for (let i = 0; i < inactive.length; i++) {
    if (i === 0) {
      // Input layer, affects the matrix in front of the layer.
      for (let j = 0; j < inactive[i].length; j++) {
        if (inactive[i][j] === 0) {
          this.dropout[i].fillCol(j, 0);
        }
      }
    } else if (i === inactive.length - 1) {
      // Output layers, affects the matrix before the layer.
      for (let j = 0; j < inactive[i].length; j++) {
        if (inactive[i][j] === 0) {
          this.dropout[i - 1].fillRow(j, 0);
        }
      }
    } else {
      // Hidden layers, affects two matrices.
      for (let j = 0; j < inactive[i].length; j++) {
        if (inactive[i][j] === 0) {
          this.dropout[i - 1].fillRow(j, 0);
          this.dropout[i].fillCol(j, 0);
        }
      }
    }
  }
};

/**
 * @module Dann
 * @submodule Create
 */
/**
 * Add a Hidden Neuron Layer to a Dann neural network.
 * @method addHiddenLayer
 * @param {Number} size Layer size, the number of neurons in the layer.
 * @param {String} [act] Takes a string of the activation function's name. If left empty, the activation function will be set to 'sigmoid' by default. See available activation functions below.
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
 * <a href="./Add.html#method_activation"><p>See how to add more </p></a>
 * @example
 * <code>
 * const nn = new Dann(10, 2);
 * //Add a layer
 * nn.addHiddenLayer(8, 'sigmoid');
 * //console log
 * console.log('Added first hidden layer: ');
 * nn.log({struct:true});
 * //Add a layer
 * nn.addHiddenLayer(4, 'tanH');
 * //console log
 * console.log('Added a second hidden layer: ');
 * nn.log({struct:true});
 * </code>
 */
Dann.prototype.addHiddenLayer = function addHiddenLayer(size, act) {
  if (act !== undefined) {
    if (activations[act] === undefined) {
      if (typeof act === 'string') {
        DannError.error(
          "'" +
            act +
            "' is not a valid activation function, as a result, the activation function was set to 'sigmoid'.",
          'Dann.prototype.addHiddenLayer'
        );
      }
      act = 'sigmoid';
    }
  } else {
    act = 'sigmoid';
  }
  this.arch.splice(this.arch.length - 1, 0, size);
  let layer = new Layer('hidden', size, act);
  this.Layers.splice(this.Layers.length - 1, 0, layer);
};

/**
 * @module Dann
 * @submodule Create
 */
/**
 * Creates the weights. This function should be called after all the hidden layers were added. The optional parameters determine the range in which starting weights are going to be set randomly. If no arguments are specified, weights are going to be set in between -1 and 1.
 * @method makeWeights
 * @param {Number} [arg1] The minimum range value.
 * @param {Number} [arg2] The maximum range value.
 * @example
 * <code>
 * const nn = new Dann(2, 2);
 * // initiate the Weights
 * nn.makeWeights();
 * // log weights
 * nn.log({weights:true, table:true});
 * // add a layer & re-initiate weights in a range of (-0.1, 0.1)
 * nn.addHiddenLayer(4, 'sigmoid');
 * nn.makeWeights(-0.1, 0.1);
 * // log weights
 * console.log('New re-initiated weights:');
 * nn.log({weights:true, table:true});
 * </code>
 */
Dann.prototype.makeWeights = function makeWeights(arg1, arg2) {
  let min = -1;
  let max = 1;
  if (arg1 !== undefined && arg2 !== undefined) {
    min = arg1;
    max = arg2;
  }
  for (let i = 0; i < this.Layers.length - 1; i++) {
    let previousLayerObj = this.Layers[i];
    let layerObj = this.Layers[i + 1];

    let weights = new Matrix(layerObj.layer.rows, previousLayerObj.layer.rows);
    let biases = new Matrix(layerObj.layer.rows, 1);

    weights.randomize(min, max);
    biases.randomize(1, -1);
    this.weights[i] = weights;
    this.biases[i] = biases;

    this.errors[i] = new Matrix(layerObj.layer.rows, 1);
    this.gradients[i] = new Matrix(layerObj.layer.rows, 1);

    if (layerObj.actfunc === undefined) {
      layerObj.setFunc('sigmoid');
    }
  }
  for (let i = 0; i < this.Layers.length; i++) {
    let layerObj = this.Layers[i];
    this.arch[i] = layerObj.layer.rows;
  }
};

/**
 * @module Dann
 * @submodule Create
 */
/**
 * Sets the activation function of the output.
 * @method outputActivation
 * @param {String} act Takes a string of the activation function's name. If this function is not called, the activation function will be set to 'sigmoid' by default. See available activation functions <a target="_blank" href="https://dannjs.org">here</a>.
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
 * <a href="./Add.html#method_activation"><p>See how to add more </p></a>
 * @example
 * <code>
 * const nn = new Dann(4, 2);
 * nn.addHiddenLayer(8, 'sigmoid');
 * nn.makeWeights();
 * console.log('Before changing the output activation');
 * nn.log({struct:true});
 * nn.outputActivation('tanH');
 * console.log('After changing the output activation');
 * nn.log({struct:true});
 * </code>
 */
Dann.prototype.outputActivation = function outputActivation(act) {
  if (activations[act] === undefined && !isBrowser) {
    if (typeof act === 'string') {
      DannError.error(
        "'" +
          act +
          "' is not a valid activation function, as a result, the activation function is set to 'sigmoid' by default.",
        'Dann.prototype.outputActivation'
      );
      return;
    } else {
      DannError.error(
        "Did not detect a string value, as a result, the activation function is set to 'sigmoid' by default.",
        'Dann.prototype.outputActivation'
      );
      return;
    }
  }
  this.Layers[this.Layers.length - 1].setFunc(act);
};

/**
 * @module Dann
 * @submodule Create
 */
/**
 * Set the loss function of a Dann model
 * @method setLossFunction
 * @param {String} name Takes a string of the loss function's name. If this function is not called, the loss function will be set to 'mse' by default. See available loss functions <a target="_blank" href="dannjs.org">Here</a>.
 * @param {Number} [percentile] Some loss functions like the Quantile loss will need a percentile value. Ranges between 0 and 1.
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
 *   <tr>
 *     <td>quantile</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/7rsvaivrat">See graph</a></td>
 *   </tr>
 * </tbody>
 * </table>
 * <a href="./Add.html#method_loss"><p>See how to add more </p></a>
 * @example
 * <code>
 * const nn = new Dann(4, 2);
 * nn.addHiddenLayer(8, 'sigmoid');
 * nn.makeWeights();
 * //Before changing the loss function
 * console.log(nn.lossfunc);
 * nn.setLossFunction('mael');
 * //After changing the loss function
 * console.log(nn.lossfunc);
 * </code>
 * @example
 * <code>
 * const nn = new Dann(4, 4);
 * nn.addHiddenLayer(16, 'sigmoid');
 * nn.makeWeights();
 * //Before changing the loss function
 * console.log(nn.lossfunc);
 * // Quantile loss with 40 percentile
 * nn.setLossFunction('quantile', 0.4);
 * //After changing the loss function
 * console.log(nn.lossfunc);
 * </code>
 */
Dann.prototype.setLossFunction = function setLossFunction(
  name,
  percentile = 0.5
) {
  this.percentile = percentile;
  let func = lossfuncs[name];
  if (func === undefined) {
    if (typeof name === 'string') {
      DannError.error(
        "'" +
          name +
          "' is not a valid loss function, as a result, the model's loss function is set to 'mse' by default.",
        'Dann.prototype.setLossFunction'
      );
      return;
    } else {
      DannError.error(
        "Did not detect string value, as a result, the loss function is set to 'mse' by default.",
        'Dann.prototype.setLossFunction'
      );
      return;
    }
  }
  this.lossfunc_s = name;
  this.lossfunc = func;
};

/**
 * @module Dann
 * @submodule Interact
 */
/**
 * Feed data through the model to obtain an output or prediction.
 * @method feedForward
 * @param {Array} inputs Array of input data.
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
 * <td>asLabel</td>
 * <td>Boolean</td>
 * <td>If set to true, the function will output the index of the neuron with the highest value.</td>
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
 * </tbody>
 * </table>
 *
 * @return {Array} Array of output predictions.
 * @example
 * <code>
 * const nn = new Dann(4, 2);
 * nn.makeWeights();
 * let prediction = nn.feedForward([0,0,0,1], {log:true});
 * //outputs an array of length 2
 * console.log(prediction);
 * </code>
 */

Dann.prototype.feedForward = function feedForward(
  inputs,
  options = Dann.ffwDefaults()
) {
  // Convert decimals to a scalar value
  let roundData = options.decimals !== undefined ? true : false;
  let dec = pow(10, options.decimals) || 1000;

  // Abort if input length is not the same as specified input.
  if (this.checkArrayLength(inputs, this.i)) {
    this.Layers[0].layer = Matrix.fromArray(inputs);
  } else {
    DannError.error(
      `The input array length does not match the number of inputs the dannjs model has.`,
      'Dann.prototype.feedForward'
    );
    return;
  }

  // Create weights matrices if they were not initiated & throw a warning
  if (this.checkArrayLength(this.weights, 0)) {
    DannError.warn(
      'The weights were not initiated. Please use the Dann.makeWeights(); function after the initialization of the layers.',
      'Dann.prototype.feedForward'
    );
    this.makeWeights();
  }

  // Forward propagation
  for (let i = 0; i < this.weights.length; i++) {
    let pLayer = this.Layers[i];

    let layerObj = this.Layers[i + 1];

    layerObj.layer = Matrix.mult(this.weights[i], pLayer.layer);
    layerObj.layer.add(this.biases[i]);
    layerObj.layer.map(layerObj.actfunc);
  }
  // Untransformed output
  this.outs = Matrix.toArray(this.Layers[this.Layers.length - 1].layer);

  // Output transformations
  let out = this.outs;
  if (roundData && options.asLabel) {
    DannError.warn(
      'Cannot round if output is a label',
      'Dann.prototype.feedForward'
    );
  } else if (options.asLabel) {
    out = Dann.asLabel(out);
  } else if (roundData && !options.asLabel) {
    out = out.map((x) => round(x * dec) / dec);
  }

  // Optional logs
  if (options.log === true) {
    Dann.print('Prediction: ');
    Dann.print(out, options.table);
  }
  return out;
};
// Alias
Dann.prototype.feed = function feed() {
  return this.feedForward.apply(this, arguments);
};

/**
 * @module Dann
 * @submodule Interact
 */
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
 * <td>decimals</td>
 * <td>integer</td>
 * <td>The number of decimals the logged data is going to have. It is set to 3 by default.</td>
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
 * <td>biases</td>
 * <td>Boolean</td>
 * <td>If this is set to true, the the function will log the biases of the model.</td>
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
 * <td>errors</td>
 * <td>Boolean</td>
 * <td>If this is set to true, the the function will log the errors of the model.</td>
 * </tr>
 * <tr>
 * <td>misc</td>
 * <td>Boolean</td>
 * <td>If this is set to true, the the function will log the loss of the model, the learning rate of the model and the loss function.</td>
 * </tr>
 * </tbody>
 * </table>
 *
 * @example
 * <code>
 * const nn = new Dann(24, 2);
 * nn.log();
 * </code>
 */
Dann.prototype.log = function log(options = Dann.logDefaults()) {
  // Limit decimals to maximum of 21
  let decimals = 1000;
  if (options.decimals > 21) {
    DannError.error('Maximum number of decimals is 21.', 'Dann.prototype.log');
    decimals = pow(10, 21);
  } else {
    decimals = pow(10, options.decimals) || decimals;
  }

  // Details sets all values to true.
  if (options.details) {
    let v = options.details;
    options.gradients = v;
    options.weights = v;
    options.errors = v;
    options.biases = v;
    options.struct = v;
    options.misc = v;
    options.layers = v;
  }

  // Initiate weights if they weren't initiated allready.
  if (this.weights.length === 0) {
    this.makeWeights();
  }
  if (options.struct) {
    console.log('Dann Model:');
    console.log('Layers:');
    for (let i = 0; i < this.Layers.length; i++) {
      let layerObj = this.Layers[i];
      let str = `${layerObj.type} Layer:`;
      let afunc = '';
      if (i === 0) {
        str = 'input Layer:';
        afunc = '       ';
      } else if (i === this.Layers.length - 1) {
        str = 'output Layer:';
        afunc = `  (${layerObj.actname})`;
      } else {
        afunc = `  (${layerObj.actname})`;
      }
      let space = '  ';
      console.log(`\t${str}${space}${layerObj.size}${afunc}`);
      if (options.layers) {
        console.log(this.Layers[i]);
      }
    }
  }
  if (options.errors) {
    console.log('Errors:');
    for (let i = 0; i < this.errors.length; i++) {
      let e = this.errors[i];
      e.log({ decimals: options.decimals, table: options.table });
    }
  }
  if (options.gradients) {
    console.log('Gradients:');
    for (let i = 0; i < this.gradients.length; i++) {
      let g = this.gradients[i];
      g.log({ decimals: options.decimals, table: options.table });
    }
  }
  if (options.weights) {
    console.log('Weights:');
    for (let i = 0; i < this.weights.length; i++) {
      let w = this.weights[i];
      w.log({ decimals: options.decimals, table: options.table });
    }
  }
  if (options.biases) {
    console.log('Biases:');
    for (let i = 0; i < this.biases.length; i++) {
      let b = this.biases[i];
      b.log({ decimals: options.decimals, table: options.table });
    }
  }
  if (options.misc) {
    console.log('Other Values: ');

    console.log('\t' + `Learning rate: ${this.lr}`);
    console.log('\t' + `Loss Function: ${this.lossfunc_s}`);
    console.log('\t' + `Current Epoch: ${this.epoch}`);
    console.log('\t' + `Latest Loss: ${this.loss}`);
  }
  console.log('\n');
  return;
};

/**
 * @module Dann
 * @submodule Train
 */
/**
 * Backpropagate through a Dann model in order to train the weights.
 *
 * @method backpropagate
 * @param {Array} inputs Array of input data.
 * @param {Array} target Array of expected output.
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
 * <td>dropout</td>
 * <td>Number</td>
 * <td>A value ranging from 0 to 1 determining the chance of a neuron being idle during a backward pass.</td>
 * </tr>
 * </tbody>
 * </table>
 * @example
 * <code>
 * const nn = new Dann(2, 1);
 * nn.addHiddenLayer(8);
 * nn.makeWeights();
 * // Train 1000 epoch
 * for (let i = 0; i < 1000; i++) {
 *    nn.backpropagate([0,0],[0]);
 *    nn.backpropagate([1,0],[1]);
 *    nn.backpropagate([0,1],[1]);
 *    nn.backpropagate([1,1],[0]);
 * }
 * </code>
 */
Dann.prototype.backpropagate = function backpropagate(
  inputs,
  target,
  options = Dann.bckDefaults()
) {
  // Create expected target matrix if it has the same length as the output layer.
  let targets;
  if (this.checkArrayLength(target, this.o)) {
    targets = Matrix.fromArray(target);
  } else {
    DannError.error(
      `The target array length does not match the number of ouputs the dannjs model has.`,
      'Dann.prototype.backpropagate'
    );
    return;
  }

  // Stop if learning rate is not valid.
  if (!this.checkLearningRate()) {
    return;
  }

  // Create dropout matrices if they were specified
  if (options.dropout !== undefined) {
    // Check if valid or else abort
    if (this.checkDropoutRate(options.dropout)) {
      this.addDropout(options.dropout);
    } else {
      return;
    }
  }

  // Forward propagation
  this.outs = this.feedForward(inputs, { log: false, mode: options.mode });

  // Backwards propagation
  this.errors[this.errors.length - 1] = Matrix.sub(
    targets,
    this.Layers[this.Layers.length - 1].layer
  );
  this.gradients[this.gradients.length - 1] = Matrix.map(
    this.Layers[this.Layers.length - 1].layer,
    this.Layers[this.Layers.length - 1].actfunc_d
  )
    .mult(this.errors[this.errors.length - 1])
    .mult(this.lr);

  for (let i = this.weights.length - 1; i > 0; i--) {
    let weights_deltas = Matrix.mult(
      this.gradients[i],
      Matrix.transpose(this.Layers[i].layer)
    );

    if (options.dropout !== undefined) {
      weights_deltas = weights_deltas.mult(this.dropout[i]);
    }

    this.weights[i].add(weights_deltas);
    this.biases[i].add(this.gradients[i]);

    let weights_t = Matrix.transpose(this.weights[i]);
    this.errors[i - 1] = Matrix.mult(weights_t, this.errors[i]);
    this.gradients[i - 1] = Matrix.map(
      this.Layers[i].layer,
      this.Layers[i].actfunc_d
    )
      .mult(this.errors[i - 1])
      .mult(this.lr);
  }

  let i_t = Matrix.transpose(this.Layers[0].layer);
  let weights_deltas = Matrix.mult(this.gradients[0], i_t);

  if (options.dropout !== undefined) {
    weights_deltas = weights_deltas.mult(this.dropout[0]);
  }

  this.weights[0].add(weights_deltas);
  this.biases[0].add(this.gradients[0]);

  // Compute loss value
  this.loss = this.lossfunc(this.outs, target, this.percentile);
  if (options.saveLoss === true) {
    this.losses.push(this.loss);
  }

  // Optional logs
  if (options.log === true) {
    Dann.print('Prediction: ');
    Dann.print(this.outs, options.table);
    Dann.print('target: ');
    Dann.print(target, options.table);
    Dann.print(`Loss: ${this.loss}`);
  }
};
// Alias
Dann.prototype.train = function train() {
  return this.backpropagate.apply(this, arguments);
};

/**
 * @module Dann
 * @submodule Train
 */
/**
 * This method maps the weights of a Dann model. It is usefull for neuroevolution simulations where you would map the weights with an equation containing a random factor.
 * @method mapWeights
 * @param {Function} f the function to map the weights with.
 * @example
 * <code>
 * const nn = new Dann(2, 2);
 * nn.makeWeights(-1, 1);
 * nn.log({weights:true});
 * nn.mapWeights((x)=>{
 *   return (Math.random()*0.1)+x;
 * });
 * nn.log({weights:true})
 * </code>
 */
Dann.prototype.mapWeights = function mapWeights(f) {
  if (typeof f === 'function') {
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i].map(f);
    }
  } else {
    DannError.error('Argument must be a function', 'Dann.prototype.mapWeights');
  }
};

/**
 * @module Dann
 * @submodule Train
 */
/**
 * This function mutates the weights by taking a percentage of the weight & adding it to the weight. This is for Neuroevolution tasks.
 * @method mutateAdd
 * @param {Number} randomFactor Percentage to add to each weight. Generally in 0 and 1.
 * @example
 * <code>
 * const nn = new Dann(4, 2);
 * nn.makeWeights();
 * nn.log({weights:true, table:true})
 * // weights add 5% of themselves.
 * nn.mutateAdd(0.05);
 * nn.log({weights:true,table:true});
 * </code>
 */
Dann.prototype.mutateAdd = function mutateAdd(randomFactor) {
  if (typeof randomFactor !== 'number') {
    DannError.error(
      'randomFactor argument must be a number.',
      'Dann.prototype.mutateAdd'
    );
    return;
  } else {
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i].addPercent(randomFactor);
    }
  }
};

/**
 * @module Dann
 * @submodule Train
 */
/**
 * This function mutates each weights randomly. This is for Neuroevolution tasks.
 * @method mutateRandom
 * @param {Number} range This will multiply with a random number from -range to range and add to each weight.
 * @param {Number} [probability] The probability of a weight being affected by a random mutation. Ranging from 0 to 1. Setting this value to 1 would mutate all the model's weights.
 * @example
 * <code>
 * const nn = new Dann(4, 2);
 * nn.makeWeights();
 * nn.log({weights:true, table:true});
 * // adding (weight*random(-0.1, 0.1)) to 50% of the weights.
 * nn.mutateRandom(0.1, 0.5);
 * nn.log({weights:true, table:true});
 * </code>
 */
Dann.prototype.mutateRandom = function mutateRandom(range, probability) {
  if (typeof range !== 'number') {
    DannError.error(
      'Range argument must be a number.',
      'Dann.prototype.mutateRandom'
    );
    return;
  }
  if (probability !== undefined) {
    if (typeof probability !== 'number') {
      DannError.error(
        'Probability argument must be a number.',
        'Dann.prototype.mutateRandom'
      );
      return;
    }
  } else {
    probability = 1;
  }
  for (let i = 0; i < this.weights.length; i++) {
    this.weights[i].addRandom(range, probability);
  }
};

/**
 * @module Dann
 * @submodule Share
 */
/**
 * Creates a Dann model from a json object.
 * @method createFromJSON
 * @static
 * @param {Object} data model data json object, you can get this object from a yourmodel.toJSON(); See docs <a href="https://dannjs.org">here</a>.
 * @return {Dann} A Dann model.
 * @example
 * <code>
 * const nn = new Dann(24, 4);
 * nn.addHiddenLayer(12, 'sigmoid');
 * nn.makeWeights();
 * const modelData = nn.toJSON();
 * const newNN = Dann.createFromJSON(modelData);
 * newNN.log();
 * </code>
 */
Dann.createFromJSON = function createFromJSON(data) {
  const model = new Dann();
  model.fromJSON(data);
  return model;
};

/**
 * @module Dann
 * @submodule Share
 */
/**
 * Applies a json object to a Dann model.
 * @method fromJSON
 * @param {Object} data model data json object, you can get this object from a yourmodel.toJSON(); See docs <a href="https:/dannjs.org">here</a>.
 * @return {Dann} A Dann model.
 * @example
 * <code>
 * const nn = new Dann(24,4);
 * nn.addHiddenLayer(18,'tanH');
 * nn.addHiddenLayer(12,'sigmoid');
 * nn.makeWeights();
 * const modelData = nn.toJSON();
 * const newNN = new Dann();
 * newNN.fromJSON(modelData);
 * newNN.log();
 * </code>
 */
Dann.prototype.fromJSON = function fromJSON(data) {
  this.i = data.arch[0];
  this.inputs = new Matrix(this.i, 1);
  this.o = data.arch[data.arch.length - 1];
  this.outputs = new Matrix(this.o, 1);

  let slayers = JSON.parse(data.lstr);
  for (let i = 0; i < slayers.length; i++) {
    let layerdata = JSON.parse(slayers[i]);
    let layerObj = new Layer(layerdata.type, layerdata.size, layerdata.actname);
    this.Layers[i] = layerObj;
  }
  this.makeWeights();
  let sweights = JSON.parse(data.wstr);
  for (let i = 0; i < sweights.length; i++) {
    this.weights[i].set(JSON.parse(sweights[i]));
  }
  let sbiases = JSON.parse(data.bstr);
  for (let i = 0; i < sbiases.length; i++) {
    this.biases[i].set(JSON.parse(sbiases[i]));
  }
  let serrors = JSON.parse(data.estr);
  for (let i = 0; i < serrors.length; i++) {
    this.errors[i].set(JSON.parse(serrors[i]));
  }
  let sgradients = JSON.parse(data.gstr);
  for (let i = 0; i < sgradients.length; i++) {
    this.gradients[i].set(JSON.parse(sgradients[i]));
  }

  this.lossfunc_s = data.lf;
  if (isBrowser) {
    this.lossfunc = window[data.lf];
  } else {
    this.lossfunc = lossfuncs[data.lf];
  }
  this.outs = Matrix.toArray(this.Layers[this.Layers.length - 1].layer);
  this.loss = data.loss;
  this.losses = [];
  this.lr = data.lrate;
  this.arch = data.arch;
  this.epoch = data.e;
  this.percentile = data.per;
  return this;
};

/*
 * (Browser)
 * When this function is called, an input tag requesting a file appears on screen. When clicked, it opens a local file dialogue. Once the appropriate file is selected the dann data automatically uploads. The filename argument is not required for this version since the browser dialog takes care of it.
 * @method load
 * @deprecated Use fromJSON or createFromJSON, Removed in 2.2.6
 * @param {String} name The name of the variable that holds the dann model.
 * @param {String} arg2 The ID of the HTML element in which to place the input dom element. If left undefined, the input dom element is appended to the body element.
 * @param {Function} arg3 A function to be called when the model finished loading.
 */
/*
 * (Nodejs)
 * Load a previously saved json file from ./savedDanns/. If the network's architechture is not the same, it is going to overwrite the Dann object.
 * @method load
 * @deprecated Use fromJSON or createFromJSON, Removed in 2.2.6
 * @param {String} name The name of the saved directory that holds the dann model.
 * @param {Function} arg2 A function to be called when the model finished loading.
 */
// Dann.prototype.load = function load(name, arg2, arg3) {
//   if (isBrowser) {
//     upload(name, arg2, arg3);
//   } else {
//     let path = './savedDanns/' + name + '/dannData.json';
//     if (fs.existsSync(path)) {
//       let text = fs.readFileSync(path, 'utf8');
//       let xdata = JSON.parse(text);

//       let newNN = xdata;
//       this.applyToModel(newNN);
//       if (typeof arg2 === 'function') {
//         arg2(false);
//       } else {
//         let type = typeof arg2;
//         DannError.error(
//           "callback specified is not a function, the function recieved a '" +
//             type +
//             "' instead",
//           'Dann.prototype.load'
//         );
//         return;
//       }
//     } else {
//       if (typeof arg2 === 'function') {
//         arg2(true);
//       } else if (typeof arg2 !== 'function') {
//         let type = typeof arg2;
//         DannError.error(
//           'Callback specified is not a function, the function recieved a ' +
//             type +
//             ' instead',
//           'Dann.prototype.load'
//         );
//         return;
//       } else {
//         DannError.error('File not found', 'Dann.prototype.load');
//         return;
//       }
//     }
//   }
// };

/*
 * (Browser)
 * saves a json file containing information about the network and its current state. When the function is called, a local file dialogue is opened by the browser.
 * @method save
 * @module Share
 * @deprecated Use toJSON, Removed in 2.2.6
 * @param {String} name The name of the json file.
 */
/*
 * (Nodejs)
 * saves a json file containing information about the network and its current state in ./savedDanns/name/dannData.json.
 * @method save
 * @module Share
 * @deprecated Use toJSON, Removed in 2.2.6
 * @param {String} name The name of the json file.
 * @param {Object} [options] An object containing options on the save process.
 */
// Dann.prototype.save = function save(name, options) {
//   let path;
//   let overwritten = false;
//   let report = false;
//   let result = 0;
//   let rstr = 'none';
//   //options
//   if (options !== undefined) {
//     if (options.report !== undefined) {
//       report = options.report;
//     }
//     if (options.test !== undefined) {
//       if (typeof options.test === 'function') {
//         let testfunc = options.test;
//         result = testfunc() * 100;
//         rstr = result + '%';
//       } else {
//         console.error('Dann Error: the test option can only be a function.');
//         console.trace();
//       }
//     }
//   }
//   let dataOBJ = this.dataObject();

//   if (isBrowser) {
//     downloadSTR(dataOBJ, name);
//   } else {
//     path = './savedDanns/' + name + '/dannData.json';
//     if (fs.existsSync(path)) {
//       overwritten = true;
//     }
//     if (!fs.existsSync('./savedDanns')) {
//       fs.mkdirSync('./savedDanns');
//     }
//     if (!fs.existsSync('./savedDanns/' + name)) {
//       fs.mkdirSync('./savedDanns/' + name);
//     }
//     if (report === true) {
//       let acts = [];
//       for (let i = 1; i < this.arch.length; i++) {
//         acts[i - 1] = this.Layers[i].actname;
//       }
//       let csvFile = [];
//       csvFile.push(['Dann', 'train report']);
//       csvFile.push(['Arch: ', this.arch]);
//       csvFile.push(['Acts: ', acts]);
//       csvFile.push(['Lr: ', this.lr]);
//       csvFile.push(['Epoch:', this.epoch]);

//       if (typeof options.test === 'function') {
//         csvFile.push(['Accuracy:', rstr]);
//       }
//       csvFile.push(['Index', 'AvgLoss']);
//       for (let i = 0; i < this.losses.length; i++) {
//         csvFile.push([i + 1, this.losses[i]]);
//       }

//       w.writeToPath('./savedDanns/' + name + '/report.csv', csvFile)
//         .on('error', (err) => console.error(err))
//         .on('finish', () =>
//           console.log(
//             'saved training report at ' + './savedDanns/' + name + '/report.csv'
//           )
//         );
//     }

//     fs.writeFileSync(path, JSON.stringify(dataOBJ));
//     if (overwritten === true) {
//       console.log('\x1b[32m', '');
//       this.log();
//       console.log(
//         'Succesfully overwritten the Dann Model at ./savedDanns/' +
//           name +
//           '/dannData.json '
//       );
//       console.log('\x1b[0m', '');
//     } else {
//       console.log('\x1b[32m', '');
//       this.log();
//       console.log(
//         'Succesfully saved the Dann Model at ./savedDanns/' +
//           name +
//           '/dannData.json '
//       );
//       console.log('\x1b[0m', '');
//     }
//   }
// };

/**
 * @module Dann
 * @submodule Share
 */
/**
 * This method allows for a Dann model to be converted into a minified javascript function that can run independently, which means you don't need to import the library for it to work. The function generated acts as a Dann.feedForward().
 * @method toFunction
 * @param {String} [name] the name of the function, set to 'myDannFunction' by default.
 * @return {String} The function as a string.
 * @example
 * <code>
 * const nn = new Dann(4, 4);
 * nn.addHiddenLayer(8);
 * nn.makeWeights();
 * let stringFunction = nn.toFunction();
 * // Copy & paste the string function!
 * console.log(stringFunction);
 * </code>
 */
Dann.prototype.toFunction = function toFunction(name = 'myDannFunction') {
  let stringfunc = 'function ' + name + '(input) {';
  // Setting weights
  stringfunc += 'let w = [];';
  for (let i = 0; i < this.weights.length; i++) {
    stringfunc +=
      'w[' + i + '] = ' + JSON.stringify(this.weights[i].matrix) + ';';
  }
  // Setting biases
  stringfunc += 'let b = [];';
  for (let i = 0; i < this.biases.length; i++) {
    stringfunc +=
      'b[' + i + '] = ' + JSON.stringify(this.biases[i].matrix) + ';';
  }
  stringfunc += 'let c = ' + JSON.stringify(this.arch) + ';';
  // Setting activations
  stringfunc += 'let a = [];';
  for (let i = 1; i < this.Layers.length; i++) {
    let actname = this.Layers[i].actname;
    if (i !== 0) {
      let actfunc = toEs6(activations[actname]).toString().split('\n');
      let minfunction = '';
      for (let u = 0; u < actfunc.length; u++) {
        minfunction += actfunc[u];
      }
      actfunc = minfunction.split('\t');
      let minfunction_notabs = '';
      for (let u = 0; u < actfunc.length; u++) {
        minfunction_notabs += actfunc[u];
      }
      stringfunc += 'a[' + i + '] = ' + minfunction_notabs + ';';
    } else {
      stringfunc += 'a[' + i + '] = undefined;';
    }
  }
  // Setting layers
  stringfunc += 'let l = [];';
  stringfunc +=
    'l[0] = [];' +
    'for (let i = 0; i < ' +
    this.i +
    '; i++) {' +
    'l[0][i] = [input[i]];' +
    '};';
  stringfunc +=
    'for (let i = 1; i < ' +
    this.Layers.length +
    '; i++) {' +
    'l[i] = [];' +
    'for (let j = 0; j < c[i]; j++) {' +
    'l[i][j] = [0];' +
    '}' +
    '};';
  // ffw
  stringfunc +=
    'for (let m = 0; m < ' +
    this.weights.length +
    '; m++) {' +
    // mult
    'for (let i = 0; i < w[m].length; i++) {' +
    'for (let j = 0; j < l[m][0].length; j++) {' +
    'let sum = 0;' +
    'for (let k = 0; k < w[m][0].length; k++) {' +
    'sum += w[m][i][k] * l[m][k][j];' +
    '};' +
    'l[m+1][i][j] = sum;' +
    '}' +
    '};' +
    // add biases
    'for (let i = 0; i < l[m+1].length; i++) {' +
    'for (let j = 0; j < l[m+1][0].length; j++) {' +
    'l[m+1][i][j] = l[m+1][i][j] + b[m][i][j];' +
    '}' +
    '};' +
    // map layer to activation function
    'for (let i = 0; i < l[m+1].length; i++) {' +
    'for (let j = 0; j < l[m+1][0].length; j++) {' +
    'l[m+1][i][j] = a[m+1](l[m+1][i][j]);' +
    '}' +
    '}' +
    '};' +
    // return output
    'let o = [];' +
    'for (let i = 0; i < ' +
    this.o +
    '; i++) {' +
    'o[i] = l[' +
    (this.Layers.length - 1) +
    '][i][0];' +
    '};' +
    'return o' +
    '}';
  //minify
  return minify(stringfunc);
};
/*
 * minify code
 */
function minify(string) {
  string = string.replace(/ = /g, '=');
  string = string.replace(/ \+ /g, '+');
  string = string.replace(/ - /g, '-');
  string = string.replace(/ \* /g, '*');
  string = string.replace(/ \/ /g, '/');
  string = string.replace(/for \(/g, 'for(');
  string = string.replace(/; /g, ';');
  string = string.replace(/\) {/g, '){');
  string = string.replace(/ < /g, '<');
  string = string.replace(/ > /g, '>');
  string = string.replace(/ \+= /g, '+=');
  string = string.replace(/;\}/g, '}');
  for (let i = 0; i < 5; i++) {
    string = string.replace(/\{ /g, '{');
    string = string.replace(/ \{/g, '{');
    string = string.replace(/\} /g, '}');
    string = string.replace(/\t/g, '');
    string = string.replace(/\n/g, '');
  }
  for (let i = 0; i < 5; i++) {
    string = string.replace(/; /g, ';');
  }
  return string;
}
/*
 * Slice string by index but keep both segments.
 */
function slicestring(str, index) {
  return [str.slice(0, index + 1), str.slice(index + 1, str.length)];
}
/*
 * Transform a stringified function to a stringified es6 syntax in order to save space.
 */
function toEs6(func) {
  let str = func.toString();
  let index = str.indexOf('(');
  let rstr = slicestring(str, index)[1];
  index = rstr.indexOf(')');
  let funcarr = slicestring(rstr, index - 1);
  let args = funcarr[0];
  index = funcarr[1].indexOf(')');
  let content = slicestring(funcarr[1], index)[1];
  let funcstr = '(' + args + ')=>' + content;
  let minfuncstr = minify(funcstr);
  return minfuncstr;
}

/**
 * @module Dann
 * @submodule Share
 */
/**
 * Gets a dannData object.
 * @method toJSON
 * @return {Object} A dannData object.
 * @example
 * <code>
 * const nn = new Dann(24, 4);
 * nn.addHiddenLayer(12, 'sigmoid');
 * nn.makeWeights();
 * // Getting json
 * const modelData = nn.toJSON();
 * const newNN = new Dann();
 * // Setting
 * newNN.fromJSON(modelData);
 * newNN.log();
 * </code>
 */
Dann.prototype.toJSON = function toJSON() {
  //weights
  let wdata = [];
  for (let i = 0; i < this.weights.length; i++) {
    wdata[i] = JSON.stringify(this.weights[i].matrix);
  }
  let w_str = JSON.stringify(wdata);
  //layers
  let ldata = [];
  for (let i = 0; i < this.Layers.length; i++) {
    ldata[i] = JSON.stringify(this.Layers[i]);
  }
  let l_str = JSON.stringify(ldata);
  //biases
  let bdata = [];
  for (let i = 0; i < this.biases.length; i++) {
    bdata[i] = JSON.stringify(this.biases[i].matrix);
  }
  let b_str = JSON.stringify(bdata);
  //errors
  let edata = [];
  for (let i = 0; i < this.errors.length; i++) {
    edata[i] = JSON.stringify(this.errors[i].matrix);
  }
  let e_str = JSON.stringify(edata);
  //gradients
  let gdata = [];
  for (let i = 0; i < this.gradients.length; i++) {
    gdata[i] = JSON.stringify(this.gradients[i].matrix);
  }
  let g_str = JSON.stringify(gdata);
  const data = {
    wstr: w_str,
    lstr: l_str,
    bstr: b_str,
    estr: e_str,
    gstr: g_str,
    arch: this.arch,
    lrate: this.lr,
    lf: this.lossfunc_s,
    loss: this.loss,
    e: this.epoch,
    per: this.percentile,
  };
  return data;
};

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

//Node Module Exports:
if (!isBrowser) {
  module.exports = {
    Dann,
    Layer,
    Matrix,
    Add,
    activations: activations,
    lossfuncs: lossfuncs,
    poolfuncs: poolfuncs,
    XOR,
    makeXOR: makeXOR,
    makeBinary: makeBinary,

    // Leaving old exports for compatibility with older versions
    // Deprecated as of v2.4.0
    dann: Dann,
    layer: Layer,
    matrix: Matrix,
    add: Add,
    xor: XOR,
  };
}
