/**
 * Fill a culmn of a matrix with a value.
 * @method fillCol
 * @param {Number} col The column to fill
 * @param {Number} num The value to fill the column with;
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
