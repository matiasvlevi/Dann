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
