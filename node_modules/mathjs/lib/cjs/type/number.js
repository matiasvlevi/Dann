"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNumber = void 0;

var _factory = require("../utils/factory.js");

var _collection = require("../utils/collection.js");

var name = 'number';
var dependencies = ['typed'];
var createNumber = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;

  /**
   * Create a number or convert a string, boolean, or unit to a number.
   * When value is a matrix, all elements will be converted to number.
   *
   * Syntax:
   *
   *    math.number(value)
   *    math.number(unit, valuelessUnit)
   *
   * Examples:
   *
   *    math.number(2)                         // returns number 2
   *    math.number('7.2')                     // returns number 7.2
   *    math.number(true)                      // returns number 1
   *    math.number([true, false, true, true]) // returns [1, 0, 1, 1]
   *    math.number(math.unit('52cm'), 'm')    // returns 0.52
   *
   * See also:
   *
   *    bignumber, boolean, complex, index, matrix, string, unit
   *
   * @param {string | number | BigNumber | Fraction | boolean | Array | Matrix | Unit | null} [value]  Value to be converted
   * @param {Unit | string} [valuelessUnit] A valueless unit, used to convert a unit to a number
   * @return {number | Array | Matrix} The created number
   */
  var number = typed('number', {
    '': function _() {
      return 0;
    },
    number: function number(x) {
      return x;
    },
    string: function string(x) {
      if (x === 'NaN') return NaN;
      var num = Number(x);

      if (isNaN(num)) {
        throw new SyntaxError('String "' + x + '" is no valid number');
      }

      if (['0b', '0o', '0x'].includes(x.substring(0, 2))) {
        if (num > Math.pow(2, 32) - 1) {
          throw new SyntaxError("String \"".concat(x, "\" is out of range"));
        }

        if (num & 0x80000000) {
          num = -1 * ~(num - 1);
        }
      }

      return num;
    },
    BigNumber: function BigNumber(x) {
      return x.toNumber();
    },
    Fraction: function Fraction(x) {
      return x.valueOf();
    },
    Unit: function Unit(x) {
      throw new Error('Second argument with valueless unit expected');
    },
    "null": function _null(x) {
      return 0;
    },
    'Unit, string | Unit': function UnitStringUnit(unit, valuelessUnit) {
      return unit.toNumber(valuelessUnit);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      return (0, _collection.deepMap)(x, this);
    }
  }); // reviver function to parse a JSON object like:
  //
  //     {"mathjs":"number","value":"2.3"}
  //
  // into a number 2.3

  number.fromJSON = function (json) {
    return parseFloat(json.value);
  };

  return number;
});
exports.createNumber = createNumber;