suite('', function () {
  suite('', function () {
    suite('makeXOR method', function () {
      let xor2;
      let xor3;
      setup(function () {
        xor2 = [
          { input: [0, 0], output: [0] },
          { input: [0, 1], output: [1] },
          { input: [1, 0], output: [1] },
          { input: [1, 1], output: [0] },
        ];
        xor3 = [
          { input: [0, 0, 0], output: [0] },
          { input: [0, 0, 1], output: [1] },
          { input: [0, 1, 0], output: [1] },
          { input: [0, 1, 1], output: [0] },
          { input: [1, 0, 0], output: [1] },
          { input: [1, 0, 1], output: [0] },
          { input: [1, 1, 0], output: [0] },
          { input: [1, 1, 1], output: [1] },
        ];
      });
      test(`Should equal to makeXOR(2) `, function () {
        assert.deepEqual(xor2, makeXOR(2));
      });
      test(`Should equal to makeXOR(3) `, function () {
        assert.deepEqual(xor3, makeXOR(3));
      });
    });
  });
});
