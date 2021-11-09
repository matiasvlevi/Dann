Dann.logDefaults = function logDefaults() {
  return {
    struct: true,
    misc: true,
    weights: false,
    gradients: false,
    errors: false,
    layers: false,
    table: false,
    decimals: 3,
    details: false,
  };
};

Dann.ffwDefaults = function ffwDefaults() {
  return {
    log: false,
    table: false,
    decimals: undefined,
  };
};

Dann.bckDefaults = function bckDefaults() {
  return {
    log: false,
    mode: 'cpu',
    saveLoss: false,
    table: false,
    dropout: undefined,
  };
};
