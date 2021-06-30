Rann.prototype.feed = function feed(input, options) {
  let log = false;
  if (options !== undefined) {
    if (options.log !== undefined) {
      log = options.log;
    }
  }
  for (let d = 0; d < input.length; d++) {
    this.previous = new Matrix(this.h, 1);
    let input_s = input[d];
    for (let t = 0; t < input[d].length; t++) {
      // New input
      new_input = new Matrix(this.i, 1);
      new_input.matrix[t][0] = input_s[t];

      // Mult input to hidden
      this.mulu = Matrix.mult(this.U, new_input);

      // Add bias
      this.mulu.add(this.bias);

      // Mult previous hidden to current hidden
      this.mulw = Matrix.mult(this.W, this.previous);

      // Add two matrices as a grid.
      let sum = Matrix.addGrid(Matrix.transpose(this.mulw), this.mulu);

      // Matrix.map not working in this case for some reason.
      let mapped = new Matrix(sum.rows, sum.cols);
      for (let i = 0; i < sum.rows; i++) {
        for (let j = 0; j < sum.cols; j++) {
          let v = sum.matrix[i][j];
          mapped.matrix[i][j] = this.actfunc(v);
        }
      }
      this.mapped = mapped;

      this.mulv = Matrix.mult(mapped, Matrix.transpose(this.V));
      if (log === true) {
        console.log('Time: ' + t);
        console.log(this.mulv);
      }
      this.previous = mapped;
      this.output = this.mulv;
    }
  }
  return this.output;
};
