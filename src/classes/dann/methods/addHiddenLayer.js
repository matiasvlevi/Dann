/**
 * Add a Hidden Neuron Layer to a Dann neural network.
 * @method addHiddenLayer
 * @for Dann
 * @param {Number} size Layer size, the number of neurons in the layer.
 * @param {String} [act] Takes a string of the activation function's name. If left empty, the activation function will be set to 'sigmoid' by default. See available activation functions <a href="https://dannjs.org">Here</a>.
 * @example
 * <code>
 * const nn = new Dann(10, 2);
 * //Add a layer
 * nn.addHiddenLayer(8, 'sigmoid');
 * //console log
 * console.log('Added first hidden layer: ');
 * nn.log({struct:true});
 * //Add a layer
 * nn.addHiddenLayer(4, 'tanH');
 * //console log
 * console.log('Added a second hidden layer: ');
 * nn.log({struct:true});
 * </code>
 */
Dann.prototype.addHiddenLayer = function addHiddenLayer(size, act) {
  if (act !== undefined) {
    if (activations[act] === undefined) {
      if (typeof act === 'string') {
        DannError.error(
          "'" +
            act +
            "' is not a valid activation function, as a result, the activation function was set to 'sigmoid'.",
          'Dann.prototype.addHiddenLayer'
        );
      }
      act = 'sigmoid';
    }
  } else {
    act = 'sigmoid';
  }
  this.arch.splice(this.arch.length - 1, 0, size);
  let layer = new Layer('hidden', size, act);
  this.Layers.splice(this.Layers.length - 1, 0, layer);
};
