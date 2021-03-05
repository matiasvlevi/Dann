const dn = require('../build/dann.js');
const Dann = dn.dann;
const Layer = dn.layer;
const Matrix = dn.matrix;
const activations = dn.activations;
const lossfuncs = dn.lossfuncs;
const poolfuncs = dn.poolfuncs;
//__________________________ // NODEJS TEST BELOW // __________________________//


require('mathjs');

let size = 4096;
let epoch = 10;
let input = [];
for (let i = 0; i < size; i++) {
    input[i] = Math.random();
}
const gpuNN = new Dann(size,3,{mode:'gpu'});
gpuNN.addHiddenLayer(size,'leakyReLU');
gpuNN.makeWeights();
gpuNN.makeKernels();
gpuNN.log()
console.time('gpuNN');
for (let i = 0; i < epoch; i++) {
    gpuNN.backpropagate(input,[0,1,0]);
}
console.timeEnd('gpuNN');

const cpuNN = new Dann(size,3);
cpuNN.addHiddenLayer(size,'leakyReLU');
cpuNN.makeWeights();
cpuNN.log()

console.time('cpuNN');
for (let i = 0; i < epoch; i++) {
    cpuNN.backpropagate(input,[0,1,0]);
}
console.timeEnd('cpuNN');
