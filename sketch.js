// Object Values
let nn;
let g;
let n;
let h;
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
    nn.addHiddenLayer(16,leakyReLU);
    nn.makeWeights();
    nn.activation(2,sigmoid);
    nn.lr = 0.001;

    nn.log();

// Graphs
    g = new Graph(0,25,800,200);
    g.addValue(losses,color(0,100,255),"loss");
    g.addValue(acc,color(255,100,0),"accuracies")
    n = new NetPlot(400,225,400,400,nn);
    h = new GradientGraph(100,225,100,100,nn)
    h.pixelSize = 10;

    createCanvas(wnx,wny);
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
    h.render();



}
