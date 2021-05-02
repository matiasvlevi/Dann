/**
 * Set the loss function of a Dann model
 * @method setLossFunction
 * @param {String} name Takes a string of the loss function's name. If this function is not called, the loss function will be set to 'mse' by default. See available loss functions <a href="dannjs.org">Here</a>.
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
 */
Dann.prototype.setLossFunction = function setLossFunction(name) {
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
