const dn = require('../../../../build/dann.js');
const Dann = dn.dann;

//4-bit counting dataset (& [1,1,0,1] as our test sample):
let dataset = [
  {
    input: [0, 0, 0, 0],
    target: [0, 0, 0, 1],
  },
  {
    input: [0, 0, 0, 1],
    target: [0, 0, 1, 0],
  },
  {
    input: [0, 0, 1, 0],
    target: [0, 0, 1, 1],
  },
  {
    input: [0, 0, 1, 1],
    target: [0, 1, 0, 0],
  },
  {
    input: [0, 1, 0, 0],
    target: [0, 1, 0, 1],
  },
  {
    input: [0, 1, 0, 1],
    target: [0, 1, 1, 0],
  },
  {
    input: [0, 1, 1, 0],
    target: [0, 1, 1, 1],
  },
  {
    input: [0, 1, 1, 1],
    target: [1, 0, 0, 0],
  },
  {
    input: [1, 0, 0, 0],
    target: [1, 0, 0, 1],
  },
  {
    input: [1, 0, 0, 1],
    target: [1, 0, 1, 0],
  },
  {
    input: [1, 0, 1, 0],
    target: [1, 0, 1, 1],
  },
  {
    input: [1, 0, 1, 1],
    target: [1, 1, 0, 0],
  },
  {
    input: [1, 1, 0, 0],
    target: [1, 1, 0, 1],
  },
  //Comenting out one test sample:
  {
    input: [1, 1, 0, 1],
    target: [1, 1, 1, 0],
  },
  {
    input: [1, 1, 1, 0],
    target: [1, 1, 1, 1],
  },
];

//Creating the Neural Network:

let nn = new Dann(4, 4);
nn.addHiddenLayer(12, 'leakyReLU');
nn.outputActivation('sigmoid');
nn.makeWeights();
nn.lr = 0.01;
nn.log();

//Testing before training:

console.log('Before Training');
nn.feedForward([1, 1, 0, 1], { log: true, decimals: 3 });
console.log(' ');

//Training for 500 epochs:

let epoch = 5000;
for (nn.epoch = 0; nn.epoch < epoch; nn.epoch++) {
  let sum = 0;
  for (data of dataset) {
    nn.backpropagate(data.input, data.target);
    sum += nn.loss;
  }
  let avgLoss = sum / dataset.length;
  console.log('Epoch: ' + nn.epoch + ' Loss: ' + avgLoss);
}

//Testing after training :

console.log(' ');
console.log('After Training');
nn.feedForward([1, 1, 0, 1], { log: true, decimals: 3 });
console.log(' ');
console.log(' ');

// The neural network outputs close to [1,1,1,0] if well trained.
