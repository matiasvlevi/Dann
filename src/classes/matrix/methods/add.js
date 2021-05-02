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
    DannError.error('Matrix dimensions should match', 'Matrix.addition');
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
