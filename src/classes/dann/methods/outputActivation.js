/**
 * Sets the activation function of the output.
 * @method outputActivation
 * @for Dann
 * @param {String} act Takes a string of the activation function's name. If this function is not called, the activation function will be set to 'sigmoid' by default. See available activation functions <a href="https://dannjs.org">here</a>.
 * @example
 * <code>
 * const nn = new Dann(4, 2);
 * nn.addHiddenLayer(8, 'sigmoid');
 * nn.makeWeights();
 * console.log('Before changing the output activation');
 * nn.log({struct:true});
 * nn.outputActivation('tanH');
 * console.log('After changing the output activation');
 * nn.log({struct:true});
 * </code>
 */
Dann.prototype.outputActivation = function outputActivation(act) {
  if (activations[act] === undefined && !isBrowser) {
    if (typeof act === 'string') {
      DannError.error(
        "'" +
          act +
          "' is not a valid activation function, as a result, the activation function is set to 'sigmoid' by default.",
        'Dann.prototype.outputActivation'
      );
      return;
    } else {
      DannError.error(
        "Did not detect a string value, as a result, the activation function is set to 'sigmoid' by default.",
        'Dann.prototype.outputActivation'
      );
      return;
    }
  }
  this.Layers[this.Layers.length - 1].setFunc(act);
};
