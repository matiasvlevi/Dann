/**
 * Creates the weights. This function should be called after all the hidden layers were added. The optional parameters determine the range in which starting weights are going to be set randomly. If no arguments are specified, weights are going to be set in between -1 and 1.
 * @method makeWeights
 * @for Dann
 * @param {Number} [arg1] The minimum range value.
 * @param {Number} [arg2] The maximum range value.
 * @example
 * <code>
 * const nn = new Dann(2, 2);
 * // initiate the Weights
 * nn.makeWeights();
 * // log weights
 * nn.log({weights:true, table:true});
 * // add a layer & re-initiate weights in a range of (-0.1, 0.1)
 * nn.addHiddenLayer(4, 'sigmoid');
 * nn.makeWeights(-0.1, 0.1);
 * // log weights
 * console.log('New re-initiated weights:');
 * nn.log({weights:true, table:true});
 * </code>
 */
Dann.prototype.makeWeights = function makeWeights(arg1, arg2) {
  let min = -1;
  let max = 1;
  if (arg1 !== undefined && arg2 !== undefined) {
    min = arg1;
    max = arg2;
  }
  for (let i = 0; i < this.Layers.length - 1; i++) {
    let previousLayerObj = this.Layers[i];
    let layerObj = this.Layers[i + 1];

    let weights = new Matrix(layerObj.layer.rows, previousLayerObj.layer.rows);
    let biases = new Matrix(layerObj.layer.rows, 1);

    weights.randomize(min, max);
    biases.randomize(1, -1);
    this.weights[i] = weights;
    this.biases[i] = biases;

    this.errors[i] = new Matrix(layerObj.layer.rows, 1);
    this.gradients[i] = new Matrix(layerObj.layer.rows, 1);

    if (layerObj.actfunc === undefined) {
      layerObj.setFunc('sigmoid');
    }
  }
  for (let i = 0; i < this.Layers.length; i++) {
    let layerObj = this.Layers[i];
    this.arch[i] = layerObj.layer.rows;
  }
};
