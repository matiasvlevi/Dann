Rann.prototype.outputActivation = function outputActivation(act) {
  if (activations[act] === undefined && !isBrowser) {
    if (typeof act === 'string') {
      DannError.error(
        "'" +
          act +
          "' is not a valid activation function, as a result, the activation function is set to 'sigmoid' by default.",
        'Rann.prototype.outputActivation'
      );
      return;
    } else {
      DannError.error(
        "Did not detect a string value, as a result, the activation function is set to 'sigmoid' by default.",
        'Rann.prototype.outputActivation'
      );
      return;
    }
  }
    this.o_actname = act;
  let funcData = Layer.stringTofunc(this.o_actname);
  this.o_actfunc = funcData['func'];
  this.o_actfunc_d = funcData['func_d'];
};