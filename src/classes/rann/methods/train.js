Rann.prototype.train = function train(input, target) {
  let y = Matrix.fromArray(target);
  for (let d = 0; d < input.length; d++) {
    this.previous = new Matrix(this.h, 1);

    let input_s = input[d];
    let sequence = input_s.length;

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
      // Derivative of mulu
      let ones_mulu = new Matrix(this.mulu.rows, this.mulu.cols);
      ones_mulu.initiate(1);
      this.dmulu = dadd.mult(ones_mulu);
    }
  }
};
