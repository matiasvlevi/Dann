Rann.prototype.makeWeights = function makeWeights(min, max) {
  if (min !== undefined || max !== undefined) {
    this.U.randomize(min, max);
    this.V.randomize(min, max);
    this.W.randomize(min, max);
    return;
  } else {
    DannError.error(
      'Must specify minimum and maximum values for weights',
      'Rann.prototype.makeWeights'
    );
  }
};
