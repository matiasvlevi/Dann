// Object Values
let nn;
let g;
let n;
let h;
let info;
// Window
let wnx = window.innerWidth;
let wny = window.innerHeight;

let play = true;
// Values
let losses = [];
let acc = [];

let archtype = [];

function preload() {

}
function setup() {

    let ans = prompt("Dann Architechture:");
    let ans2 = prompt("Learning Rate:");

    let lr = JSON.parse(ans2);
    let archtype = JSON.parse("["+ans+"]");
    nn = new Dann(archtype[0],archtype[archtype.length-1]);
    for (let i = 1; i < archtype.length-1; i++) {
        nn.addHiddenLayer(archtype[i],leakyReLU);
    }
    nn.makeWeights();
    nn.activation(archtype.length-2,sigmoid);
    nn.lr = lr;

    nn.log();
// NeuralNetwork Creation
    // nn = new Dann(4,4);
    //
    // nn.addHiddenLayer(16,leakyReLU);
    // nn.makeWeights();
    // nn.activation(2,sigmoid);
    // nn.lr = 0.01;
    //
    // nn.log();

// Graphs
    g = new Graph(0,10,800,200);
    g.addValue(losses,color(0,100,255),"loss");
    g.addValue(acc,color(255,100,0),"accuracies")
    n = new NetPlot(25,220,550,380,nn);
    h = new GradientGraph(580,375,100,100,nn);
    h.initiateValues();
    h.pixelSize = 5;
    info = new InfoBox(586,220,220,400);

    createCanvas(wnx+(wnx/2),wny);

}

let index = 0;
let count = 0;
function draw() {
    background(41);
    if (play == true) {
        let sum_ =0;
        for (let i = 0; i<data.length;i++) {
            nn.backpropagate(data[i].inputs,data[i].target);
            sum_+=nn.loss;
        }
        losses.push(sum_/data.length);
        let res = 0;

        for (let i = 0; i<testData.length;i++) {
            let out = nn.feedForward(testData[i].inputs);
            let sum = 0;
            for (let j = 0; j < out.length;j++) {
                let record = testData[i].target[j] - out[j];
                if (record < 0) {
                    record *= -1;
                }
                sum += record;
            }
            res += sum/out.length;

        }
        let accuracy = 1 - (res/(testData.length));
        acc.push(accuracy);

        nn.feedForward(testData[index].inputs);




    }


    if (count >= 50) {
        count = 0;
        if (testData.length-1 <= index) {
            index = 0;
        } else {
            index++
        }
    } else {
        count++;
    }

    g.render();
    n.render();
    h.render();
    info.render();


}
