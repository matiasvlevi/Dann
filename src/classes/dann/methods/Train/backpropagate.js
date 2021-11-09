/**
 * @module Dann
 * @submodule Train
 */
/**
 * Backpropagate through a Dann model in order to train the weights.
 *
 * @method backpropagate
 * @param {Array} inputs Array of input data.
 * @param {Array} target Array of expected output.
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
 * <td>table</td>
 * <td>Boolean</td>
 * <td>If the &#39;log&#39; option is set to true, setting this value to true will print the arrays of this function in tables.</td>
 * </tr>
 * <tr>
 * <td>dropout</td>
 * <td>Number</td>
 * <td>A value ranging from 0 to 1 determining the chance of a neuron being idle during a backward pass.</td>
 * </tr>
 * </tbody>
 * </table>
 * @example
 * <code>
 * const nn = new Dann(2, 1);
 * nn.addHiddenLayer(8);
 * nn.makeWeights();
 * // Train 1000 epoch
 * for (let i = 0; i < 1000; i++) {
 *    nn.backpropagate([0,0],[0]);
 *    nn.backpropagate([1,0],[1]);
 *    nn.backpropagate([0,1],[1]);
 *    nn.backpropagate([1,1],[0]);
 * }
 * </code>
 */
Dann.prototype.backpropagate = function backpropagate(
  inputs,
  target,
  options = Dann.bckDefaults()
) {
  // Create expected target matrix if it has the same length as the output layer.
  let targets;
  if (this.checkArrayLength(target, this.o)) {
    targets = Matrix.fromArray(target);
  } else {
    DannError.error(
      `The target array length does not match the number of ouputs the dannjs model has.`,
      'Dann.prototype.backpropagate'
    );
    return;
  }

  // Stop if learning rate is not valid.
  if (!this.checkLearningRate()) {
    return;
  }

  // Create dropout matrices if they were specified
  if (options.dropout !== undefined) {
    // Check if valid or else abort
    if (this.checkDropoutRate(options.dropout)) {
      this.addDropout(options.dropout);
    } else {
      return;
    }
  }

  // Forward propagation
  this.outs = this.feedForward(inputs, { log: false, mode: options.mode });

  // Backwards propagation
  this.errors[this.errors.length - 1] = Matrix.sub(
    targets,
    this.Layers[this.Layers.length - 1].layer
  );
  this.gradients[this.gradients.length - 1] = Matrix.map(
    this.Layers[this.Layers.length - 1].layer,
    this.Layers[this.Layers.length - 1].actfunc_d
  )
    .mult(this.errors[this.errors.length - 1])
    .mult(this.lr);

  for (let i = this.weights.length - 1; i > 0; i--) {
    let weights_deltas = Matrix.mult(
      this.gradients[i],
      Matrix.transpose(this.Layers[i].layer)
    );

    if (options.dropout !== undefined) {
      weights_deltas = weights_deltas.mult(this.dropout[i]);
    }

    this.weights[i].add(weights_deltas);
    this.biases[i].add(this.gradients[i]);

    let weights_t = Matrix.transpose(this.weights[i]);
    this.errors[i - 1] = Matrix.mult(weights_t, this.errors[i]);
    this.gradients[i - 1] = Matrix.map(
      this.Layers[i].layer,
      this.Layers[i].actfunc_d
    )
      .mult(this.errors[i - 1])
      .mult(this.lr);
  }

  let i_t = Matrix.transpose(this.Layers[0].layer);
  let weights_deltas = Matrix.mult(this.gradients[0], i_t);

  if (options.dropout !== undefined) {
    weights_deltas = weights_deltas.mult(this.dropout[0]);
  }

  this.weights[0].add(weights_deltas);
  this.biases[0].add(this.gradients[0]);

  // Compute loss value
  this.loss = this.lossfunc(this.outs, target, this.percentile);
  if (options.saveLoss === true) {
    this.losses.push(this.loss);
  }

  // Optional logs
  if (options.log === true) {
    Dann.print('Prediction: ');
    Dann.print(this.outs, options.table);
    Dann.print('target: ');
    Dann.print(target, options.table);
    Dann.print(`Loss: ${this.loss}`);
  }
};
// Alias
Dann.prototype.train = function train() {
  return this.backpropagate.apply(this, arguments);
};
