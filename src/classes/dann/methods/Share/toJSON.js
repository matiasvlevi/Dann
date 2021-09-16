/**
 * @module Dann
 * @submodule Share
 */
/**
 * Gets a dannData object.
 * @method toJSON
 * @return {Object} A dannData object.
 * @example
 * <code>
 * const nn = new Dann(24, 4);
 * nn.addHiddenLayer(12, 'sigmoid');
 * nn.makeWeights();
 * // Getting json
 * const modelData = nn.toJSON();
 * const newNN = new Dann();
 * // Setting
 * newNN.fromJSON(modelData);
 * newNN.log();
 * </code>
 */
Dann.prototype.toJSON = function toJSON() {
  //weights
  let wdata = [];
  for (let i = 0; i < this.weights.length; i++) {
    wdata[i] = JSON.stringify(this.weights[i].matrix);
  }
  let w_str = JSON.stringify(wdata);
  //layers
  let ldata = [];
  for (let i = 0; i < this.Layers.length; i++) {
    ldata[i] = JSON.stringify(this.Layers[i]);
  }
  let l_str = JSON.stringify(ldata);
  //biases
  let bdata = [];
  for (let i = 0; i < this.biases.length; i++) {
    bdata[i] = JSON.stringify(this.biases[i].matrix);
  }
  let b_str = JSON.stringify(bdata);
  //errors
  let edata = [];
  for (let i = 0; i < this.errors.length; i++) {
    edata[i] = JSON.stringify(this.errors[i].matrix);
  }
  let e_str = JSON.stringify(edata);
  //gradients
  let gdata = [];
  for (let i = 0; i < this.gradients.length; i++) {
    gdata[i] = JSON.stringify(this.gradients[i].matrix);
  }
  let g_str = JSON.stringify(gdata);
  const data = {
    wstr: w_str,
    lstr: l_str,
    bstr: b_str,
    estr: e_str,
    gstr: g_str,
    arch: this.arch,
    lrate: this.lr,
    lf: this.lossfunc_s,
    loss: this.loss,
    e: this.epoch,
    per: this.percentile,
  };
  return data;
};
