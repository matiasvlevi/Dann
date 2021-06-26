//Node Module Exports:
if (!isBrowser) {
  module.exports = {
    dann: Dann,
    rann: Rann,
    layer: Layer,
    matrix: Matrix,
    activations: activations,
    lossfuncs: lossfuncs,
    poolfuncs: poolfuncs,
    xor: XOR,
    makeXOR: makeXOR,
    makeBinary: makeBinary,
    add: Add,
  };
}
