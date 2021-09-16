/**
 * Add a custom loss function.
 * @method loss
 * @param {string} name the name of the new loss function.
 * @param {function} loss the loss function.
 * @example
 * <code>
 * Add.loss('myfunc',
 *   (predictions, target) => {
 *     let sum = 0;
 *     let ans = 0;
 *     let n = target.length;
 *     for (let i = 0; i < n; i++) {
 *       let y = target[i];
 *       let yHat = predictions[i];
 *       sum += abs(y - yHat);
 *     }
 *     ans = sum / n;
 *     return ans;
 *   }
 * );
 * let nn = new Dann();
 * nn.setLossFunction('myfunc');
 * nn.log();
 * </code>
 */
Add.loss = function (name, loss) {
  if (typeof name !== 'string') {
    DannError.error('The name argument is not a string.', 'Add.loss');
    return;
  }
  if (loss.length === 2) {
    lossfuncs[name] = loss;
  } else {
    DannError.error(
      'The loss function specified can only have 2 argument.',
      'newActivation'
    );
    return;
  }
};
