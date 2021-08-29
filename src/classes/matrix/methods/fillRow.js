/**
 * Fill a specific row in a matrix.
 * @method fillRow
 *
 * @param {Number} row The row index to fill
 * @param {Number} num The value to fill the row with
 * @chainable
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
