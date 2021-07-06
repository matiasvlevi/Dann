suite('Matrix Class', function () {
  suite('constructor', function () {
    suite('With arguments', function () {
      let m;
      let m1;
      setup(function () {
        m = new Matrix(4, 4);
        m1 = new Matrix(4, 2);
      });
      test('Should have initiated 4 by 4 matrix.', function () {
        assert.instanceOf(m, Matrix);
        assert.isArray(m.matrix[0]);
        assert.isArray(m.matrix);
        assert.equal(m.rows, 4);
        assert.equal(m.cols, 4);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(m.matrix[i][j], 0);
            assert.typeOf(m.matrix[i][j], 'Number');
          }
        }
      });
      test('Should have initiated 4 by 2 matrix', function () {
        assert.instanceOf(m1, Matrix);
        assert.isArray(m1.matrix[0]);
        assert.isArray(m.matrix);
        assert.equal(m1.rows, 4);
        assert.equal(m1.cols, 2);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 2; j++) {
            assert.equal(m1.matrix[i][j], 0);
            assert.typeOf(m1.matrix[i][j], 'Number');
          }
        }
      });
    });
    suite('Without arguments', function () {
      let m;
      setup(function () {
        m = new Matrix();
      });
      test('Should have initiated 0 by 0 matrix.', function () {
        assert.instanceOf(m, Matrix);
        assert.isArray(m.matrix[0]);
        assert.isArray(m.matrix);
        assert.equal(m.rows, 0);
        assert.equal(m.cols, 0);
      });
    });
  });
  suite('Matrix.prototype.add', function () {
    suite('Add with number', function () {
      let m;
      let n;
      setup(function () {
        m = new Matrix(4, 4);
        m.set([
          [1, 0, 1, 2],
          [0, 3, 4, 1],
          [2, 4, 2, 1],
          [1, 3, 1, 2],
        ]);
        n = 5;
      });
      test('Should have added 5 to every value', function () {
        let ans_hardcoded = [
          [6, 5, 6, 7],
          [5, 8, 9, 6],
          [7, 9, 7, 6],
          [6, 8, 6, 7],
        ];
        m.add(n);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(m.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
      test('Should be chainable', function () {
        let ans_hardcoded = [
          [6, 5, 6, 7],
          [5, 8, 9, 6],
          [7, 9, 7, 6],
          [6, 8, 6, 7],
        ];
        let m1 = m.add(n);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(m1.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
    });
    suite('Add with matrix', function () {
      let a;
      let b;
      setup(function () {
        a = new Matrix(4, 4);
        a.set([
          [1, 0, 1, 2],
          [0, 3, 4, 1],
          [2, 4, 2, 1],
          [1, 3, 1, 2],
        ]);
        b = new Matrix(4, 4);
        b.set([
          [1, 0, 1, 0],
          [0, 1, 0, 1],
          [1, 0, 1, 0],
          [0, 1, 0, 1],
        ]);
      });
      test('Should have added the matrix', function () {
        let ans_hardcoded = [
          [2, 0, 2, 2],
          [0, 4, 4, 2],
          [3, 4, 3, 1],
          [1, 4, 1, 3],
        ];
        a.add(b);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(a.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
      test('Should be chainable', function () {
        let ans_hardcoded = [
          [2, 0, 2, 2],
          [0, 4, 4, 2],
          [3, 4, 3, 1],
          [1, 4, 1, 3],
        ];
        let c = a.add(b);
        assert.equal(c.rows, 4);
        assert.equal(c.cols, 4);
        assert.isArray(c.matrix);
        assert.isArray(c.matrix[0]);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(c.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
    });
    suite('Should not add matrix with different dimensions', function () {
      let a;
      let b;
      setup(function () {
        a = new Matrix(2, 4);
        b = new Matrix(4, 4);
      });
      test('Should not have added the matrix', function () {
        let c = a.add(b);
        assert.equal(undefined, c);
        assert.instanceOf(a, Matrix);
        assert.isArray(a.matrix[0]);
        assert.isArray(a.matrix);
        assert.equal(a.rows, 2);
        assert.equal(a.cols, 4);
      });
    });
  });
  suite('Matrix.add', function () {
    suite('Add with matrix', function () {
      let a;
      let b;
      let original_a = [
        [1, 0, 1, 2],
        [0, 3, 4, 1],
        [2, 4, 2, 1],
        [1, 3, 1, 2],
      ];
      let original_b = [
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 0],
        [0, 1, 0, 1],
      ];
      setup(function () {
        a = new Matrix(4, 4);
        a.set(original_a);
        b = new Matrix(4, 4);
        b.set(original_b);
      });
      test('Should have added the matrix', function () {
        let ans_hardcoded = [
          [2, 0, 2, 2],
          [0, 4, 4, 2],
          [3, 4, 3, 1],
          [1, 4, 1, 3],
        ];
        let c = Matrix.add(a, b);
        assert.equal(c.rows, 4);
        assert.equal(c.cols, 4);
        assert.isArray(c.matrix);
        assert.isArray(c.matrix[0]);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(c.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
      test('Should not change input matrices', function () {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(a.matrix[i][j], original_a[i][j]);
          }
        }
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(b.matrix[i][j], original_b[i][j]);
          }
        }
      });
    });
    suite('Should not add matrix with different dimensions', function () {
      let a;
      let b;
      setup(function () {
        a = new Matrix(2, 4);
        b = new Matrix(4, 4);
      });
      test('Should not have added the matrix', function () {
        let c = Matrix.add(a, b);
        assert.equal(undefined, c);
        assert.instanceOf(a, Matrix);
        assert.isArray(a.matrix[0]);
        assert.isArray(a.matrix);
        assert.equal(a.rows, 2);
        assert.equal(a.cols, 4);
      });
    });
  });
  suite('Matrix.prototype.sub', function () {
    suite('Subtract with number', function () {
      let m;
      let n;
      setup(function () {
        m = new Matrix(4, 4);
        m.set([
          [1, 0, 1, 2],
          [0, 3, 4, 1],
          [2, 4, 2, 1],
          [1, 3, 1, 2],
        ]);
        n = 1;
      });
      test('Should have subtracted 1 to every value', function () {
        let ans_hardcoded = [
          [0, -1, 0, 1],
          [-1, 2, 3, 0],
          [1, 3, 1, 0],
          [0, 2, 0, 1],
        ];
        m.sub(n);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(m.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
      test('Should be chainable', function () {
        let ans_hardcoded = [
          [0, -1, 0, 1],
          [-1, 2, 3, 0],
          [1, 3, 1, 0],
          [0, 2, 0, 1],
        ];
        let m1 = m.sub(n);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(m1.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
    });
    suite('Subtract with matrix', function () {
      let a;
      let b;
      setup(function () {
        a = new Matrix(4, 4);
        a.set([
          [1, 0, 1, 2],
          [0, 3, 4, 1],
          [2, 4, 2, 1],
          [1, 3, 1, 2],
        ]);
        b = new Matrix(4, 4);
        b.set([
          [1, 0, 1, 0],
          [0, 1, 0, 1],
          [1, 0, 1, 0],
          [0, 1, 0, 1],
        ]);
      });
      test('Should have subtrated the matrix', function () {
        let ans_hardcoded = [
          [0, 0, 0, 2],
          [0, 2, 4, 0],
          [1, 4, 1, 1],
          [1, 2, 1, 1],
        ];
        a.sub(b);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(a.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
      test('Should be chainable', function () {
        let ans_hardcoded = [
          [0, 0, 0, 2],
          [0, 2, 4, 0],
          [1, 4, 1, 1],
          [1, 2, 1, 1],
        ];
        let c = a.sub(b);
        assert.equal(c.rows, 4);
        assert.equal(c.cols, 4);
        assert.isArray(c.matrix);
        assert.isArray(c.matrix[0]);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(c.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
    });
    suite('Should not subtract matrix with different dimensions', function () {
      let a;
      let b;
      setup(function () {
        a = new Matrix(2, 4);
        b = new Matrix(4, 4);
      });
      test('Should not have subtracted the matrix', function () {
        let c = a.sub(b);
        assert.equal(undefined, c);
        assert.instanceOf(a, Matrix);
        assert.isArray(a.matrix[0]);
        assert.isArray(a.matrix);
        assert.equal(a.rows, 2);
        assert.equal(a.cols, 4);
      });
    });
  });
  suite('Matrix.sub', function () {
    suite('Subtract with matrix', function () {
      let a;
      let b;
      let original_a = [
        [1, 0, 1, 2],
        [0, 3, 4, 1],
        [2, 4, 2, 1],
        [1, 3, 1, 2],
      ];
      let original_b = [
        [1, 0, 1, 0],
        [0, 1, 0, 1],
        [1, 0, 1, 0],
        [0, 1, 0, 1],
      ];
      setup(function () {
        a = new Matrix(4, 4);
        a.set(original_a);
        b = new Matrix(4, 4);
        b.set(original_b);
      });
      test('Should have subtracted the matrix', function () {
        let ans_hardcoded = [
          [0, 0, 0, 2],
          [0, 2, 4, 0],
          [1, 4, 1, 1],
          [1, 2, 1, 1],
        ];
        let c = Matrix.sub(a, b);
        assert.equal(c.rows, 4);
        assert.equal(c.cols, 4);
        assert.isArray(c.matrix);
        assert.isArray(c.matrix[0]);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(c.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
      test('Should not change input matrices', function () {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(a.matrix[i][j], original_a[i][j]);
          }
        }
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(b.matrix[i][j], original_b[i][j]);
          }
        }
      });
    });
    suite('Should not add matrix with different dimensions', function () {
      let a;
      let b;
      setup(function () {
        a = new Matrix(2, 4);
        b = new Matrix(4, 4);
      });
      test('Should not have subtracted the matrix', function () {
        let c = Matrix.sub(a, b);
        assert.equal(undefined, c);
        assert.instanceOf(a, Matrix);
        assert.isArray(a.matrix[0]);
        assert.isArray(a.matrix);
        assert.equal(a.rows, 2);
        assert.equal(a.cols, 4);
      });
    });
  });
  suite('Matrix.prototype.mult', function () {
    suite('Multiply with number', function () {
      let m;
      let n;
      setup(function () {
        m = new Matrix(4, 4);
        m.set([
          [1, 0, 1, 2],
          [0, 3, 4, 1],
          [2, 4, 2, 1],
          [1, 3, 1, 2],
        ]);
        n = 2;
      });
      test('Should have multiplied 2 to every value', function () {
        let ans_hardcoded = [
          [2, 0, 2, 4],
          [0, 6, 8, 2],
          [4, 8, 4, 2],
          [2, 6, 2, 4],
        ];
        m.mult(n);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(m.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
      test('Should be chainable', function () {
        let ans_hardcoded = [
          [2, 0, 2, 4],
          [0, 6, 8, 2],
          [4, 8, 4, 2],
          [2, 6, 2, 4],
        ];
        let m1 = m.mult(n);
        assert.equal(m1.rows, 4);
        assert.equal(m1.cols, 4);
        assert.isArray(m1.matrix);
        assert.isArray(m1.matrix[0]);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(m1.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
    });
    suite('Multiply with matrix', function () {
      let a;
      let b;
      setup(function () {
        a = new Matrix(4, 4);
        a.set([
          [1, 0, 1, 2],
          [0, 3, 4, 1],
          [2, 4, 2, 1],
          [1, 3, 1, 2],
        ]);
        b = new Matrix(4, 4);
        b.set([
          [1, 0, 1, 0],
          [0, 1, 0, 1],
          [1, 0, 1, 0],
          [0, 1, 0, 1],
        ]);
      });
      test('Should have multiplied the matrix (value * value)', function () {
        let ans_hardcoded = [
          [1, 0, 1, 0],
          [0, 3, 0, 1],
          [2, 0, 2, 0],
          [0, 3, 0, 2],
        ];
        a.mult(b);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(a.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
      test('Should be chainable', function () {
        let ans_hardcoded = [
          [1, 0, 1, 0],
          [0, 3, 0, 1],
          [2, 0, 2, 0],
          [0, 3, 0, 2],
        ];
        let c = a.mult(b);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(c.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
    });
    suite('Should not multiply matrix with different dimensions', function () {
      let a;
      let b;
      setup(function () {
        a = new Matrix(2, 4);
        b = new Matrix(4, 4);
      });
      test('Should not have multiplied the matrix', function () {
        let c = a.sub(b);
        assert.equal(undefined, c);
        assert.instanceOf(a, Matrix);
        assert.isArray(a.matrix[0]);
        assert.isArray(a.matrix);
        assert.equal(a.rows, 2);
        assert.equal(a.cols, 4);
      });
    });
  });
  suite('Matrix.mult', function () {
    suite('Matrix dot product', function () {
      let a;
      let b;
      setup(function () {
        a = new Matrix(3, 4);
        a.set([
          [1, 0, 1, 0],
          [0, 1, 0, 0],
          [0, 1, 1, 1],
        ]);
        b = new Matrix(4, 3);
        b.set([
          [1, 0, 1],
          [0, 1, 0],
          [0, 1, 1],
          [1, 0, 0],
        ]);
      });
      test('Should output a resultant matrix', function () {
        let c = Matrix.mult(a, b);
        let ans_hardcoded = [
          [1, 1, 2],
          [0, 1, 0],
          [1, 2, 1],
        ];
        assert.equal(c.rows, 3);
        assert.equal(c.cols, 3);
        assert.isArray(c.matrix);
        assert.isArray(c.matrix[0]);
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            assert.equal(c.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
    });
    suite(
      'Should not output a matrix when a cols dont match b rows',
      function () {
        let a;
        let b;
        setup(function () {
          a = new Matrix(5, 8);
          b = new Matrix(2, 3);
        });
        test('Should output undefined', function () {
          let c = Matrix.mult(a, b);
          assert.equal(c, undefined);
        });
      }
    );
  });
  suite('Matrix.prototype.map', function () {
    suite('Map function to a matrix', function () {
      let m;
      let f;
      setup(function () {
        m = new Matrix(4, 4);
        m.set([
          [1, 0, 1, 2],
          [0, 3, 4, 1],
          [2, 4, 2, 1],
          [1, 3, 1, 2],
        ]);
        f = (x) => 2 * x;
      });
      test('Should have mapped every value', function () {
        let ans_hardcoded = [
          [2, 0, 2, 4],
          [0, 6, 8, 2],
          [4, 8, 4, 2],
          [2, 6, 2, 4],
        ];
        m.map(f);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(m.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
      test('Should be chainable', function () {
        let ans_hardcoded = [
          [2, 0, 2, 4],
          [0, 6, 8, 2],
          [4, 8, 4, 2],
          [2, 6, 2, 4],
        ];
        let m1 = m.map(f);
        assert.equal(m1.rows, 4);
        assert.equal(m1.cols, 4);
        assert.isArray(m1.matrix);
        assert.isArray(m1.matrix[0]);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(m1.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
    });
  });
  suite('Matrix.map', function () {
    suite('Map function to a matrix', function () {
      let m;
      let f;
      setup(function () {
        m = new Matrix(4, 4);
        m.set([
          [1, 0, 1, 2],
          [0, 3, 4, 1],
          [2, 4, 2, 1],
          [1, 3, 1, 2],
        ]);
        f = (x) => 2 * x;
      });
      test('Should have mapped every value', function () {
        let ans_hardcoded = [
          [2, 0, 2, 4],
          [0, 6, 8, 2],
          [4, 8, 4, 2],
          [2, 6, 2, 4],
        ];
        let m1 = Matrix.map(m, f);
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            assert.equal(m1.matrix[i][j], ans_hardcoded[i][j]);
          }
        }
      });
    });
  });
  suite('Matrix.prototype.toArray', function () {
    suite('With 1 by n matrix', function () {
      let m;
      setup(function () {
        m = new Matrix(1, 12);
        m.set([[1, 2, 2, 4, 1, 9, 1, 5, 2, 2, 2, 1]]);
      });
      test('Should output an array of length 12', function () {
        let arr = m.toArray();
        let ans_hardcoded = [1, 2, 2, 4, 1, 9, 1, 5, 2, 2, 2, 1];
        assert.isArray(arr);
        assert.equal(arr.length, 12);
        for (let i = 0; i < 12; i++) {
          assert.equal(arr[i], ans_hardcoded[i]);
        }
      });
    });
    suite('With n by 1 matrix', function () {
      let m;
      setup(function () {
        m = new Matrix(12, 1);
        m.set([[1], [2], [2], [4], [1], [9], [1], [5], [2], [2], [2], [1]]);
      });
      test('Should output an array of length 12', function () {
        let arr = m.toArray();
        let ans_hardcoded = [1, 2, 2, 4, 1, 9, 1, 5, 2, 2, 2, 1];
        assert.isArray(arr);
        assert.equal(arr.length, 12);
        for (let i = 0; i < 12; i++) {
          assert.equal(arr[i], ans_hardcoded[i]);
        }
      });
    });
    suite('With 2 by 2 matrix', function () {
      let m;
      setup(function () {
        m = new Matrix(2, 2);
      });
      test('Should output undefined', function () {
        let arr = m.toArray();
        assert.equal(arr, undefined);
      });
    });
  });
  suite('Matrix.toArray', function () {
    suite('With 1 by n matrix', function () {
      let m;
      setup(function () {
        m = new Matrix(1, 12);
        m.set([[1, 2, 2, 4, 1, 9, 1, 5, 2, 2, 2, 1]]);
      });
      test('Should output an array of length 12', function () {
        let arr = Matrix.toArray(m);
        let ans_hardcoded = [1, 2, 2, 4, 1, 9, 1, 5, 2, 2, 2, 1];
        assert.isArray(arr);
        assert.equal(arr.length, 12);
        for (let i = 0; i < 12; i++) {
          assert.equal(arr[i], ans_hardcoded[i]);
        }
      });
    });
    suite('With n by 1 matrix', function () {
      let m;
      setup(function () {
        m = new Matrix(12, 1);
        m.set([[1], [2], [2], [4], [1], [9], [1], [5], [2], [2], [2], [1]]);
      });
      test('Should output an array of length 12', function () {
        let arr = Matrix.toArray(m);
        let ans_hardcoded = [1, 2, 2, 4, 1, 9, 1, 5, 2, 2, 2, 1];
        assert.isArray(arr);
        assert.equal(arr.length, 12);
        for (let i = 0; i < 12; i++) {
          assert.equal(arr[i], ans_hardcoded[i]);
        }
      });
    });
    suite('With 2 by 2 matrix', function () {
      let m;
      setup(function () {
        m = new Matrix(2, 2);
      });
      test('Should output undefined', function () {
        let arr = Matrix.toArray(m);
        assert.equal(arr, undefined);
      });
    });
  });
  suite('Matrix.fromArray', function () {
    suite('', function () {
      let arr;
      setup(function () {
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      });
      test('Should output a 12 by 1 matrix', function () {
        let m = Matrix.fromArray(arr);
        assert.equal(m.matrix.length, 12);
        assert.equal(m.matrix[0].length, 1);
        assert.equal(m.rows, 12);
        assert.equal(m.cols, 1);
      });
    });
  });
  suite('Matrix.prototype.initiate', function () {
    suite('', function () {
      let m;
      setup(function () {
        m = new Matrix(2, 2);
        m.initiate(5);
      });
      test('Should have initiated 5 values', function () {
        assert.equal(m.cols, 2);
        assert.equal(m.rows, 2);
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            assert.equal(m.matrix[i][j], 5);
          }
        }
      });
      test('Should have initiated 0 values', function () {
        m.initiate();
        assert.equal(m.cols, 2);
        assert.equal(m.rows, 2);
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            assert.equal(m.matrix[i][j], 0);
          }
        }
      });
      test('Should be chainable', function () {
        let m1 = m.initiate(3);
        assert.equal(m1.cols, 2);
        assert.equal(m1.rows, 2);
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            assert.equal(m1.matrix[i][j], 3);
          }
        }
      });
    });
  });
  suite('Matrix.prototype.insert', function () {
    suite('', function () {
      let m;
      setup(function () {
        m = new Matrix(3, 3);
        m.insert(10, 0, 2);
        m.insert(5, 2, 0);
      });
      test('Check inserts', function () {
        assert.equal(m.matrix[0][2], 10);
        assert.equal(m.matrix[2][0], 5);
      });
      test('Should be chainable', function () {
        let m1 = m.insert(100, 1, 1);
        assert.equal(m1.matrix[0][2], 10);
        assert.equal(m1.matrix[2][0], 5);
        assert.equal(m1.matrix[1][1], 100);
      });
    });
  });
  suite('Matrix.make', function () {
    suite('', function () {
      let rm;
      setup(function () {
        rm = Matrix.make(3, 5);
      });
      test('Should have created a 3 by 5 raw matrix', function () {
        assert.equal(rm.length, 3);
        assert.equal(rm[0].length, 5);
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 5; j++) {
            assert.equal(rm[i][j], 0);
          }
        }
      });
    });
  });
  suite('Matrix.prototype.randomize', function () {
    suite('', function () {
      let m;
      setup(function () {
        m = new Matrix(5, 5);
      });
      test('Should have randomized matrix values', function () {
        m.randomize();
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
            assert.notEqual(m.matrix[i][j], 0);
          }
        }
      });
    });
  });
});
