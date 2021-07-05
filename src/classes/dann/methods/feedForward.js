/**
 * Feed data through the model to obtain an output or prediction.
 * @method feedForward
 * @for Dann
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
 * nn.feedForward([0,0,0,1], {log:true});
 * </code>
 */

Dann.prototype.feedForward = function feedForward(inputs, options) {
  //optional parameter values:
  let showLog = false;
  let mode = 'cpu';
  let table = false;
  let roundData = false;
  let dec = 1000;
  let pull = undefined;
  let insert = undefined;
  //optional parameters:
  if (options !== undefined) {
    // Log results in console
    if (options.log !== undefined) {
      showLog = options.log;
    } else {
      showLog = false;
    }
    // Log in a table
    if (options.table !== undefined) {
      table = options.table;
    }
    // Pull from specific hidden layer
    if (options.pull !== undefined) {
      pull = options.pull;
    }
    // Insert values in the hidden layer before activation function (By addition)
    if (options.insert !== undefined) {
      insert = options.insert;
    }
    // Round the output
    if (options.decimals !== undefined) {
      if (options.decimals > 21) {
        DannError.warn(
          'Maximum number of decimals is 21, was set to 21 by default.',
          'Dann.prototype.feedForward'
        );
        options.decimals = 21;
      }
      dec = pow(10, options.decimals);
      roundData = true;
    }
    // Compute mode gpu/cpu. (Gpu support is still not fully implemented)
    if (options.mode !== undefined) {
      mode = options.mode;
      if (mode === 'gpu') {
        DannError.warn(
          "Gpu Support not available yet, mode set to 'cpu'",
          'Dann.prototype.feedForward'
        );
        mode = 'cpu';
      }
    } else {
      mode = 'cpu';
    }
  }

  if (inputs.length === this.i) {
    this.Layers[0].layer = Matrix.fromArray(inputs);
  } else {
    for (let i = 0; i < this.o; i++) {
      this.outs[i] = 0;
    }
    DannError.error(
      'The input array length does not match the number of inputs the dannjs model has.',
      'Dann.prototype.feedForward'
    );
    return this.outs;
  }
  if (this.weights.length === 0) {
    DannError.warn(
      'The weights were not initiated. Please use the Dann.makeWeights(); function after the initialization of the layers.',
      'Dann.prototype.feedForward'
    );
    this.makeWeights();
  }

  for (let i = 0; i < this.weights.length; i++) {
    let pLayer = this.Layers[i];
    let layerObj = this.Layers[i + 1];
    layerObj.layer = Matrix.mult(this.weights[i], pLayer.layer);
    if (insert !== undefined) {
      if (i + 1 === insert.layer) {
        layerObj.layer.add(Matrix.fromArray(insert.value));
      }
    }
    layerObj.layer.add(this.biases[i]);
    layerObj.layer.map(layerObj.actfunc);
  }

  if (pull === undefined) {
    this.outs = Matrix.toArray(this.Layers[this.Layers.length - 1].layer);
    let out = this.outs;
    if (showLog === true) {
      if (roundData === true) {
        out = out.map((x) => Math.round(x * dec) / dec);
      }
      if (table === true) {
        console.log('Prediction: ');
        console.table(out);
      } else {
        console.log('Prediction: ');
        console.log(out);
      }
    }
    return out;
  } else {
    return this.Layers[pull].layer.toArray();
  }
};
Dann.prototype.feed = function feed(inputs, options) {
  return this.feedForward(inputs, options);
};
