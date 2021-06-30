Rann.prototype.setActivation = function setActivation(act) {
  this.actname = act;
  let funcData = Layer.stringTofunc(this.actname);
  this.actfunc = funcData['func'];
  this.actfunc_d = funcData['func_d'];
};
