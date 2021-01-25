// Exporting Functions:
let activations = {
    leakySigmoid: leakySigmoid,
    leakySigmoid_d: leakySigmoid_d,
    sigmoid: sigmoid,
    sigmoid_d: sigmoid_d,
    tanH: tanH,
    tanH_d: tanH_d,
    siLU: siLU,
    siLU_d: siLU_d,
    reLU: reLU,
    reLU_d: reLU_d,
    leakyReLU: leakyReLU,
    leakyReLU_d: leakyReLU_d,
    leakyReLUCapped: leakyReLUCapped,
    leakyReLUCapped_d: leakyReLUCapped_d
}
let lossfuncs = {
    mae: mae,
    bce: bce,
    lcl: lcl,
    mbe: mbe,
    mce: mce,
    mse: mse,
    rmse: rmse
}
let poolfuncs = {
    max: max,
    min: min,
    avg: avg
}
//Node Module Exports:
if (!isBrowser) {
    module.exports = {
        dann: Dann,
        layer: Layer,
        matrix: Matrix,
        activations: activations,
        lossfuncs: lossfuncs,
        poolfuncs: poolfuncs
    }
}
