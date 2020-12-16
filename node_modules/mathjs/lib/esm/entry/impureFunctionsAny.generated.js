function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */
import { config } from './configReadonly.js';
import { createNode, createArrayNode, createBlockNode, createConstantNode, createObjectNode, createParenthesisNode, createRelationalNode, createChainClass, createReviver, createConditionalNode, createOperatorNode, createRangeNode, createFunctionAssignmentNode, createChain, createAccessorNode, createIndexNode, createAssignmentNode, createSymbolNode, createFunctionNode, createParse, createEvaluate, createHelpClass, createParserClass, createHelp, createCompile, createSimplify, createRationalize, createParser, createDerivative, createApplyTransform, createFilterTransform, createMapTransform, createForEachTransform, createSubsetTransform, createIndexTransform, createConcatTransform, createMaxTransform, createMinTransform, createSumTransform, createColumnTransform, createRangeTransform, createDiffTransform, createRowTransform, createMeanTransform, createVarianceTransform, createStdTransform } from '../factoriesAny.js';
import { ResultSet, Complex, Range, _false, _null, _true, BigNumber, Matrix, replacer, i, LN10, LOG10E, _NaN, pi, SQRT1_2 // eslint-disable-line camelcase
, tau, efimovFactor, fineStructure, sackurTetrode, weakMixingAngle, Fraction, e, _Infinity, LOG2E, version, DenseMatrix, phi, typed, isInteger, isNumeric, isPositive, isNaN, equalScalar, number, boolean, complex, splitUnit, unaryPlus, apply, cube, expm1, log10, multiplyScalar, sign, square, bitNot, arg, im, not, filter, forEach, map, erf, format, oct, print, isPrime, acos, acot, acsc, asec, asin, atan, atanh, cosh, coth, csch, sech, sinh, tanh, combinations, pickRandom, randomInt, LN2, clone, hasNumericValue, typeOf, string, fraction, unaryMinus, addScalar, exp, log2, sqrt, conj, getMatrixDataType, mode, bin, acosh, acsch, asinh, cos, csc, sin, combinationsWithRep, random, SQRT2, isNegative, SparseMatrix, matrix, cbrt, gcd, mod, nthRoot, xgcd, bitAnd, bitXor, or, concat, diag, identity, ones, reshape, size, subset, zeros, hex, round, leftShift, rightLogShift, compare, compareText, smaller, larger, unequal, ImmutableDenseMatrix, FibonacciHeap, sparse, acoth, atan2, sec, add, dot, composition, isZero, abs, floor, multiply, dotMultiply, re, flatten, resize, squeeze, to, pow, dotPow, rightArithShift, compareNatural, equalText, largerEq, partitionSelect, Index, asech, tan, setDifference, setIntersect, setMultiplicity, setSize, trace, quantileSeq, gamma, bignumber, lcm, bitOr, kron, transpose, numeric, and, smallerEq, sort, min, cot, setDistinct, setPowerset, index, sum, factorial, permutations, ceil, subtract, cross, range, row, prod, equal, max, setCartesian, setSymDifference, fix, column, ctranspose, deepEqual, setIsSubset, xor, divideScalar, nthRoots, lsolve, lsolveAll, Spa, setUnion, lup, slu, det, distance, stirlingS2, catalan, diff, log, dotDivide, usolveAll, hypot, qr, inv, expm, divide, mean, variance, kldivergence, bellNumbers, log1p, Unit, createUnit, eigs, intersect, std, atomicMass, bohrMagneton, boltzmann, conductanceQuantum, deuteronMass, electronMass, faraday, firstRadiation, gravitationConstant, hartreeEnergy, klitzing, magneticConstant, molarMass, molarPlanckConstant, neutronMass, planckCharge, planckLength, planckTemperature, protonMass, reducedPlanckConstant, secondRadiation, stefanBoltzmann, vacuumImpedance, usolve, norm, lusolve, sqrtm, multinomial, avogadro, classicalElectronRadius, electricConstant, fermiCoupling, gravity, loschmidt, molarMassC12, nuclearMagneton, planckMass, quantumOfCirculation, speedOfLight, wienDisplacement, rotationMatrix, median, bohrRadius, elementaryCharge, inverseConductanceQuantum, molarVolume, planckTime, thomsonCrossSection, rotate, mad, coulomb, magneticFluxQuantum, rydberg, unit, gasConstant, planckConstant } from './pureFunctionsAny.generated.js';
var math = {}; // NOT pure!

var mathWithTransform = {}; // NOT pure!

var classes = {}; // NOT pure!

export var Node = createNode({
  mathWithTransform
});
export var ArrayNode = createArrayNode({
  Node
});
export var BlockNode = createBlockNode({
  Node,
  ResultSet
});
export var ConstantNode = createConstantNode({
  Node
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
export var Chain = createChainClass({
  math
});
export var reviver = createReviver({
  classes
});
export var ConditionalNode = createConditionalNode({
  Node
});
export var OperatorNode = createOperatorNode({
  Node
});
export var RangeNode = createRangeNode({
  Node
});
export var FunctionAssignmentNode = createFunctionAssignmentNode({
  Node,
  typed
});
export var chain = createChain({
  Chain,
  typed
});
export var AccessorNode = createAccessorNode({
  Node,
  subset
});
export var IndexNode = createIndexNode({
  Node,
  Range,
  size
});
export var AssignmentNode = createAssignmentNode({
  matrix,
  Node,
  subset
});
export var SymbolNode = createSymbolNode({
  Unit,
  Node,
  math
});
export var FunctionNode = createFunctionNode({
  Node,
  SymbolNode,
  math
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
export var Parser = createParserClass({
  parse
});
export var help = createHelp({
  Help,
  mathWithTransform,
  typed
});
export var compile = createCompile({
  parse,
  typed
});
export var simplify = createSimplify({
  bignumber,
  fraction,
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
  bignumber,
  fraction,
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
export var parser = createParser({
  Parser,
  typed
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

_extends(math, {
  reviver,
  false: _false,
  null: _null,
  true: _true,
  replacer,
  i,
  LN10,
  LOG10E,
  NaN: _NaN,
  pi,
  SQRT1_2,
  tau,
  efimovFactor,
  fineStructure,
  sackurTetrode,
  weakMixingAngle,
  e,
  Infinity: _Infinity,
  LOG2E,
  'PI': pi,
  version,
  'E': e,
  phi,
  typed,
  isInteger,
  isNumeric,
  isPositive,
  isNaN,
  equalScalar,
  number,
  boolean,
  complex,
  splitUnit,
  unaryPlus,
  apply,
  cube,
  expm1,
  log10,
  multiplyScalar,
  sign,
  square,
  bitNot,
  arg,
  im,
  not,
  filter,
  forEach,
  map,
  erf,
  format,
  oct,
  print,
  isPrime,
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
  chain,
  combinations,
  pickRandom,
  randomInt,
  LN2,
  clone,
  hasNumericValue,
  typeOf,
  string,
  fraction,
  unaryMinus,
  addScalar,
  exp,
  log2,
  sqrt,
  conj,
  getMatrixDataType,
  mode,
  bin,
  acosh,
  acsch,
  asinh,
  cos,
  csc,
  sin,
  combinationsWithRep,
  random,
  SQRT2,
  isNegative,
  matrix,
  cbrt,
  gcd,
  mod,
  nthRoot,
  xgcd,
  bitAnd,
  bitXor,
  or,
  concat,
  diag,
  identity,
  ones,
  reshape,
  size,
  subset,
  zeros,
  hex,
  round,
  leftShift,
  rightLogShift,
  compare,
  compareText,
  smaller,
  larger,
  unequal,
  sparse,
  acoth,
  atan2,
  sec,
  add,
  dot,
  composition,
  isZero,
  abs,
  floor,
  multiply,
  dotMultiply,
  re,
  flatten,
  resize,
  squeeze,
  to,
  pow,
  dotPow,
  rightArithShift,
  compareNatural,
  equalText,
  largerEq,
  partitionSelect,
  asech,
  tan,
  setDifference,
  setIntersect,
  setMultiplicity,
  setSize,
  trace,
  quantileSeq,
  gamma,
  bignumber,
  lcm,
  bitOr,
  kron,
  transpose,
  numeric,
  and,
  smallerEq,
  sort,
  min,
  cot,
  setDistinct,
  setPowerset,
  index,
  sum,
  factorial,
  permutations,
  ceil,
  subtract,
  cross,
  range,
  row,
  prod,
  equal,
  max,
  setCartesian,
  setSymDifference,
  fix,
  column,
  ctranspose,
  deepEqual,
  setIsSubset,
  xor,
  divideScalar,
  nthRoots,
  lsolve,
  lsolveAll,
  setUnion,
  lup,
  slu,
  det,
  distance,
  stirlingS2,
  catalan,
  diff,
  log,
  dotDivide,
  usolveAll,
  hypot,
  qr,
  inv,
  expm,
  divide,
  mean,
  variance,
  kldivergence,
  bellNumbers,
  log1p,
  createUnit,
  eigs,
  intersect,
  std,
  atomicMass,
  bohrMagneton,
  boltzmann,
  conductanceQuantum,
  deuteronMass,
  electronMass,
  faraday,
  firstRadiation,
  gravitationConstant,
  hartreeEnergy,
  klitzing,
  magneticConstant,
  molarMass,
  molarPlanckConstant,
  neutronMass,
  planckCharge,
  planckLength,
  planckTemperature,
  protonMass,
  reducedPlanckConstant,
  secondRadiation,
  stefanBoltzmann,
  vacuumImpedance,
  usolve,
  norm,
  lusolve,
  sqrtm,
  multinomial,
  avogadro,
  classicalElectronRadius,
  electricConstant,
  fermiCoupling,
  gravity,
  loschmidt,
  molarMassC12,
  nuclearMagneton,
  planckMass,
  quantumOfCirculation,
  speedOfLight,
  wienDisplacement,
  rotationMatrix,
  median,
  bohrRadius,
  elementaryCharge,
  inverseConductanceQuantum,
  molarVolume,
  planckTime,
  thomsonCrossSection,
  rotate,
  parse,
  evaluate,
  mad,
  coulomb,
  magneticFluxQuantum,
  rydberg,
  unit,
  help,
  gasConstant,
  compile,
  simplify,
  rationalize,
  parser,
  planckConstant,
  derivative,
  config
});

_extends(mathWithTransform, math, {
  apply: createApplyTransform({
    isInteger,
    typed
  }),
  filter: createFilterTransform({
    typed
  }),
  map: createMapTransform({
    typed
  }),
  forEach: createForEachTransform({
    typed
  }),
  subset: createSubsetTransform({
    matrix,
    typed
  }),
  index: createIndexTransform({
    Index
  }),
  concat: createConcatTransform({
    isInteger,
    matrix,
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
  column: createColumnTransform({
    Index,
    matrix,
    range,
    typed
  }),
  range: createRangeTransform({
    bignumber,
    matrix,
    config,
    larger,
    largerEq,
    smaller,
    smallerEq,
    typed
  }),
  diff: createDiffTransform({
    bignumber,
    matrix,
    number,
    subtract,
    typed
  }),
  row: createRowTransform({
    Index,
    matrix,
    range,
    typed
  }),
  mean: createMeanTransform({
    add,
    divide,
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
  ResultSet,
  Complex,
  Range,
  Node,
  ArrayNode,
  BlockNode,
  ConstantNode,
  ObjectNode,
  ParenthesisNode,
  RelationalNode,
  Chain,
  BigNumber,
  Matrix,
  ConditionalNode,
  OperatorNode,
  Fraction,
  RangeNode,
  DenseMatrix,
  FunctionAssignmentNode,
  SparseMatrix,
  ImmutableDenseMatrix,
  FibonacciHeap,
  AccessorNode,
  IndexNode,
  Index,
  AssignmentNode,
  Spa,
  Unit,
  SymbolNode,
  FunctionNode,
  Help,
  Parser
});

Chain.createProxy(math);
export { embeddedDocs as docs } from '../expression/embeddedDocs/embeddedDocs.js';