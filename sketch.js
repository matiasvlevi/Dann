// Object Values
let nn;
let g;
let n;

// Window
let wnx = window.innerWidth;
let wny = window.innerHeight;

let play = true;
// Values
let losses = [];
let acc = [];
function setup() {

// NeuralNetwork Creation
    nn = new Dann(4,4);
    nn.addHiddenLayer(16,leakyReLU);

    nn.makeWeights();
    nn.activation(6,leakyReLU);
    nn.lr = 0.001;

    nn.log();

// Graphs
    g = new Graph(0,0,800,200);
    g.addValue(losses,color(0,100,255),"loss");
    g.addValue(acc,color(255,100,0),"accuracies")
    n = new NetPlot(0,200,400,400,nn);

    createCanvas(wnx,wny);
}

let index = 0;
let count = 0;
function draw() {
    background(41);
    if (play == true) {
        for (let i = 0; i<data.length;i++) {
            nn.backpropagate(data[i].inputs,data[i].target);

        }
        losses.push(nn.loss);
        let result = 0;
        let sum = 0;
        for (let i = 0; i<testData.length;i++) {
            let out = nn.feedForward(testData[i].inputs);
            for (let j = 0; j < out.length;j++) {
                sum += testData[i].target[j] - out[j];
            }
            result += sum/out.length;

        }
        let accuracy =1 - result/testData.length;
        acc.push(accuracy);

    }


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
