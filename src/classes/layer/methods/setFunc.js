/*
 * Undisplayed documentation

 * @method setFunc
 * @param {String} act The activation function name
 */
Layer.prototype.setFunc = function setFunc(act) {
  let obj = Layer.stringTofunc(act);
  if (obj !== undefined) {
    this.actname = obj.name;
    this.actname_d = obj.name_d;
    this.actfunc = obj.func;
    this.actfunc_d = obj.func_d;
  } else {
    DannError.error('Bad activation information', 'Layer.prototype.setFunc');
    return;
  }
};
