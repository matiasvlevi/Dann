DannError = function DannError(msg, method) {
  this.msg = msg;
  this.method = method;
};

// Non-static
DannError.prototype.warn = function () {
  if (isBrowser) {
    console.error('DannWarning: ' + this.msg);
    console.error('> ' + this.method);
  } else {
    console.error('\x1b[33m' + 'DannWarning: ' + this.msg + '\x1b[0m');
    console.error('\x1b[33m' + '> ' + this.method + '\x1b[0m');
  }
  console.trace();
};

DannError.prototype.error = function () {
  if (isBrowser) {
    console.warn('DannError: ' + this.msg);
    console.warn('> ' + this.method);
  } else {
    console.warn('\x1b[31m' + 'DannError: ' + this.msg + '\x1b[0m');
    console.warn('\x1b[31m' + '> ' + this.method + '\x1b[0m');
  }
  console.trace();
};

// Static
DannError.warn = function (warning, method) {
  if (isBrowser) {
    console.warn('DannWarning: ' + warning);
    console.warn('> ' + method);
  } else {
    console.warn('\x1b[33m' + 'DannWarning: ' + warning + '\x1b[0m');
    console.warn('\x1b[33m' + '> ' + method + '\x1b[0m');
  }
  console.trace();
};

DannError.error = function (error, method) {
  if (isBrowser) {
    console.error('DannError: ' + error);
    console.error('> ' + method);
  } else {
    console.error('\x1b[31m' + 'DannError: ' + error + '\x1b[0m');
    console.error('\x1b[31m' + '> ' + method + '\x1b[0m');
  }
  console.trace();
};
