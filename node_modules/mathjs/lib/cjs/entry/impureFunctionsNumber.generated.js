"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "docs", {
  enumerable: true,
  get: function get() {
    return _embeddedDocs.embeddedDocs;
  }
});
exports.parser = exports.derivative = exports.Parser = exports.help = exports.compile = exports.rationalize = exports.simplify = exports.Help = exports.evaluate = exports.parse = exports.IndexNode = exports.FunctionNode = exports.AssignmentNode = exports.RangeNode = exports.ConstantNode = exports.AccessorNode = exports.SymbolNode = exports.OperatorNode = exports.BlockNode = exports.reviver = exports.RelationalNode = exports.ParenthesisNode = exports.ObjectNode = exports.FunctionAssignmentNode = exports.ConditionalNode = exports.ArrayNode = exports.Node = exports.chain = exports.Chain = void 0;

var _configReadonly = require("./configReadonly.js");

var _factoriesNumber = require("../factoriesNumber.js");

var _pureFunctionsNumberGenerated = require("./pureFunctionsNumber.generated.js");

var _embeddedDocs = require("../expression/embeddedDocs/embeddedDocs.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var math = {}; // NOT pure!

var mathWithTransform = {}; // NOT pure!

var classes = {}; // NOT pure!

var Chain = (0, _factoriesNumber.createChainClass)({
  math: math
});
exports.Chain = Chain;
var chain = (0, _factoriesNumber.createChain)({
  Chain: Chain,
  typed: _pureFunctionsNumberGenerated.typed
});
exports.chain = chain;
var Node = (0, _factoriesNumber.createNode)({
  mathWithTransform: mathWithTransform
});
exports.Node = Node;
var ArrayNode = (0, _factoriesNumber.createArrayNode)({
  Node: Node
});
exports.ArrayNode = ArrayNode;
var ConditionalNode = (0, _factoriesNumber.createConditionalNode)({
  Node: Node
});
exports.ConditionalNode = ConditionalNode;
var FunctionAssignmentNode = (0, _factoriesNumber.createFunctionAssignmentNode)({
  Node: Node,
  typed: _pureFunctionsNumberGenerated.typed
});
exports.FunctionAssignmentNode = FunctionAssignmentNode;
var ObjectNode = (0, _factoriesNumber.createObjectNode)({
  Node: Node
});
exports.ObjectNode = ObjectNode;
var ParenthesisNode = (0, _factoriesNumber.createParenthesisNode)({
  Node: Node
});
exports.ParenthesisNode = ParenthesisNode;
var RelationalNode = (0, _factoriesNumber.createRelationalNode)({
  Node: Node
});
exports.RelationalNode = RelationalNode;
var reviver = (0, _factoriesNumber.createReviver)({
  classes: classes
});
exports.reviver = reviver;
var BlockNode = (0, _factoriesNumber.createBlockNode)({
  Node: Node,
  ResultSet: _pureFunctionsNumberGenerated.ResultSet
});
exports.BlockNode = BlockNode;
var OperatorNode = (0, _factoriesNumber.createOperatorNode)({
  Node: Node
});
exports.OperatorNode = OperatorNode;
var SymbolNode = (0, _factoriesNumber.createSymbolNode)({
  Node: Node,
  math: math
});
exports.SymbolNode = SymbolNode;
var AccessorNode = (0, _factoriesNumber.createAccessorNode)({
  Node: Node,
  subset: _pureFunctionsNumberGenerated.subset
});
exports.AccessorNode = AccessorNode;
var ConstantNode = (0, _factoriesNumber.createConstantNode)({
  Node: Node
});
exports.ConstantNode = ConstantNode;
var RangeNode = (0, _factoriesNumber.createRangeNode)({
  Node: Node
});
exports.RangeNode = RangeNode;
var AssignmentNode = (0, _factoriesNumber.createAssignmentNode)({
  matrix: _pureFunctionsNumberGenerated.matrix,
  Node: Node,
  subset: _pureFunctionsNumberGenerated.subset
});
exports.AssignmentNode = AssignmentNode;
var FunctionNode = (0, _factoriesNumber.createFunctionNode)({
  Node: Node,
  SymbolNode: SymbolNode,
  math: math
});
exports.FunctionNode = FunctionNode;
var IndexNode = (0, _factoriesNumber.createIndexNode)({
  Node: Node,
  Range: _pureFunctionsNumberGenerated.Range,
  size: _pureFunctionsNumberGenerated.size
});
exports.IndexNode = IndexNode;
var parse = (0, _factoriesNumber.createParse)({
  AccessorNode: AccessorNode,
  ArrayNode: ArrayNode,
  AssignmentNode: AssignmentNode,
  BlockNode: BlockNode,
  ConditionalNode: ConditionalNode,
  ConstantNode: ConstantNode,
  FunctionAssignmentNode: FunctionAssignmentNode,
  FunctionNode: FunctionNode,
  IndexNode: IndexNode,
  ObjectNode: ObjectNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  RangeNode: RangeNode,
  RelationalNode: RelationalNode,
  SymbolNode: SymbolNode,
  config: _configReadonly.config,
  numeric: _pureFunctionsNumberGenerated.numeric,
  typed: _pureFunctionsNumberGenerated.typed
});
exports.parse = parse;
var evaluate = (0, _factoriesNumber.createEvaluate)({
  parse: parse,
  typed: _pureFunctionsNumberGenerated.typed
});
exports.evaluate = evaluate;
var Help = (0, _factoriesNumber.createHelpClass)({
  parse: parse
});
exports.Help = Help;
var simplify = (0, _factoriesNumber.createSimplify)({
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  SymbolNode: SymbolNode,
  add: _pureFunctionsNumberGenerated.add,
  config: _configReadonly.config,
  divide: _pureFunctionsNumberGenerated.divide,
  equal: _pureFunctionsNumberGenerated.equal,
  isZero: _pureFunctionsNumberGenerated.isZero,
  mathWithTransform: mathWithTransform,
  multiply: _pureFunctionsNumberGenerated.multiply,
  parse: parse,
  pow: _pureFunctionsNumberGenerated.pow,
  subtract: _pureFunctionsNumberGenerated.subtract,
  typed: _pureFunctionsNumberGenerated.typed
});
exports.simplify = simplify;
var rationalize = (0, _factoriesNumber.createRationalize)({
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  SymbolNode: SymbolNode,
  add: _pureFunctionsNumberGenerated.add,
  config: _configReadonly.config,
  divide: _pureFunctionsNumberGenerated.divide,
  equal: _pureFunctionsNumberGenerated.equal,
  isZero: _pureFunctionsNumberGenerated.isZero,
  mathWithTransform: mathWithTransform,
  multiply: _pureFunctionsNumberGenerated.multiply,
  parse: parse,
  pow: _pureFunctionsNumberGenerated.pow,
  simplify: simplify,
  subtract: _pureFunctionsNumberGenerated.subtract,
  typed: _pureFunctionsNumberGenerated.typed
});
exports.rationalize = rationalize;
var compile = (0, _factoriesNumber.createCompile)({
  parse: parse,
  typed: _pureFunctionsNumberGenerated.typed
});
exports.compile = compile;
var help = (0, _factoriesNumber.createHelp)({
  Help: Help,
  mathWithTransform: mathWithTransform,
  typed: _pureFunctionsNumberGenerated.typed
});
exports.help = help;
var Parser = (0, _factoriesNumber.createParserClass)({
  parse: parse
});
exports.Parser = Parser;
var derivative = (0, _factoriesNumber.createDerivative)({
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  SymbolNode: SymbolNode,
  config: _configReadonly.config,
  equal: _pureFunctionsNumberGenerated.equal,
  isZero: _pureFunctionsNumberGenerated.isZero,
  numeric: _pureFunctionsNumberGenerated.numeric,
  parse: parse,
  simplify: simplify,
  typed: _pureFunctionsNumberGenerated.typed
});
exports.derivative = derivative;
var parser = (0, _factoriesNumber.createParser)({
  Parser: Parser,
  typed: _pureFunctionsNumberGenerated.typed
});
exports.parser = parser;

_extends(math, {
  typed: _pureFunctionsNumberGenerated.typed,
  chain: chain,
  nthRoot: _pureFunctionsNumberGenerated.nthRoot,
  e: _pureFunctionsNumberGenerated.e,
  "false": _pureFunctionsNumberGenerated._false,
  LN10: _pureFunctionsNumberGenerated.LN10,
  LOG10E: _pureFunctionsNumberGenerated.LOG10E,
  NaN: _pureFunctionsNumberGenerated._NaN,
  phi: _pureFunctionsNumberGenerated.phi,
  SQRT1_2: _pureFunctionsNumberGenerated.SQRT1_2,
  tau: _pureFunctionsNumberGenerated.tau,
  version: _pureFunctionsNumberGenerated.version,
  string: _pureFunctionsNumberGenerated.string,
  filter: _pureFunctionsNumberGenerated.filter,
  map: _pureFunctionsNumberGenerated.map,
  combinationsWithRep: _pureFunctionsNumberGenerated.combinationsWithRep,
  pickRandom: _pureFunctionsNumberGenerated.pickRandom,
  randomInt: _pureFunctionsNumberGenerated.randomInt,
  compare: _pureFunctionsNumberGenerated.compare,
  compareText: _pureFunctionsNumberGenerated.compareText,
  smaller: _pureFunctionsNumberGenerated.smaller,
  larger: _pureFunctionsNumberGenerated.larger,
  erf: _pureFunctionsNumberGenerated.erf,
  format: _pureFunctionsNumberGenerated.format,
  clone: _pureFunctionsNumberGenerated.clone,
  typeOf: _pureFunctionsNumberGenerated.typeOf,
  reviver: reviver,
  unaryMinus: _pureFunctionsNumberGenerated.unaryMinus,
  abs: _pureFunctionsNumberGenerated.abs,
  cbrt: _pureFunctionsNumberGenerated.cbrt,
  cube: _pureFunctionsNumberGenerated.cube,
  expm1: _pureFunctionsNumberGenerated.expm1,
  floor: _pureFunctionsNumberGenerated.floor,
  lcm: _pureFunctionsNumberGenerated.lcm,
  log2: _pureFunctionsNumberGenerated.log2,
  multiplyScalar: _pureFunctionsNumberGenerated.multiplyScalar,
  sign: _pureFunctionsNumberGenerated.sign,
  square: _pureFunctionsNumberGenerated.square,
  xgcd: _pureFunctionsNumberGenerated.xgcd,
  pow: _pureFunctionsNumberGenerated.pow,
  log1p: _pureFunctionsNumberGenerated.log1p,
  norm: _pureFunctionsNumberGenerated.norm,
  bitAnd: _pureFunctionsNumberGenerated.bitAnd,
  bitOr: _pureFunctionsNumberGenerated.bitOr,
  leftShift: _pureFunctionsNumberGenerated.leftShift,
  rightLogShift: _pureFunctionsNumberGenerated.rightLogShift,
  not: _pureFunctionsNumberGenerated.not,
  xor: _pureFunctionsNumberGenerated.xor,
  matrix: _pureFunctionsNumberGenerated.matrix,
  combinations: _pureFunctionsNumberGenerated.combinations,
  acos: _pureFunctionsNumberGenerated.acos,
  acot: _pureFunctionsNumberGenerated.acot,
  acsc: _pureFunctionsNumberGenerated.acsc,
  asec: _pureFunctionsNumberGenerated.asec,
  asin: _pureFunctionsNumberGenerated.asin,
  atan: _pureFunctionsNumberGenerated.atan,
  atanh: _pureFunctionsNumberGenerated.atanh,
  cosh: _pureFunctionsNumberGenerated.cosh,
  coth: _pureFunctionsNumberGenerated.coth,
  csch: _pureFunctionsNumberGenerated.csch,
  sech: _pureFunctionsNumberGenerated.sech,
  sinh: _pureFunctionsNumberGenerated.sinh,
  tanh: _pureFunctionsNumberGenerated.tanh,
  isInteger: _pureFunctionsNumberGenerated.isInteger,
  isPositive: _pureFunctionsNumberGenerated.isPositive,
  isNaN: _pureFunctionsNumberGenerated.isNaN,
  round: _pureFunctionsNumberGenerated.round,
  'E': _pureFunctionsNumberGenerated.e,
  LN2: _pureFunctionsNumberGenerated.LN2,
  "null": _pureFunctionsNumberGenerated._null,
  SQRT2: _pureFunctionsNumberGenerated.SQRT2,
  number: _pureFunctionsNumberGenerated.number,
  apply: _pureFunctionsNumberGenerated.apply,
  size: _pureFunctionsNumberGenerated.size,
  random: _pureFunctionsNumberGenerated.random,
  compareNatural: _pureFunctionsNumberGenerated.compareNatural,
  smallerEq: _pureFunctionsNumberGenerated.smallerEq,
  print: _pureFunctionsNumberGenerated.print,
  isNumeric: _pureFunctionsNumberGenerated.isNumeric,
  isPrime: _pureFunctionsNumberGenerated.isPrime,
  replacer: _pureFunctionsNumberGenerated.replacer,
  addScalar: _pureFunctionsNumberGenerated.addScalar,
  exp: _pureFunctionsNumberGenerated.exp,
  gcd: _pureFunctionsNumberGenerated.gcd,
  mod: _pureFunctionsNumberGenerated.mod,
  sqrt: _pureFunctionsNumberGenerated.sqrt,
  divideScalar: _pureFunctionsNumberGenerated.divideScalar,
  add: _pureFunctionsNumberGenerated.add,
  bitNot: _pureFunctionsNumberGenerated.bitNot,
  rightArithShift: _pureFunctionsNumberGenerated.rightArithShift,
  or: _pureFunctionsNumberGenerated.or,
  subset: _pureFunctionsNumberGenerated.subset,
  acosh: _pureFunctionsNumberGenerated.acosh,
  acsch: _pureFunctionsNumberGenerated.acsch,
  asinh: _pureFunctionsNumberGenerated.asinh,
  cos: _pureFunctionsNumberGenerated.cos,
  csc: _pureFunctionsNumberGenerated.csc,
  sin: _pureFunctionsNumberGenerated.sin,
  isZero: _pureFunctionsNumberGenerated.isZero,
  hypot: _pureFunctionsNumberGenerated.hypot,
  Infinity: _pureFunctionsNumberGenerated._Infinity,
  pi: _pureFunctionsNumberGenerated.pi,
  "true": _pureFunctionsNumberGenerated._true,
  forEach: _pureFunctionsNumberGenerated.forEach,
  partitionSelect: _pureFunctionsNumberGenerated.partitionSelect,
  equalScalar: _pureFunctionsNumberGenerated.equalScalar,
  equalText: _pureFunctionsNumberGenerated.equalText,
  unequal: _pureFunctionsNumberGenerated.unequal,
  hasNumericValue: _pureFunctionsNumberGenerated.hasNumericValue,
  unaryPlus: _pureFunctionsNumberGenerated.unaryPlus,
  fix: _pureFunctionsNumberGenerated.fix,
  multiply: _pureFunctionsNumberGenerated.multiply,
  log: _pureFunctionsNumberGenerated.log,
  bitXor: _pureFunctionsNumberGenerated.bitXor,
  index: _pureFunctionsNumberGenerated.index,
  acoth: _pureFunctionsNumberGenerated.acoth,
  atan2: _pureFunctionsNumberGenerated.atan2,
  sec: _pureFunctionsNumberGenerated.sec,
  isNegative: _pureFunctionsNumberGenerated.isNegative,
  catalan: _pureFunctionsNumberGenerated.catalan,
  LOG2E: _pureFunctionsNumberGenerated.LOG2E,
  "boolean": _pureFunctionsNumberGenerated["boolean"],
  equal: _pureFunctionsNumberGenerated.equal,
  deepEqual: _pureFunctionsNumberGenerated.deepEqual,
  quantileSeq: _pureFunctionsNumberGenerated.quantileSeq,
  numeric: _pureFunctionsNumberGenerated.numeric,
  log10: _pureFunctionsNumberGenerated.log10,
  divide: _pureFunctionsNumberGenerated.divide,
  gamma: _pureFunctionsNumberGenerated.gamma,
  cot: _pureFunctionsNumberGenerated.cot,
  composition: _pureFunctionsNumberGenerated.composition,
  factorial: _pureFunctionsNumberGenerated.factorial,
  permutations: _pureFunctionsNumberGenerated.permutations,
  mode: _pureFunctionsNumberGenerated.mode,
  max: _pureFunctionsNumberGenerated.max,
  sum: _pureFunctionsNumberGenerated.sum,
  median: _pureFunctionsNumberGenerated.median,
  ceil: _pureFunctionsNumberGenerated.ceil,
  and: _pureFunctionsNumberGenerated.and,
  tan: _pureFunctionsNumberGenerated.tan,
  'PI': _pureFunctionsNumberGenerated.pi,
  parse: parse,
  evaluate: evaluate,
  multinomial: _pureFunctionsNumberGenerated.multinomial,
  prod: _pureFunctionsNumberGenerated.prod,
  mean: _pureFunctionsNumberGenerated.mean,
  subtract: _pureFunctionsNumberGenerated.subtract,
  simplify: simplify,
  rationalize: rationalize,
  compile: compile,
  largerEq: _pureFunctionsNumberGenerated.largerEq,
  mad: _pureFunctionsNumberGenerated.mad,
  help: help,
  stirlingS2: _pureFunctionsNumberGenerated.stirlingS2,
  min: _pureFunctionsNumberGenerated.min,
  asech: _pureFunctionsNumberGenerated.asech,
  derivative: derivative,
  parser: parser,
  variance: _pureFunctionsNumberGenerated.variance,
  bellNumbers: _pureFunctionsNumberGenerated.bellNumbers,
  std: _pureFunctionsNumberGenerated.std,
  range: _pureFunctionsNumberGenerated.range,
  config: _configReadonly.config
});

_extends(mathWithTransform, math, {
  filter: (0, _factoriesNumber.createFilterTransform)({
    typed: _pureFunctionsNumberGenerated.typed
  }),
  map: (0, _factoriesNumber.createMapTransform)({
    typed: _pureFunctionsNumberGenerated.typed
  }),
  forEach: (0, _factoriesNumber.createForEachTransform)({
    typed: _pureFunctionsNumberGenerated.typed
  }),
  subset: (0, _factoriesNumber.createSubsetTransform)({}),
  apply: (0, _factoriesNumber.createApplyTransform)({
    isInteger: _pureFunctionsNumberGenerated.isInteger,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  max: (0, _factoriesNumber.createMaxTransform)({
    config: _configReadonly.config,
    larger: _pureFunctionsNumberGenerated.larger,
    numeric: _pureFunctionsNumberGenerated.numeric,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  min: (0, _factoriesNumber.createMinTransform)({
    config: _configReadonly.config,
    numeric: _pureFunctionsNumberGenerated.numeric,
    smaller: _pureFunctionsNumberGenerated.smaller,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  sum: (0, _factoriesNumber.createSumTransform)({
    add: _pureFunctionsNumberGenerated.add,
    config: _configReadonly.config,
    numeric: _pureFunctionsNumberGenerated.numeric,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  mean: (0, _factoriesNumber.createMeanTransform)({
    add: _pureFunctionsNumberGenerated.add,
    divide: _pureFunctionsNumberGenerated.divide,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  range: (0, _factoriesNumber.createRangeTransform)({
    matrix: _pureFunctionsNumberGenerated.matrix,
    config: _configReadonly.config,
    larger: _pureFunctionsNumberGenerated.larger,
    largerEq: _pureFunctionsNumberGenerated.largerEq,
    smaller: _pureFunctionsNumberGenerated.smaller,
    smallerEq: _pureFunctionsNumberGenerated.smallerEq,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  variance: (0, _factoriesNumber.createVarianceTransform)({
    add: _pureFunctionsNumberGenerated.add,
    apply: _pureFunctionsNumberGenerated.apply,
    divide: _pureFunctionsNumberGenerated.divide,
    isNaN: _pureFunctionsNumberGenerated.isNaN,
    multiply: _pureFunctionsNumberGenerated.multiply,
    subtract: _pureFunctionsNumberGenerated.subtract,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  std: (0, _factoriesNumber.createStdTransform)({
    sqrt: _pureFunctionsNumberGenerated.sqrt,
    typed: _pureFunctionsNumberGenerated.typed,
    variance: _pureFunctionsNumberGenerated.variance
  })
});

_extends(classes, {
  Range: _pureFunctionsNumberGenerated.Range,
  Chain: Chain,
  Node: Node,
  ArrayNode: ArrayNode,
  ConditionalNode: ConditionalNode,
  FunctionAssignmentNode: FunctionAssignmentNode,
  ObjectNode: ObjectNode,
  ParenthesisNode: ParenthesisNode,
  RelationalNode: RelationalNode,
  ResultSet: _pureFunctionsNumberGenerated.ResultSet,
  BlockNode: BlockNode,
  OperatorNode: OperatorNode,
  SymbolNode: SymbolNode,
  AccessorNode: AccessorNode,
  ConstantNode: ConstantNode,
  RangeNode: RangeNode,
  AssignmentNode: AssignmentNode,
  FunctionNode: FunctionNode,
  IndexNode: IndexNode,
  Help: Help,
  Parser: Parser
});

Chain.createProxy(math);