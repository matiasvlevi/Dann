/**
 * Randomize a Matrix Object's values
 * @method randomize
 * @param {Number} min the minimum possible random value.
 * @param {Number} max the maximum possible random value.
 * @chainable
 * @example
 * <code>
 * const a = new Matrix(3,3);
 * a.randomize(-1, 1);
 * a.log();
 * </code>
 */
Matrix.prototype.randomize = function randomize(min, max) {
  for (let i = 0; i < this.matrix.length; i++) {
    for (let j = 0; j < this.matrix[i].length; j++) {
      this.matrix[i][j] = random(min, max);
    }
  }
  return this;
};
