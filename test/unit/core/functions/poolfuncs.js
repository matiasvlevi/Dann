suite('', function () {
  suite('Pool functions', function () {
    suite('', function () {
      test("Testing 'avgpool' function", function () {
        let a = [1, 3, 2, 4, 1, 2, 2, 1];
        let ans = poolfuncs.avg(a);
        let ans_hardcoded = 2;
        assert.equal(ans, ans_hardcoded);
      });
      test("Testing 'maxpool' function", function () {
        let a = [1, 3, 2, 4, 1, 2, 2, 1];
        let ans = poolfuncs.max(a);
        let ans_hardcoded = 4;
        assert.equal(ans, ans_hardcoded);
      });
      test("Testing 'minpool' function", function () {
        let a = [1, 3, 2, 4, 1, 2, -1, 1];
        let ans = poolfuncs.min(a);
        let ans_hardcoded = -1;
        assert.equal(ans, ans_hardcoded);
      });
    });
  });
});
