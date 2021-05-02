/**
 * This function mutates each weights randomly. This is for Neuroevolution tasks.
 * @method mutateRandom
 * @for Dann
 * @param {Number} range This will multiply with a random number from -range to range and add to each weight.
 * @param {Number} [probability] The probability of a weight being affected by a random mutation. Ranging from 0 to 1. Setting this value to 1 would mutate all the model's weights.
 * @example
 * <code>
 * const nn = new Dann(4, 2);
 * nn.makeWeights();
 * nn.log({weights:true, table:true});
 * // adding (weight*random(-0.1, 0.1)) to 50% of the weights.
 * nn.mutateRandom(0.1, 0.5);
 * nn.log({weights:true, table:true});
 * </code>
 */
Dann.prototype.mutateRandom = function mutateRandom(range, probability) {
  if (typeof range !== 'number') {
    DannError.error(
      'Range argument must be a number.',
      'Dann.prototype.mutateRandom'
    );
    return;
  }
  if (probability !== undefined) {
    if (typeof probability !== 'number') {
      DannError.error(
        'Probability argument must be a number.',
        'Dann.prototype.mutateRandom'
      );
      return;
    }
  } else {
    probability = 1;
  }
  for (let i = 0; i < this.weights.length; i++) {
    this.weights[i].addRandom(range, probability);
  }
};
