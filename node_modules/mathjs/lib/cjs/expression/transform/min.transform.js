"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMinTransform = void 0;

var _is = require("../../utils/is.js");

var _factory = require("../../utils/factory.js");

var _errorTransform = require("./utils/errorTransform.js");

var _min = require("../../function/statistics/min.js");

var name = 'min';
var dependencies = ['typed', 'config', 'numeric', 'smaller'];
var createMinTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
      config = _ref.config,
      numeric = _ref.numeric,
      smaller = _ref.smaller;
  var min = (0, _min.createMin)({
    typed: typed,
    config: config,
    numeric: numeric,
    smaller: smaller
  });
  /**
   * Attach a transform function to math.min
   * Adds a property transform containing the transform function.
   *
   * This transform changed the last `dim` parameter of function min
   * from one-based to zero based
   */

  return typed('min', {
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
        return min.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
exports.createMinTransform = createMinTransform;