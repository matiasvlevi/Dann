"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._Infinity = exports.hypot = exports.isZero = exports.sin = exports.csc = exports.cos = exports.asinh = exports.acsch = exports.acosh = exports.subset = exports.or = exports.rightArithShift = exports.bitNot = exports.add = exports.divideScalar = exports.sqrt = exports.mod = exports.gcd = exports.exp = exports.addScalar = exports.replacer = exports.isPrime = exports.isNumeric = exports.print = exports.smallerEq = exports.compareNatural = exports.random = exports.size = exports.apply = exports.number = exports.SQRT2 = exports._null = exports.LN2 = exports.round = exports.ResultSet = exports.isNaN = exports.isPositive = exports.isInteger = exports.tanh = exports.sinh = exports.sech = exports.csch = exports.coth = exports.cosh = exports.atanh = exports.atan = exports.asin = exports.asec = exports.acsc = exports.acot = exports.acos = exports.combinations = exports.matrix = exports.xor = exports.not = exports.rightLogShift = exports.leftShift = exports.bitOr = exports.bitAnd = exports.norm = exports.log1p = exports.pow = exports.xgcd = exports.square = exports.sign = exports.multiplyScalar = exports.log2 = exports.lcm = exports.floor = exports.expm1 = exports.cube = exports.cbrt = exports.abs = exports.unaryMinus = exports.typeOf = exports.clone = exports.format = exports.erf = exports.larger = exports.smaller = exports.compareText = exports.compare = exports.randomInt = exports.pickRandom = exports.combinationsWithRep = exports.map = exports.filter = exports.string = exports.version = exports.tau = exports.SQRT1_2 = exports.phi = exports._NaN = exports.LOG10E = exports.LN10 = exports._false = exports.e = exports.nthRoot = exports.Range = exports.typed = void 0;
exports.range = exports.std = exports.bellNumbers = exports.variance = exports.asech = exports.min = exports.stirlingS2 = exports.mad = exports.largerEq = exports.subtract = exports.mean = exports.prod = exports.multinomial = exports.tan = exports.and = exports.ceil = exports.median = exports.sum = exports.max = exports.mode = exports.permutations = exports.factorial = exports.composition = exports.cot = exports.gamma = exports.divide = exports.log10 = exports.numeric = exports.quantileSeq = exports.deepEqual = exports.equal = exports["boolean"] = exports.LOG2E = exports.catalan = exports.isNegative = exports.sec = exports.atan2 = exports.acoth = exports.index = exports.bitXor = exports.log = exports.multiply = exports.fix = exports.unaryPlus = exports.hasNumericValue = exports.unequal = exports.equalText = exports.equalScalar = exports.partitionSelect = exports.forEach = exports._true = exports.pi = void 0;

var _configReadonly = require("./configReadonly.js");

var _factoriesNumber = require("../factoriesNumber.js");

/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */
var typed = /* #__PURE__ */(0, _factoriesNumber.createTyped)({});
exports.typed = typed;
var Range = /* #__PURE__ */(0, _factoriesNumber.createRangeClass)({});
exports.Range = Range;
var nthRoot = /* #__PURE__ */(0, _factoriesNumber.createNthRoot)({
  typed: typed
});
exports.nthRoot = nthRoot;
var e = /* #__PURE__ */(0, _factoriesNumber.createE)({
  config: _configReadonly.config
});
exports.e = e;

var _false = /* #__PURE__ */(0, _factoriesNumber.createFalse)({});

exports._false = _false;
var LN10 = /* #__PURE__ */(0, _factoriesNumber.createLN10)({
  config: _configReadonly.config
});
exports.LN10 = LN10;
var LOG10E = /* #__PURE__ */(0, _factoriesNumber.createLOG10E)({
  config: _configReadonly.config
});
exports.LOG10E = LOG10E;

var _NaN = /* #__PURE__ */(0, _factoriesNumber.createNaN)({
  config: _configReadonly.config
});

exports._NaN = _NaN;
var phi = /* #__PURE__ */(0, _factoriesNumber.createPhi)({
  config: _configReadonly.config
});
exports.phi = phi;
var SQRT1_2 = /* #__PURE__ */(0, _factoriesNumber.createSQRT1_2)({
  config: _configReadonly.config
});
exports.SQRT1_2 = SQRT1_2;
var tau = /* #__PURE__ */(0, _factoriesNumber.createTau)({
  config: _configReadonly.config
});
exports.tau = tau;
var version = /* #__PURE__ */(0, _factoriesNumber.createVersion)({});
exports.version = version;
var string = /* #__PURE__ */(0, _factoriesNumber.createString)({
  typed: typed
});
exports.string = string;
var filter = /* #__PURE__ */(0, _factoriesNumber.createFilter)({
  typed: typed
});
exports.filter = filter;
var map = /* #__PURE__ */(0, _factoriesNumber.createMap)({
  typed: typed
});
exports.map = map;
var combinationsWithRep = /* #__PURE__ */(0, _factoriesNumber.createCombinationsWithRep)({
  typed: typed
});
exports.combinationsWithRep = combinationsWithRep;
var pickRandom = /* #__PURE__ */(0, _factoriesNumber.createPickRandom)({
  config: _configReadonly.config,
  typed: typed
});
exports.pickRandom = pickRandom;
var randomInt = /* #__PURE__ */(0, _factoriesNumber.createRandomInt)({
  config: _configReadonly.config,
  typed: typed
});
exports.randomInt = randomInt;
var compare = /* #__PURE__ */(0, _factoriesNumber.createCompare)({
  config: _configReadonly.config,
  typed: typed
});
exports.compare = compare;
var compareText = /* #__PURE__ */(0, _factoriesNumber.createCompareText)({
  typed: typed
});
exports.compareText = compareText;
var smaller = /* #__PURE__ */(0, _factoriesNumber.createSmaller)({
  config: _configReadonly.config,
  typed: typed
});
exports.smaller = smaller;
var larger = /* #__PURE__ */(0, _factoriesNumber.createLarger)({
  config: _configReadonly.config,
  typed: typed
});
exports.larger = larger;
var erf = /* #__PURE__ */(0, _factoriesNumber.createErf)({
  typed: typed
});
exports.erf = erf;
var format = /* #__PURE__ */(0, _factoriesNumber.createFormat)({
  typed: typed
});
exports.format = format;
var clone = /* #__PURE__ */(0, _factoriesNumber.createClone)({
  typed: typed
});
exports.clone = clone;
var typeOf = /* #__PURE__ */(0, _factoriesNumber.createTypeOf)({
  typed: typed
});
exports.typeOf = typeOf;
var unaryMinus = /* #__PURE__ */(0, _factoriesNumber.createUnaryMinus)({
  typed: typed
});
exports.unaryMinus = unaryMinus;
var abs = /* #__PURE__ */(0, _factoriesNumber.createAbs)({
  typed: typed
});
exports.abs = abs;
var cbrt = /* #__PURE__ */(0, _factoriesNumber.createCbrt)({
  typed: typed
});
exports.cbrt = cbrt;
var cube = /* #__PURE__ */(0, _factoriesNumber.createCube)({
  typed: typed
});
exports.cube = cube;
var expm1 = /* #__PURE__ */(0, _factoriesNumber.createExpm1)({
  typed: typed
});
exports.expm1 = expm1;
var floor = /* #__PURE__ */(0, _factoriesNumber.createFloor)({
  typed: typed
});
exports.floor = floor;
var lcm = /* #__PURE__ */(0, _factoriesNumber.createLcm)({
  typed: typed
});
exports.lcm = lcm;
var log2 = /* #__PURE__ */(0, _factoriesNumber.createLog2)({
  typed: typed
});
exports.log2 = log2;
var multiplyScalar = /* #__PURE__ */(0, _factoriesNumber.createMultiplyScalar)({
  typed: typed
});
exports.multiplyScalar = multiplyScalar;
var sign = /* #__PURE__ */(0, _factoriesNumber.createSign)({
  typed: typed
});
exports.sign = sign;
var square = /* #__PURE__ */(0, _factoriesNumber.createSquare)({
  typed: typed
});
exports.square = square;
var xgcd = /* #__PURE__ */(0, _factoriesNumber.createXgcd)({
  typed: typed
});
exports.xgcd = xgcd;
var pow = /* #__PURE__ */(0, _factoriesNumber.createPow)({
  typed: typed
});
exports.pow = pow;
var log1p = /* #__PURE__ */(0, _factoriesNumber.createLog1p)({
  typed: typed
});
exports.log1p = log1p;
var norm = /* #__PURE__ */(0, _factoriesNumber.createNorm)({
  typed: typed
});
exports.norm = norm;
var bitAnd = /* #__PURE__ */(0, _factoriesNumber.createBitAnd)({
  typed: typed
});
exports.bitAnd = bitAnd;
var bitOr = /* #__PURE__ */(0, _factoriesNumber.createBitOr)({
  typed: typed
});
exports.bitOr = bitOr;
var leftShift = /* #__PURE__ */(0, _factoriesNumber.createLeftShift)({
  typed: typed
});
exports.leftShift = leftShift;
var rightLogShift = /* #__PURE__ */(0, _factoriesNumber.createRightLogShift)({
  typed: typed
});
exports.rightLogShift = rightLogShift;
var not = /* #__PURE__ */(0, _factoriesNumber.createNot)({
  typed: typed
});
exports.not = not;
var xor = /* #__PURE__ */(0, _factoriesNumber.createXor)({
  typed: typed
});
exports.xor = xor;
var matrix = /* #__PURE__ */(0, _factoriesNumber.createMatrix)({});
exports.matrix = matrix;
var combinations = /* #__PURE__ */(0, _factoriesNumber.createCombinations)({
  typed: typed
});
exports.combinations = combinations;
var acos = /* #__PURE__ */(0, _factoriesNumber.createAcos)({
  typed: typed
});
exports.acos = acos;
var acot = /* #__PURE__ */(0, _factoriesNumber.createAcot)({
  typed: typed
});
exports.acot = acot;
var acsc = /* #__PURE__ */(0, _factoriesNumber.createAcsc)({
  typed: typed
});
exports.acsc = acsc;
var asec = /* #__PURE__ */(0, _factoriesNumber.createAsec)({
  typed: typed
});
exports.asec = asec;
var asin = /* #__PURE__ */(0, _factoriesNumber.createAsin)({
  typed: typed
});
exports.asin = asin;
var atan = /* #__PURE__ */(0, _factoriesNumber.createAtan)({
  typed: typed
});
exports.atan = atan;
var atanh = /* #__PURE__ */(0, _factoriesNumber.createAtanh)({
  typed: typed
});
exports.atanh = atanh;
var cosh = /* #__PURE__ */(0, _factoriesNumber.createCosh)({
  typed: typed
});
exports.cosh = cosh;
var coth = /* #__PURE__ */(0, _factoriesNumber.createCoth)({
  typed: typed
});
exports.coth = coth;
var csch = /* #__PURE__ */(0, _factoriesNumber.createCsch)({
  typed: typed
});
exports.csch = csch;
var sech = /* #__PURE__ */(0, _factoriesNumber.createSech)({
  typed: typed
});
exports.sech = sech;
var sinh = /* #__PURE__ */(0, _factoriesNumber.createSinh)({
  typed: typed
});
exports.sinh = sinh;
var tanh = /* #__PURE__ */(0, _factoriesNumber.createTanh)({
  typed: typed
});
exports.tanh = tanh;
var isInteger = /* #__PURE__ */(0, _factoriesNumber.createIsInteger)({
  typed: typed
});
exports.isInteger = isInteger;
var isPositive = /* #__PURE__ */(0, _factoriesNumber.createIsPositive)({
  typed: typed
});
exports.isPositive = isPositive;
var isNaN = /* #__PURE__ */(0, _factoriesNumber.createIsNaN)({
  typed: typed
});
exports.isNaN = isNaN;
var ResultSet = /* #__PURE__ */(0, _factoriesNumber.createResultSet)({});
exports.ResultSet = ResultSet;
var round = /* #__PURE__ */(0, _factoriesNumber.createRound)({
  typed: typed
});
exports.round = round;
var LN2 = /* #__PURE__ */(0, _factoriesNumber.createLN2)({
  config: _configReadonly.config
});
exports.LN2 = LN2;

var _null = /* #__PURE__ */(0, _factoriesNumber.createNull)({});

exports._null = _null;
var SQRT2 = /* #__PURE__ */(0, _factoriesNumber.createSQRT2)({
  config: _configReadonly.config
});
exports.SQRT2 = SQRT2;
var number = /* #__PURE__ */(0, _factoriesNumber.createNumber)({
  typed: typed
});
exports.number = number;
var apply = /* #__PURE__ */(0, _factoriesNumber.createApply)({
  isInteger: isInteger,
  typed: typed
});
exports.apply = apply;
var size = /* #__PURE__ */(0, _factoriesNumber.createSize)({
  matrix: matrix,
  config: _configReadonly.config,
  typed: typed
});
exports.size = size;
var random = /* #__PURE__ */(0, _factoriesNumber.createRandom)({
  config: _configReadonly.config,
  typed: typed
});
exports.random = random;
var compareNatural = /* #__PURE__ */(0, _factoriesNumber.createCompareNatural)({
  compare: compare,
  typed: typed
});
exports.compareNatural = compareNatural;
var smallerEq = /* #__PURE__ */(0, _factoriesNumber.createSmallerEq)({
  config: _configReadonly.config,
  typed: typed
});
exports.smallerEq = smallerEq;
var print = /* #__PURE__ */(0, _factoriesNumber.createPrint)({
  typed: typed
});
exports.print = print;
var isNumeric = /* #__PURE__ */(0, _factoriesNumber.createIsNumeric)({
  typed: typed
});
exports.isNumeric = isNumeric;
var isPrime = /* #__PURE__ */(0, _factoriesNumber.createIsPrime)({
  typed: typed
});
exports.isPrime = isPrime;
var replacer = /* #__PURE__ */(0, _factoriesNumber.createReplacer)({});
exports.replacer = replacer;
var addScalar = /* #__PURE__ */(0, _factoriesNumber.createAddScalar)({
  typed: typed
});
exports.addScalar = addScalar;
var exp = /* #__PURE__ */(0, _factoriesNumber.createExp)({
  typed: typed
});
exports.exp = exp;
var gcd = /* #__PURE__ */(0, _factoriesNumber.createGcd)({
  typed: typed
});
exports.gcd = gcd;
var mod = /* #__PURE__ */(0, _factoriesNumber.createMod)({
  typed: typed
});
exports.mod = mod;
var sqrt = /* #__PURE__ */(0, _factoriesNumber.createSqrt)({
  typed: typed
});
exports.sqrt = sqrt;
var divideScalar = /* #__PURE__ */(0, _factoriesNumber.createDivideScalar)({
  typed: typed
});
exports.divideScalar = divideScalar;
var add = /* #__PURE__ */(0, _factoriesNumber.createAdd)({
  typed: typed
});
exports.add = add;
var bitNot = /* #__PURE__ */(0, _factoriesNumber.createBitNot)({
  typed: typed
});
exports.bitNot = bitNot;
var rightArithShift = /* #__PURE__ */(0, _factoriesNumber.createRightArithShift)({
  typed: typed
});
exports.rightArithShift = rightArithShift;
var or = /* #__PURE__ */(0, _factoriesNumber.createOr)({
  typed: typed
});
exports.or = or;
var subset = /* #__PURE__ */(0, _factoriesNumber.createSubset)({});
exports.subset = subset;
var acosh = /* #__PURE__ */(0, _factoriesNumber.createAcosh)({
  typed: typed
});
exports.acosh = acosh;
var acsch = /* #__PURE__ */(0, _factoriesNumber.createAcsch)({
  typed: typed
});
exports.acsch = acsch;
var asinh = /* #__PURE__ */(0, _factoriesNumber.createAsinh)({
  typed: typed
});
exports.asinh = asinh;
var cos = /* #__PURE__ */(0, _factoriesNumber.createCos)({
  typed: typed
});
exports.cos = cos;
var csc = /* #__PURE__ */(0, _factoriesNumber.createCsc)({
  typed: typed
});
exports.csc = csc;
var sin = /* #__PURE__ */(0, _factoriesNumber.createSin)({
  typed: typed
});
exports.sin = sin;
var isZero = /* #__PURE__ */(0, _factoriesNumber.createIsZero)({
  typed: typed
});
exports.isZero = isZero;
var hypot = /* #__PURE__ */(0, _factoriesNumber.createHypot)({
  abs: abs,
  addScalar: addScalar,
  divideScalar: divideScalar,
  isPositive: isPositive,
  multiplyScalar: multiplyScalar,
  smaller: smaller,
  sqrt: sqrt,
  typed: typed
});
exports.hypot = hypot;

var _Infinity = /* #__PURE__ */(0, _factoriesNumber.createInfinity)({
  config: _configReadonly.config
});

exports._Infinity = _Infinity;
var pi = /* #__PURE__ */(0, _factoriesNumber.createPi)({
  config: _configReadonly.config
});
exports.pi = pi;

var _true = /* #__PURE__ */(0, _factoriesNumber.createTrue)({});

exports._true = _true;
var forEach = /* #__PURE__ */(0, _factoriesNumber.createForEach)({
  typed: typed
});
exports.forEach = forEach;
var partitionSelect = /* #__PURE__ */(0, _factoriesNumber.createPartitionSelect)({
  compare: compare,
  isNaN: isNaN,
  isNumeric: isNumeric,
  typed: typed
});
exports.partitionSelect = partitionSelect;
var equalScalar = /* #__PURE__ */(0, _factoriesNumber.createEqualScalar)({
  config: _configReadonly.config,
  typed: typed
});
exports.equalScalar = equalScalar;
var equalText = /* #__PURE__ */(0, _factoriesNumber.createEqualText)({
  compareText: compareText,
  isZero: isZero,
  typed: typed
});
exports.equalText = equalText;
var unequal = /* #__PURE__ */(0, _factoriesNumber.createUnequal)({
  equalScalar: equalScalar,
  typed: typed
});
exports.unequal = unequal;
var hasNumericValue = /* #__PURE__ */(0, _factoriesNumber.createHasNumericValue)({
  isNumeric: isNumeric,
  typed: typed
});
exports.hasNumericValue = hasNumericValue;
var unaryPlus = /* #__PURE__ */(0, _factoriesNumber.createUnaryPlus)({
  typed: typed
});
exports.unaryPlus = unaryPlus;
var fix = /* #__PURE__ */(0, _factoriesNumber.createFix)({
  typed: typed
});
exports.fix = fix;
var multiply = /* #__PURE__ */(0, _factoriesNumber.createMultiply)({
  typed: typed
});
exports.multiply = multiply;
var log = /* #__PURE__ */(0, _factoriesNumber.createLog)({
  typed: typed
});
exports.log = log;
var bitXor = /* #__PURE__ */(0, _factoriesNumber.createBitXor)({
  typed: typed
});
exports.bitXor = bitXor;
var index = /* #__PURE__ */(0, _factoriesNumber.createIndex)({});
exports.index = index;
var acoth = /* #__PURE__ */(0, _factoriesNumber.createAcoth)({
  typed: typed
});
exports.acoth = acoth;
var atan2 = /* #__PURE__ */(0, _factoriesNumber.createAtan2)({
  typed: typed
});
exports.atan2 = atan2;
var sec = /* #__PURE__ */(0, _factoriesNumber.createSec)({
  typed: typed
});
exports.sec = sec;
var isNegative = /* #__PURE__ */(0, _factoriesNumber.createIsNegative)({
  typed: typed
});
exports.isNegative = isNegative;
var catalan = /* #__PURE__ */(0, _factoriesNumber.createCatalan)({
  addScalar: addScalar,
  combinations: combinations,
  divideScalar: divideScalar,
  isInteger: isInteger,
  isNegative: isNegative,
  multiplyScalar: multiplyScalar,
  typed: typed
});
exports.catalan = catalan;
var LOG2E = /* #__PURE__ */(0, _factoriesNumber.createLOG2E)({
  config: _configReadonly.config
});
exports.LOG2E = LOG2E;

var _boolean = /* #__PURE__ */(0, _factoriesNumber.createBoolean)({
  typed: typed
});

exports["boolean"] = _boolean;
var equal = /* #__PURE__ */(0, _factoriesNumber.createEqual)({
  equalScalar: equalScalar,
  typed: typed
});
exports.equal = equal;
var deepEqual = /* #__PURE__ */(0, _factoriesNumber.createDeepEqual)({
  equal: equal,
  typed: typed
});
exports.deepEqual = deepEqual;
var quantileSeq = /* #__PURE__ */(0, _factoriesNumber.createQuantileSeq)({
  add: add,
  compare: compare,
  multiply: multiply,
  partitionSelect: partitionSelect,
  typed: typed
});
exports.quantileSeq = quantileSeq;
var numeric = /* #__PURE__ */(0, _factoriesNumber.createNumeric)({
  number: number
});
exports.numeric = numeric;
var log10 = /* #__PURE__ */(0, _factoriesNumber.createLog10)({
  typed: typed
});
exports.log10 = log10;
var divide = /* #__PURE__ */(0, _factoriesNumber.createDivide)({
  typed: typed
});
exports.divide = divide;
var gamma = /* #__PURE__ */(0, _factoriesNumber.createGamma)({
  typed: typed
});
exports.gamma = gamma;
var cot = /* #__PURE__ */(0, _factoriesNumber.createCot)({
  typed: typed
});
exports.cot = cot;
var composition = /* #__PURE__ */(0, _factoriesNumber.createComposition)({
  addScalar: addScalar,
  combinations: combinations,
  isInteger: isInteger,
  isNegative: isNegative,
  isPositive: isPositive,
  larger: larger,
  typed: typed
});
exports.composition = composition;
var factorial = /* #__PURE__ */(0, _factoriesNumber.createFactorial)({
  gamma: gamma,
  typed: typed
});
exports.factorial = factorial;
var permutations = /* #__PURE__ */(0, _factoriesNumber.createPermutations)({
  factorial: factorial,
  typed: typed
});
exports.permutations = permutations;
var mode = /* #__PURE__ */(0, _factoriesNumber.createMode)({
  isNaN: isNaN,
  isNumeric: isNumeric,
  typed: typed
});
exports.mode = mode;
var max = /* #__PURE__ */(0, _factoriesNumber.createMax)({
  config: _configReadonly.config,
  larger: larger,
  numeric: numeric,
  typed: typed
});
exports.max = max;
var sum = /* #__PURE__ */(0, _factoriesNumber.createSum)({
  add: add,
  config: _configReadonly.config,
  numeric: numeric,
  typed: typed
});
exports.sum = sum;
var median = /* #__PURE__ */(0, _factoriesNumber.createMedian)({
  add: add,
  compare: compare,
  divide: divide,
  partitionSelect: partitionSelect,
  typed: typed
});
exports.median = median;
var ceil = /* #__PURE__ */(0, _factoriesNumber.createCeil)({
  typed: typed
});
exports.ceil = ceil;
var and = /* #__PURE__ */(0, _factoriesNumber.createAnd)({
  typed: typed
});
exports.and = and;
var tan = /* #__PURE__ */(0, _factoriesNumber.createTan)({
  typed: typed
});
exports.tan = tan;
var multinomial = /* #__PURE__ */(0, _factoriesNumber.createMultinomial)({
  add: add,
  divide: divide,
  factorial: factorial,
  isInteger: isInteger,
  isPositive: isPositive,
  multiply: multiply,
  typed: typed
});
exports.multinomial = multinomial;
var prod = /* #__PURE__ */(0, _factoriesNumber.createProd)({
  config: _configReadonly.config,
  multiplyScalar: multiplyScalar,
  numeric: numeric,
  typed: typed
});
exports.prod = prod;
var mean = /* #__PURE__ */(0, _factoriesNumber.createMean)({
  add: add,
  divide: divide,
  typed: typed
});
exports.mean = mean;
var subtract = /* #__PURE__ */(0, _factoriesNumber.createSubtract)({
  typed: typed
});
exports.subtract = subtract;
var largerEq = /* #__PURE__ */(0, _factoriesNumber.createLargerEq)({
  config: _configReadonly.config,
  typed: typed
});
exports.largerEq = largerEq;
var mad = /* #__PURE__ */(0, _factoriesNumber.createMad)({
  abs: abs,
  map: map,
  median: median,
  subtract: subtract,
  typed: typed
});
exports.mad = mad;
var stirlingS2 = /* #__PURE__ */(0, _factoriesNumber.createStirlingS2)({
  addScalar: addScalar,
  combinations: combinations,
  divideScalar: divideScalar,
  factorial: factorial,
  isInteger: isInteger,
  isNegative: isNegative,
  larger: larger,
  multiplyScalar: multiplyScalar,
  pow: pow,
  subtract: subtract,
  typed: typed
});
exports.stirlingS2 = stirlingS2;
var min = /* #__PURE__ */(0, _factoriesNumber.createMin)({
  config: _configReadonly.config,
  numeric: numeric,
  smaller: smaller,
  typed: typed
});
exports.min = min;
var asech = /* #__PURE__ */(0, _factoriesNumber.createAsech)({
  typed: typed
});
exports.asech = asech;
var variance = /* #__PURE__ */(0, _factoriesNumber.createVariance)({
  add: add,
  apply: apply,
  divide: divide,
  isNaN: isNaN,
  multiply: multiply,
  subtract: subtract,
  typed: typed
});
exports.variance = variance;
var bellNumbers = /* #__PURE__ */(0, _factoriesNumber.createBellNumbers)({
  addScalar: addScalar,
  isInteger: isInteger,
  isNegative: isNegative,
  stirlingS2: stirlingS2,
  typed: typed
});
exports.bellNumbers = bellNumbers;
var std = /* #__PURE__ */(0, _factoriesNumber.createStd)({
  sqrt: sqrt,
  typed: typed,
  variance: variance
});
exports.std = std;
var range = /* #__PURE__ */(0, _factoriesNumber.createRange)({
  matrix: matrix,
  config: _configReadonly.config,
  larger: larger,
  largerEq: largerEq,
  smaller: smaller,
  smallerEq: smallerEq,
  typed: typed
});
exports.range = range;