Rann.prototype.toJSON = function toJSON() {
  // Meta
  let strarch = JSON.stringify(this.arch);

  // Weights
  let wstrU = JSON.stringify(this.U.matrix);
  let wstrV = JSON.stringify(this.V.matrix);
  let wstrW = JSON.stringify(this.W.matrix);

  // Gradients
  let gstrU = JSON.stringify(this.dU.matrix);
  let gstrV = JSON.stringify(this.dV.matrix);
  let gstrW = JSON.stringify(this.dW.matrix);

  let gstrUt = JSON.stringify(this.dU_t.matrix);
  let gstrVt = JSON.stringify(this.dV_t.matrix);
  let gstrWt = JSON.stringify(this.dW_t.matrix);

  let gstrUi = JSON.stringify(this.dU_i.matrix);
  let gstrWi = JSON.stringify(this.dW_i.matrix);

  // Layers
  let strlayers = JSON.stringify(this.layers);

  return {
    i: this.i,
    h: this.h,
    o: this.o,
    act: this.actname,
    act_o: this.o_actname,
    lsv: this.largestSequenceValue,
    trun: this.truncate,
    loss: this.loss,
    e: this.epoch,
    lf: this.lossfunc_s,
    lr: this.lr,
    arch: strarch,
    layers: strlayers,
    U: wstrU,
    V: wstrV,
    W: wstrW,
    dU: gstrU,
    dV: gstrV,
    dW: gstrW,
    dU_t: gstrUt,
    dV_t: gstrVt,
    dW_t: gstrWt,
    dU_i: gstrUi,
    dW_i: gstrWi,
  };
};
