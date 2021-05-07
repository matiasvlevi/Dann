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
Matrix.prototype.log = function log(options) {
  let table = false;
  if (options !== undefined) {
    if (options.table) {
      table = options.table;
    }
  }
  if (table) {
    console.table(this.matrix);
  } else {
    console.log(this);
  }
};
