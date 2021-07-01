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
  if (typeof f !== 'function') {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let v = this.matrix[i][j];
        this.matrix[i][j] = f(v);
      }
    }
    return this;
  } else {
    DannError.error('Argument must be a function', 'Matrix.prototype.add');
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
