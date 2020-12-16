"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDiffTransform = void 0;

var _is = require("../../utils/is.js");

var _factory = require("../../utils/factory.js");

var _errorTransform = require("./utils/errorTransform.js");

var _diff = require("../../function/matrix/diff.js");

var name = 'diff';
var dependencies = ['typed', 'matrix', 'subtract', 'number', 'bignumber'];
var createDiffTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
      matrix = _ref.matrix,
      subtract = _ref.subtract,
      number = _ref.number,
      bignumber = _ref.bignumber;
  var diff = (0, _diff.createDiff)({
    typed: typed,
    matrix: matrix,
    subtract: subtract,
    number: number,
    bignumber: bignumber
  });
  /**
   * Attach a transform function to math.diff
   * Adds a property transform containing the transform function.
   *
   * This transform creates a range which includes the end value
   */

  return typed(name, {
    '...any': function any(args) {
      // change last argument dim from one-based to zero-based
      if (args.length === 2 && (0, _is.isCollection)(args[0])) {
        var dim = args[1];

        if ((0, _is.isNumber)(dim)) {
          args[1] = dim - 1;
        } else if ((0, _is.isBigNumber)(dim)) {
          args[1] = dim.minus(1);
        }
      }

      try {
        return diff.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
exports.createDiffTransform = createDiffTransform;