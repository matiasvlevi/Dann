/**
 * Feed data through the model to obtain an output or prediction.
 * @method feedForward
 * @for Dann
 * @param {Array} inputs Array of input data.
 * @param {Object} [options] Object including specific properties.
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
 *
 * @return {Array} Array of output predictions.
 * @example
 * <code>
 * const nn = new Dann(4, 2);
 * nn.makeWeights();
 * let prediction = nn.feedForward([0,0,0,1], {log:true});
 * //outputs an array of length 2
 * console.log(prediction);
 * </code>
 */

Dann.prototype.feedForward = function feedForward(inputs, options = {}) {
  //optional parameter values:
  let showLog = options.log || false;
  let table = options.table || false;
  let roundData = false;
  let dec = pow(10, options.decimals) || 1000;
  if (options.decimals !== undefined) {
    roundData = true;
  }

  if (inputs.length === this.i) {
    this.Layers[0].layer = Matrix.fromArray(inputs);
  } else {
    for (let i = 0; i < this.o; i++) {
      this.outs[i] = 0;
    }
    DannError.error(
      'The input array length does not match the number of inputs the dannjs model has.',
      'Dann.prototype.feedForward'
    );
    return this.outs;
  }
  if (this.weights.length === 0) {
    DannError.warn(
      'The weights were not initiated. Please use the Dann.makeWeights(); function after the initialization of the layers.',
      'Dann.prototype.feedForward'
    );
    this.makeWeights();
  }

  for (let i = 0; i < this.weights.length; i++) {
    let pLayer = this.Layers[i];

    let layerObj = this.Layers[i + 1];

    layerObj.layer = Matrix.mult(this.weights[i], pLayer.layer);
    layerObj.layer.add(this.biases[i]);
    layerObj.layer.map(layerObj.actfunc);
  }

  this.outs = Matrix.toArray(this.Layers[this.Layers.length - 1].layer);
  let out = this.outs;
  if (showLog === true) {
    if (roundData === true) {
      out = out.map((x) => round(x * dec) / dec);
    }
    if (table === true) {
      console.log('Prediction: ');
      console.table(out);
    } else {
      console.log('Prediction: ');
      console.log(out);
    }
  }
  return out;
};
Dann.prototype.feed = function feed(inputs, options) {
  return this.feedForward(inputs, options);
};

/**
 * Applies a json object to a Dann model.
 * @method fromJSON
 * @for Dann
 * @param {Object} data model data json object, you can get this object from a yourmodel.toJSON(); See docs <a href="https:/dannjs.org">here</a>.
 * @return {Dann} A Dann model.
 * @example
 * <code>
 * const nn = new Dann(24,4);
 * nn.addHiddenLayer(18,'tanH');
 * nn.addHiddenLayer(12,'sigmoid');
 * nn.makeWeights();
 * const modelData = nn.toJSON();
 * const newNN = new Dann();
 * newNN.fromJSON(modelData);
 * newNN.log();
 * </code>
 */
Dann.prototype.fromJSON = function fromJSON(data) {
  this.i = data.arch[0];
  this.inputs = new Matrix(this.i, 1);
  this.o = data.arch[data.arch.length - 1];
  this.outputs = new Matrix(this.o, 1);

  let slayers = JSON.parse(data.lstr);
  for (let i = 0; i < slayers.length; i++) {
    let layerdata = JSON.parse(slayers[i]);
    let layerObj = new Layer(layerdata.type, layerdata.size, layerdata.actname);
    this.Layers[i] = layerObj;
  }
  this.makeWeights();
  let sweights = JSON.parse(data.wstr);
  for (let i = 0; i < sweights.length; i++) {
    this.weights[i].set(JSON.parse(sweights[i]));
  }
  let sbiases = JSON.parse(data.bstr);
  for (let i = 0; i < sbiases.length; i++) {
    this.biases[i].set(JSON.parse(sbiases[i]));
  }
  let serrors = JSON.parse(data.estr);
  for (let i = 0; i < serrors.length; i++) {
    this.errors[i].set(JSON.parse(serrors[i]));
  }
  let sgradients = JSON.parse(data.gstr);
  for (let i = 0; i < sgradients.length; i++) {
    this.gradients[i].set(JSON.parse(sgradients[i]));
  }

  this.lossfunc_s = data.lf;
  if (isBrowser) {
    this.lossfunc = window[data.lf];
  } else {
    this.lossfunc = lossfuncs[data.lf];
  }
  this.outs = Matrix.toArray(this.Layers[this.Layers.length - 1].layer);
  this.loss = data.loss;
  this.losses = [];
  this.lr = data.lrate;
  this.arch = data.arch;
  this.epoch = data.e;
  this.percentile = data.per;
  return this;
};
Dann.prototype.feed = function feed(inputs, options) {
  return this.feedForward(inputs, options);
};
