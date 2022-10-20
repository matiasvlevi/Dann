const { Dann } = require('../../../../build/dann.js');
//__________________________ // NODEJS TEST BELOW // __________________________//

const nn = new Dann(1024, 512)

nn.addHiddenLayer(1024);
nn.addHiddenLayer(1024);
nn.makeWeights();
nn.log();

function spoofDataSample() {
  return {
    input: new Array(2048).fill(2).map(x => x*Math.random()-1),
    output: new Array(512).fill(2).map(x => x*Math.random()-1),
  }
}

const data = [];
for (let i = 0; i < 10; i++) {
  data.push(spoofDataSample());
}

nn.train(data, {
  gpu: true,
  epoch: 10,
});
