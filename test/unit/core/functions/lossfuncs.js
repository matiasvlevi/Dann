suite('', function () {
  suite('Loss functions', function () {
    suite('', function () {
      test("Testing 'MAE' loss function", function () {
        let p = [0.8, 0.2, 0.95];
        let t = [1, 0, 1];
        let ans_hardcoded = 0.45 / 3;
        let ans = lossfuncs.mae(p, t);
        assert.equal(ans, ans_hardcoded);
      });
      test("Testing 'BCE' loss function", function () {
        let p = [0.8, 0.2, 0.95];
        let t = [1, 0, 1];
        let ans_hardcoded = 0.16586013233865668;
        let ans = lossfuncs.bce(p, t);
        assert.equal(ans, ans_hardcoded);
      });
      test("Testing 'LCL' loss function", function () {
        let p = [0.8, 0.2, 0.95];
        let t = [1, 0, 1];
        let ans_hardcoded = 0.013661874397880115;
        let ans = lossfuncs.lcl(p, t);
        assert.equal(ans, ans_hardcoded);
      });
      test("Testing 'MBE' loss function", function () {
        let p = [0.8, 0.2, 0.95];
        let t = [1, 0, 1];
        let ans_hardcoded = 0.016666666666666663;
        let ans = lossfuncs.mbe(p, t);
        assert.equal(ans, ans_hardcoded);
      });
      test("Testing 'MAEL' loss function", function () {
        let p = [0.8, 0.2, 0.95];
        let t = [1, 0, 1];
        let ans_hardcoded = 0.013705645832801115;
        let ans = lossfuncs.mael(p, t);
        assert.equal(ans, ans_hardcoded);
      });
      test("Testing 'RMSE' loss function", function () {
        let p = [0.8, 0.2, 0.95];
        let t = [1, 0, 1];
        let ans_hardcoded = 0.16583123951776998;
        let ans = lossfuncs.rmse(p, t);
        assert.equal(ans, ans_hardcoded);
      });
      test("Testing 'MSE' loss function", function () {
        let p = [0.8, 0.2, 0.95];
        let t = [1, 0, 1];
        let ans_hardcoded = 0.0275;
        let ans = lossfuncs.mse(p, t);
        assert.closeTo(ans, ans_hardcoded, 0.00001);
      });
      test("Testing 'MCE' loss function", function () {
        let p = [0.8, 0.2, 0.95];
        let t = [1, 0, 1];
        let ans_hardcoded = 0.005375;
        let ans = lossfuncs.mce(p, t);
        assert.closeTo(ans, ans_hardcoded, 0.00001);
      });
    });
  });
});
