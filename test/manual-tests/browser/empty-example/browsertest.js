//__________________________ // BROWSER TEST BELOW // __________________________//

const nn = new Dann(2, 1);
nn.addHiddenLayer(4);
nn.addHiddenLayer(3);
nn.makeWeights();
// nn.addDropout(0.1);
nn.log({ weights: true });
