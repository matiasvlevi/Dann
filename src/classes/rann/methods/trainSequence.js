/*
 * Undisplayed documentation.
 * Train a Rann model according to sequence data.
 * @method trainSequence
 * @param {Array} input An array of sequences.
 * @param {Array} target An expected output sequence
 * @example
 * <code>
 * const rnn = new Rann(2, 10, 2);
 * rnn.train([
 *  [1, 2],
 *  [3, 4],
 *  [5, 6]
 * ],
 * [7, 8]
 * );
 * </code>
 */
Rann.prototype.trainSequence = function trainSequence(input, target) {
  if (this.validateSequences(input)) {
    let y = Matrix.fromArray(target);
    let sequence;
    let input_s;
    for (let d = 0; d < input.length; d++) {
      this.previous = new Matrix(this.h, 1);

      input_s = input[d];
      sequence = input_s.length;

      this.layers = [];

      this.dU = new Matrix(this.h, this.i);
      this.dV = new Matrix(this.o, this.h);
      this.dW = new Matrix(this.h, this.h);

      this.dU_t = new Matrix(this.h, this.i);
      this.dV_t = new Matrix(this.o, this.h);
      this.dW_t = new Matrix(this.h, this.h);

      this.dU_i = new Matrix(this.h, this.i);
      this.dW_i = new Matrix(this.h, this.h);

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
        this.sum = sum;
        // Map to activation function
        let mapped = Matrix.map(sum, this.actfunc);

        this.mulv = Matrix.mult(this.V, mapped);
        this.layers.push({ current: mapped, previous: this.previous });
        this.previous = mapped;
      }
      // Error difference
      this.dmulv = Matrix.sub(this.mulv, y);
      this.loss = this.lossfunc(Matrix.toArray(this.mulv), target);
    }
    for (let t = 0; t < sequence; t++) {
      // Derivative of V
      this.dV_t = Matrix.mult(
        this.dmulv,
        Matrix.transpose(this.layers[t]['current'])
      );
      // Derivative of mulv
      let dsv = Matrix.mult(Matrix.transpose(this.V), this.dmulv);
      // Copy previous forward sums
      let sum = this.sum;
      let sum_ = this.sum;
      // Create all 1 matrix
      let submatrix = new Matrix(sum.rows, sum.cols);
      submatrix.initiate(1);

      // Find dadd
      let sumsub = Matrix.sub(submatrix, sum_);
      let summult = sum.mult(dsv);
      let dadd = sumsub.mult(summult);

      // Derivative of mulw
      let ones_mulw = new Matrix(this.mulw.rows, this.mulw.cols);
      ones_mulw.initiate(1);
      this.dmulw = dadd.mult(ones_mulw);
      let max_ = Math.max(-1, t - this.truncate - 1);

      for (let i = t - 1; i > max_; i -= 1) {
        // Derivative of mulu
        let ones_mulu = new Matrix(this.mulu.rows, this.mulu.cols);
        ones_mulu.initiate(1);
        this.dmulu = dadd.mult(ones_mulu);

        this.dW_i = Matrix.mult(this.W, this.layers[t]['previous']);

        let new_input = new Matrix(sequence, 1);
        new_input.matrix[t][0] = input_s[t];

        this.dU_i = Matrix.mult(this.U, new_input);

        this.dU_t = Matrix.addColumn(this.dU_t, this.dU_i);
        this.dW_t = Matrix.addColumn(this.dW_t, this.dW_i);
      }
      this.dV.add(this.dV_t);
      this.dU.add(this.dU_t);
      this.dW.add(this.dW_t);
    }

    this.clipGradients(-10, 10);

    this.U.sub(this.dU.mult(this.lr));
    this.V.sub(this.dV.mult(this.lr));
    this.W.sub(this.dW.mult(this.lr));

    return undefined;
  } else {
    DannError.error(
      'Input sequences length must equal the number of input neurons the Rann model has',
      'Rann.prototype.trainSequence'
    );
  }
};
