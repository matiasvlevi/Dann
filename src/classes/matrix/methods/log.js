/**
 * Logs information about the matrix.
 * @method log
 * @param {Object} [options] Object including specific properties.
 * @example
 * <code>
 * const m = new Matrix(3, 6);
 * // log
 * m.log();
 * // log as a table
 * m.log({table:true});
 * // log with rounded values
 * m.log({decimals:3});
 * </code>
 */
Matrix.prototype.log = function log(
  options = {
    table: false,
    decimals: 21,
  }
) {
  // Limit decimals to maximum of 21
  let dec = 1000;
  if (options.decimals > 21) {
    DannError.error(
      'Maximum number of decimals is 21.',
      'Matrix.prototype.log'
    );
    dec = pow(10, 21);
  } else {
    dec = pow(10, options.decimals) || dec;
  }

  // Copy matrix
  let m = new Matrix(this.rows, this.cols);
  m.set(this.matrix);

  // round the values
  m.map((x) => round(x * dec) / dec);

  // Log
  if (options.table) {
    console.table(m.matrix);
  } else {
    console.log(m);
  }
};
