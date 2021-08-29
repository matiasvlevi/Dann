/*
 * Undisplayed documentation
 * Creates dropout matrices
 * @method addDropout
 * @param {Number} rate The probability of a neuron being idle during the backwards pass, preventing it from learning during this pass. A number ranging in between 0 and 1.
 */
Dann.prototype.addDropout = function addDropout(rate) {
  // if not init, cancel
  if (this.weights.length === 0) {
    DannError.error(
      'You need to initialize weights before using this function',
      'Dann.prototype.addDropout'
    );
    return;
  }
  this.dropout = [];

  // Set the map function argument 'rate'
  let func = ((v) => {
    let a = 1 - rate;
    return Math.floor(Math.random() + a);
  })
    .toString()
    .replace(/rate/gm, rate);

  let randomMap = eval(func);
  let inactive = [];
  for (let i = 0; i < this.Layers.length; i++) {
    let neuronList = new Array(this.Layers[i].size).fill(1).map(randomMap);
    inactive.push(neuronList);
  }
  for (let i = 0; i < this.weights.length; i++) {
    this.dropout.push(
      new Matrix(this.weights[i].rows, this.weights[i].cols).initiate(1)
    );
  }
  for (let i = 0; i < inactive.length; i++) {
    if (i === 0) {
      for (let j = 0; j < inactive[i].length; j++) {
        if (inactive[i][j] === 0) {
          this.dropout[i].fillCol(j, 0);
        }
      }
    } else if (i === inactive.length - 1) {
      for (let j = 0; j < inactive[i].length; j++) {
        if (inactive[i][j] === 0) {
          this.dropout[i - 1].fillRow(j, 0);
        }
      }
    } else {
      for (let j = 0; j < inactive[i].length; j++) {
        if (inactive[i][j] === 0) {
          this.dropout[i - 1].fillRow(j, 0);
          this.dropout[i].fillCol(j, 0);
        }
      }
    }
  }
};
