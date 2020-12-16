"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBaseFormatterFactory = createBaseFormatterFactory;

var _factory = require("../../utils/factory.js");

var _number = require("../../utils/number.js");

function baseFormatter(base) {
  var prefixes = {
    2: '0b',
    8: '0o',
    16: '0x'
  };
  var prefix = prefixes[base];
  return function (n) {
    if (n > Math.pow(2, 31) - 1 || n < -Math.pow(2, 31)) {
      throw new Error('Value must be in range [-2^31, 2^31-1]');
    }

    if (!(0, _number.isInteger)(n)) {
      throw new Error('Value must be an integer');
    }

    if (n < 0) {
      n = n + Math.pow(2, 32);
    }

    return "".concat(prefix).concat(n.toString(base));
  };
}

var dependencies = ['typed'];

function createBaseFormatterFactory(name, base) {
  return (0, _factory.factory)(name, dependencies, function (_ref) {
    var typed = _ref.typed;
    return typed(name, {
      number: baseFormatter(base)
    });
  });
}