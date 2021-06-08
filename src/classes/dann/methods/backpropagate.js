/**
 * Backpropagate trough a Dann model in order to train the weights.
 * @method backpropagate
 * @for Dann
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
Dann.prototype.backpropagate = function backpropagate(inputs, target, options) {
  //optional parameter values:
  let showLog = false;
  let mode = 'cpu';
  let recordLoss = false;
  let table = false;

  //optional parameters:
  if (options !== undefined) {
    if (options.log !== undefined) {
      showLog = options.log;
    } else {
      showLog = false;
    }
    if (options.table !== undefined) {
      table = options.table;
    }
    if (options.mode !== undefined) {
      mode = options.mode;
      if (mode === 'gpu') {
        console.log('gpu version coming soon');
      }
    } else {
      mode = 'cpu';
    }
    if (options.saveLoss !== undefined) {
      recordLoss = options.saveLoss;
    } else {
      recordLoss = true;
    }
  }

  let targets = new Matrix(0, 0);
  if (target.length === this.o) {
    targets = Matrix.fromArray(target);
  } else {
    console.error(
      'Dann Error: The target array length does not match the number of ouputs the dannjs model has.'
    );
    console.trace();
    return;
  }
  if (typeof this.lr !== 'number') {
    console.error(
      'Dann Error: The learning rate specified (Dann.lr property) is not a number.'
    );
    console.trace();
    return;
  }

  this.outs = this.feedForward(inputs, { log: false, mode: mode });
  this.errors[this.errors.length - 1] = Matrix.sub(
    targets,
    this.Layers[this.Layers.length - 1].layer
  );
  this.gradients[this.gradients.length - 1] = Matrix.map(
    this.Layers[this.Layers.length - 1].layer,
    this.Layers[this.Layers.length - 1].actfunc_d
  );
  this.gradients[this.gradients.length - 1].mult(
    this.errors[this.errors.length - 1]
  );
  this.gradients[this.gradients.length - 1].mult(this.lr);

  for (let i = this.weights.length - 1; i > 0; i--) {
    let h_t = Matrix.transpose(this.Layers[i].layer);
    let weights_deltas = Matrix.mult(this.gradients[i], h_t);

    this.weights[i].add(weights_deltas);
    this.biases[i].add(this.gradients[i]);

    let weights_t = Matrix.transpose(this.weights[i]);
    this.errors[i - 1] = Matrix.mult(weights_t, this.errors[i]);
    this.gradients[i - 1] = Matrix.map(
      this.Layers[i].layer,
      this.Layers[i].actfunc_d
    );
    this.gradients[i - 1].mult(this.errors[i - 1]);
    this.gradients[i - 1].mult(this.lr);
  }

  let i_t = Matrix.transpose(this.Layers[0].layer);
  let weights_deltas = Matrix.mult(this.gradients[0], i_t);

  this.weights[0].add(weights_deltas);
  this.biases[0].add(this.gradients[0]);

  this.loss = this.lossfunc(this.outs, target);
  if (recordLoss === true) {
    this.losses.push(this.loss);
  }
  if (showLog === true) {
    console.log('Prediction: ');
    if (table) {
      console.table(this.outs);
    } else {
      console.log(this.outs);
    }
    console.log('target: ');
    if (table) {
      console.table(target);
    } else {
      console.log(target);
    }
    console.log('Loss: ', this.loss);
  }
};
