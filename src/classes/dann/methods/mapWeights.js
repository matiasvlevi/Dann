/**
 * This method maps the weights of a Dann model. It is usefull for neuroevolution simulations where you would map the weights with an equation containing a random factor.
 * @method mapWeights
 * @param {Function} f the function to map the weights with.
 * @example
 * <code>
 * const nn = new Dann(2, 2);
 * nn.makeWeights(-1, 1);
 * nn.log({weights:true});
 * nn.mapWeights((x)=>{
 *   return (Math.random()*0.1)+x;
 * });
 * nn.log({weights:true})
 * </code>
 */
Dann.prototype.mapWeights = function mapWeights(f) {
  if (typeof f === 'function') {
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i].map(f);
    }
  } else {
    DannError.error('Argument must be a function', 'Dann.prototype.mapWeights');
  }
};
