/**
 * Transpose operation of a matrix. Invert row coordinates with column coordinates
 * @method transpose
 * @param {Matrix} m The matrix to be transposed.
 * @return {Matrix}
 * @example
 * <code>
 * const m1 = new Matrix(2,4);
 * m1.log({table:true});
 * const m2 = Matrix.transpose(m1);
 * m2.log({table:true});
 * </code>
 */
Matrix.transpose = function transpose(m) {
  let result = new Matrix(m.cols, m.rows);
  for (let i = 0; i < m.rows; i++) {
    for (let j = 0; j < m.cols; j++) {
      result.matrix[j][i] = m.matrix[i][j];
    }
  }
  return result;
};
