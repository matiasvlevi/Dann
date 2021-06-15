suite('', function () {
  suite('Add custom functions', function () {
    suite('Activations', function () {
      test('Sould have added an activation', function () {
        let func = (x) => x * x;
        let func_d = (x) => 2 * x;
        Add.activation('mynewfunc', func, func_d);
        assert.exists(act.mynewfunc);
        assert.exists(act.mynewfunc_d);
        assert.equal(act.mynewfunc(3), func(3));
        assert.equal(act.mynewfunc_d(3), func_d(3));
      });
      test('Should not work with more than one argument for activation', function () {
        let func = (x, y) => x * x;
        let func_d = (x) => 2 * x;
        Add.activation('mynewfunc2', func, func_d);
        assert.notExists(act.mynewfunc2);
        assert.notExists(act.mynewfunc2_d);
      });
    });
    suite('Loss', function () {
      test('Sould have added a loss function', function () {
        let func = (x, y) => x[0] - y[0];
        Add.loss('mynewfunc', func);
        assert.exists(lossfuncs.mynewfunc);
        assert.equal(lossfuncs.mynewfunc([4], [2]), func([4], [2]));
      });
      test('Should not work with less or more than two argument for loss function', function () {
        let func = (x, y, z) => x[0] - y[0];
        Add.loss('mynewfunc2', func);
        assert.notExists(lossfuncs.mynewfunc2);
        let func2 = (x) => x[0];
        Add.loss('mynewfunc3', func2);
        assert.notExists(lossfuncs.mynewfunc3);
      });
    });
  });
});
