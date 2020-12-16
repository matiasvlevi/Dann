"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFloor = void 0;

var _decimal = _interopRequireDefault(require("decimal.js"));

var _factory = require("../../utils/factory.js");

var _collection = require("../../utils/collection.js");

var _number = require("../../utils/number.js");

var _nearlyEqual = require("../../utils/bignumber/nearlyEqual.js");

var _algorithm = require("../../type/matrix/utils/algorithm11.js");

var _algorithm2 = require("../../type/matrix/utils/algorithm14.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var name = 'floor';
var dependencies = ['typed', 'config', 'round', 'matrix', 'equalScalar'];
var createFloor = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
      config = _ref.config,
      round = _ref.round,
      matrix = _ref.matrix,
      equalScalar = _ref.equalScalar;
  var algorithm11 = (0, _algorithm.createAlgorithm11)({
    typed: typed,
    equalScalar: equalScalar
  });
  var algorithm14 = (0, _algorithm2.createAlgorithm14)({
    typed: typed
  });
  /**
   * Round a value towards minus infinity.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.floor(x)
   *    math.floor(x, n)
   *
   * Examples:
   *
   *    math.floor(3.2)              // returns number 3
   *    math.floor(3.8)              // returns number 3
   *    math.floor(-4.2)             // returns number -5
   *    math.floor(-4.7)             // returns number -5
   *
   *    math.floor(3.212, 2)          // returns number 3.21
   *    math.floor(3.288, 2)          // returns number 3.28
   *    math.floor(-4.212, 2)         // returns number -4.22
   *    math.floor(-4.782, 2)         // returns number -4.79
   *
   *    const c = math.complex(3.24, -2.71)
   *    math.floor(c)                 // returns Complex 3 - 3i
   *    math.floor(c, 1)              // returns Complex 3.2 - 2.8i
   *
   *    math.floor([3.2, 3.8, -4.7])       // returns Array [3, 3, -5]
   *    math.floor([3.21, 3.82, -4.71], 1)  // returns Array [3.2, 3.8, -4.8]
   *
   * See also:
   *
   *    ceil, fix, round
   *
   * @param  {number | BigNumber | Fraction | Complex | Array | Matrix} x  Number to be rounded
   * @param  {number | BigNumber | Array} [n=0]                            Number of decimals
   * @return {number | BigNumber | Fraction | Complex | Array | Matrix} Rounded value
   */

  return typed('floor', {
    number: function number(x) {
      if ((0, _number.nearlyEqual)(x, round(x), config.epsilon)) {
        return round(x);
      } else {
        return Math.floor(x);
      }
    },
    'number, number': function numberNumber(x, n) {
      if ((0, _number.nearlyEqual)(x, round(x, n), config.epsilon)) {
        return round(x, n);
      } else {
        var _$split = "".concat(x, "e").split('e'),
            _$split2 = _slicedToArray(_$split, 2),
            number = _$split2[0],
            exponent = _$split2[1];

        var result = Math.floor(Number("".concat(number, "e").concat(Number(exponent) + n)));

        var _$split3 = "".concat(result, "e").split('e');

        var _$split4 = _slicedToArray(_$split3, 2);

        number = _$split4[0];
        exponent = _$split4[1];
        return Number("".concat(number, "e").concat(Number(exponent) - n));
      }
    },
    Complex: function Complex(x) {
      return x.floor();
    },
    'Complex, number': function ComplexNumber(x, n) {
      return x.floor(n);
    },
    BigNumber: function BigNumber(x) {
      if ((0, _nearlyEqual.nearlyEqual)(x, round(x), config.epsilon)) {
        return round(x);
      } else {
        return x.floor();
      }
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, n) {
      if ((0, _nearlyEqual.nearlyEqual)(x, round(x, n), config.epsilon)) {
        return round(x, n);
      } else {
        return x.toDecimalPlaces(n.toNumber(), _decimal["default"].ROUND_FLOOR);
      }
    },
    Fraction: function Fraction(x) {
      return x.floor();
    },
    'Fraction, number': function FractionNumber(x, n) {
      return x.floor(n);
    },
    'Array | Matrix': function ArrayMatrix(x) {
      // deep map collection, skip zeros since floor(0) = 0
      return (0, _collection.deepMap)(x, this, true);
    },
    'Array | Matrix, number': function ArrayMatrixNumber(x, n) {
      var _this = this;

      // deep map collection, skip zeros since ceil(0) = 0
      return (0, _collection.deepMap)(x, function (i) {
        return _this(i, n);
      }, true);
    },
    'SparseMatrix, number | BigNumber': function SparseMatrixNumberBigNumber(x, y) {
      return algorithm11(x, y, this, false);
    },
    'DenseMatrix, number | BigNumber': function DenseMatrixNumberBigNumber(x, y) {
      return algorithm14(x, y, this, false);
    },
    'number | Complex | BigNumber, Array': function numberComplexBigNumberArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, this, true).valueOf();
    }
  });
});
exports.createFloor = createFloor;