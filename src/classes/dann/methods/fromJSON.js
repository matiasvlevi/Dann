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

  return this;
};
