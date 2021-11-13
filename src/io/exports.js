//Node Module Exports:
if (!isBrowser) {
  module.exports = {
    Dann,
    Layer,
    Matrix,
    Add,
    activations: activations,
    lossfuncs: lossfuncs,
    poolfuncs: poolfuncs,
    XOR,
    makeXOR: makeXOR,
    makeBinary: makeBinary,

    // Leaving old exports for compatibility with older versions
    // Deprecated as of v2.4.0
    dann: Dann,
    layer: Layer,
    matrix: Matrix,
    add: Add,
    xor: XOR,
  };
}
