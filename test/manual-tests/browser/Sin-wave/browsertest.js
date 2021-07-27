//__________________________ // BROWSER TEST BELOW // __________________________//

// the length of a sequence
let sequence_length = 50;

// Creating the dataset
let dataset = makeSinWave(sequence_length, 16, 0.1);
let ans = dataset.splice(dataset.length - 1, 1)[0];

// Creating the Rann model
let rnn = new Rann(sequence_length, 50, sequence_length);
rnn.makeWeights(-1, 1);
rnn.setActivation('tanH');
rnn.lr = 0.00001;


// Creating the graph values
let gdata = concatArray(dataset).concat(ans);
// Creating empty arrays to fill graphs
let empty = new Array(sequence_length * (dataset.length + 1));
let prediction = rnn.feed(dataset);
let guess = empty.concat(prediction);


// Train the model for X epochs
function train(epoch) {
  for (let e = 0; e < epoch; e++) {
    rnn.trainSequence(dataset, ans);
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

}

// Pause the training
let pause = false;

// p5 draw
function draw() {
  background(51);
  if (!pause) {

    // Train 1 epoch
    train(1);

    // update the model's output in the graph 
    guess = empty.concat(rnn.feed([dataset[dataset.length - 2]]));
    graph.updateValue(1, guess);

    // Display graph        
    graph.render();

  }
}