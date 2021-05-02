/*
 * Undisplayed documentation
 *
 * @method addPercent
 * @param {Number} magnitude The scalar applied to the value
 */
Matrix.prototype.addPercent = function addPrecent(scalar) {
  for (let i = 0; i < this.rows; i++) {
    for (let j = 0; j < this.cols; j++) {
      let w = this.matrix[i][j];
      this.matrix[i][j] += w * scalar;
    }
  }
};
