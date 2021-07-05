/**
 * Displays information about the model in the console.
 * @method log
 * @param {Object} [options] An object including specific properties.
 * @example
 * <code>
 * const rnn = new Rann(4, 20, 4);
 * rnn.log();
 * </code>
 */
Rann.prototype.log = function log(options) {
  console.log('Rann model:');
  if (options === undefined) {
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
  }
};
