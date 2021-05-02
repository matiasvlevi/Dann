/**
 * Initiate a matrix with a certain value.
 * @method initiate
 * @param {Number} [value] The value to initiate te Matrix with, set to 0 by default.
 * @chainable
 * @example
 * <code>
 * const m = new Matrix(2, 2);
 * m.initiate(100);
 * m.log();
 * // [100, 100]
 * // [100, 100]
 * </code>
 */
Matrix.prototype.initiate = function initiate(value = 0) {
  if (value !== undefined) {
    if (typeof value === 'number') {
      for (let i = 0; i < this.matrix.length; i++) {
        for (let j = 0; j < this.matrix[i].length; j++) {
          this.matrix[i][j] = value;
        }
      }
      return this;
    } else {
      DannError.error(
        'The value entered as an argument is not a number',
        'Matrix.prototype.initiate'
      );
      return;
    }
  }
};
