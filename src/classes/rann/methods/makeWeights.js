/**
 * Change the intiated weight values of a model.
 * This method is optional in the creation of a Rann model.
 * @method makeWeights
 * @param {Number} min The minium value.
 * @param {Number} max The maximum value.
 * @example
 * <code>
 * const rnn = new Rann(4, 10, 4);
 * rnn.makeWeights(-0.1, 0.1);
 * </code>
 */
Rann.prototype.makeWeights = function makeWeights(min, max) {
  if (min !== undefined || max !== undefined) {
    this.U.randomize(min, max);
    this.V.randomize(min, max);
    this.W.randomize(min, max);
    return;
  } else {
    DannError.error(
      'Must specify minimum and maximum values for weights',
      'Rann.prototype.makeWeights'
    );
  }
};
