/*
 * Undisplayed documentation
 * Creates dropout matrices
 * @method addDropout
 * @param {Number} rate The probability of a neuron being idle during the backwards pass, preventing it from learning during this pass. A number ranging in between 0 and 1.
 */
Dann.prototype.addDropout = function addDropout(rate) {
  // if weights do not exist, cancel.
  if (this.weights.length === 0) {
    DannError.error(
      'You need to initialize weights before using this function, use Dann.prototype.makeWeights();',
      'Dann.prototype.addDropout'
    );
    return;
  }

  // Set the map function argument 'rate'
  let func = ((v) => {
    let a = 1 - rate;
    return Math.floor(Math.random() + a);
  })
    .toString()
    .replace(/rate/gm, rate);
  let randomMap = eval(func);

  // Determine randomly based on the rate which neuron is inactive
  let inactive = [];
  for (let i = 0; i < this.Layers.length; i++) {
    let neuronList = new Array(this.Layers[i].size).fill(1).map(randomMap);
    inactive.push(neuronList);
  }

  // Create the dropout matrices, which are the same dimensions as a weight matrix
  this.dropout = [];
  for (let i = 0; i < this.weights.length; i++) {
    this.dropout.push(
      new Matrix(this.weights[i].rows, this.weights[i].cols).initiate(1)
    );
  }

  // Iterate through dropout matrices and add a 0 value to every row or column affected by an idle neuron
  for (let i = 0; i < inactive.length; i++) {
    if (i === 0) {
      // Input layer, affects the matrix in front of the layer.
      for (let j = 0; j < inactive[i].length; j++) {
        if (inactive[i][j] === 0) {
          this.dropout[i].fillCol(j, 0);
        }
      }
    } else if (i === inactive.length - 1) {
      // Output layers, affects the matrix before the layer.
      for (let j = 0; j < inactive[i].length; j++) {
        if (inactive[i][j] === 0) {
          this.dropout[i - 1].fillRow(j, 0);
        }
      }
    } else {
      // Hidden layers, affects two matrices.
      for (let j = 0; j < inactive[i].length; j++) {
        if (inactive[i][j] === 0) {
          this.dropout[i - 1].fillRow(j, 0);
          this.dropout[i].fillCol(j, 0);
        }
      }
    }
  }
};
