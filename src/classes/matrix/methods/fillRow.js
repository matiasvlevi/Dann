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
