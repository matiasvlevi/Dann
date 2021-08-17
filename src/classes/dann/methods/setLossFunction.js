/**
 * Set the loss function of a Dann model
 * @method setLossFunction
 * @param {String} name Takes a string of the loss function's name. If this function is not called, the loss function will be set to 'mse' by default. See available loss functions <a target="_blank" href="dannjs.org">Here</a>.
 * @param {Number} [percentile] Some loss functions like the Quantile loss will need a percentile value. Ranges between 0 and 1.
 * <table>
 * <thead>
 *   <tr>
 *     <th>Name</th>
 *     <th>Desmos</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *     <td>mse</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/msg3bebyhe">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>mae</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/sqyudacjzb">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>lcl</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/ropuc3y6sa">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>mbe</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/xzp1hr0vin">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>mael</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/dimqieesut">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>rmse</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/x7efwdfada">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>mce</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/bzlqe7bafx">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>bce</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/ri1bj9gw4l">See graph</a></td>
 *   </tr>
 *   <tr>
 *     <td>quantile</td>
 *     <td><a target="_blank" href="https://www.desmos.com/calculator/7rsvaivrat">See graph</a></td>
 *   </tr>
 * </tbody>
 * </table>
 * <br/>
 * See how to add more <a class="hyperlink" href="./Add.html#method_loss">Here</a>
 * @example
 * <code>
 * const nn = new Dann(4, 2);
 * nn.addHiddenLayer(8, 'sigmoid');
 * nn.makeWeights();
 * //Before changing the loss function
 * console.log(nn.lossfunc);
 * nn.setLossFunction('mael');
 * //After changing the loss function
 * console.log(nn.lossfunc);
 * </code>
 * @example
 * <code>
 * const nn = new Dann(4, 4);
 * nn.addHiddenLayer(16, 'sigmoid');
 * nn.makeWeights();
 * //Before changing the loss function
 * console.log(nn.lossfunc);
 * // Quantile loss with 40 percentile
 * nn.setLossFunction('quantile', 0.4);
 * //After changing the loss function
 * console.log(nn.lossfunc);
 * </code>
 */
Dann.prototype.setLossFunction = function setLossFunction(
  name,
  percentile = 0.5
) {
  this.percentile = percentile;
  let func = lossfuncs[name];
  if (func === undefined) {
    if (typeof name === 'string') {
      DannError.error(
        "'" +
          name +
          "' is not a valid loss function, as a result, the model's loss function is set to 'mse' by default.",
        'Dann.prototype.setLossFunction'
      );
      return;
    } else {
      DannError.error(
        "Did not detect string value, as a result, the loss function is set to 'mse' by default.",
        'Dann.prototype.setLossFunction'
      );
      return;
    }
  }
  this.lossfunc_s = name;
  this.lossfunc = func;
};
