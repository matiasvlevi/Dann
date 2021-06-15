/**
 * Displays information about the model in the console.
 * @method log
 * @for Dann
 * @param {Object} [options] An object including specific properties.
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
 * <td>details</td>
 * <td>Boolean</td>
 * <td>If set to true, the function will log more advanced details about the model.</td>
 * </tr>
 * <tr>
 * <td>decimals</td>
 * <td>integer</td>
 * <td>The number of decimals the logged data is going to have. It is set to 3 by default.</td>
 * </tr>
 * <tr>
 * <td>table</td>
 * <td>Boolean</td>
 * <td>Whether or not we want to print our matrices in the form of a table or Matrix object log.</td>
 * </tr>
 * <tr>
 * <td>gradients</td>
 * <td>Boolean</td>
 * <td>If this is set to true, the the function will log the gradients of the model.</td>
 * </tr>
 * <tr>
 * <td>biases</td>
 * <td>Boolean</td>
 * <td>If this is set to true, the the function will log the biases of the model.</td>
 * </tr>
 * <tr>
 * <td>weights</td>
 * <td>Boolean</td>
 * <td>If this is set to true, the the function will log the weights of the model.</td>
 * </tr>
 * <tr>
 * <td>struct</td>
 * <td>Boolean</td>
 * <td>If this is set to true, the the function will log the structure of the model.</td>
 * </tr>
 * <tr>
 * <td>errors</td>
 * <td>Boolean</td>
 * <td>If this is set to true, the the function will log the errors of the model.</td>
 * </tr>
 * <tr>
 * <td>misc</td>
 * <td>Boolean</td>
 * <td>If this is set to true, the the function will log the loss of the model, the learning rate of the model and the loss function.</td>
 * </tr>
 * </tbody>
 * </table>
 * @example
 * <code>
 * const nn = new Dann(24, 2);
 * nn.log();
 * </code>
 */
Dann.prototype.log = function log(options) {
  //Optional parameters values:
  let showWeights = false;
  let showGradients = false;
  let showErrors = false;
  let showBiases = false;
  let showBaseSettings = false;
  let showOther = false;
  let showDetailedLayers = false;
  let table = false;
  let decimals = 1000;
  //Optional parameters:
  if (options !== undefined) {
    if (options.weights) {
      showWeights = options.weights;
    }
    if (options.gradients) {
      showGradients = options.gradients;
    }
    if (options.errors) {
      showErrors = options.errors;
    }
    if (options.biases) {
      showBiases = options.biases;
    }
    if (options.struct) {
      showBaseSettings = options.struct;
    }
    if (options.misc) {
      showOther = options.misc;
    }
    if (options.table) {
      table = options.table;
    }
    if (options.layers) {
      showDetailedLayers = options.layers;
      showBaseSettings = options.layers;
    }
    if (options.details) {
      let v = options.details;
      showGradients = v;
      showWeights = v;
      showErrors = v;
      showBiases = v;
      showBaseSettings = v;
      showOther = v;
      showDetailedLayers = v;
    }
    if (options.decimals) {
      if (options.decimals > 21) {
        console.error('Dann Error: Maximum number of decimals is 21.');
        console.trace();
        options.decimals = 21;
      }
      decimals = pow(10, options.decimals);
    }
  } else {
    showBaseSettings = true;
    showOther = true;
  }
  if (this.weights.length === 0) {
    // make weights if they weren't made allready.
    this.makeWeights();
  }
  if (
    options === undefined ||
    (options !== undefined && options.details === true)
  ) {
    console.log('Dann NeuralNetwork:');
  }
  if (showBaseSettings) {
    console.log('Layers:');
    for (let i = 0; i < this.Layers.length; i++) {
      let layerObj = this.Layers[i];
      let str = layerObj.type + ' Layer: ';
      let afunc = '';
      if (i === 0) {
        str = 'Input Layer:   ';
        afunc = '       ';
      } else if (i === layerObj.length - 1) {
        str = 'Output Layer:  ';
        afunc = '  (' + layerObj.actname + ')';
      } else {
        afunc = '  (' + layerObj.actname + ')';
      }
      console.log('\t' + str + layerObj.size + afunc);
      if (showDetailedLayers) {
        console.log(this.Layers[i]);
      }
    }
  }
  if (showErrors) {
    console.log('Errors:');
    for (let i = 0; i < this.errors.length; i++) {
      let e = Matrix.toArray(this.errors[i]);
      let er = [];
      for (let j = 0; j < e.length; j++) {
        er[j] = round(e[j] * decimals) / decimals;
      }
      console.log(er);
    }
  }
  if (showGradients) {
    console.log('Gradients:');
    for (let i = 0; i < this.gradients.length; i++) {
      let g = Matrix.toArray(this.gradients[i]);
      let gr = [];
      for (let j = 0; j < g.length; j++) {
        gr[j] = round(g[j] * decimals) / decimals;
      }
      console.log(gr);
    }
  }
  if (showWeights) {
    console.log('Weights:');
    for (let i = 0; i < this.weights.length; i++) {
      let w = this.weights[i];
      w.log({ decimals: options.decimals, table: table });
    }
  }
  if (showBiases) {
    console.log('Biases:');
    for (let i = 0; i < this.biases.length; i++) {
      let b = Matrix.toArray(this.biases[i]);
      let br = [];
      for (let j = 0; j < b.length; j++) {
        br[j] = round(b[j] * decimals) / decimals;
      }
      console.log(br);
    }
  }
  if (showOther) {
    console.log('Other Values: ');

    console.log('\t' + 'Learning rate: ' + this.lr);
    console.log('\t' + 'Loss Function: ' + this.lossfunc_s);
    console.log('\t' + 'Current Epoch: ' + this.epoch);
    console.log('\t' + 'Latest Loss: ' + this.loss);
  }
  console.log(' ');
  return;
};
