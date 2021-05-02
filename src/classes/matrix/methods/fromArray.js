/**
 * Convert an Array into a Matrix Object
 * @method fromArray
 * @static
 * @param {Array} array The array to convert into a Matrix.
 * @return {Matrix} 1 row, n col Matrix Object
 * @example
 * <code>
 * let a = [1, 0, 1, 1];
 * let m = Matrix.fromArray(a);
 * m.log();
 * </code>
 */
Matrix.fromArray = function fromArray(array) {
  let m = new Matrix(array.length, 1);
  for (let i = 0; i < array.length; i++) {
    m.matrix[i][0] = array[i];
  }
  return m;
};
