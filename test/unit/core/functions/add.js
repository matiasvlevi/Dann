suite('', function () {
  suite('Add custom functions', function () {
    suite('Activations', function () {
      let func;
      let func_d;
      setup(function () {
        func = (x) => x * x;
        func_d = (x) => 2 * x;
      });
      test('Sould have added an activation', function () {
        Add.activation('mynewfunc', func, func_d);
        assert.exists(act.mynewfunc);
        assert.exists(act.mynewfunc_d);
        assert.equal(act.mynewfunc(3), func(3));
        assert.equal(act.mynewfunc_d(3), func_d(3));
      });
      test('Should not work with more than one argument for activation', function () {
        let func_twoargs = (x, y) => x * x;
        let func_twoargs_d = (x) => 2 * x;
        Add.activation('mynewfunc2', func_twoargs, func_twoargs_d);
        assert.notExists(act.mynewfunc2);
        assert.notExists(act.mynewfunc2_d);
      });
      test('Should apply to a Dann model', function () {
        const nn = new Dann();
        nn.outputActivation('mynewfunc');
        assert.equal(nn.Layers[1].actname, 'mynewfunc');
        assert.equal(nn.Layers[1].actfunc.toString(), func.toString());
        assert.equal(nn.Layers[1].actname_d, 'mynewfunc_d');
        assert.equal(nn.Layers[1].actfunc_d.toString(), func_d.toString());
      });
    });
    suite('Loss', function () {
      let func;
      setup(function () {
        func = (x, y) => x[0] - y[0];
      });
      test('Sould have added a loss function', function () {
        Add.loss('mynewfunc', func);
        assert.exists(lossfuncs.mynewfunc);
        assert.equal(lossfuncs.mynewfunc([4], [2]), func([4], [2]));
      });
      test('Should not work with less or more than two argument for loss function', function () {
        let func_threeargs = (x, y, z) => x[0] - y[0];
        Add.loss('mynewfunc2', func_threeargs);
        assert.notExists(lossfuncs.mynewfunc2);
        let func_onearg = (x) => x[0];
        Add.loss('mynewfunc3', func_onearg);
        assert.notExists(lossfuncs.mynewfunc3);
      });
      test('Should apply to a Dann model', function () {
        const nn = new Dann();
        nn.setLossFunction('mynewfunc');
        assert.equal(nn.lossfunc.toString(), func.toString());
        assert.equal(nn.lossfunc_s, 'mynewfunc');
      });
    });
  });
});
