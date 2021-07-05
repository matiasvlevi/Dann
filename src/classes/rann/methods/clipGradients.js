/*
 * Undisplaed documentation,
 * This method allows for the gradients to keep a certan threshold value in order to avoid 'gradient explosion'
 * @method clipGradients
 * @param {Number} min_clip
 * @param {Number} max_clip
 * @returns
 */
Rann.prototype.clipGradients = function clipGradients(min_clip, max_clip) {
  // Clip maximum
  let dUmax = this.dU.max();
  if (dUmax > max_clip) {
    let s = max_clip / dUmax;
    this.dU.map((x) => x * s);
  }
  let dVmax = this.dV.max();
  if (dVmax > max_clip) {
    let s = max_clip / dVmax;
    this.dV.map((x) => x * s);
  }
  let dWmax = this.dW.max();
  if (dWmax > max_clip) {
    let s = max_clip / dWmax;
    this.dW.map((x) => x * s);
  }
  // Clip minimum
  let dUmin = this.dU.min();
  if (dUmin < min_clip) {
    let s = min_clip / dUmin;
    this.dU.map((x) => x * s);
  }
  let dVmin = this.dV.min();
  if (dVmin < min_clip) {
    let s = min_clip / dVmin;
    this.dV.map((x) => x * s);
  }
  let dWmin = this.dW.min();
  if (dWmin < min_clip) {
    let s = min_clip / dWmin;
    this.dW.map((x) => x * s);
  }

  return;
};
