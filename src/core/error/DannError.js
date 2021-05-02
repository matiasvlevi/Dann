DannError = function DannError(msg, method) {
  this.msg = msg;
  this.method = method;
};

// Non-static
DannError.prototype.warn = function () {
  console.warn('DannError: ' + this.msg);
  console.warn('> ' + this.method);
};

DannError.prototype.error = function () {
  console.error('DannError: ' + this.msg);
  console.error('> ' + this.method);
  console.trace();
};

// Static
DannError.warn = function (warning, method) {
  console.warn('DannError: ' + warning);
  console.warn('> ' + method);
};

DannError.error = function (error, method) {
  console.error('DannError: ' + error);
  console.error('> ' + method);
  console.trace();
};
