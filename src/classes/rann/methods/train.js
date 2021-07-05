/**
 * Train a Rann model according to sequence data.
 * @method train
 * @param {Array} input An array of sequences.
 * @example
 * <code>
 * const rnn = new Rann(2, 10, 2);
 * for (let i = 0; i < 10000; i++) {
 *  rnn.train([
 *    [1, 2],
 *    [3, 4],
 *    [5, 6],
 *    [7, 8]
 *  ]);
 * }
 * rnn.feed([
 *  [1, 2],
 *  [3, 4]
 * ]);
 * // Outputs close to [5, 6]
 * </code>
 */
Rann.prototype.train = function train(input) {
  if (this.validateSequences(input)) {
    let length = input.length - 1;
    for (let i = 0; i < length; i++) {
      let target = input.splice(input.length - 1, 1);
      this.trainSequence(input, target[0]);
    }
  } else {
    DannError.error(
      'Input sequences length must equal the number of input neurons the Rann model has',
      'Rann.prototype.train'
    );
    return undefined;
  }
};
