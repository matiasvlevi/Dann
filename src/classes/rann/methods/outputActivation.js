Rann.prototype.outputActivation = function outputActivation(act) {
  this.o_actname = act;
  let funcData = Layer.stringTofunc(this.actname);
  this.o_actfunc = funcData['func'];
  this.o_actfunc_d = funcData['func_d'];
};
