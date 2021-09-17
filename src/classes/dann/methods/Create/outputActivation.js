/**
 * @module Dann
 * @submodule Create
 */
/**
 * Sets the activation function of the output.
 * @method outputActivation
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
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/pxqqqxd3tz">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>reLU</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/jdb8dfof6x">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>siLU</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/f4nhtck5dr">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>tanH</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/eai4bialus">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>binary</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/zq8s1ixyp8">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>softsign</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/vmuhohc3da">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>sinc</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/6u4ioz8lhs">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>softplus</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/aegpfcyniu">See graph</a></td>
 *   </tr>
 * </tbody>
 * </table>
 * <a href="./Add.html#method_activation"><p>See how to add more </p></a>
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
