/**
 * @module Dann
 * @submodule Interact
 */
/**
 * Feed data through the model to obtain an output or prediction.
 * @method feedForward
 * @param {Array} inputs Array of input data.
 * @param {Object} [options] Object including specific properties.
 * <table>
 * <thead>
 * <tr>
 * <th>Property</th>
 * <th>Type</th>
 * <th>Function</th>
 * </tr>
 * </thead>
 * <tbody>
 * <tr>
 * <td>log</td>
 * <td>Boolean</td>
 * <td>If set to true, it will log a report in the console.</td>
 * </tr>
 * <tr>
 * <td>asLabel</td>
 * <td>Boolean</td>
 * <td>If set to true, the function will output the index of the neuron with the highest value.</td>
 * </tr>
 * <tr>
 * <td>table</td>
 * <td>Boolean</td>
 * <td>If the &#39;log&#39; option is set to true, setting this value to true will print the arrays of this function in tables.</td>
 * </tr>
 * <tr>
 * <td>decimals</td>
 * <td>Integer</td>
 * <td>If used, the output of this function will be rounded to the number of decimals specified.</td>
 * </tr>
 * </tbody>
 * </table>
 *
 * @return {Array} Array of output predictions.
 * @example
 * <code>
 * const nn = new Dann(4, 2);
 * nn.makeWeights();
 * let prediction = nn.feedForward([0,0,0,1], {log:true});
 * //outputs an array of length 2
 * console.log(prediction);
 * </code>
 */

Dann.prototype.feedForward = function feedForward(
  inputs,
  options = Dann.ffwDefaults()
) {
  if (options.gpu === true) {
    return Dann.Cuno.ffw(this, inputs);
  }

  // Convert decimals to a scalar value
  let roundData = options.decimals !== undefined ? true : false;
  let dec = pow(10, options.decimals) || 1000;

  // Abort if input length is not the same as specified input.
  if (this.checkArrayLength(inputs, this.i)) {
    this.Layers[0].layer = Matrix.fromArray(inputs);
  } else {
    DannError.error(
      `The input array length does not match the number of inputs the dannjs model has.`,
      'Dann.prototype.feedForward'
    );
    return;
  }

  // Create weights matrices if they were not initiated & throw a warning
  if (this.checkArrayLength(this.weights, 0)) {
    DannError.warn(
      'The weights were not initiated. Please use the Dann.makeWeights(); function after the initialization of the layers.',
      'Dann.prototype.feedForward'
    );
    this.makeWeights();
  }

  // Forward propagation
  for (let i = 0; i < this.weights.length; i++) {
    this.Layers[i + 1].layer = Matrix.mult(
      this.weights[i],
      this.Layers[i].layer
    );

    this.Layers[i + 1].layer.add(this.biases[i]);
    this.Layers[i + 1].layer.map(this.Layers[i + 1].actfunc);
  }
  // Untransformed output
  this.outs = Matrix.toArray(this.Layers[this.Layers.length - 1].layer);

  // Output transformations
  let out = this.outs;
  if (roundData && options.asLabel) {
    DannError.warn(
      'Cannot round if output is a label',
      'Dann.prototype.feedForward'
    );
  } else if (options.asLabel) {
    out = Dann.asLabel(out);
  } else if (roundData && !options.asLabel) {
    out = out.map((x) => round(x * dec) / dec);
  }

  // Optional logs
  if (options.log === true) {
    Dann.print('Prediction: ');
    Dann.print(out, options.table);
  }
  return out;
};
// Alias
Dann.prototype.feed = function feed() {
  return this.feedForward.apply(this, arguments);
};
