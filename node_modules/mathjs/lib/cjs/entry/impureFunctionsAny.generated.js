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
exports.derivative = exports.parser = exports.rationalize = exports.simplify = exports.compile = exports.help = exports.Parser = exports.Help = exports.evaluate = exports.parse = exports.FunctionNode = exports.SymbolNode = exports.AssignmentNode = exports.IndexNode = exports.AccessorNode = exports.chain = exports.FunctionAssignmentNode = exports.RangeNode = exports.OperatorNode = exports.ConditionalNode = exports.reviver = exports.Chain = exports.RelationalNode = exports.ParenthesisNode = exports.ObjectNode = exports.ConstantNode = exports.BlockNode = exports.ArrayNode = exports.Node = void 0;

var _configReadonly = require("./configReadonly.js");

var _factoriesAny = require("../factoriesAny.js");

var _pureFunctionsAnyGenerated = require("./pureFunctionsAny.generated.js");

var _embeddedDocs = require("../expression/embeddedDocs/embeddedDocs.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var math = {}; // NOT pure!

var mathWithTransform = {}; // NOT pure!

var classes = {}; // NOT pure!

var Node = (0, _factoriesAny.createNode)({
  mathWithTransform: mathWithTransform
});
exports.Node = Node;
var ArrayNode = (0, _factoriesAny.createArrayNode)({
  Node: Node
});
exports.ArrayNode = ArrayNode;
var BlockNode = (0, _factoriesAny.createBlockNode)({
  Node: Node,
  ResultSet: _pureFunctionsAnyGenerated.ResultSet
});
exports.BlockNode = BlockNode;
var ConstantNode = (0, _factoriesAny.createConstantNode)({
  Node: Node
});
exports.ConstantNode = ConstantNode;
var ObjectNode = (0, _factoriesAny.createObjectNode)({
  Node: Node
});
exports.ObjectNode = ObjectNode;
var ParenthesisNode = (0, _factoriesAny.createParenthesisNode)({
  Node: Node
});
exports.ParenthesisNode = ParenthesisNode;
var RelationalNode = (0, _factoriesAny.createRelationalNode)({
  Node: Node
});
exports.RelationalNode = RelationalNode;
var Chain = (0, _factoriesAny.createChainClass)({
  math: math
});
exports.Chain = Chain;
var reviver = (0, _factoriesAny.createReviver)({
  classes: classes
});
exports.reviver = reviver;
var ConditionalNode = (0, _factoriesAny.createConditionalNode)({
  Node: Node
});
exports.ConditionalNode = ConditionalNode;
var OperatorNode = (0, _factoriesAny.createOperatorNode)({
  Node: Node
});
exports.OperatorNode = OperatorNode;
var RangeNode = (0, _factoriesAny.createRangeNode)({
  Node: Node
});
exports.RangeNode = RangeNode;
var FunctionAssignmentNode = (0, _factoriesAny.createFunctionAssignmentNode)({
  Node: Node,
  typed: _pureFunctionsAnyGenerated.typed
});
exports.FunctionAssignmentNode = FunctionAssignmentNode;
var chain = (0, _factoriesAny.createChain)({
  Chain: Chain,
  typed: _pureFunctionsAnyGenerated.typed
});
exports.chain = chain;
var AccessorNode = (0, _factoriesAny.createAccessorNode)({
  Node: Node,
  subset: _pureFunctionsAnyGenerated.subset
});
exports.AccessorNode = AccessorNode;
var IndexNode = (0, _factoriesAny.createIndexNode)({
  Node: Node,
  Range: _pureFunctionsAnyGenerated.Range,
  size: _pureFunctionsAnyGenerated.size
});
exports.IndexNode = IndexNode;
var AssignmentNode = (0, _factoriesAny.createAssignmentNode)({
  matrix: _pureFunctionsAnyGenerated.matrix,
  Node: Node,
  subset: _pureFunctionsAnyGenerated.subset
});
exports.AssignmentNode = AssignmentNode;
var SymbolNode = (0, _factoriesAny.createSymbolNode)({
  Unit: _pureFunctionsAnyGenerated.Unit,
  Node: Node,
  math: math
});
exports.SymbolNode = SymbolNode;
var FunctionNode = (0, _factoriesAny.createFunctionNode)({
  Node: Node,
  SymbolNode: SymbolNode,
  math: math
});
exports.FunctionNode = FunctionNode;
var parse = (0, _factoriesAny.createParse)({
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
  numeric: _pureFunctionsAnyGenerated.numeric,
  typed: _pureFunctionsAnyGenerated.typed
});
exports.parse = parse;
var evaluate = (0, _factoriesAny.createEvaluate)({
  parse: parse,
  typed: _pureFunctionsAnyGenerated.typed
});
exports.evaluate = evaluate;
var Help = (0, _factoriesAny.createHelpClass)({
  parse: parse
});
exports.Help = Help;
var Parser = (0, _factoriesAny.createParserClass)({
  parse: parse
});
exports.Parser = Parser;
var help = (0, _factoriesAny.createHelp)({
  Help: Help,
  mathWithTransform: mathWithTransform,
  typed: _pureFunctionsAnyGenerated.typed
});
exports.help = help;
var compile = (0, _factoriesAny.createCompile)({
  parse: parse,
  typed: _pureFunctionsAnyGenerated.typed
});
exports.compile = compile;
var simplify = (0, _factoriesAny.createSimplify)({
  bignumber: _pureFunctionsAnyGenerated.bignumber,
  fraction: _pureFunctionsAnyGenerated.fraction,
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  SymbolNode: SymbolNode,
  add: _pureFunctionsAnyGenerated.add,
  config: _configReadonly.config,
  divide: _pureFunctionsAnyGenerated.divide,
  equal: _pureFunctionsAnyGenerated.equal,
  isZero: _pureFunctionsAnyGenerated.isZero,
  mathWithTransform: mathWithTransform,
  multiply: _pureFunctionsAnyGenerated.multiply,
  parse: parse,
  pow: _pureFunctionsAnyGenerated.pow,
  subtract: _pureFunctionsAnyGenerated.subtract,
  typed: _pureFunctionsAnyGenerated.typed
});
exports.simplify = simplify;
var rationalize = (0, _factoriesAny.createRationalize)({
  bignumber: _pureFunctionsAnyGenerated.bignumber,
  fraction: _pureFunctionsAnyGenerated.fraction,
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  SymbolNode: SymbolNode,
  add: _pureFunctionsAnyGenerated.add,
  config: _configReadonly.config,
  divide: _pureFunctionsAnyGenerated.divide,
  equal: _pureFunctionsAnyGenerated.equal,
  isZero: _pureFunctionsAnyGenerated.isZero,
  mathWithTransform: mathWithTransform,
  multiply: _pureFunctionsAnyGenerated.multiply,
  parse: parse,
  pow: _pureFunctionsAnyGenerated.pow,
  simplify: simplify,
  subtract: _pureFunctionsAnyGenerated.subtract,
  typed: _pureFunctionsAnyGenerated.typed
});
exports.rationalize = rationalize;
var parser = (0, _factoriesAny.createParser)({
  Parser: Parser,
  typed: _pureFunctionsAnyGenerated.typed
});
exports.parser = parser;
var derivative = (0, _factoriesAny.createDerivative)({
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  SymbolNode: SymbolNode,
  config: _configReadonly.config,
  equal: _pureFunctionsAnyGenerated.equal,
  isZero: _pureFunctionsAnyGenerated.isZero,
  numeric: _pureFunctionsAnyGenerated.numeric,
  parse: parse,
  simplify: simplify,
  typed: _pureFunctionsAnyGenerated.typed
});
exports.derivative = derivative;

_extends(math, {
  reviver: reviver,
  "false": _pureFunctionsAnyGenerated._false,
  "null": _pureFunctionsAnyGenerated._null,
  "true": _pureFunctionsAnyGenerated._true,
  replacer: _pureFunctionsAnyGenerated.replacer,
  i: _pureFunctionsAnyGenerated.i,
  LN10: _pureFunctionsAnyGenerated.LN10,
  LOG10E: _pureFunctionsAnyGenerated.LOG10E,
  NaN: _pureFunctionsAnyGenerated._NaN,
  pi: _pureFunctionsAnyGenerated.pi,
  SQRT1_2: _pureFunctionsAnyGenerated.SQRT1_2,
  tau: _pureFunctionsAnyGenerated.tau,
  efimovFactor: _pureFunctionsAnyGenerated.efimovFactor,
  fineStructure: _pureFunctionsAnyGenerated.fineStructure,
  sackurTetrode: _pureFunctionsAnyGenerated.sackurTetrode,
  weakMixingAngle: _pureFunctionsAnyGenerated.weakMixingAngle,
  e: _pureFunctionsAnyGenerated.e,
  Infinity: _pureFunctionsAnyGenerated._Infinity,
  LOG2E: _pureFunctionsAnyGenerated.LOG2E,
  'PI': _pureFunctionsAnyGenerated.pi,
  version: _pureFunctionsAnyGenerated.version,
  'E': _pureFunctionsAnyGenerated.e,
  phi: _pureFunctionsAnyGenerated.phi,
  typed: _pureFunctionsAnyGenerated.typed,
  isInteger: _pureFunctionsAnyGenerated.isInteger,
  isNumeric: _pureFunctionsAnyGenerated.isNumeric,
  isPositive: _pureFunctionsAnyGenerated.isPositive,
  isNaN: _pureFunctionsAnyGenerated.isNaN,
  equalScalar: _pureFunctionsAnyGenerated.equalScalar,
  number: _pureFunctionsAnyGenerated.number,
  "boolean": _pureFunctionsAnyGenerated["boolean"],
  complex: _pureFunctionsAnyGenerated.complex,
  splitUnit: _pureFunctionsAnyGenerated.splitUnit,
  unaryPlus: _pureFunctionsAnyGenerated.unaryPlus,
  apply: _pureFunctionsAnyGenerated.apply,
  cube: _pureFunctionsAnyGenerated.cube,
  expm1: _pureFunctionsAnyGenerated.expm1,
  log10: _pureFunctionsAnyGenerated.log10,
  multiplyScalar: _pureFunctionsAnyGenerated.multiplyScalar,
  sign: _pureFunctionsAnyGenerated.sign,
  square: _pureFunctionsAnyGenerated.square,
  bitNot: _pureFunctionsAnyGenerated.bitNot,
  arg: _pureFunctionsAnyGenerated.arg,
  im: _pureFunctionsAnyGenerated.im,
  not: _pureFunctionsAnyGenerated.not,
  filter: _pureFunctionsAnyGenerated.filter,
  forEach: _pureFunctionsAnyGenerated.forEach,
  map: _pureFunctionsAnyGenerated.map,
  erf: _pureFunctionsAnyGenerated.erf,
  format: _pureFunctionsAnyGenerated.format,
  oct: _pureFunctionsAnyGenerated.oct,
  print: _pureFunctionsAnyGenerated.print,
  isPrime: _pureFunctionsAnyGenerated.isPrime,
  acos: _pureFunctionsAnyGenerated.acos,
  acot: _pureFunctionsAnyGenerated.acot,
  acsc: _pureFunctionsAnyGenerated.acsc,
  asec: _pureFunctionsAnyGenerated.asec,
  asin: _pureFunctionsAnyGenerated.asin,
  atan: _pureFunctionsAnyGenerated.atan,
  atanh: _pureFunctionsAnyGenerated.atanh,
  cosh: _pureFunctionsAnyGenerated.cosh,
  coth: _pureFunctionsAnyGenerated.coth,
  csch: _pureFunctionsAnyGenerated.csch,
  sech: _pureFunctionsAnyGenerated.sech,
  sinh: _pureFunctionsAnyGenerated.sinh,
  tanh: _pureFunctionsAnyGenerated.tanh,
  chain: chain,
  combinations: _pureFunctionsAnyGenerated.combinations,
  pickRandom: _pureFunctionsAnyGenerated.pickRandom,
  randomInt: _pureFunctionsAnyGenerated.randomInt,
  LN2: _pureFunctionsAnyGenerated.LN2,
  clone: _pureFunctionsAnyGenerated.clone,
  hasNumericValue: _pureFunctionsAnyGenerated.hasNumericValue,
  typeOf: _pureFunctionsAnyGenerated.typeOf,
  string: _pureFunctionsAnyGenerated.string,
  fraction: _pureFunctionsAnyGenerated.fraction,
  unaryMinus: _pureFunctionsAnyGenerated.unaryMinus,
  addScalar: _pureFunctionsAnyGenerated.addScalar,
  exp: _pureFunctionsAnyGenerated.exp,
  log2: _pureFunctionsAnyGenerated.log2,
  sqrt: _pureFunctionsAnyGenerated.sqrt,
  conj: _pureFunctionsAnyGenerated.conj,
  getMatrixDataType: _pureFunctionsAnyGenerated.getMatrixDataType,
  mode: _pureFunctionsAnyGenerated.mode,
  bin: _pureFunctionsAnyGenerated.bin,
  acosh: _pureFunctionsAnyGenerated.acosh,
  acsch: _pureFunctionsAnyGenerated.acsch,
  asinh: _pureFunctionsAnyGenerated.asinh,
  cos: _pureFunctionsAnyGenerated.cos,
  csc: _pureFunctionsAnyGenerated.csc,
  sin: _pureFunctionsAnyGenerated.sin,
  combinationsWithRep: _pureFunctionsAnyGenerated.combinationsWithRep,
  random: _pureFunctionsAnyGenerated.random,
  SQRT2: _pureFunctionsAnyGenerated.SQRT2,
  isNegative: _pureFunctionsAnyGenerated.isNegative,
  matrix: _pureFunctionsAnyGenerated.matrix,
  cbrt: _pureFunctionsAnyGenerated.cbrt,
  gcd: _pureFunctionsAnyGenerated.gcd,
  mod: _pureFunctionsAnyGenerated.mod,
  nthRoot: _pureFunctionsAnyGenerated.nthRoot,
  xgcd: _pureFunctionsAnyGenerated.xgcd,
  bitAnd: _pureFunctionsAnyGenerated.bitAnd,
  bitXor: _pureFunctionsAnyGenerated.bitXor,
  or: _pureFunctionsAnyGenerated.or,
  concat: _pureFunctionsAnyGenerated.concat,
  diag: _pureFunctionsAnyGenerated.diag,
  identity: _pureFunctionsAnyGenerated.identity,
  ones: _pureFunctionsAnyGenerated.ones,
  reshape: _pureFunctionsAnyGenerated.reshape,
  size: _pureFunctionsAnyGenerated.size,
  subset: _pureFunctionsAnyGenerated.subset,
  zeros: _pureFunctionsAnyGenerated.zeros,
  hex: _pureFunctionsAnyGenerated.hex,
  round: _pureFunctionsAnyGenerated.round,
  leftShift: _pureFunctionsAnyGenerated.leftShift,
  rightLogShift: _pureFunctionsAnyGenerated.rightLogShift,
  compare: _pureFunctionsAnyGenerated.compare,
  compareText: _pureFunctionsAnyGenerated.compareText,
  smaller: _pureFunctionsAnyGenerated.smaller,
  larger: _pureFunctionsAnyGenerated.larger,
  unequal: _pureFunctionsAnyGenerated.unequal,
  sparse: _pureFunctionsAnyGenerated.sparse,
  acoth: _pureFunctionsAnyGenerated.acoth,
  atan2: _pureFunctionsAnyGenerated.atan2,
  sec: _pureFunctionsAnyGenerated.sec,
  add: _pureFunctionsAnyGenerated.add,
  dot: _pureFunctionsAnyGenerated.dot,
  composition: _pureFunctionsAnyGenerated.composition,
  isZero: _pureFunctionsAnyGenerated.isZero,
  abs: _pureFunctionsAnyGenerated.abs,
  floor: _pureFunctionsAnyGenerated.floor,
  multiply: _pureFunctionsAnyGenerated.multiply,
  dotMultiply: _pureFunctionsAnyGenerated.dotMultiply,
  re: _pureFunctionsAnyGenerated.re,
  flatten: _pureFunctionsAnyGenerated.flatten,
  resize: _pureFunctionsAnyGenerated.resize,
  squeeze: _pureFunctionsAnyGenerated.squeeze,
  to: _pureFunctionsAnyGenerated.to,
  pow: _pureFunctionsAnyGenerated.pow,
  dotPow: _pureFunctionsAnyGenerated.dotPow,
  rightArithShift: _pureFunctionsAnyGenerated.rightArithShift,
  compareNatural: _pureFunctionsAnyGenerated.compareNatural,
  equalText: _pureFunctionsAnyGenerated.equalText,
  largerEq: _pureFunctionsAnyGenerated.largerEq,
  partitionSelect: _pureFunctionsAnyGenerated.partitionSelect,
  asech: _pureFunctionsAnyGenerated.asech,
  tan: _pureFunctionsAnyGenerated.tan,
  setDifference: _pureFunctionsAnyGenerated.setDifference,
  setIntersect: _pureFunctionsAnyGenerated.setIntersect,
  setMultiplicity: _pureFunctionsAnyGenerated.setMultiplicity,
  setSize: _pureFunctionsAnyGenerated.setSize,
  trace: _pureFunctionsAnyGenerated.trace,
  quantileSeq: _pureFunctionsAnyGenerated.quantileSeq,
  gamma: _pureFunctionsAnyGenerated.gamma,
  bignumber: _pureFunctionsAnyGenerated.bignumber,
  lcm: _pureFunctionsAnyGenerated.lcm,
  bitOr: _pureFunctionsAnyGenerated.bitOr,
  kron: _pureFunctionsAnyGenerated.kron,
  transpose: _pureFunctionsAnyGenerated.transpose,
  numeric: _pureFunctionsAnyGenerated.numeric,
  and: _pureFunctionsAnyGenerated.and,
  smallerEq: _pureFunctionsAnyGenerated.smallerEq,
  sort: _pureFunctionsAnyGenerated.sort,
  min: _pureFunctionsAnyGenerated.min,
  cot: _pureFunctionsAnyGenerated.cot,
  setDistinct: _pureFunctionsAnyGenerated.setDistinct,
  setPowerset: _pureFunctionsAnyGenerated.setPowerset,
  index: _pureFunctionsAnyGenerated.index,
  sum: _pureFunctionsAnyGenerated.sum,
  factorial: _pureFunctionsAnyGenerated.factorial,
  permutations: _pureFunctionsAnyGenerated.permutations,
  ceil: _pureFunctionsAnyGenerated.ceil,
  subtract: _pureFunctionsAnyGenerated.subtract,
  cross: _pureFunctionsAnyGenerated.cross,
  range: _pureFunctionsAnyGenerated.range,
  row: _pureFunctionsAnyGenerated.row,
  prod: _pureFunctionsAnyGenerated.prod,
  equal: _pureFunctionsAnyGenerated.equal,
  max: _pureFunctionsAnyGenerated.max,
  setCartesian: _pureFunctionsAnyGenerated.setCartesian,
  setSymDifference: _pureFunctionsAnyGenerated.setSymDifference,
  fix: _pureFunctionsAnyGenerated.fix,
  column: _pureFunctionsAnyGenerated.column,
  ctranspose: _pureFunctionsAnyGenerated.ctranspose,
  deepEqual: _pureFunctionsAnyGenerated.deepEqual,
  setIsSubset: _pureFunctionsAnyGenerated.setIsSubset,
  xor: _pureFunctionsAnyGenerated.xor,
  divideScalar: _pureFunctionsAnyGenerated.divideScalar,
  nthRoots: _pureFunctionsAnyGenerated.nthRoots,
  lsolve: _pureFunctionsAnyGenerated.lsolve,
  lsolveAll: _pureFunctionsAnyGenerated.lsolveAll,
  setUnion: _pureFunctionsAnyGenerated.setUnion,
  lup: _pureFunctionsAnyGenerated.lup,
  slu: _pureFunctionsAnyGenerated.slu,
  det: _pureFunctionsAnyGenerated.det,
  distance: _pureFunctionsAnyGenerated.distance,
  stirlingS2: _pureFunctionsAnyGenerated.stirlingS2,
  catalan: _pureFunctionsAnyGenerated.catalan,
  diff: _pureFunctionsAnyGenerated.diff,
  log: _pureFunctionsAnyGenerated.log,
  dotDivide: _pureFunctionsAnyGenerated.dotDivide,
  usolveAll: _pureFunctionsAnyGenerated.usolveAll,
  hypot: _pureFunctionsAnyGenerated.hypot,
  qr: _pureFunctionsAnyGenerated.qr,
  inv: _pureFunctionsAnyGenerated.inv,
  expm: _pureFunctionsAnyGenerated.expm,
  divide: _pureFunctionsAnyGenerated.divide,
  mean: _pureFunctionsAnyGenerated.mean,
  variance: _pureFunctionsAnyGenerated.variance,
  kldivergence: _pureFunctionsAnyGenerated.kldivergence,
  bellNumbers: _pureFunctionsAnyGenerated.bellNumbers,
  log1p: _pureFunctionsAnyGenerated.log1p,
  createUnit: _pureFunctionsAnyGenerated.createUnit,
  eigs: _pureFunctionsAnyGenerated.eigs,
  intersect: _pureFunctionsAnyGenerated.intersect,
  std: _pureFunctionsAnyGenerated.std,
  atomicMass: _pureFunctionsAnyGenerated.atomicMass,
  bohrMagneton: _pureFunctionsAnyGenerated.bohrMagneton,
  boltzmann: _pureFunctionsAnyGenerated.boltzmann,
  conductanceQuantum: _pureFunctionsAnyGenerated.conductanceQuantum,
  deuteronMass: _pureFunctionsAnyGenerated.deuteronMass,
  electronMass: _pureFunctionsAnyGenerated.electronMass,
  faraday: _pureFunctionsAnyGenerated.faraday,
  firstRadiation: _pureFunctionsAnyGenerated.firstRadiation,
  gravitationConstant: _pureFunctionsAnyGenerated.gravitationConstant,
  hartreeEnergy: _pureFunctionsAnyGenerated.hartreeEnergy,
  klitzing: _pureFunctionsAnyGenerated.klitzing,
  magneticConstant: _pureFunctionsAnyGenerated.magneticConstant,
  molarMass: _pureFunctionsAnyGenerated.molarMass,
  molarPlanckConstant: _pureFunctionsAnyGenerated.molarPlanckConstant,
  neutronMass: _pureFunctionsAnyGenerated.neutronMass,
  planckCharge: _pureFunctionsAnyGenerated.planckCharge,
  planckLength: _pureFunctionsAnyGenerated.planckLength,
  planckTemperature: _pureFunctionsAnyGenerated.planckTemperature,
  protonMass: _pureFunctionsAnyGenerated.protonMass,
  reducedPlanckConstant: _pureFunctionsAnyGenerated.reducedPlanckConstant,
  secondRadiation: _pureFunctionsAnyGenerated.secondRadiation,
  stefanBoltzmann: _pureFunctionsAnyGenerated.stefanBoltzmann,
  vacuumImpedance: _pureFunctionsAnyGenerated.vacuumImpedance,
  usolve: _pureFunctionsAnyGenerated.usolve,
  norm: _pureFunctionsAnyGenerated.norm,
  lusolve: _pureFunctionsAnyGenerated.lusolve,
  sqrtm: _pureFunctionsAnyGenerated.sqrtm,
  multinomial: _pureFunctionsAnyGenerated.multinomial,
  avogadro: _pureFunctionsAnyGenerated.avogadro,
  classicalElectronRadius: _pureFunctionsAnyGenerated.classicalElectronRadius,
  electricConstant: _pureFunctionsAnyGenerated.electricConstant,
  fermiCoupling: _pureFunctionsAnyGenerated.fermiCoupling,
  gravity: _pureFunctionsAnyGenerated.gravity,
  loschmidt: _pureFunctionsAnyGenerated.loschmidt,
  molarMassC12: _pureFunctionsAnyGenerated.molarMassC12,
  nuclearMagneton: _pureFunctionsAnyGenerated.nuclearMagneton,
  planckMass: _pureFunctionsAnyGenerated.planckMass,
  quantumOfCirculation: _pureFunctionsAnyGenerated.quantumOfCirculation,
  speedOfLight: _pureFunctionsAnyGenerated.speedOfLight,
  wienDisplacement: _pureFunctionsAnyGenerated.wienDisplacement,
  rotationMatrix: _pureFunctionsAnyGenerated.rotationMatrix,
  median: _pureFunctionsAnyGenerated.median,
  bohrRadius: _pureFunctionsAnyGenerated.bohrRadius,
  elementaryCharge: _pureFunctionsAnyGenerated.elementaryCharge,
  inverseConductanceQuantum: _pureFunctionsAnyGenerated.inverseConductanceQuantum,
  molarVolume: _pureFunctionsAnyGenerated.molarVolume,
  planckTime: _pureFunctionsAnyGenerated.planckTime,
  thomsonCrossSection: _pureFunctionsAnyGenerated.thomsonCrossSection,
  rotate: _pureFunctionsAnyGenerated.rotate,
  parse: parse,
  evaluate: evaluate,
  mad: _pureFunctionsAnyGenerated.mad,
  coulomb: _pureFunctionsAnyGenerated.coulomb,
  magneticFluxQuantum: _pureFunctionsAnyGenerated.magneticFluxQuantum,
  rydberg: _pureFunctionsAnyGenerated.rydberg,
  unit: _pureFunctionsAnyGenerated.unit,
  help: help,
  gasConstant: _pureFunctionsAnyGenerated.gasConstant,
  compile: compile,
  simplify: simplify,
  rationalize: rationalize,
  parser: parser,
  planckConstant: _pureFunctionsAnyGenerated.planckConstant,
  derivative: derivative,
  config: _configReadonly.config
});

_extends(mathWithTransform, math, {
  apply: (0, _factoriesAny.createApplyTransform)({
    isInteger: _pureFunctionsAnyGenerated.isInteger,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  filter: (0, _factoriesAny.createFilterTransform)({
    typed: _pureFunctionsAnyGenerated.typed
  }),
  map: (0, _factoriesAny.createMapTransform)({
    typed: _pureFunctionsAnyGenerated.typed
  }),
  forEach: (0, _factoriesAny.createForEachTransform)({
    typed: _pureFunctionsAnyGenerated.typed
  }),
  subset: (0, _factoriesAny.createSubsetTransform)({
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  index: (0, _factoriesAny.createIndexTransform)({
    Index: _pureFunctionsAnyGenerated.Index
  }),
  concat: (0, _factoriesAny.createConcatTransform)({
    isInteger: _pureFunctionsAnyGenerated.isInteger,
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  max: (0, _factoriesAny.createMaxTransform)({
    config: _configReadonly.config,
    larger: _pureFunctionsAnyGenerated.larger,
    numeric: _pureFunctionsAnyGenerated.numeric,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  min: (0, _factoriesAny.createMinTransform)({
    config: _configReadonly.config,
    numeric: _pureFunctionsAnyGenerated.numeric,
    smaller: _pureFunctionsAnyGenerated.smaller,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  sum: (0, _factoriesAny.createSumTransform)({
    add: _pureFunctionsAnyGenerated.add,
    config: _configReadonly.config,
    numeric: _pureFunctionsAnyGenerated.numeric,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  column: (0, _factoriesAny.createColumnTransform)({
    Index: _pureFunctionsAnyGenerated.Index,
    matrix: _pureFunctionsAnyGenerated.matrix,
    range: _pureFunctionsAnyGenerated.range,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  range: (0, _factoriesAny.createRangeTransform)({
    bignumber: _pureFunctionsAnyGenerated.bignumber,
    matrix: _pureFunctionsAnyGenerated.matrix,
    config: _configReadonly.config,
    larger: _pureFunctionsAnyGenerated.larger,
    largerEq: _pureFunctionsAnyGenerated.largerEq,
    smaller: _pureFunctionsAnyGenerated.smaller,
    smallerEq: _pureFunctionsAnyGenerated.smallerEq,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  diff: (0, _factoriesAny.createDiffTransform)({
    bignumber: _pureFunctionsAnyGenerated.bignumber,
    matrix: _pureFunctionsAnyGenerated.matrix,
    number: _pureFunctionsAnyGenerated.number,
    subtract: _pureFunctionsAnyGenerated.subtract,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  row: (0, _factoriesAny.createRowTransform)({
    Index: _pureFunctionsAnyGenerated.Index,
    matrix: _pureFunctionsAnyGenerated.matrix,
    range: _pureFunctionsAnyGenerated.range,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  mean: (0, _factoriesAny.createMeanTransform)({
    add: _pureFunctionsAnyGenerated.add,
    divide: _pureFunctionsAnyGenerated.divide,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  variance: (0, _factoriesAny.createVarianceTransform)({
    add: _pureFunctionsAnyGenerated.add,
    apply: _pureFunctionsAnyGenerated.apply,
    divide: _pureFunctionsAnyGenerated.divide,
    isNaN: _pureFunctionsAnyGenerated.isNaN,
    multiply: _pureFunctionsAnyGenerated.multiply,
    subtract: _pureFunctionsAnyGenerated.subtract,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  std: (0, _factoriesAny.createStdTransform)({
    sqrt: _pureFunctionsAnyGenerated.sqrt,
    typed: _pureFunctionsAnyGenerated.typed,
    variance: _pureFunctionsAnyGenerated.variance
  })
});

_extends(classes, {
  ResultSet: _pureFunctionsAnyGenerated.ResultSet,
  Complex: _pureFunctionsAnyGenerated.Complex,
  Range: _pureFunctionsAnyGenerated.Range,
  Node: Node,
  ArrayNode: ArrayNode,
  BlockNode: BlockNode,
  ConstantNode: ConstantNode,
  ObjectNode: ObjectNode,
  ParenthesisNode: ParenthesisNode,
  RelationalNode: RelationalNode,
  Chain: Chain,
  BigNumber: _pureFunctionsAnyGenerated.BigNumber,
  Matrix: _pureFunctionsAnyGenerated.Matrix,
  ConditionalNode: ConditionalNode,
  OperatorNode: OperatorNode,
  Fraction: _pureFunctionsAnyGenerated.Fraction,
  RangeNode: RangeNode,
  DenseMatrix: _pureFunctionsAnyGenerated.DenseMatrix,
  FunctionAssignmentNode: FunctionAssignmentNode,
  SparseMatrix: _pureFunctionsAnyGenerated.SparseMatrix,
  ImmutableDenseMatrix: _pureFunctionsAnyGenerated.ImmutableDenseMatrix,
  FibonacciHeap: _pureFunctionsAnyGenerated.FibonacciHeap,
  AccessorNode: AccessorNode,
  IndexNode: IndexNode,
  Index: _pureFunctionsAnyGenerated.Index,
  AssignmentNode: AssignmentNode,
  Spa: _pureFunctionsAnyGenerated.Spa,
  Unit: _pureFunctionsAnyGenerated.Unit,
  SymbolNode: SymbolNode,
  FunctionNode: FunctionNode,
  Help: Help,
  Parser: Parser
});

Chain.createProxy(math);