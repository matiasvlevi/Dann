"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSumTransform = void 0;

var _is = require("../../utils/is.js");

var _factory = require("../../utils/factory.js");

var _errorTransform = require("./utils/errorTransform.js");

var _sum = require("../../function/statistics/sum.js");

/**
 * Attach a transform function to math.sum
 * Adds a property transform containing the transform function.
 *
 * This transform changed the last `dim` parameter of function mean
 * from one-based to zero based
 */
var name = 'sum';
var dependencies = ['typed', 'config', 'add', 'numeric'];
var createSumTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
      config = _ref.config,
      add = _ref.add,
      numeric = _ref.numeric;
  var sum = (0, _sum.createSum)({
    typed: typed,
    config: config,
    add: add,
    numeric: numeric
  });
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
        return sum.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
exports.createSumTransform = createSumTransform;