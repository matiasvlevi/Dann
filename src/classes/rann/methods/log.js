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
 * <td>misc</td>
 * <td>Boolean</td>
 * <td>If this is set to true, the the function will log the loss of the model, the learning rate of the model and the loss function.</td>
 * </tr>
 * </tbody>
 * </table>
 * @example
 * <code>
 * const rnn = new Rann(4, 20, 4);
 * rnn.log();
 * </code>
 */
Rann.prototype.log = function log(options) {
  let log;
  let weights = false;
  let gradients = false;
  let struct = false;
  let misc = false;
  let table = false;
  if (options === undefined) {
    console.log('Rann model:');
    // Structure
    console.log('Layers:');
    for (let i = 0; i < this.arch.length; i++) {
      if (i !== 0 && i !== this.arch.length - 1) {
        console.log(
          '     hidden layer: ' + this.arch[i] + '   (' + this.actname + ')'
        );
      } else if (i === 0) {
        console.log('     Input layer: ' + this.arch[i]);
      } else if (i === this.arch.length - 1) {
        console.log(
          '     output layer: ' + this.arch[i] + '   (' + this.o_actname + ')'
        );
      }
    }
    // Other values
    console.log('Other values');
    console.log('     Learning rate: ' + this.lr);
    console.log('     Loss function: ' + this.lossfunc_s);
    console.log('     Current epoch: ' + this.epoch);
    console.log('     Latest loss: ' + this.loss);
  } else {
    log = console.log;
    if (options.weights !== undefined) {
      weights = options.weights;
    }
    if (options.gradients !== undefined) {
      gradients = options.gradients;
    }
    if (options.struct !== undefined) {
      struct = options.struct;
    }
    if (options.misc !== undefined) {
      misc = options.misc;
    }
    if (options.table !== undefined) {
      table = options.table;
    }
    if (options.details !== undefined) {
      if (options.details === true) {
        struct = options.details;
        gradients = options.details;
        misc = options.details;
        weights = options.details;
      }
    }
    // Logs
    if (struct) {
      console.log('Rann model:');
      console.log('Layers:');
      for (let i = 0; i < this.arch.length; i++) {
        if (i !== 0 && i !== this.arch.length - 1) {
          console.log(
            '     hidden layer: ' + this.arch[i] + '   (' + this.actname + ')'
          );
        } else if (i === 0) {
          console.log('     Input layer: ' + this.arch[i]);
        } else if (i === this.arch.length - 1) {
          console.log(
            '     output layer: ' + this.arch[i] + '   (' + this.o_actname + ')'
          );
        }
      }
    }
    if (misc) {
      console.log('Other values');
      console.log('     Learning rate: ' + this.lr);
      console.log('     Loss function: ' + this.lossfunc_s);
      console.log('     Current epoch: ' + this.epoch);
      console.log('     Latest loss: ' + this.loss);
    }
    if (misc && weights) {
      // Line break
      console.log('');
    }
    if (weights) {
      let w0, w1, w2;
      if (table) {
        log = console.table;
        w0 = this.U.matrix;
        w1 = this.W.matrix;
        w2 = this.V.matrix;
      } else {
        log = console.log;
        w0 = this.U;
        w1 = this.W;
        w2 = this.V;
      }
      console.log('U: input to hidden weights');
      log(w0);
      console.log('W: shared hidden weights');
      log(w1);
      console.log('V: hidden to output weights');
      log(w2);
    }
    if (weights && gradients) {
      // Line break
      console.log('');
    }
    if (gradients) {
      let g0, g1, g2;
      if (table) {
        log = console.table;
        g0 = this.dU.matrix;
        g1 = this.dW.matrix;
        g2 = this.dV.matrix;
      } else {
        log = console.log;
        g0 = this.dU;
        g1 = this.dW;
        g2 = this.dV;
      }
      console.log('Gradients of U:');
      log(g0);
      console.log('Gradients of W:');
      log(g1);
      console.log('Gradients of V:');
      log(g2);
    }
  }
};
