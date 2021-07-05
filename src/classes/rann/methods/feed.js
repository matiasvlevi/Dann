/**
 * Feed data to the Reccurent Neural Network.
 * @method feed
 * @param {Array} input An array of input sequences
 * @param {Object} [options] An object setting optional parameters.
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
 * @return {Array} The output sequence
 * @example
 * <code>
 * const rnn = new Rann(2, 10, 2);
 * rnn.feed([
 *  [1,2],
 *  [2,3],
 *  [4,5]
 * ]);
 * </code>
 */
Rann.prototype.feed = function feed(input, options) {
  if (this.validateSequences(input)) {
    let log = false;
    let roundData = false;
    let table = false;
    let dec = 21;
    if (options !== undefined) {
      if (options.log !== undefined) {
        log = options.log;
      }
      if (options.table !== undefined) {
        table = options.table;
      }
      if (options.decimals !== undefined) {
        if (options.decimals > 21) {
          DannError.warn(
            'Maximum number of decimals is 21, was set to 21 by default.',
            'Rann.prototype.feed'
          );
          options.decimals = 21;
        } else {
          dec = Math.pow(10, options.decimals);
          roundData = true;
        }
      }
    }
    for (let d = 0; d < input.length; d++) {
      // First previous values
      this.previous = new Matrix(this.h, 1);
      // Input sequence
      let input_s = input[d];
      // Sequence length
      let sequence = input[d].length;
      for (let t = 0; t < sequence; t++) {
        // New input for sequence
        new_input = new Matrix(sequence, 1);
        new_input.matrix[t][0] = input_s[t];

        // Mult input to hidden
        this.mulu = Matrix.mult(this.U, new_input);

        // Mult previous hidden to current hidden
        this.mulw = Matrix.mult(this.W, this.previous);

        // Add two matrices as a grid
        let sum = Matrix.add(this.mulw, this.mulu);

        // Map to activation function
        let mapped = Matrix.map(sum, this.actfunc);

        this.mulv = Matrix.mult(this.V, mapped);
        if (log === true) {
          console.log('Time: ' + t);
          console.log(this.mulv);
        }
        this.previous = mapped;
        this.output = this.mulv;
      }
    }
    let out = Matrix.map(this.output, this.o_actfunc);
    if (roundData) {
      out = Matrix.map(out, (x) => {
        return Math.round(x * dec) / dec;
      });
    }
    let outArray = Matrix.toArray(out);
    if (log) {
      if (table) {
        console.log('Prediction');
        console.table(outArray);
      } else {
        console.log('Prediction');
        console.log(outArray);
      }
    }
    return outArray;
  } else {
    DannError.error(
      'Input sequences length must equal the number of input neurons the Rann model has',
      'Rann.prototype.feed'
    );
    return undefined;
  }
};
