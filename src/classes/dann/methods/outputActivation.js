/**
 * Sets the activation function of the output.
 * @method outputActivation
 * @for Dann
 * @param {String} act Takes a string of the activation function's name. If this function is not called, the activation function will be set to 'sigmoid' by default. See available activation functions <a target="_blank" href="https://dannjs.org">here</a>.
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
