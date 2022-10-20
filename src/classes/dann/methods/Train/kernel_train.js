Dann.prototype.kernel_train = function kernel_train(data, options) {
  let weights = [];
  for (let k = 0; k < this.weights.length; k++) {
    let weight_set = [];
    for (let i = 0; i < this.weights[k].rows; i++) {
      weight_set = weight_set.concat(this.weights[k].matrix[i]);
    }
    weights.push(weight_set);
  }

  let biases = [];
  for (let k = 0; k < this.biases.length; k++) {
    let biases_set = [];
    for (let i = 0; i < this.biases[k].rows; i++) {
      biases_set = biases_set.concat(this.biases[k].matrix[i]);
    }
    biases.push(biases_set);
  }

  data = data.map((point) => Object.values(point));

  console.log(this.arch, weights, biases, data, options.epoch);
  let debug = global.Cuno.train(
    this.arch,
    weights,
    biases,
    data,
    options.epoch
  );

  console.log(debug);
};
