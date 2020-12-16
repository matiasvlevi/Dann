"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMeanTransform = void 0;

var _is = require("../../utils/is.js");

var _factory = require("../../utils/factory.js");

var _errorTransform = require("./utils/errorTransform.js");

var _mean = require("../../function/statistics/mean.js");

var name = 'mean';
var dependencies = ['typed', 'add', 'divide'];
var createMeanTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
      add = _ref.add,
      divide = _ref.divide;
  var mean = (0, _mean.createMean)({
    typed: typed,
    add: add,
    divide: divide
  });
  /**
   * Attach a transform function to math.mean
   * Adds a property transform containing the transform function.
   *
   * This transform changed the last `dim` parameter of function mean
   * from one-based to zero based
   */

  return typed('mean', {
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
        return mean.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});
exports.createMeanTransform = createMeanTransform;