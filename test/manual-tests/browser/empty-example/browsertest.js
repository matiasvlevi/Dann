//__________________________ // BROWSER TEST BELOW // __________________________//
let sequence = [];
for (let i = 0; i < 360 * 2; i += 2) {
  let rad = (i * Math.PI) / 180;
  sequence.push(Math.sin(rad));
}

const rnn = new Rann(45, 1);
