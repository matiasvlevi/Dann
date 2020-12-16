import { isBigNumber, isCollection, isNumber } from '../../utils/is.js';
import { factory } from '../../utils/factory.js';
import { errorTransform } from './utils/errorTransform.js';
import { createSum } from '../../function/statistics/sum.js';
/**
 * Attach a transform function to math.sum
 * Adds a property transform containing the transform function.
 *
 * This transform changed the last `dim` parameter of function mean
 * from one-based to zero based
 */

var name = 'sum';
var dependencies = ['typed', 'config', 'add', 'numeric'];
export var createSumTransform = /* #__PURE__ */factory(name, dependencies, (_ref) => {
  var {
    typed,
    config,
    add,
    numeric
  } = _ref;
  var sum = createSum({
    typed,
    config,
    add,
    numeric
  });
  return typed(name, {
    '...any': function any(args) {
      // change last argument dim from one-based to zero-based
      if (args.length === 2 && isCollection(args[0])) {
        var dim = args[1];

        if (isNumber(dim)) {
          args[1] = dim - 1;
        } else if (isBigNumber(dim)) {
          args[1] = dim.minus(1);
        }
      }

      try {
        return sum.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});