/**
 * Convert an Array into a Matrix Object
 * @method fromArray
 * @static
 * @param {Array} array The array to convert into a Matrix.
 * @param {Object} options Options to specify. As of now, only the 'flip' property is supported which flips the output matrix removing the need of a transpose method.
 * @return {Matrix} 1 row, n col Matrix Object
 * @example
 * <code>
 * let a = [1, 0, 1, 1];
 * let m = Matrix.fromArray(a);
 * m.log();
 * </code>
 */
Matrix.fromArray = function fromArray(array, options) {
  let flip = false;
  if (options !== undefined) {
    flip = options.flip;
  }
  let m = new Matrix(array.length, 1);
  for (let i = 0; i < array.length; i++) {
    if (flip === false) {
      m.matrix[i][0] = array[i];
    } else if (flip === true) {
      m.matrix[0][i] = array[i];
    }
  }
  return m;
};
