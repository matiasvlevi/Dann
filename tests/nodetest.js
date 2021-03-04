const dn = require('../build/dann.js');
const Dann = dn.dann;
const Layer = dn.layer;
const Matrix = dn.matrix;
const activations = dn.activations;
const lossfuncs = dn.lossfuncs;
const poolfuncs = dn.poolfuncs;
//__________________________ // NODEJS TEST BELOW // __________________________//
require('mathjs');

let size = 1;
let input = [];
for (let i = 0; i < 2048; i++) {
    input[i] = Math.random();
}
const gpuNN = new Dann(2048,2048,{mode:'gpu'});

gpuNN.makeWeights();
gpuNN.makeKernels();
gpuNN.log()
console.time('gpuNN');
for (let i = 0; i < size; i++) {
    gpuNN.feedForward(input);
}
console.timeEnd('gpuNN');

const cpuNN = new Dann(2048,2048);

cpuNN.makeWeights();

console.time('cpuNN');
for (let i = 0; i < size; i++) {
    cpuNN.feedForward(input);
}
console.timeEnd('cpuNN');
