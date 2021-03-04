//__________________________ // BROWSER TEST BELOW // __________________________//
const nn =  new Dann(24,2);
nn.addHiddenLayer(16,'siLU');
nn.makeWeights();

nn.outputActivation('tanH');

nn.lr = 0.01;

nn.log();
