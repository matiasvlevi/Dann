"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = isNumber;
exports.isBigNumber = isBigNumber;
exports.isComplex = isComplex;
exports.isFraction = isFraction;
exports.isUnit = isUnit;
exports.isString = isString;
exports.isMatrix = isMatrix;
exports.isCollection = isCollection;
exports.isDenseMatrix = isDenseMatrix;
exports.isSparseMatrix = isSparseMatrix;
exports.isRange = isRange;
exports.isIndex = isIndex;
exports.isBoolean = isBoolean;
exports.isResultSet = isResultSet;
exports.isHelp = isHelp;
exports.isFunction = isFunction;
exports.isDate = isDate;
exports.isRegExp = isRegExp;
exports.isObject = isObject;
exports.isNull = isNull;
exports.isUndefined = isUndefined;
exports.isAccessorNode = isAccessorNode;
exports.isArrayNode = isArrayNode;
exports.isAssignmentNode = isAssignmentNode;
exports.isBlockNode = isBlockNode;
exports.isConditionalNode = isConditionalNode;
exports.isConstantNode = isConstantNode;
exports.isFunctionAssignmentNode = isFunctionAssignmentNode;
exports.isFunctionNode = isFunctionNode;
exports.isIndexNode = isIndexNode;
exports.isNode = isNode;
exports.isObjectNode = isObjectNode;
exports.isOperatorNode = isOperatorNode;
exports.isParenthesisNode = isParenthesisNode;
exports.isRangeNode = isRangeNode;
exports.isSymbolNode = isSymbolNode;
exports.isChain = isChain;
exports.typeOf = typeOf;
exports.isArray = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// type checks for all known types
//
// note that:
//
// - check by duck-typing on a property like `isUnit`, instead of checking instanceof.
//   instanceof cannot be used because that would not allow to pass data from
//   one instance of math.js to another since each has it's own instance of Unit.
// - check the `isUnit` property via the constructor, so there will be no
//   matches for "fake" instances like plain objects with a property `isUnit`.
//   That is important for security reasons.
// - It must not be possible to override the type checks used internally,
//   for security reasons, so these functions are not exposed in the expression
//   parser.
function isNumber(x) {
  return typeof x === 'number';
}

function isBigNumber(x) {
  return x && x.constructor.prototype.isBigNumber === true || false;
}

function isComplex(x) {
  return x && _typeof(x) === 'object' && Object.getPrototypeOf(x).isComplex === true || false;
}

function isFraction(x) {
  return x && _typeof(x) === 'object' && Object.getPrototypeOf(x).isFraction === true || false;
}

function isUnit(x) {
  return x && x.constructor.prototype.isUnit === true || false;
}

function isString(x) {
  return typeof x === 'string';
}

var isArray = Array.isArray;
exports.isArray = isArray;

function isMatrix(x) {
  return x && x.constructor.prototype.isMatrix === true || false;
}
/**
 * Test whether a value is a collection: an Array or Matrix
 * @param {*} x
 * @returns {boolean} isCollection
 */


function isCollection(x) {
  return Array.isArray(x) || isMatrix(x);
}

function isDenseMatrix(x) {
  return x && x.isDenseMatrix && x.constructor.prototype.isMatrix === true || false;
}

function isSparseMatrix(x) {
  return x && x.isSparseMatrix && x.constructor.prototype.isMatrix === true || false;
}

function isRange(x) {
  return x && x.constructor.prototype.isRange === true || false;
}

function isIndex(x) {
  return x && x.constructor.prototype.isIndex === true || false;
}

function isBoolean(x) {
  return typeof x === 'boolean';
}

function isResultSet(x) {
  return x && x.constructor.prototype.isResultSet === true || false;
}

function isHelp(x) {
  return x && x.constructor.prototype.isHelp === true || false;
}

function isFunction(x) {
  return typeof x === 'function';
}

function isDate(x) {
  return x instanceof Date;
}

function isRegExp(x) {
  return x instanceof RegExp;
}

function isObject(x) {
  return !!(x && _typeof(x) === 'object' && x.constructor === Object && !isComplex(x) && !isFraction(x));
}

function isNull(x) {
  return x === null;
}

function isUndefined(x) {
  return x === undefined;
}

function isAccessorNode(x) {
  return x && x.isAccessorNode === true && x.constructor.prototype.isNode === true || false;
}

function isArrayNode(x) {
  return x && x.isArrayNode === true && x.constructor.prototype.isNode === true || false;
}

function isAssignmentNode(x) {
  return x && x.isAssignmentNode === true && x.constructor.prototype.isNode === true || false;
}

function isBlockNode(x) {
  return x && x.isBlockNode === true && x.constructor.prototype.isNode === true || false;
}

function isConditionalNode(x) {
  return x && x.isConditionalNode === true && x.constructor.prototype.isNode === true || false;
}

function isConstantNode(x) {
  return x && x.isConstantNode === true && x.constructor.prototype.isNode === true || false;
}

function isFunctionAssignmentNode(x) {
  return x && x.isFunctionAssignmentNode === true && x.constructor.prototype.isNode === true || false;
}

function isFunctionNode(x) {
  return x && x.isFunctionNode === true && x.constructor.prototype.isNode === true || false;
}

function isIndexNode(x) {
  return x && x.isIndexNode === true && x.constructor.prototype.isNode === true || false;
}

function isNode(x) {
  return x && x.isNode === true && x.constructor.prototype.isNode === true || false;
}

function isObjectNode(x) {
  return x && x.isObjectNode === true && x.constructor.prototype.isNode === true || false;
}

function isOperatorNode(x) {
  return x && x.isOperatorNode === true && x.constructor.prototype.isNode === true || false;
}

function isParenthesisNode(x) {
  return x && x.isParenthesisNode === true && x.constructor.prototype.isNode === true || false;
}

function isRangeNode(x) {
  return x && x.isRangeNode === true && x.constructor.prototype.isNode === true || false;
}

function isSymbolNode(x) {
  return x && x.isSymbolNode === true && x.constructor.prototype.isNode === true || false;
}

function isChain(x) {
  return x && x.constructor.prototype.isChain === true || false;
}

function typeOf(x) {
  var t = _typeof(x);

  if (t === 'object') {
    // JavaScript types
    if (x === null) return 'null';
    if (Array.isArray(x)) return 'Array';
    if (x instanceof Date) return 'Date';
    if (x instanceof RegExp) return 'RegExp'; // math.js types

    if (isBigNumber(x)) return 'BigNumber';
    if (isComplex(x)) return 'Complex';
    if (isFraction(x)) return 'Fraction';
    if (isMatrix(x)) return 'Matrix';
    if (isUnit(x)) return 'Unit';
    if (isIndex(x)) return 'Index';
    if (isRange(x)) return 'Range';
    if (isResultSet(x)) return 'ResultSet';
    if (isNode(x)) return x.type;
    if (isChain(x)) return 'Chain';
    if (isHelp(x)) return 'Help';
    return 'Object';
  }

  if (t === 'function') return 'Function';
  return t; // can be 'string', 'number', 'boolean', ...
}