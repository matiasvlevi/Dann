/**
 * @module Dann
 * @submodule Train
 */
/**
 * This function mutates the weights by taking a percentage of the weight & adding it to the weight. This is for Neuroevolution tasks.
 * @method mutateAdd
 * @param {Number} randomFactor Percentage to add to each weight. Generally in 0 and 1.
 * @example
 * <code>
 * const nn = new Dann(4, 2);
 * nn.makeWeights();
 * nn.log({weights:true, table:true})
 * // weights add 5% of themselves.
 * nn.mutateAdd(0.05);
 * nn.log({weights:true,table:true});
 * </code>
 */
Dann.prototype.mutateAdd = function mutateAdd(randomFactor) {
  if (typeof randomFactor !== 'number') {
    DannError.error(
      'randomFactor argument must be a number.',
      'Dann.prototype.mutateAdd'
    );
    return;
  } else {
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i].addPercent(randomFactor);
    }
  }
};
