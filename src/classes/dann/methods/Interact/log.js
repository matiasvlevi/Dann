/**
 * @module Dann
 * @submodule Interact
 */
/**
 * Displays information about the model in the console.
 * @method log
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
 *
 * @example
 * <code>
 * const nn = new Dann(24, 2);
 * nn.log();
 * </code>
 */
Dann.prototype.log = function log(options = Dann.logDefaults()) {
  // Limit decimals to maximum of 21
  let decimals = 1000;
  if (options.decimals > 21) {
    DannError.error('Maximum number of decimals is 21.', 'Dann.prototype.log');
    decimals = pow(10, 21);
  } else {
    decimals = pow(10, options.decimals) || decimals;
  }

  // Details sets all values to true.
  if (options.details) {
    let v = options.details;
    options.gradients = v;
    options.weights = v;
    options.errors = v;
    options.biases = v;
    options.struct = v;
    options.misc = v;
    options.layers = v;
  }

  // Initiate weights if they weren't initiated allready.
  if (this.weights.length === 0) {
    this.makeWeights();
  }
  if (options.struct) {
    console.log('Dann Model:');
    console.log('Layers:');
    for (let i = 0; i < this.Layers.length; i++) {
      let layerObj = this.Layers[i];
      let str = `${layerObj.type} Layer:`;
      let afunc = '';
      if (i === 0) {
        str = 'input Layer:';
        afunc = '       ';
      } else if (i === this.Layers.length - 1) {
        str = 'output Layer:';
        afunc = `  (${layerObj.actname})`;
      } else {
        afunc = `  (${layerObj.actname})`;
      }
      let space = '  ';
      console.log(`\t${str}${space}${layerObj.size}${afunc}`);
      if (options.layers) {
        console.log(this.Layers[i]);
      }
    }
  }
  if (options.errors) {
    console.log('Errors:');
    for (let i = 0; i < this.errors.length; i++) {
      let e = this.errors[i];
      e.log({ decimals: options.decimals, table: options.table });
    }
  }
  if (options.gradients) {
    console.log('Gradients:');
    for (let i = 0; i < this.gradients.length; i++) {
      let g = this.gradients[i];
      g.log({ decimals: options.decimals, table: options.table });
    }
  }
  if (options.weights) {
    console.log('Weights:');
    for (let i = 0; i < this.weights.length; i++) {
      let w = this.weights[i];
      w.log({ decimals: options.decimals, table: options.table });
    }
  }
  if (options.biases) {
    console.log('Biases:');
    for (let i = 0; i < this.biases.length; i++) {
      let b = this.biases[i];
      b.log({ decimals: options.decimals, table: options.table });
    }
  }
  if (options.misc) {
    console.log('Other Values: ');

    console.log('\t' + `Learning rate: ${this.lr}`);
    console.log('\t' + `Loss Function: ${this.lossfunc_s}`);
    console.log('\t' + `Current Epoch: ${this.epoch}`);
    console.log('\t' + `Latest Loss: ${this.loss}`);
  }
  console.log('\n');
  return;
};
