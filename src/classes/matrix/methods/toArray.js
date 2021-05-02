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
