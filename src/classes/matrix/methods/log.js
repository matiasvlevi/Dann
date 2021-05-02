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
  let dec = 0;
  let table = false;
  if (options !== undefined) {
    if (options.decimals) {
      dec = pow(10, options.decimals);
    }
    if (options.table) {
      table = options.table;
    }
  }
  let m = new Matrix(this.rows, this.cols);
  m.set(this.matrix);
  if (dec === 0) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let v = this.matrix[i][j];
        m.insert(round(v * dec) / dec, j, i);
      }
    }
  }
  if (table) {
    console.table(m.matrix);
  } else {
    console.log(m);
  }
};
