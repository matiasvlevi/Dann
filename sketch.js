
let nn;
function setup() {
    nn = new Dann(4,2);

    nn.addHiddenLayer(6,sigmoidal_1);
    nn.addHiddenLayer(6);
    nn.addHiddenLayer(6,leakyReLU);
// make the weights after initiating layers:
    nn.makeWeights();
// to set the output's activation:
    nn.activation(3,tanH);
// to set all activations:
    //nn.setActivations(tanH);

    console.log(nn)
}

function draw() {

}
