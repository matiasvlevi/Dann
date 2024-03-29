/**
 * Set a Matrix object.
 * @method set
 * @param { Number[][] } matrix A matrix with which to set the current Matrix object with.
 * @example
 * <code>
 * const a = new Matrix(0,0);
 * const rawMatrix = [
 *    [1, 0],
 *    [0, 1]
 * ];
 * a.set(rawMatrix);
 * a.log();
 * </code>
 */
Matrix.prototype.set = function set(matrix) {
  if (
    typeof matrix.length === 'number' &&
    typeof matrix[0].length === 'number' &&
    typeof matrix === 'object'
  ) {
    this.rows = matrix.length;
    this.cols = matrix[0].length;

    for (let i = 0; i < this.rows; i++) {
      this.matrix[i] = [...matrix[i]];
    }
  } else {
    DannError.error(
      'the argument of set(); must be an array within an array. Here is an example: [[1,0],[0,1]]',
      'Matrix.prototype.set'
    );
    return;
  }
};
