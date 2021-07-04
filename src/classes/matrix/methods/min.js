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
