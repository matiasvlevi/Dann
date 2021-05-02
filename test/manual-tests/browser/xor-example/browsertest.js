//XOR dataset:
const dataset = [
  {
    input: [0, 0],
    target: [0],
  },
  {
    input: [1, 1],
    target: [0],
  },
  {
    input: [0, 1],
    target: [1],
  },
  {
    input: [1, 0],
    target: [1],
  },
];

//Creating the Neural Network:
const xorNN = new Dann(2, 1);
xorNN.addHiddenLayer(6, 'tanH');
xorNN.outputActivation('sigmoid');
xorNN.makeWeights();
xorNN.lr = 0.1;
xorNN.log();

//Testing before training:
console.log(' ');
console.log('Before Training');
for (data of dataset) {
  xorNN.feedForward(data.input, { log: true, decimals: 3 });
}

//Training for 10 000 epochs:
const epoch = 10000;
for (let e = 0; e < epoch; e++) {
  for (data of dataset) {
    xorNN.backpropagate(data.input, data.target);
  }
}

//Testing after training :
console.log(' ');
console.log('After Training');
for (data of dataset) {
  xorNN.feedForward(data.input, { log: true, decimals: 3 });
}

// Output should be close to:
//   0,0: [0]
//   1,1: [0]
//   0,1: [1]
//   1,0: [1]
