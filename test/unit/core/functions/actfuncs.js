suite('', function () {
  suite('Activation functions', function () {
    suite('sigmoid', function () {
      test("Testing 'sigmoid' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0.018, 0.119, 0.5, 0.881, 0.982];
        for (let i = 0; i < pointsX; i++) {
          assert.equal(act.sigmoid(pointsX[i]), ans_hardcoded[i]);
        }
      });
      test("Testing 'sigmoid_d' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0.018, 0.105, 0.25, 0.105, 0.018];
        for (let i = 0; i < pointsX; i++) {
          assert.equal(act.sigmoid_d(pointsX[i]), ans_hardcoded[i]);
        }
      });
    });
    suite('tanH', function () {
      test("Testing 'tanH' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [-0.999, -0.964, 0, 0.964, 0.999];
        for (let i = 0; i < pointsX; i++) {
          assert.equal(act.tanH(pointsX[i]), ans_hardcoded[i]);
        }
      });
      test("Testing 'tanH_d' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0.001, 0.071, 1, 0.071, 0.001];
        for (let i = 0; i < pointsX; i++) {
          assert.equal(act.tanH_d(pointsX[i]), ans_hardcoded[i]);
        }
      });
    });
    suite('siLU', function () {
      test("Testing 'siLU' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [-0.072, -0.238, 0, 1.762, 3.928];
        for (let i = 0; i < pointsX; i++) {
          assert.equal(act.siLU(pointsX[i]), ans_hardcoded[i]);
        }
      });
      test("Testing 'siLU_d' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [-0.053, -0.091, 0.5, 1.091, 1.053];
        for (let i = 0; i < pointsX; i++) {
          assert.equal(act.siLU_d(pointsX[i]), ans_hardcoded[i]);
        }
      });
    });
    suite('leakyReLU', function () {
      test("Testing 'leakyReLU' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [-0.04, -0.02, 0, 2, 4];
        for (let i = 0; i < pointsX; i++) {
          assert.equal(act.leakyReLU(pointsX[i]), ans_hardcoded[i]);
        }
      });
      test("Testing 'leakyReLU_d' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0.01, 0.01, 1, 1, 1];
        for (let i = 0; i < pointsX; i++) {
          assert.equal(act.leakyReLU_d(pointsX[i]), ans_hardcoded[i]);
        }
      });
    });
    suite('reLU', function () {
      test("Testing 'reLU' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0, 0, 0, 2, 4];
        for (let i = 0; i < pointsX; i++) {
          assert.equal(act.reLU(pointsX[i]), ans_hardcoded[i]);
        }
      });
      test("Testing 'reLU_d' activation function", function () {
        let pointsX = [-4, -2, 0, 2, 4];
        let ans_hardcoded = [0, 0, 1, 1, 1];
        for (let i = 0; i < pointsX; i++) {
          assert.equal(act.reLU(pointsX[i]), ans_hardcoded[i]);
        }
      });
    });
  });
});
