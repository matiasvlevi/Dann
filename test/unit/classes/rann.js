suite('Rann Class', function () {
  suite('Constructor', function () {
    suite('With arguments', function () {
      let rnn;
      setup(function () {
        rnn = new Rann(8, 32, 8);
      });
      test('Should have (8,32,8) architechture', function () {
        assert.equal(rnn.i, 8);
        assert.equal(rnn.h, 32);
        assert.equal(rnn.o, 8);
        let arch = [8, 32, 8];
        for (let i = 0; i < 3; i++) {
          assert.equal(rnn.arch[i], arch[i]);
        }
      });
      test('Should have initiated activation functions', function () {
        assert.exists(rnn.actfunc);
        assert.exists(rnn.actfunc_d);
        assert.exists(rnn.actname);
        assert.equal(rnn.actname, 'sigmoid');
        assert.equal(rnn.actfunc, act.sigmoid);
        assert.equal(rnn.actfunc_d, act.sigmoid_d);

        assert.exists(rnn.o_actfunc);
        assert.exists(rnn.o_actfunc_d);
        assert.exists(rnn.o_actname);
        assert.equal(rnn.o_actname, 'linear');
      });
      test('Should have initiated loss function', function () {
        // Loss function
        assert.exists(rnn.lossfunc);
        assert.exists(rnn.lossfunc_s);
        assert.equal(rnn.lossfunc, lossfuncs.mse);
        assert.equal(rnn.lossfunc_s, 'mse');
        // Loss value
        assert.equal(rnn.loss, 100);
      });
      test('Should have initiated weights', function () {
        assert.exists(rnn.U);
        assert.exists(rnn.W);
        assert.exists(rnn.V);
      });
      test('Should have created "layer" array', function () {
        assert.exists(rnn.layers);
        assert.equal(rnn.layers.length, 0);
      });
      test('Should have created weights with the right dimensions', function () {
        for (let i = 0; i < 32; i++) {
          for (let j = 0; j < 8; j++) {
            assert.typeOf(rnn.U.matrix[i][j], 'Number');
          }
        }
        for (let i = 0; i < 32; i++) {
          for (let j = 0; j < 32; j++) {
            assert.typeOf(rnn.W.matrix[i][j], 'Number');
          }
        }
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 32; j++) {
            assert.typeOf(rnn.V.matrix[i][j], 'Number');
          }
        }
      });
      test('Should have initiated gradients', function () {
        assert.exists(rnn.dU);
        assert.exists(rnn.dW);
        assert.exists(rnn.dV);
      });
      test('Should have created gradients with the right dimensions', function () {
        for (let i = 0; i < 32; i++) {
          for (let j = 0; j < 8; j++) {
            assert.typeOf(rnn.dU.matrix[i][j], 'Number');
          }
        }
        for (let i = 0; i < 32; i++) {
          for (let j = 0; j < 32; j++) {
            assert.typeOf(rnn.dW.matrix[i][j], 'Number');
          }
        }
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 32; j++) {
            assert.typeOf(rnn.dV.matrix[i][j], 'Number');
          }
        }
      });
    });
  });
  suite('setActivation', function () {
    suite('', function () {
      let rnn;
      setup(function () {
        rnn = new Rann(2, 10, 2);
        rnn.setActivation('tanH');
      });
      test('Should have set activation to "tanH"', function () {
        assert.equal(rnn.actname, 'tanH');
        assert.equal(rnn.actfunc, act.tanH);
        assert.equal(rnn.actfunc_d, act.tanH_d);
      });
      test('Should not change if typo error in activation name', function () {
        rnn.setActivation('leakyrelu');
        assert.equal(rnn.actname, 'tanH');
        assert.equal(rnn.actfunc, act.tanH);
        assert.equal(rnn.actfunc_d, act.tanH_d);
      });
    });
  });
  suite('setLossFunction', function () {
    suite('', function () {
      let rnn;
      setup(function () {
        rnn = new Rann(8, 32, 8);
        rnn.setLossFunction('mael');
      });
      test('Should have changed the loss function', function () {
        assert.equal(rnn.lossfunc_s, 'mael');
        assert.equal(rnn.lossfunc, lossfuncs.mael);
      });
      test('Should not change if typo in loss function', function () {
        rnn.setLossFunction('notAnActivation');
        assert.equal(rnn.lossfunc_s, 'mael');
        assert.equal(rnn.lossfunc, lossfuncs.mael);
      });
    });
  });
  suite('clipGradients', function () {
    suite('', function () {
      let rnn;
      setup(function () {
        rnn = new Rann(4, 64, 4);
        rnn.dU.initiate(2);
        rnn.dW.initiate(-4);
        rnn.dV.initiate(8);
        rnn.clipGradients(-1, 1);
      });
      test('Should have clipped dU', function () {
        for (let i = 0; i < 64; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(rnn.dU.matrix[i][j], 1);
          }
        }
      });
      test('Should have clipped dW', function () {
        for (let i = 0; i < 64; i++) {
          for (let j = 0; j < 64; j++) {
            assert.equal(rnn.dW.matrix[i][j], -1);
          }
        }
      });
      test('Should have clipped dV', function () {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 64; j++) {
            assert.equal(rnn.dV.matrix[i][j], 1);
          }
        }
      });
    });
  });
  suite('makeWeights', function () {
    suite('', function () {
      let rnn;
      setup(function () {
        rnn = new Rann(8, 16, 8);
        rnn.makeWeights(2, 3);
      });
      test('Should have initiated new weights in between 2 & 3 for U', function () {
        for (let i = 0; i < 16; i++) {
          for (let j = 0; j < 8; j++) {
            assert.operator(2, '<', rnn.U.matrix[i][j]);
            assert.operator(3, '>', rnn.U.matrix[i][j]);
          }
        }
      });
      test('Should have initiated new weights in between 2 & 3 for W', function () {
        for (let i = 0; i < 16; i++) {
          for (let j = 0; j < 16; j++) {
            assert.operator(2, '<', rnn.W.matrix[i][j]);
            assert.operator(3, '>', rnn.W.matrix[i][j]);
          }
        }
      });
      test('Should have initiated new weights in between 2 & 3 for V', function () {
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 16; j++) {
            assert.operator(2, '<', rnn.V.matrix[i][j]);
            assert.operator(3, '>', rnn.V.matrix[i][j]);
          }
        }
      });
    });
  });
  suite('feed', function () {
    suite('', function () {
      let rnn;
      setup(function () {
        rnn = new Rann(2, 32, 2);
      });
      test('Should return an array', function () {
        let out = rnn.feed([
          [1, 2],
          [3, 4],
        ]);
        assert.typeOf(out, 'Array');
      });
      test('Should return an array of numbers', function () {
        let out = rnn.feed([
          [1, 2],
          [3, 4],
        ]);
        for (let i = 0; i < 2; i++) {
          assert.typeOf(out[i], 'Number');
        }
      });
    });
  });
  suite('train', function () {
    suite('', function () {
      let rnn;
      let data;
      setup(function () {
        rnn = new Rann(3, 16, 3);
        rnn.lr = 0.01;
        expected = [0, 1, 0];
      });
      test('Should have changed the loss value', function () {
        rnn.train([
          [1, 0, 1],
          [0, 1, 0],
          [1, 0, 1],
          [0, 1, 0],
        ]);
        assert.operator(rnn.loss, '<', 100);
      });
      test('Should output accurate predictions', function () {
        for (let i = 0; i < 1000; i++) {
          rnn.train([
            [1, 0, 1],
            [0, 1, 0],
            [1, 0, 1],
            [0, 1, 0],
          ]);
        }
        let out = rnn.feed([[1, 0, 1]], { decimals: 0 });
        for (let i = 0; i < 3; i++) {
          assert.equal(out[i], expected[i]);
        }
      });
    });
  });
  suite('toJSON & fromJSON', function () {
    suite('Should save the model to JSON properly', function () {
      let rnn;
      let rnn2;
      let guess;
      let json;
      setup(function () {
        rnn = new Rann(2, 16, 2);
        rnn.train([
          [0, 0],
          [1, 1],
        ]);
        guess = rnn.feed([[0, 0]]);
        json = rnn.toJSON();
        rnn2 = new Rann();
        rnn2.fromJSON(json);
      });
      test('Should have saved meta data', function () {
        assert.equal(json.i, 2);
        assert.equal(json.h, 16);
        assert.equal(json.o, 2);
        assert.equal(json.act, 'sigmoid');
        assert.equal(json.act_o, 'linear');
        assert.equal(json.lr, rnn.lr);
        assert.equal(json.lf, rnn.lossfunc_s);
        assert.equal(json.lsv, 1);
      });
      test('Should have saved layers array', function () {
        let layers = JSON.parse(json.layers);
        assert.equal(layers[0].current.shape, rnn.layers[0].current.shape);
        assert.equal(layers[0].previous.shape, rnn.layers[0].previous.shape);
        assert.equal(layers[1].current.shape, rnn.layers[1].current.shape);
        assert.equal(layers[1].previous.shape, rnn.layers[1].previous.shape);
      });
      test('Should have saved weights', function () {
        let u = new Matrix().set(JSON.parse(json.U));
        let w = new Matrix().set(JSON.parse(json.W));
        let v = new Matrix().set(JSON.parse(json.V));
        assert.equal(u.shape, rnn.U.shape);
        assert.equal(w.shape, rnn.W.shape);
        assert.equal(v.shape, rnn.V.shape);
      });
      test('Should have saved gradients', function () {
        let du = new Matrix().set(JSON.parse(json.dU));
        let dw = new Matrix().set(JSON.parse(json.dW));
        let dv = new Matrix().set(JSON.parse(json.dV));
        assert.equal(du.shape, rnn.dU.shape);
        assert.equal(dw.shape, rnn.dW.shape);
        assert.equal(dv.shape, rnn.dV.shape);

        let dut = new Matrix().set(JSON.parse(json.dU_t));
        let dwt = new Matrix().set(JSON.parse(json.dW_t));
        let dvt = new Matrix().set(JSON.parse(json.dV_t));

        assert.equal(dut.shape, rnn.dU_t.shape);
        assert.equal(dwt.shape, rnn.dW_t.shape);
        assert.equal(dvt.shape, rnn.dV_t.shape);

        let dui = new Matrix().set(JSON.parse(json.dU_i));
        let dwi = new Matrix().set(JSON.parse(json.dW_i));

        assert.equal(dui.shape, rnn.dU_i.shape);
        assert.equal(dwi.shape, rnn.dW_i.shape);
      });
      test('Should apply meta data to a new model', function () {
        assert.equal(rnn2.i, 2);
        assert.equal(rnn2.h, 16);
        assert.equal(rnn2.o, 2);
        assert.equal(rnn2.actname, 'sigmoid');
        assert.equal(rnn2.o_actname, 'linear');
        assert.equal(rnn2.lr, rnn.lr);
        assert.equal(rnn2.lossfunc_s, rnn.lossfunc_s);
        assert.equal(rnn2.largestSequenceValue, 1);
      });
      test('Should apply layers to a new model', function () {
        assert.equal(rnn2.layers[0].current.shape, rnn.layers[0].current.shape);
        assert.equal(
          rnn2.layers[0].previous.shape,
          rnn.layers[0].previous.shape
        );
        assert.equal(rnn2.layers[1].current.shape, rnn.layers[1].current.shape);
        assert.equal(
          rnn2.layers[1].previous.shape,
          rnn.layers[1].previous.shape
        );
      });
      test('Should apply weights to a new model', function () {
        assert.equal(rnn2.U.shape, rnn.U.shape);
        assert.equal(rnn2.W.shape, rnn.W.shape);
        assert.equal(rnn2.V.shape, rnn.V.shape);
      });
      test('Should apply gradients to a new model', function () {
        assert.equal(rnn2.dU.shape, rnn.dU.shape);
        assert.equal(rnn2.dW.shape, rnn.dW.shape);
        assert.equal(rnn2.dV.shape, rnn.dV.shape);

        assert.equal(rnn2.dU_t.shape, rnn.dU_t.shape);
        assert.equal(rnn2.dW_t.shape, rnn.dW_t.shape);
        assert.equal(rnn2.dV_t.shape, rnn.dV_t.shape);

        assert.equal(rnn2.dU_i.shape, rnn.dU_i.shape);
        assert.equal(rnn2.dW_i.shape, rnn.dW_i.shape);
      });
    });
  });
  suite('stringToNum & numToString', function () {
    let str;
    let expected;
    setup(function () {
      str = 'Hector Salamanca';
      expected = [
        0.4270833333333333, 0.7291666666666666, 0.7083333333333334,
        0.8854166666666666, 0.8333333333333334, 0.8645833333333334,
        0.010416666666666666, 0.5416666666666666, 0.6875, 0.8020833333333334,
        0.6875, 0.8125, 0.6875, 0.8229166666666666, 0.7083333333333334, 0.6875,
      ];
    });
    test('Should return number array', function () {
      let ans = Rann.stringToNum(str);
      for (let i = 0; i < expected.length; i++) {
        assert.equal(expected[i], ans[i]);
      }
    });
    test('Should return string', function () {
      let ans = Rann.numToString(expected);
      assert.equal(str, ans);
    });
  });
});
