// Object Values
let nn;
let g;
let n;

// Window
let wnx = window.innerWidth;
let wny = window.innerHeight;

let play = false;
// Values
let losses = [];

function setup() {

// NeuralNetwork Creation
    nn = new Dann(4,4);
    nn.addHiddenLayer(6,tanH);
    nn.addHiddenLayer(6,tanH);
    nn.addHiddenLayer(6,tanH);
    nn.makeWeights();
    nn.activation(6,sigmoid);
    nn.lr = 0.001;

    nn.log();

// Graphs
    g = new Graph(0,0,400,200);
    g.addValue(losses,color(0,100,255));
    n = new NetPlot(0,200,400,200,nn);



    createCanvas(wnx,wny);
}

let index = 0;
let count = 0;
function draw() {
    background(41);

    nn.backpropagate(data[index].inputs,data[index].target);
    losses.push(nn.loss);

    if (count >= 10) {
        count = 0;
        if (data.length-1 <= index) {
            index = 0;
        } else {
            index++
        }
    } else {
        count++;
    }

    g.render();
    n.render();



}
