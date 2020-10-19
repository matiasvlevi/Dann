// Object Values
let nn;
let g;
let n;
let h;
let info;
// Window
let wnx = window.innerWidth;
let wny = window.innerHeight;

let play = false;
// Values
let losses = [];
let acc = [];
let epoch = 0;
let archtype = [];
let time = 150;
let index = 0;
let count = 0;
function setup() {



//NeuralNetwork Creation
    nn = new Dann(4,4);


    nn.addHiddenLayer(16,leakyReLU);

    nn.makeWeights();
    //nn.activation(3,sigmoid);


    nn.lr = 0.01;

    nn.log();

// Graphs
    g = new Graph(0,10,800,200);
    g.addValue(losses,color(0,100,255),"loss");
    g.addValue(acc,color(255,100,0),"accuracies")
    g.step = data.length;
    n = new NetPlot(25,220,400,200,nn);
    n.size = 6;
    n.frame = false;
    // h = new GradientGraph(600,375,100,100,nn);
    // h.initiateValues();
    // h.pixelSize = 5;
    // info = new InfoBox(586,220,220,400);
    //
    createCanvas(wnx+(wnx/2),wny);

}


function draw() {
    background(25);
    if (play == true) {
        for (let i = 0; i<data.length;i++) {
            nn.backpropagate(data[i].inputs,data[i].target);
            losses.push(nn.loss);
        }
        epoch++;

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
        for (let i =0; i < data.length; i++) {
            acc.push(accuracy);
        }


        nn.feedForward(testData[index].inputs);

        text("epoch: "+epoch,10,20);


    }


    if (count >= time) {
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
    // h.render();
    // info.render();


}
