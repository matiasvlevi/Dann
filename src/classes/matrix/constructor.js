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
