"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _config = require("../core/config.js");

var _config2 = require("../core/function/config.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// create a read-only version of config
var config = /* #__PURE__ */function config(options) {
  if (options) {
    throw new Error('The global config is readonly. \n' + 'Please create a mathjs instance if you want to change the default configuration. \n' + 'Example:\n' + '\n' + '  import { create, all } from \'mathjs\';\n' + '  const mathjs = create(all);\n' + '  mathjs.config({ number: \'BigNumber\' });\n');
  }

  return Object.freeze(_config.DEFAULT_CONFIG);
};

exports.config = config;

_extends(config, _config.DEFAULT_CONFIG, {
  MATRIX_OPTIONS: _config2.MATRIX_OPTIONS,
  NUMBER_OPTIONS: _config2.NUMBER_OPTIONS
});