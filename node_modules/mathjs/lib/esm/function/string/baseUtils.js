import { factory } from '../../utils/factory.js';
import { isInteger } from '../../utils/number.js';

function baseFormatter(base) {
  var prefixes = {
    2: '0b',
    8: '0o',
    16: '0x'
  };
  var prefix = prefixes[base];
  return function (n) {
    if (n > 2 ** 31 - 1 || n < -(2 ** 31)) {
      throw new Error('Value must be in range [-2^31, 2^31-1]');
    }

    if (!isInteger(n)) {
      throw new Error('Value must be an integer');
    }

    if (n < 0) {
      n = n + 2 ** 32;
    }

    return "".concat(prefix).concat(n.toString(base));
  };
}

var dependencies = ['typed'];
export function createBaseFormatterFactory(name, base) {
  return factory(name, dependencies, (_ref) => {
    var {
      typed
    } = _ref;
    return typed(name, {
      number: baseFormatter(base)
    });
  });
}