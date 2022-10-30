const { Dann } = require('../../../../build/dann.js');
//__________________________ // NODEJS TEST BELOW // __________________________//

const nn = new Dann(
  32 * 32 * 3,
  10
);

nn.addHiddenLayer(32 * 32);
nn.addHiddenLayer(24 * 24);
nn.addHiddenLayer(12 * 12);
nn.makeWeights();
nn.log();


function spoofDataSample() {
  return {
    input: new Array(1024).fill(2).map((x) => x * Math.random() - 1),
    output: new Array(512).fill(2).map((x) => x * Math.random() - 1),
  };
}

const data = [];
for (let i = 0; i < 10; i++) {
  data.push(spoofDataSample());
}

nn.train(data, {
  gpu: true,
  epoch: 10,
});

console.log(nn.feed(new Array(32 * 32 * 3).fill(1)));

