suite.only('Rann Class', function () {
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
        assert.equal(rnn.loss, 0);
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
});
