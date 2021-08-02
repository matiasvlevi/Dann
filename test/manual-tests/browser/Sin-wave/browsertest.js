//__________________________ // BROWSER TEST BELOW // __________________________//

let extended = true;

// the length of a sequence
let sequence_length = 16;
// The number of sequences
let nb_sequence = 20;
// Value resolution
let resolution = 0.2;

// Creating the dataset
let dataset = makeSinWave(sequence_length, nb_sequence, resolution);
let ans = dataset.splice(dataset.length - 1, 1)[0];

// Creating the Rann model
let rnn = new Rann(sequence_length, 32, sequence_length);
rnn.lr = 0.0000001;

// Creating the graph values
let gdata = concatArray(dataset); //.concat(ans);

// Creating empty arrays to fill graphs
let empty = new Array(sequence_length * dataset.length);
let extended_empty = new Array((sequence_length + 1) * dataset.length);
let prediction = rnn.feed(dataset);
let extended_prediction = rnn.feed(dataset.concat([prediction]));
let guess = empty.concat(prediction);
let extended_guess = extended_empty.concat(extended_prediction);

// Train the model for X epochs
function train(epoch) {
  for (let e = 0; e < epoch; e++) {
    rnn.train(dataset.concat([ans]));
  }
  console.log('trained ' + epoch + ' epochs');
}

// Graph instance
let graph;

// p5 setup
function setup() {
  // Create the canvas
  createCanvas(650, 600);
  // Create the graph
  graph = new Graph(0, 0, 600, 300);
  graph.max = 1;
  graph.min = -1;
  graph.step = gdata.length * 5;
  graph.addValue(gdata, color(10, 255, 35), 'Truth');
  graph.addValue(guess, color(255, 120, 35), 'Rann Guess');
  if (extended === true) {
    graph.addValue(extended_guess, color(255, 50, 10), 'Extended Guess');
  }
}

// Pause the training
let pause = false;

// p5 draw
train(150);

function draw() {
  background(51);
  if (!pause) {
    // Train 1 epoch
    train(1);

    // update the model's output in the graph
    let prediction = rnn.feed([dataset[dataset.length - 1]]);
    guess = empty.concat(prediction);
    graph.updateValue(1, guess);

    if (extended === true) {
      let extended_prediction = rnn.feed([prediction]);
      extended_guess = extended_empty.concat(extended_prediction);
      graph.updateValue(2, extended_guess);
    }
    // Display graph
    graph.render();
  }
}
