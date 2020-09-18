
let nn;
function setup() {
    nn = new Dann(4,2);
    nn.addHiddenLayer(6,"leakyReLU");
    nn.addHiddenLayer(6,"tanH");
    nn.addHiddenLayer(6,"leakyReLU");
    nn.makeWeights();

    //nn.setActivations(sigmoid,sigmoid_d);

    console.log(nn)
}

function draw() {

}
