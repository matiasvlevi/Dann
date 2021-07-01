Rann.prototype.feed = function feed(input, options) {
  if (Rann.checkSequences(input, this.i)) {
    let log = false;
    if (options !== undefined) {
      if (options.log !== undefined) {
        log = options.log;
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
    return Matrix.toArray(out);
  } else {
    DannError.error(
      'Input sequences length must equal the number of input neurons the Rann model has',
      'Rann.prototype.feed'
    );
    return undefined;
  }
};
