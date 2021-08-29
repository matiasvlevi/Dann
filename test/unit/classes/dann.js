suite('Dann Object', function () {
  suite('constructor', function () {
    suite('Without arguments', function () {
      let nn;
      setup(function () {
        nn = new Dann();
      });
      test('Should be an instance of Dann', function () {
        assert.instanceOf(nn, Dann);
      });
      test('Should have 1 input & 1 output', function () {
        assert.equal(1, nn.i);
        assert.equal(1, nn.o);
        assert.equal(1, nn.Layers[0].size);
        assert.equal(1, nn.Layers[1].size);
      });
      test('Should have initiated 2 layers with type input, output', function () {
        assert.equal('input', nn.Layers[0].type);
        assert.equal('output', nn.Layers[1].type);
      });
      test('Should have corresponding arch array', function () {
        assert.equal(1, nn.arch[0]);
        assert.equal(1, nn.arch[1]);
      });
      test('Should have initiated an output layer with sigmoid', function () {
        assert.equal('sigmoid', nn.Layers[1].actname);
        assert.equal('sigmoid_d', nn.Layers[1].actname_d);
        assert.equal(act.sigmoid, nn.Layers[1].actfunc);
        assert.equal(act.sigmoid_d, nn.Layers[1].actfunc_d);
      });
    });
    suite('With arguments & makeWeights', function () {
      let nn;
      setup(function () {
        nn = new Dann(4, 2);
        nn.makeWeights();
      });
      test('Should be an instance of Dann', function () {
        assert.instanceOf(nn, Dann);
      });
      test('Should have 4 inputs & 2 outputs', function () {
        assert.equal(4, nn.i);
        assert.equal(2, nn.o);
        assert.equal(4, nn.Layers[0].size);
        assert.equal(2, nn.Layers[1].size);
      });
      test('Should have initiated 2 layers with type input, output', function () {
        assert.equal('input', nn.Layers[0].type);
        assert.equal('output', nn.Layers[1].type);
      });
      test('Should have set arch array', function () {
        assert.equal(4, nn.arch[0]);
        assert.equal(2, nn.arch[1]);
      });
      test('Should have initiated an output layer with sigmoid', function () {
        assert.equal('sigmoid', nn.Layers[1].actname);
        assert.equal('sigmoid_d', nn.Layers[1].actname_d);
        assert.equal(act.sigmoid, nn.Layers[1].actfunc);
        assert.equal(act.sigmoid_d, nn.Layers[1].actfunc_d);
      });
      test('Should have initiated errors matrices', function () {
        for (let i = 0; i < 1; i++) {
          assert.instanceOf(nn.gradients[i], Matrix);
          assert.equal(nn.errors[i].cols, 1);
          assert.equal(nn.errors[i].rows, 2);
          assert.equal(nn.errors[i].matrix[0].length, 1);
          assert.equal(nn.errors[i].matrix.length, 2);
          assert.equal(nn.errors[i].matrix[0][0], 0);
          assert.equal(nn.errors[i].matrix[1][0], 0);
          assert.typeOf(nn.errors[i].matrix[0][0], 'Number');
          assert.typeOf(nn.errors[i].matrix[1][0], 'Number');
        }
      });
      test('Should have initiated gradients matrices', function () {
        for (let i = 0; i < 1; i++) {
          assert.instanceOf(nn.gradients[i], Matrix);
          assert.equal(nn.gradients[i].cols, 1);
          assert.equal(nn.gradients[i].rows, 2);
          assert.equal(nn.gradients[i].matrix[0].length, 1);
          assert.equal(nn.gradients[i].matrix.length, 2);
          assert.equal(nn.gradients[i].matrix[0][0], 0);
          assert.equal(nn.gradients[i].matrix[1][0], 0);
          assert.typeOf(nn.gradients[i].matrix[0][0], 'Number');
          assert.typeOf(nn.gradients[i].matrix[1][0], 'Number');
        }
      });
      test('Should have initiated biases matrices', function () {
        for (let i = 0; i < 1; i++) {
          assert.instanceOf(nn.biases[i], Matrix);
          assert.equal(nn.biases[i].cols, 1);
          assert.equal(nn.biases[i].rows, 2);
          assert.equal(nn.biases[i].matrix[0].length, 1);
          assert.equal(nn.biases[i].matrix.length, 2);
          assert.typeOf(nn.biases[i].matrix[0][0], 'Number');
          assert.typeOf(nn.biases[i].matrix[1][0], 'Number');
        }
      });
      test('Should have initiated weight matrices', function () {
        for (let i = 0; i < 1; i++) {
          assert.instanceOf(nn.weights[i], Matrix);
          assert.equal(nn.weights[i].cols, 4);
          assert.equal(nn.weights[i].rows, 2);
          assert.equal(nn.weights[i].matrix[0].length, 4);
          assert.equal(nn.weights[i].matrix.length, 2);
          for (let x = 0; x < nn.weights[i].rows; x++) {
            for (let y = 0; y < nn.weights[i].cols; y++) {
              assert.typeOf(nn.weights[i].matrix[x][0], 'Number');
            }
          }
        }
      });
      test('Should have initiated out empty array', function () {
        assert.instanceOf(nn.outs, Array);
        assert.equal(nn.outs.length, 0);
      });
      test('Should have initiated loss value', function () {
        assert.equal(nn.loss, 0);
        assert.typeOf(nn.loss, 'Number');
      });
      test('Should have initiated learning rate value', function () {
        assert.equal(nn.lr, 0.001);
        assert.typeOf(nn.lr, 'Number');
      });
      test('Should have initiated loss function value', function () {
        assert.equal(nn.lossfunc, lossfuncs.mse);
        assert.equal(nn.lossfunc_s, 'mse');
      });
      test('Should have initiated epoch value to 0', function () {
        assert.equal(nn.epoch, 0);
        assert.typeOf(nn.epoch, 'Number');
      });
    });
    suite('mapping weights', function () {
      let nn;
      let w0;
      setup(function () {
        nn = new Dann(2, 2);
        nn.makeWeights(-1, 1);
        w0 = nn.weights[0].matrix[0][0];
      });
      test('should not be the same weight as before', function () {
        nn.mapWeights((x) => {
          return 2 * x;
        });
        assert.notEqual(w0, nn.weights[0].matrix[0][0]);
      });
    });
    suite('With bigger model', function () {
      let nn;
      setup(function () {
        nn = new Dann(16, 16);
        nn.addHiddenLayer(32, 'leakyReLU');
        nn.addHiddenLayer(64, 'leakyReLU');
        nn.addHiddenLayer(32, 'leakyReLU');
        nn.outputActivation('tanH');
        nn.setLossFunction('mael');
        nn.lr = 0.0001;
        nn.makeWeights();
      });
      test('Should be an instance of Dann', function () {
        assert.instanceOf(nn, Dann);
      });
      test('Should have 16 inputs & 16 outputs', function () {
        assert.equal(16, nn.i);
        assert.equal(16, nn.o);
        assert.equal(16, nn.Layers[0].size);
        assert.equal(16, nn.Layers[nn.Layers.length - 1].size);
      });
      test('Should have initiated 5 layers with type input, 3x hidden, output', function () {
        let types = ['input', 'hidden', 'hidden', 'hidden', 'output'];
        for (let i = 0; i < types.length; i++) {
          assert.equal(types[i], nn.Layers[i].type);
        }
      });
      test('Should have set arch array', function () {
        let archArr = [16, 32, 64, 32, 16];
        for (let i = 0; i < archArr.length; i++) {
          assert.equal(archArr[i], nn.arch[i]);
        }
      });
      test('Should have initiated an output layer with sigmoid', function () {
        let acts = ['leakyReLU', 'leakyReLU', 'leakyReLU', 'tanH'];
        //starts at one to ignore input
        for (let i = 1; i < acts.length; i++) {
          let name = acts[i - 1];
          let derivative = name + '_d';
          assert.equal(name, nn.Layers[i].actname);
          assert.equal(derivative, nn.Layers[i].actname_d);
          assert.equal(act[name], nn.Layers[i].actfunc);
          assert.equal(act[derivative], nn.Layers[i].actfunc_d);
        }
      });
      test('Should have initiated errors matrices', function () {
        for (let i = 0; i < 4; i++) {
          assert.instanceOf(nn.errors[i], Matrix);
          assert.equal(nn.errors[i].cols, 1);
          assert.equal(nn.errors[i].rows, nn.Layers[i + 1].size);
          assert.equal(nn.errors[i].matrix[0].length, 1);
          assert.equal(nn.errors[i].matrix.length, nn.Layers[i + 1].size);
          for (let x = 0; x < nn.errors[i].rows; x++) {
            for (let y = 0; y < nn.errors[i].cols; y++) {
              assert.equal(nn.errors[i].matrix[x][y], 0);
              assert.typeOf(nn.errors[i].matrix[x][y], 'Number');
            }
          }
        }
      });
      test('Should have initiated gradients matrices', function () {
        for (let i = 0; i < 4; i++) {
          assert.instanceOf(nn.gradients[i], Matrix);
          assert.equal(nn.gradients[i].cols, 1);
          assert.equal(nn.gradients[i].rows, nn.Layers[i + 1].size);
          assert.equal(nn.gradients[i].matrix[0].length, 1);
          assert.equal(nn.gradients[i].matrix.length, nn.Layers[i + 1].size);
          for (let x = 0; x < nn.gradients[i].rows; x++) {
            for (let y = 0; y < nn.gradients[i].cols; y++) {
              assert.equal(nn.gradients[i].matrix[x][y], 0);
              assert.typeOf(nn.gradients[i].matrix[x][y], 'Number');
            }
          }
        }
      });
      test('Should have initiated biases matrices', function () {
        for (let i = 0; i < 4; i++) {
          assert.instanceOf(nn.biases[i], Matrix);
          assert.equal(nn.biases[i].cols, 1);
          assert.equal(nn.biases[i].rows, nn.Layers[i + 1].size);
          assert.equal(nn.biases[i].matrix[0].length, 1);
          assert.equal(nn.biases[i].matrix.length, nn.Layers[i + 1].size);
          for (let x = 0; x < nn.biases[i].rows; x++) {
            for (let y = 0; y < nn.biases[i].cols; y++) {
              assert.typeOf(nn.biases[i].matrix[x][y], 'Number');
            }
          }
        }
      });
      test('Should have initiated weights matrices', function () {
        for (let i = 1; i < 4; i++) {
          assert.instanceOf(nn.weights[i], Matrix);
          assert.equal(nn.weights[i].cols, nn.Layers[i].size);
          assert.equal(nn.weights[i].rows, nn.Layers[i + 1].size);
          assert.equal(nn.weights[i].matrix[0].length, nn.Layers[i].size);
          assert.equal(nn.weights[i].matrix.length, nn.Layers[i + 1].size);
          for (let x = 0; x < nn.weights[i].rows; x++) {
            for (let y = 0; y < nn.weights[i].cols; y++) {
              assert.typeOf(nn.weights[i].matrix[x][y], 'Number');
            }
          }
        }
      });
      test('Should have initiated out empty array', function () {
        assert.instanceOf(nn.outs, Array);
        assert.equal(nn.outs.length, 0);
      });
      test('Should have initiated loss value', function () {
        assert.equal(nn.loss, 0);
        assert.typeOf(nn.loss, 'Number');
      });
      test('Should have initiated learning rate value', function () {
        assert.equal(nn.lr, 0.0001);
        assert.typeOf(nn.lr, 'Number');
      });
      test('Should have initiated loss function value', function () {
        assert.equal(nn.lossfunc, lossfuncs.mael);
        assert.equal(nn.lossfunc_s, 'mael');
      });
      test('Should have initiated epoch value to 0', function () {
        assert.equal(nn.epoch, 0);
        assert.typeOf(nn.epoch, 'Number');
      });
    });
    suite('Setting a loss function', function () {
      let nn;
      setup(function () {
        nn = new Dann(12, 4);
        nn.addHiddenLayer(16);
        nn.makeWeights();
        nn.setLossFunction('mael');
      });
      test('Should have initiated mael loss function', function () {
        assert.equal(nn.lossfunc, lossfuncs.mael);
        assert.equal(nn.lossfunc_s, 'mael');
      });
    });
    suite('Setting a loss function with percentile', function () {
      let nn;
      setup(function () {
        nn = new Dann(12, 4);
        nn.addHiddenLayer(16);
        nn.makeWeights();
        nn.setLossFunction('quantile', 0.2);
      });
      test('Should have initiated quantile loss function with 20% percentile', function () {
        assert.equal(nn.lossfunc, lossfuncs.quantile);
        assert.equal(nn.percentile, 0.2);
        assert.equal(nn.lossfunc_s, 'quantile');
      });
    });
  });
  suite('addHiddenLayer', function () {
    suite('add one 16 neuron tanH hidden layer', function () {
      setup(function () {
        nn = new Dann(1000, 1000);
        nn.addHiddenLayer(16, 'tanH');
        nn.makeWeights();
      });
      test('Should have 3 layers in total', function () {
        assert.equal(nn.Layers.length, 3);
        for (let i = 0; i < nn.Layers.length; i++) {
          assert.instanceOf(nn.Layers[i], Layer);
        }
      });
      test('Should have set "hidden" layer type', function () {
        assert.equal('hidden', nn.Layers[1].type);
      });
      test('Should have 16 neurons', function () {
        assert.equal(nn.Layers[1].size, 16);
      });
      test('Should have initiated a tanH activation', function () {
        assert.equal('tanH', nn.Layers[1].actname);
        assert.equal('tanH_d', nn.Layers[1].actname_d);
        assert.equal(act.tanH, nn.Layers[1].actfunc);
        assert.equal(act.tanH_d, nn.Layers[1].actfunc_d);
      });
      test('Should have initiated matrix', function () {
        assert.instanceOf(nn.Layers[1].layer, Matrix);
        assert.equal(nn.Layers[1].layer.cols, 1);
        assert.equal(nn.Layers[1].layer.rows, 16);
        assert.equal(nn.Layers[1].layer.matrix.length, 16);
        assert.equal(nn.Layers[1].layer.matrix[0].length, 1);
      });
      test('Should have corresponding arch array', function () {
        let archArr = [1000, 16, 1000];
        for (let i = 0; i < archArr.length; i++) {
          assert.equal(archArr[i], nn.arch[i]);
        }
      });
    });
    suite('Not specifying any activation', function () {
      let nn;
      setup(function () {
        nn = new Dann(6, 6);
        nn.addHiddenLayer(12);
        nn.outputActivation('tanH');
        nn.makeWeights();
        nn.lr = 0.01;
      });
      test('Should have 3 layers in total', function () {
        let length = 3;
        assert.equal(nn.Layers.length, length);
        for (let i = 0; i < length; i++) {
          assert.instanceOf(nn.Layers[i], Layer);
        }
      });
      test('Should have set "hidden" layer type', function () {
        let types = ['input', 'hidden', 'output'];
        for (let i = 0; i < types.length; i++) {
          assert.equal(nn.Layers[i].type, types[i]);
        }
      });
      test('Should have initiated a sigmoid activation', function () {
        let acts = ['sigmoid', 'tanH'];
        //starts at one to ignore input
        for (let i = 1; i < acts.length; i++) {
          let name = acts[i - 1];
          let derivative = name + '_d';
          assert.equal(name, nn.Layers[i].actname);
          assert.equal(derivative, nn.Layers[i].actname_d);
          assert.equal(act[name], nn.Layers[i].actfunc);
          assert.equal(act[derivative], nn.Layers[i].actfunc_d);
        }
      });
    });
  });
  suite('toFunction', function () {
    suite('Test with 4 layer nn', function () {
      let nn;
      let funcstr;
      setup(function () {
        nn = new Dann(4, 4);
        nn.addHiddenLayer(256, 'sigmoid');
        nn.addHiddenLayer(64, 'tanH');
        nn.makeWeights();
        funcstr = nn.toFunction();
      });
      test('Should have the same output prediction as the original model', function () {
        let ans = nn.feedForward([1, 1, 1, 1]);
        let ansfunc = eval('(' + funcstr + ')([1,1,1,1])');
        for (let i = 0; i < ans.length; i++) {
          assert.equal(ans[i], ansfunc[i]);
        }
      });
    });
    suite('Test with deep nn', function () {
      let nn;
      let funcstr;
      setup(function () {
        nn = new Dann(8, 12);
        nn.addHiddenLayer(256, 'sigmoid');
        nn.addHiddenLayer(128, 'tanH');
        nn.addHiddenLayer(64, 'leakyReLU');
        nn.addHiddenLayer(32, 'siLU');
        nn.outputActivation('tanH');
        nn.makeWeights(-1, 1);
        funcstr = nn.toFunction();
      });
      test('Should have the same output prediction as the original model', function () {
        let ans = nn.feedForward([1, 1, 1, 1, 0, 1, 0, 1]);
        let ansfunc = eval('(' + funcstr + ')([1,1,1,1,0,1,0,1])');
        for (let i = 0; i < ans.length; i++) {
          assert.equal(ans[i], ansfunc[i]);
        }
      });
    });
    suite('Naming', function () {
      let nn;
      let funcstr;
      setup(function () {
        nn = new Dann(1, 1);
        nn.makeWeights();
        funcstr = nn.toFunction('functionName');
      });
      test('Should have set the function name', function () {
        let name = eval('(' + funcstr + ').name');
        assert.equal(name, 'functionName');
      });
    });
  });
  suite('outputActivation', function () {
    suite('Setting an output activation', function () {
      let nn;
      setup(function () {
        nn = new Dann(12, 4);
        nn.addHiddenLayer(16);
        nn.makeWeights();
        nn.outputActivation('reLU');
      });
      test('Should have initiated a reLU activation function for the output', function () {
        let name = 'reLU';
        let derivative = name + '_d';
        assert.equal(name, nn.Layers[2].actname);
        assert.equal(derivative, nn.Layers[2].actname_d);
        assert.equal(act[name], nn.Layers[2].actfunc);
        assert.equal(act[derivative], nn.Layers[2].actfunc_d);
      });
    });
  });
  suite('feedForward & backpropagate', function () {
    suite('Aliases', function () {
      let nn;
      setup(function () {
        nn = new Dann();
      });
      test('feedForward should have alias feed', function () {
        let output = nn.feed([1]);
        assert.typeOf(output, 'Array');
      });
      test('backpropagate should have alias train', function () {
        nn.train([1], [0]);
        assert.typeOf(nn.loss, 'Number');
      });
    });
    suite('XOR Training', function () {
      let nn;
      let dataset;
      setup(function () {
        dataset = XOR;
        nn = new Dann(2, 1);
        nn.addHiddenLayer(12, 'leakyReLU');
        nn.outputActivation('sigmoid');
        nn.makeWeights(-0.5, 0.5);
        nn.lr = 0.12;
      });
      test('Should output a prediction without any training', function () {
        for (data of dataset) {
          let pred = nn.feedForward(data.input);
          assert.typeOf(pred[0], 'Number');
          assert.instanceOf(pred, Array);
        }
      });
      test('Should output a prediction after 5000 epochs (99% accuracy required to pass)', function () {
        for (let e = 0; e < 5000; e++) {
          for (data of dataset) {
            nn.backpropagate(data.input, data.output);
          }
        }
        for (data of dataset) {
          let pred = nn.feedForward(data.input);
          assert.typeOf(pred[0], 'Number');
          assert.instanceOf(pred, Array);
          assert.closeTo(pred[0], data.output[0], 0.03);
        }
      });
    });
  });
  suite('Save & Load JSON', function () {
    suite('toJSON & fromJSON train test', function () {
      let nn;
      let nn1;
      let dataset;
      setup(function () {
        nn = new Dann(2, 1);
        nn.addHiddenLayer(12, 'siLU');
        nn.outputActivation('sigmoid');
        nn.setLossFunction('lcl');
        nn.makeWeights(-0.5, -0.5);
        nn.lr = 0.1;
        dataset = XOR;
        for (nn.epoch = 0; nn.epoch < 8000; nn.epoch++) {
          for (data of dataset) {
            nn.backpropagate(data.input, data.output);
          }
        }
      });
      let dannData;
      test('Save a json with toJSON', function () {
        let data = nn.toJSON();
        assert.typeOf(data, 'object');
        dannData = JSON.stringify(data);
      });

      test('Load the saved json value into a previously created model with fromJSON', function () {
        let data = JSON.parse(dannData);
        nn1 = new Dann();
        nn1.fromJSON(data);
      });
      test('Should have initiated loss function value', function () {
        assert.equal(nn1.lossfunc, lossfuncs.lcl);
        assert.equal(nn1.lossfunc_s, 'lcl');
      });
      test('Should have loaded epoch value to 8000', function () {
        assert.equal(nn.epoch, 8000);
        assert.typeOf(nn.epoch, 'Number');
      });
      test('Should have loaded layers activations', function () {
        let acts = ['siLU', 'tanH'];
        //starts at one to ignore input
        for (let i = 1; i < acts.length; i++) {
          let name = acts[i - 1];
          let derivative = name + '_d';
          assert.equal(name, nn1.Layers[i].actname);
          assert.equal(derivative, nn1.Layers[i].actname_d);
          assert.equal(act[name], nn1.Layers[i].actfunc);
          assert.equal(act[derivative], nn1.Layers[i].actfunc_d);
        }
      });
      test('Should have loaded errors matrices', function () {
        for (let i = 0; i < 2; i++) {
          assert.instanceOf(nn1.errors[i], Matrix);
          assert.equal(nn1.errors[i].cols, 1);
          assert.equal(nn1.errors[i].rows, nn1.Layers[i + 1].size);
          assert.equal(nn1.errors[i].matrix[0].length, 1);
          assert.equal(nn1.errors[i].matrix.length, nn1.Layers[i + 1].size);
          for (let x = 0; x < nn.errors[i].rows; x++) {
            for (let y = 0; y < nn.errors[i].cols; y++) {
              assert.typeOf(nn1.errors[i].matrix[x][y], 'Number');
            }
          }
        }
      });
      test('Should have loaded gradients matrices', function () {
        for (let i = 0; i < 2; i++) {
          assert.instanceOf(nn1.gradients[i], Matrix);
          assert.equal(nn1.gradients[i].cols, 1);
          assert.equal(nn1.gradients[i].rows, nn1.Layers[i + 1].size);
          assert.equal(nn1.gradients[i].matrix[0].length, 1);
          assert.equal(nn1.gradients[i].matrix.length, nn1.Layers[i + 1].size);
          for (let x = 0; x < nn.gradients[i].rows; x++) {
            for (let y = 0; y < nn.gradients[i].cols; y++) {
              assert.typeOf(nn1.gradients[i].matrix[x][y], 'Number');
            }
          }
        }
      });
      test('Should have loaded biases matrices', function () {
        for (let i = 0; i < 2; i++) {
          assert.instanceOf(nn1.biases[i], Matrix);
          assert.equal(nn1.biases[i].cols, 1);
          assert.equal(nn1.biases[i].rows, nn1.Layers[i + 1].size);
          assert.equal(nn1.biases[i].matrix[0].length, 1);
          assert.equal(nn1.biases[i].matrix.length, nn1.Layers[i + 1].size);
          for (let x = 0; x < nn.biases[i].rows; x++) {
            for (let y = 0; y < nn.biases[i].cols; y++) {
              assert.typeOf(nn1.biases[i].matrix[x][y], 'Number');
            }
          }
        }
      });
      test('Should have loaded weights matrices', function () {
        for (let i = 1; i < 2; i++) {
          assert.instanceOf(nn1.weights[i], Matrix);
          assert.equal(nn1.weights[i].cols, nn1.Layers[i].size);
          assert.equal(nn1.weights[i].rows, nn1.Layers[i + 1].size);
          assert.equal(nn1.weights[i].matrix[0].length, nn1.Layers[i].size);
          assert.equal(nn1.weights[i].matrix.length, nn1.Layers[i + 1].size);
          for (let x = 0; x < nn.weights[i].rows; x++) {
            for (let y = 0; y < nn.weights[i].cols; y++) {
              assert.typeOf(nn1.weights[i].matrix[x][y], 'Number');
            }
          }
        }
      });
      test('Should be as accurate as the previous model (85% accuracy required to pass)', function () {
        for (data of dataset) {
          let pred = nn.feedForward(data.input);
          assert.typeOf(pred[0], 'Number');
          assert.instanceOf(pred, Array);
          assert.closeTo(pred[0], data.output[0], 0.15);
        }
      });
    });
    suite('Dropout mechanic with backpropagate option', function () {
      let nn;
      setup(function () {
        nn = new Dann(4, 2);
        nn.addHiddenLayer(4);
        nn.makeWeights();

        nn.backpropagate([1, 1, 1, 1], [0, 1], { dropout: 0.1 });
      });
      test('Should have created dropout matrices', function () {
        assert.equal(nn.dropout.length, nn.weights.length);
        for (let i = 0; i < 2; i++) {
          assert.equal(nn.dropout[i].rows, nn.weights[i].rows);
          assert.equal(nn.dropout[i].cols, nn.weights[i].cols);
          for (let j = 0; j < nn.dropout[i].rows; j++) {
            for (let k = 0; k < nn.dropout[i].cols; k++) {
              assert.typeOf(nn.dropout[i].matrix[j][k], 'Number');
            }
          }
        }
      });
    });
    suite('Dropout mechanic with method', function () {
      let nn;
      setup(function () {
        nn = new Dann(4, 2);
        nn.addHiddenLayer(4);
        nn.makeWeights();

        nn.addDropout(0.1);
      });
      test('Should have created dropout matrices', function () {
        assert.equal(nn.dropout.length, nn.weights.length);
        for (let i = 0; i < 2; i++) {
          assert.equal(nn.dropout[i].rows, nn.weights[i].rows);
          assert.equal(nn.dropout[i].cols, nn.weights[i].cols);
          for (let j = 0; j < nn.dropout[i].rows; j++) {
            for (let k = 0; k < nn.dropout[i].cols; k++) {
              assert.typeOf(nn.dropout[i].matrix[j][k], 'Number');
            }
          }
        }
      });
    });
    suite('toJSON & fromJSON train test', function () {
      let nn;
      let nn1;
      let dataset;
      setup(function () {
        nn = new Dann(2, 1);
        nn.addHiddenLayer(12, 'leakyReLU');
        nn.outputActivation('sigmoid');
        nn.setLossFunction('lcl');
        nn.makeWeights(-0.5, 0.5);
        nn.lr = 0.1;
        dataset = XOR;
        for (nn.epoch = 0; nn.epoch < 8000; nn.epoch++) {
          for (data of dataset) {
            nn.backpropagate(data.input, data.output);
          }
        }
      });
      let dannData;
      test('Save a json with toJSON', function () {
        let data = nn.toJSON();
        assert.typeOf(data, 'object');
        dannData = JSON.stringify(data);
      });

      test('Load the saved json value into a previously created model with fromJSON', function () {
        let data = JSON.parse(dannData);
        nn1 = Dann.createFromJSON(data);
      });
      test('Should have initiated loss function value', function () {
        assert.equal(nn1.lossfunc, lossfuncs.lcl);
        assert.equal(nn1.lossfunc_s, 'lcl');
      });
      test('Should have loaded epoch value to 5000', function () {
        assert.equal(nn.epoch, 8000);
        assert.typeOf(nn.epoch, 'Number');
      });
      test('Should have loaded layers activations', function () {
        let acts = ['leakyReLU', 'tanH'];
        //starts at one to ignore input
        for (let i = 1; i < acts.length; i++) {
          let name = acts[i - 1];
          let derivative = name + '_d';
          assert.equal(name, nn1.Layers[i].actname);
          assert.equal(derivative, nn1.Layers[i].actname_d);
          assert.equal(act[name], nn1.Layers[i].actfunc);
          assert.equal(act[derivative], nn1.Layers[i].actfunc_d);
        }
      });
      test('Should have loaded errors matrices', function () {
        for (let i = 0; i < 2; i++) {
          assert.instanceOf(nn1.errors[i], Matrix);
          assert.equal(nn1.errors[i].cols, 1);
          assert.equal(nn1.errors[i].rows, nn1.Layers[i + 1].size);
          assert.equal(nn1.errors[i].matrix[0].length, 1);
          assert.equal(nn1.errors[i].matrix.length, nn1.Layers[i + 1].size);
          for (let x = 0; x < nn.errors[i].rows; x++) {
            for (let y = 0; y < nn.errors[i].cols; y++) {
              assert.typeOf(nn1.errors[i].matrix[x][y], 'Number');
            }
          }
        }
      });
      test('Should have loaded gradients matrices', function () {
        for (let i = 0; i < 2; i++) {
          assert.instanceOf(nn1.gradients[i], Matrix);
          assert.equal(nn1.gradients[i].cols, 1);
          assert.equal(nn1.gradients[i].rows, nn1.Layers[i + 1].size);
          assert.equal(nn1.gradients[i].matrix[0].length, 1);
          assert.equal(nn1.gradients[i].matrix.length, nn1.Layers[i + 1].size);
          for (let x = 0; x < nn.gradients[i].rows; x++) {
            for (let y = 0; y < nn.gradients[i].cols; y++) {
              assert.typeOf(nn1.gradients[i].matrix[x][y], 'Number');
            }
          }
        }
      });
      test('Should have loaded biases matrices', function () {
        for (let i = 0; i < 2; i++) {
          assert.instanceOf(nn1.biases[i], Matrix);
          assert.equal(nn1.biases[i].cols, 1);
          assert.equal(nn1.biases[i].rows, nn1.Layers[i + 1].size);
          assert.equal(nn1.biases[i].matrix[0].length, 1);
          assert.equal(nn1.biases[i].matrix.length, nn1.Layers[i + 1].size);
          for (let x = 0; x < nn.biases[i].rows; x++) {
            for (let y = 0; y < nn.biases[i].cols; y++) {
              assert.typeOf(nn1.biases[i].matrix[x][y], 'Number');
            }
          }
        }
      });
      test('Should have loaded weights matrices', function () {
        for (let i = 1; i < 2; i++) {
          assert.instanceOf(nn1.weights[i], Matrix);
          assert.equal(nn1.weights[i].cols, nn1.Layers[i].size);
          assert.equal(nn1.weights[i].rows, nn1.Layers[i + 1].size);
          assert.equal(nn1.weights[i].matrix[0].length, nn1.Layers[i].size);
          assert.equal(nn1.weights[i].matrix.length, nn1.Layers[i + 1].size);
          for (let x = 0; x < nn.weights[i].rows; x++) {
            for (let y = 0; y < nn.weights[i].cols; y++) {
              assert.typeOf(nn1.weights[i].matrix[x][y], 'Number');
            }
          }
        }
      });
      test('Should be as accurate as the previous model (5% accuracy required to pass)', function () {
        for (data of dataset) {
          let pred = nn.feedForward(data.input);
          assert.typeOf(pred[0], 'Number');
          assert.instanceOf(pred, Array);
          assert.closeTo(pred[0], data.output[0], 0.05);
        }
      });
    });
  });
});
