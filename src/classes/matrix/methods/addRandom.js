/*
 * Undisplayed documentation
 *
 * @method addRandom
 * @param {Number} magnitude The range in which to initiate a random value in the equation.
 * @param {Number} prob The probability of a value being affected (between 0 and 1)
 */
Matrix.prototype.addRandom = function addRandom(magnitude, prob) {
  let newMatrix = Matrix.make(this.rows, this.cols);
  if (prob <= 0 || prob > 1) {
    DannError.error(
      'Probability argument must be between 0 and 1',
      'Matrix.prototype.addRandom'
    );
  } else {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let w = this.matrix[i][j];
        let ran = random(0, 1);
        if (ran < prob) {
          newMatrix[i][j] = w + w * random(-magnitude, magnitude);
        }
      }
    }
  }
  this.set(newMatrix);
};
