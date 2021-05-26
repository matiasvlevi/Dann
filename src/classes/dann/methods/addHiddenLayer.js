/**
 * Add a Hidden Neuron Layer to a Dann neural network.
 * @method addHiddenLayer
 * @for Dann
 * @param {Number} size Layer size, the number of neurons in the layer.
 * @param {String} [act] Takes a string of the activation function's name. If left empty, the activation function will be set to 'sigmoid' by default. See available activation functions <a target="_blank" href="https://dannjs.org">Here</a>.
 * <table>
 * <thead>
 *   <tr>
 *     <th>Name</th>
 *     <th>Desmos</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *     <td>Sigmoid</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/so8eiigug4">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>leakyReLU</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/ktqjycao5q">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>reLU</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/k0owjvxs7p">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>siLU</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/f4nhtck5dr">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>tanH</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/yeujr5mykx">See graph</a></td>
 *   </tr>
 * </tbody>
 * </table>
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
