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
