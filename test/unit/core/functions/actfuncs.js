suite('', function () {
  suite('Activation functions', function () {
    suite('sigmoid', function () {
      test("Testing 'sigmoid' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0.018, 0.119, 0.5, 0.881, 0.982];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.sigmoid(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
      test("Testing 'sigmoid_d' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0.018, 0.105, 0.25, 0.105, 0.018];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.sigmoid_d(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
    });
    suite('tanH', function () {
      test("Testing 'tanH' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [-0.999, -0.964, 0, 0.964, 0.999];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.tanH(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
      test("Testing 'tanH_d' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0.001, 0.071, 1, 0.071, 0.001];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.tanH_d(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
    });
    suite('siLU', function () {
      test("Testing 'siLU' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [-0.072, -0.238, 0, 1.762, 3.928];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.siLU(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
      test("Testing 'siLU_d' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [-0.053, -0.091, 0.5, 1.091, 1.053];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.siLU_d(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
    });
    suite('leakyReLU', function () {
      test("Testing 'leakyReLU' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [-0.04, -0.02, 0, 2, 4];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.leakyReLU(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
      test("Testing 'leakyReLU_d' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0.01, 0.01, 1, 1, 1];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.leakyReLU_d(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
    });
    suite('reLU', function () {
      test("Testing 'reLU' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0, 0, 0, 2, 4];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.reLU(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
      test("Testing 'reLU_d' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0, 0, 1, 1, 1];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.reLU_d(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
    });
    suite('sinc', function () {
      test("Testing 'sinc' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [-0.189, 0.455, 1, 0.455, -0.189];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.sinc(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
      test("Testing 'sinc_d' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0.116, 0.435, 0, -0.435, -0.116];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.sinc_d(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
    });
    suite('softsign', function () {
      test("Testing 'sinc' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [-0.8, -0.667, 0, 0.667, 0.8];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.softsign(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
      test("Testing 'softsign_d' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0.04, 0.111, 1, 0.111, 0.04];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.softsign_d(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
    });
    suite('binary', function () {
      test("Testing 'binary' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0, 0, 0, 1, 1];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.binary(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
      test("Testing 'binary_d' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0, 0, 0, 0, 0];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.binary_d(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
    });
    suite('softplus', function () {
      test("Testing 'softplus' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0.018, 0.127, 0.693, 2.127, 4.018];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.softplus(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
      test("Testing 'softplus_d' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0.018, 0.119, 0.5, 0.881, 0.982];
        for (let i = 0; i < pointsX.length; i++) {
          assert.closeTo(act.softplus_d(pointsX[i]), ans_hardcoded[i], 0.01);
        }
      });
    });
  });
});
