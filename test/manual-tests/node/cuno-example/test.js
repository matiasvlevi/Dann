const { Dann } = require('../../../../build/dann.js');
//__________________________ // NODEJS TEST BELOW // __________________________//

//

const nn = new Dann(32 * 32 * 3, 10);

nn.addHiddenLayer(32 * 32);
nn.addHiddenLayer(24 * 24);
nn.addHiddenLayer(12 * 12);
nn.makeWeights();
nn.log();
//
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

console.log('Native Biases', nn.biases[0].matrix);

let VALUE = 0.34;
console.log(`${VALUE}: `);
console.log(
  nn.feed(new Array(32 * 32 * 3).fill(VALUE), {
    gpu: true,
  })
);

console.log(nn.feed(new Array(32 * 32 * 3).fill(VALUE)));

VALUE = 1;
console.log(`${VALUE}: `);
console.log(
  nn.feed(new Array(32 * 32 * 3).fill(VALUE), {
    gpu: true,
  })
);

console.log(nn.feed(new Array(32 * 32 * 3).fill(VALUE)));

VALUE = 0;
console.log(`${VALUE}: `);
console.log(
  nn.feed(new Array(32 * 32 * 3).fill(VALUE), {
    gpu: true,
  })
);

console.log(nn.feed(new Array(32 * 32 * 3).fill(VALUE)));

VALUE = 3.2;
console.log(`${VALUE}: `);
console.log(
  nn.feed(new Array(32 * 32 * 3).fill(VALUE), {
    gpu: true,
  })
);

console.log(nn.feed(new Array(32 * 32 * 3).fill(VALUE)));

VALUE = 0.032;
console.log(`${VALUE}: `);
console.log(
  nn.feed(new Array(32 * 32 * 3).fill(VALUE), {
    gpu: true,
  })
);

console.log(nn.feed(new Array(32 * 32 * 3).fill(VALUE)));

VALUE = 0.65;
console.log(`${VALUE}: `);
console.log(
  nn.feed(new Array(32 * 32 * 3).fill(VALUE), {
    gpu: true,
  })
);

console.log(nn.feed(new Array(32 * 32 * 3).fill(VALUE)));
