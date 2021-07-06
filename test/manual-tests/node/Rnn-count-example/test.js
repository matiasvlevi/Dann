const dn = require('../../../../build/dann.js');
//__________________________ // NODEJS TEST BELOW // __________________________//

// Create the RNN
let rnn = new Rann(2, 32, 2);
rnn.lr = 0.001;

// Train until loss is not greater than 0.001
for (let i = 0; rnn.loss > 0.001; i++) {
  rnn.train([
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
  ]);
  console.log('Loss: ', rnn.loss);
}
// Feed the RNN
rnn.feed([[2, 3]], {
  log: true,
  decimals: 0,
});
