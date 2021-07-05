/**
 * Set the activation function of the shared hidden layer.
 * @method setActivation
 * @param {String} act The name of the activation function
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
 * <br/>
 * See how to add more <a href="./Add.html#method_activation">Here</a>
 * @example
 * <code>
 * const rnn = new Rann(3, 20, 3);
 * rnn.setActivation('tanH');
 * rnn.log();
 * </code>
 */
Rann.prototype.setActivation = function setActivation(act) {
  if (activations[act] === undefined && !isBrowser) {
    if (typeof act === 'string') {
      DannError.error(
        "'" +
          act +
          "' is not a valid activation function, as a result, the activation function is set to 'sigmoid' by default.",
        'Rann.prototype.setActivation'
      );
      return;
    } else {
      DannError.error(
        "Did not detect a string value, as a result, the activation function is set to 'sigmoid' by default.",
        'Rann.prototype.setActivation'
      );
      return;
    }
  }
  this.actname = act;
  let funcData = Layer.stringTofunc(this.actname);
  this.actfunc = funcData['func'];
  this.actfunc_d = funcData['func_d'];
};
