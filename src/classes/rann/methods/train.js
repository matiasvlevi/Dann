/**
 * Train a Rann model according to sequence data.
 * @method train
 * @param {Array} input An array of sequences.
 * @param {Object} [options] Object including specific properties.
 * <table>
 * <thead>
 * <tr>
 * <th>Property</th>
 * <th>Type</th>
 * <th>Function</th>
 * </tr>
 * </thead>
 * <tbody>
 * <tr>
 * <td>log</td>
 * <td>Boolean</td>
 * <td>If set to true, the loss value is going to be logged in the console.</td>
 * </tr>
 * <tr>
 * <td>normalize</td>
 * <td>Boolean</td>
 * <td>If set to true, input values will be normalized. You also need to feed the neural network with this option on.</td>
 * </tr>
 * </tbody>
 * </table>
 * @example
 * <code>
 * const rnn = new Rann(2, 10, 2);
 * for (let i = 0; i < 10000; i++) {
 *  rnn.train([
 *    [1, 2],
 *    [3, 4],
 *    [5, 6],
 *    [7, 8]
 *  ], {
 *    normalize: true
 *  });
 * }
 * rnn.feed([
 *  [1, 2],
 *  [3, 4]
 * ], {
 *    normalize: true
 * });
 * // Outputs close to [5, 6]
 * </code>
 */
Rann.prototype.train = function train(input, options) {
  let normalize = false;
  let logloss = false;
  if (options !== undefined) {
    if (options.normalize !== undefined) {
      normalize = options.normalize;
    }
    if (options.log !== undefined) {
      logloss = options.log;
    }
  }
  if (normalize) {
    // Normalize input
    input = this.normalizeSequence(input, true);
  }
  if (typeof input[0] === 'string') {
    input = Rann.inputToNum(input);
  }
  if (this.validateSequences(input)) {
    let length = input.length - 1;
    for (let i = 0; i < length; i++) {
      let target = input.splice(input.length - 1, 1);
      this.trainSequence(input, target[0]);
    }
    if (logloss) {
      console.log('Loss: ', this.loss);
    }
  } else {
    DannError.error(
      'Input sequences length must equal the number of input neurons the Rann model has',
      'Rann.prototype.train'
    );
    return undefined;
  }
};
