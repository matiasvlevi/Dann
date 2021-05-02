/**
 * Create a Number[][] matrix, all values set to 0.
 * @method make
 * @static
 * @param {Number} x the x component of the Number[][] matrix.
 * @param {Number} y the y component of the Number[][] matrix.
 * @return {Number[][]}
 * @example
 * <code>
 * let rawMatrix = Matrix.make(3, 4);
 * console.log(rawMatrix);
 * </code>
 */
Matrix.make = function make(rows = 0, cols = 0) {
  let m = [[]];
  for (let i = 0; i < rows; i++) {
    m[i] = [];
    for (let j = 0; j < cols; j++) {
      m[i][j] = 0;
    }
  }
  return m;
};
