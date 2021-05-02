suite('Layer Object', function () {
  suite('constructor', function () {
    suite('avgpool layer', function () {
      let l1;
      setup(function () {
        l1 = new Layer('avgpool', 16, 2, 2);
      });
      test('Should be an instance of Layer', function () {
        assert.instanceOf(l1, Layer);
      });
      test('Should have initiated type, subtype & prefix', function () {
        assert.equal(l1.type, 'avgpool');
        assert.equal(l1.subtype, 'pool');
        assert.equal(l1.prefix, 'avg');
      });
      test('Should have initiated values', function () {
        assert.equal(l1.stride, 2);
        assert.equal(l1.sampleSize, 2);
        assert.equal(l1.inputSize, 16);
        assert.equal(l1.sizeX, 4);
        assert.equal(l1.sizeY, 4);
        assert.equal(l1.size, 4);
      });
      test('Should have initiated input matrix', function () {
        assert.equal(l1.input.rows, 16);
        assert.equal(l1.input.cols, 1);
        for (let i = 0; i < 16; i++) {
          assert.equal(l1.input.matrix[i][0], 0);
          assert.typeOf(l1.input.matrix[i][0], 'Number');
        }
      });
      test('Should have initiated output matrix', function () {
        assert.equal(l1.layer.rows, 4);
        assert.equal(l1.layer.cols, 1);
        for (let i = 0; i < 4; i++) {
          assert.equal(l1.layer.matrix[i][0], 0);
          assert.typeOf(l1.layer.matrix[i][0], 'Number');
        }
      });
      test('Should output an array of 4 length', function () {
        let a = [1, 3, 2, 4, 6, 1, 5, 1, 8, 3, 4, 1, 9, 3, 4, 9];
        let ans = l1.feed(a);
        let ans_hardcoded = [2.75, 3, 5.75, 4.5];
        for (let i = 0; i < ans_hardcoded.length; i++) {
          assert.equal(ans[i], ans_hardcoded[i]);
        }
      });
    });
    suite('maxpool layer', function () {
      let l1;
      setup(function () {
        l1 = new Layer('maxpool', 36, 3, 3);
      });
      test('Should be an instance of Layer', function () {
        assert.instanceOf(l1, Layer);
      });
      test('Should have initiated type, subtype & prefix', function () {
        assert.equal(l1.type, 'maxpool');
        assert.equal(l1.subtype, 'pool');
        assert.equal(l1.prefix, 'max');
      });
      test('Should have initiated values', function () {
        assert.equal(l1.stride, 3);
        assert.equal(l1.sampleSize, 3);
        assert.equal(l1.inputSize, 36);
        assert.equal(l1.sizeX, 6);
        assert.equal(l1.sizeY, 6);
        assert.equal(l1.size, 4);
      });
      test('Should have initiated input matrix', function () {
        assert.equal(l1.input.rows, 36);
        assert.equal(l1.input.cols, 1);
        for (let i = 0; i < 36; i++) {
          assert.equal(l1.input.matrix[i][0], 0);
          assert.typeOf(l1.input.matrix[i][0], 'Number');
        }
      });
      test('Should have initiated output matrix', function () {
        assert.equal(l1.layer.rows, 4);
        assert.equal(l1.layer.cols, 1);
        for (let i = 0; i < 4; i++) {
          assert.equal(l1.layer.matrix[i][0], 0);
          assert.typeOf(l1.layer.matrix[i][0], 'Number');
        }
      });
      test('Should output an array of 4 length', function () {
        let a = [
          3,
          3,
          5,
          5,
          4,
          2,
          9,
          1,
          6,
          7,
          9,
          5,
          5,
          1,
          7,
          7,
          4,
          2,
          3,
          2,
          3,
          9,
          8,
          7,
          7,
          3,
          6,
          8,
          9,
          1,
          8,
          5,
          2,
          3,
          7,
          3,
        ];
        let ans = l1.feed(a);
        let ans_hardcoded = [9, 9, 8, 9];
        for (let i = 0; i < ans_hardcoded.length; i++) {
          assert.equal(ans[i], ans_hardcoded[i]);
        }
      });
    });
    suite('minpool layer', function () {
      let l1;
      setup(function () {
        l1 = new Layer('minpool', 16, 2, 2);
      });
      test('Should be an instance of Layer', function () {
        assert.instanceOf(l1, Layer);
      });
      test('Should have initiated type, subtype & prefix', function () {
        assert.equal(l1.type, 'minpool');
        assert.equal(l1.subtype, 'pool');
        assert.equal(l1.prefix, 'min');
      });
      test('Should have initiated values', function () {
        assert.equal(l1.stride, 2);
        assert.equal(l1.sampleSize, 2);
        assert.equal(l1.inputSize, 16);
        assert.equal(l1.sizeX, 4);
        assert.equal(l1.sizeY, 4);
        assert.equal(l1.size, 4);
      });
      test('Should have initiated input matrix', function () {
        assert.equal(l1.input.rows, 16);
        assert.equal(l1.input.cols, 1);
        for (let i = 0; i < 16; i++) {
          assert.equal(l1.input.matrix[i][0], 0);
          assert.typeOf(l1.input.matrix[i][0], 'Number');
        }
      });
      test('Should have initiated output matrix', function () {
        assert.equal(l1.layer.rows, 4);
        assert.equal(l1.layer.cols, 1);
        for (let i = 0; i < 4; i++) {
          assert.equal(l1.layer.matrix[i][0], 0);
          assert.typeOf(l1.layer.matrix[i][0], 'Number');
        }
      });
      test('Should output an array of 4 length', function () {
        let a = [1, 2, 2, 1, 4, 5, 1, 9, 2, 3, 6, 3, 8, 1, 3, 2];
        let ans = l1.feed(a);
        let ans_hardcoded = [1, 1, 1, 2];
        for (let i = 0; i < ans_hardcoded.length; i++) {
          assert.equal(ans[i], ans_hardcoded[i]);
        }
      });
    });
  });
});
