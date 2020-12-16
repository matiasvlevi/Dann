function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */
import { config } from './configReadonly.js';
import { createChainClass, createChain, createNode, createArrayNode, createConditionalNode, createFunctionAssignmentNode, createObjectNode, createParenthesisNode, createRelationalNode, createReviver, createBlockNode, createOperatorNode, createSymbolNode, createAccessorNode, createConstantNode, createRangeNode, createAssignmentNode, createFunctionNode, createIndexNode, createParse, createEvaluate, createHelpClass, createSimplify, createRationalize, createCompile, createHelp, createParserClass, createDerivative, createParser, createFilterTransform, createMapTransform, createForEachTransform, createSubsetTransform, createApplyTransform, createMaxTransform, createMinTransform, createSumTransform, createMeanTransform, createRangeTransform, createVarianceTransform, createStdTransform } from '../factoriesNumber.js';
import { typed, Range, nthRoot, e, _false, LN10, LOG10E, _NaN, phi, SQRT1_2 // eslint-disable-line camelcase
, tau, version, string, filter, map, combinationsWithRep, pickRandom, randomInt, compare, compareText, smaller, larger, erf, format, clone, typeOf, unaryMinus, abs, cbrt, cube, expm1, floor, lcm, log2, multiplyScalar, sign, square, xgcd, pow, log1p, norm, bitAnd, bitOr, leftShift, rightLogShift, not, xor, matrix, combinations, acos, acot, acsc, asec, asin, atan, atanh, cosh, coth, csch, sech, sinh, tanh, isInteger, isPositive, isNaN, ResultSet, round, LN2, _null, SQRT2, number, apply, size, random, compareNatural, smallerEq, print, isNumeric, isPrime, replacer, addScalar, exp, gcd, mod, sqrt, divideScalar, add, bitNot, rightArithShift, or, subset, acosh, acsch, asinh, cos, csc, sin, isZero, hypot, _Infinity, pi, _true, forEach, partitionSelect, equalScalar, equalText, unequal, hasNumericValue, unaryPlus, fix, multiply, log, bitXor, index, acoth, atan2, sec, isNegative, catalan, LOG2E, boolean, equal, deepEqual, quantileSeq, numeric, log10, divide, gamma, cot, composition, factorial, permutations, mode, max, sum, median, ceil, and, tan, multinomial, prod, mean, subtract, largerEq, mad, stirlingS2, min, asech, variance, bellNumbers, std, range } from './pureFunctionsNumber.generated.js';
var math = {}; // NOT pure!

var mathWithTransform = {}; // NOT pure!

var classes = {}; // NOT pure!

export var Chain = createChainClass({
  math
});
export var chain = createChain({
  Chain,
  typed
});
export var Node = createNode({
  mathWithTransform
});
export var ArrayNode = createArrayNode({
  Node
});
export var ConditionalNode = createConditionalNode({
  Node
});
export var FunctionAssignmentNode = createFunctionAssignmentNode({
  Node,
  typed
});
export var ObjectNode = createObjectNode({
  Node
});
export var ParenthesisNode = createParenthesisNode({
  Node
});
export var RelationalNode = createRelationalNode({
  Node
});
export var reviver = createReviver({
  classes
});
export var BlockNode = createBlockNode({
  Node,
  ResultSet
});
export var OperatorNode = createOperatorNode({
  Node
});
export var SymbolNode = createSymbolNode({
  Node,
  math
});
export var AccessorNode = createAccessorNode({
  Node,
  subset
});
export var ConstantNode = createConstantNode({
  Node
});
export var RangeNode = createRangeNode({
  Node
});
export var AssignmentNode = createAssignmentNode({
  matrix,
  Node,
  subset
});
export var FunctionNode = createFunctionNode({
  Node,
  SymbolNode,
  math
});
export var IndexNode = createIndexNode({
  Node,
  Range,
  size
});
export var parse = createParse({
  AccessorNode,
  ArrayNode,
  AssignmentNode,
  BlockNode,
  ConditionalNode,
  ConstantNode,
  FunctionAssignmentNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  RangeNode,
  RelationalNode,
  SymbolNode,
  config,
  numeric,
  typed
});
export var evaluate = createEvaluate({
  parse,
  typed
});
export var Help = createHelpClass({
  parse
});
export var simplify = createSimplify({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add,
  config,
  divide,
  equal,
  isZero,
  mathWithTransform,
  multiply,
  parse,
  pow,
  subtract,
  typed
});
export var rationalize = createRationalize({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add,
  config,
  divide,
  equal,
  isZero,
  mathWithTransform,
  multiply,
  parse,
  pow,
  simplify,
  subtract,
  typed
});
export var compile = createCompile({
  parse,
  typed
});
export var help = createHelp({
  Help,
  mathWithTransform,
  typed
});
export var Parser = createParserClass({
  parse
});
export var derivative = createDerivative({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  config,
  equal,
  isZero,
  numeric,
  parse,
  simplify,
  typed
});
export var parser = createParser({
  Parser,
  typed
});

_extends(math, {
  typed,
  chain,
  nthRoot,
  e,
  false: _false,
  LN10,
  LOG10E,
  NaN: _NaN,
  phi,
  SQRT1_2,
  tau,
  version,
  string,
  filter,
  map,
  combinationsWithRep,
  pickRandom,
  randomInt,
  compare,
  compareText,
  smaller,
  larger,
  erf,
  format,
  clone,
  typeOf,
  reviver,
  unaryMinus,
  abs,
  cbrt,
  cube,
  expm1,
  floor,
  lcm,
  log2,
  multiplyScalar,
  sign,
  square,
  xgcd,
  pow,
  log1p,
  norm,
  bitAnd,
  bitOr,
  leftShift,
  rightLogShift,
  not,
  xor,
  matrix,
  combinations,
  acos,
  acot,
  acsc,
  asec,
  asin,
  atan,
  atanh,
  cosh,
  coth,
  csch,
  sech,
  sinh,
  tanh,
  isInteger,
  isPositive,
  isNaN,
  round,
  'E': e,
  LN2,
  null: _null,
  SQRT2,
  number,
  apply,
  size,
  random,
  compareNatural,
  smallerEq,
  print,
  isNumeric,
  isPrime,
  replacer,
  addScalar,
  exp,
  gcd,
  mod,
  sqrt,
  divideScalar,
  add,
  bitNot,
  rightArithShift,
  or,
  subset,
  acosh,
  acsch,
  asinh,
  cos,
  csc,
  sin,
  isZero,
  hypot,
  Infinity: _Infinity,
  pi,
  true: _true,
  forEach,
  partitionSelect,
  equalScalar,
  equalText,
  unequal,
  hasNumericValue,
  unaryPlus,
  fix,
  multiply,
  log,
  bitXor,
  index,
  acoth,
  atan2,
  sec,
  isNegative,
  catalan,
  LOG2E,
  boolean,
  equal,
  deepEqual,
  quantileSeq,
  numeric,
  log10,
  divide,
  gamma,
  cot,
  composition,
  factorial,
  permutations,
  mode,
  max,
  sum,
  median,
  ceil,
  and,
  tan,
  'PI': pi,
  parse,
  evaluate,
  multinomial,
  prod,
  mean,
  subtract,
  simplify,
  rationalize,
  compile,
  largerEq,
  mad,
  help,
  stirlingS2,
  min,
  asech,
  derivative,
  parser,
  variance,
  bellNumbers,
  std,
  range,
  config
});

_extends(mathWithTransform, math, {
  filter: createFilterTransform({
    typed
  }),
  map: createMapTransform({
    typed
  }),
  forEach: createForEachTransform({
    typed
  }),
  subset: createSubsetTransform({}),
  apply: createApplyTransform({
    isInteger,
    typed
  }),
  max: createMaxTransform({
    config,
    larger,
    numeric,
    typed
  }),
  min: createMinTransform({
    config,
    numeric,
    smaller,
    typed
  }),
  sum: createSumTransform({
    add,
    config,
    numeric,
    typed
  }),
  mean: createMeanTransform({
    add,
    divide,
    typed
  }),
  range: createRangeTransform({
    matrix,
    config,
    larger,
    largerEq,
    smaller,
    smallerEq,
    typed
  }),
  variance: createVarianceTransform({
    add,
    apply,
    divide,
    isNaN,
    multiply,
    subtract,
    typed
  }),
  std: createStdTransform({
    sqrt,
    typed,
    variance
  })
});

_extends(classes, {
  Range,
  Chain,
  Node,
  ArrayNode,
  ConditionalNode,
  FunctionAssignmentNode,
  ObjectNode,
  ParenthesisNode,
  RelationalNode,
  ResultSet,
  BlockNode,
  OperatorNode,
  SymbolNode,
  AccessorNode,
  ConstantNode,
  RangeNode,
  AssignmentNode,
  FunctionNode,
  IndexNode,
  Help,
  Parser
});

Chain.createProxy(math);
export { embeddedDocs as docs } from '../expression/embeddedDocs/embeddedDocs.js';