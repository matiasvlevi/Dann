"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matrix = exports.SparseMatrix = exports.isNegative = exports.SQRT2 = exports.random = exports.combinationsWithRep = exports.sin = exports.csc = exports.cos = exports.asinh = exports.acsch = exports.acosh = exports.bin = exports.mode = exports.getMatrixDataType = exports.conj = exports.sqrt = exports.log2 = exports.exp = exports.addScalar = exports.unaryMinus = exports.fraction = exports.string = exports.typeOf = exports.hasNumericValue = exports.clone = exports.LN2 = exports.randomInt = exports.pickRandom = exports.combinations = exports.tanh = exports.sinh = exports.sech = exports.csch = exports.coth = exports.cosh = exports.atanh = exports.atan = exports.asin = exports.asec = exports.acsc = exports.acot = exports.acos = exports.isPrime = exports.print = exports.oct = exports.format = exports.erf = exports.map = exports.forEach = exports.filter = exports.not = exports.im = exports.arg = exports.bitNot = exports.square = exports.sign = exports.multiplyScalar = exports.log10 = exports.expm1 = exports.cube = exports.apply = exports.unaryPlus = exports.splitUnit = exports.complex = exports["boolean"] = exports.number = exports.equalScalar = exports.isNaN = exports.isPositive = exports.isNumeric = exports.isInteger = exports.typed = exports.phi = exports.DenseMatrix = exports.version = exports.LOG2E = exports._Infinity = exports.e = exports.Fraction = exports.weakMixingAngle = exports.sackurTetrode = exports.fineStructure = exports.efimovFactor = exports.tau = exports.SQRT1_2 = exports.pi = exports._NaN = exports.LOG10E = exports.LN10 = exports.i = exports.replacer = exports.Matrix = exports.BigNumber = exports._true = exports._null = exports._false = exports.Range = exports.Complex = exports.ResultSet = void 0;
exports.setUnion = exports.Spa = exports.lsolveAll = exports.lsolve = exports.nthRoots = exports.divideScalar = exports.xor = exports.setIsSubset = exports.deepEqual = exports.ctranspose = exports.column = exports.fix = exports.setSymDifference = exports.setCartesian = exports.max = exports.equal = exports.prod = exports.row = exports.range = exports.cross = exports.subtract = exports.ceil = exports.permutations = exports.factorial = exports.sum = exports.index = exports.setPowerset = exports.setDistinct = exports.cot = exports.min = exports.sort = exports.smallerEq = exports.and = exports.numeric = exports.transpose = exports.kron = exports.bitOr = exports.lcm = exports.bignumber = exports.gamma = exports.quantileSeq = exports.trace = exports.setSize = exports.setMultiplicity = exports.setIntersect = exports.setDifference = exports.tan = exports.asech = exports.Index = exports.partitionSelect = exports.largerEq = exports.equalText = exports.compareNatural = exports.rightArithShift = exports.dotPow = exports.pow = exports.to = exports.squeeze = exports.resize = exports.flatten = exports.re = exports.dotMultiply = exports.multiply = exports.floor = exports.abs = exports.isZero = exports.composition = exports.dot = exports.add = exports.sec = exports.atan2 = exports.acoth = exports.sparse = exports.FibonacciHeap = exports.ImmutableDenseMatrix = exports.unequal = exports.larger = exports.smaller = exports.compareText = exports.compare = exports.rightLogShift = exports.leftShift = exports.round = exports.hex = exports.zeros = exports.subset = exports.size = exports.reshape = exports.ones = exports.identity = exports.diag = exports.concat = exports.or = exports.bitXor = exports.bitAnd = exports.xgcd = exports.nthRoot = exports.mod = exports.gcd = exports.cbrt = void 0;
exports.planckConstant = exports.gasConstant = exports.unit = exports.rydberg = exports.magneticFluxQuantum = exports.coulomb = exports.mad = exports.rotate = exports.thomsonCrossSection = exports.planckTime = exports.molarVolume = exports.inverseConductanceQuantum = exports.elementaryCharge = exports.bohrRadius = exports.median = exports.rotationMatrix = exports.wienDisplacement = exports.speedOfLight = exports.quantumOfCirculation = exports.planckMass = exports.nuclearMagneton = exports.molarMassC12 = exports.loschmidt = exports.gravity = exports.fermiCoupling = exports.electricConstant = exports.classicalElectronRadius = exports.avogadro = exports.multinomial = exports.sqrtm = exports.lusolve = exports.norm = exports.usolve = exports.vacuumImpedance = exports.stefanBoltzmann = exports.secondRadiation = exports.reducedPlanckConstant = exports.protonMass = exports.planckTemperature = exports.planckLength = exports.planckCharge = exports.neutronMass = exports.molarPlanckConstant = exports.molarMass = exports.magneticConstant = exports.klitzing = exports.hartreeEnergy = exports.gravitationConstant = exports.firstRadiation = exports.faraday = exports.electronMass = exports.deuteronMass = exports.conductanceQuantum = exports.boltzmann = exports.bohrMagneton = exports.atomicMass = exports.std = exports.intersect = exports.eigs = exports.createUnit = exports.Unit = exports.log1p = exports.bellNumbers = exports.kldivergence = exports.variance = exports.mean = exports.divide = exports.expm = exports.inv = exports.qr = exports.hypot = exports.usolveAll = exports.dotDivide = exports.log = exports.diff = exports.catalan = exports.stirlingS2 = exports.distance = exports.det = exports.slu = exports.lup = void 0;

var _configReadonly = require("./configReadonly.js");

var _factoriesAny = require("../factoriesAny.js");

/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */
var ResultSet = /* #__PURE__ */(0, _factoriesAny.createResultSet)({});
exports.ResultSet = ResultSet;
var Complex = /* #__PURE__ */(0, _factoriesAny.createComplexClass)({});
exports.Complex = Complex;
var Range = /* #__PURE__ */(0, _factoriesAny.createRangeClass)({});
exports.Range = Range;

var _false = /* #__PURE__ */(0, _factoriesAny.createFalse)({});

exports._false = _false;

var _null = /* #__PURE__ */(0, _factoriesAny.createNull)({});

exports._null = _null;

var _true = /* #__PURE__ */(0, _factoriesAny.createTrue)({});

exports._true = _true;
var BigNumber = /* #__PURE__ */(0, _factoriesAny.createBigNumberClass)({
  config: _configReadonly.config
});
exports.BigNumber = BigNumber;
var Matrix = /* #__PURE__ */(0, _factoriesAny.createMatrixClass)({});
exports.Matrix = Matrix;
var replacer = /* #__PURE__ */(0, _factoriesAny.createReplacer)({});
exports.replacer = replacer;
var i = /* #__PURE__ */(0, _factoriesAny.createI)({
  Complex: Complex
});
exports.i = i;
var LN10 = /* #__PURE__ */(0, _factoriesAny.createLN10)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
exports.LN10 = LN10;
var LOG10E = /* #__PURE__ */(0, _factoriesAny.createLOG10E)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
exports.LOG10E = LOG10E;

var _NaN = /* #__PURE__ */(0, _factoriesAny.createNaN)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});

exports._NaN = _NaN;
var pi = /* #__PURE__ */(0, _factoriesAny.createPi)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
exports.pi = pi;
var SQRT1_2 = /* #__PURE__ */(0, _factoriesAny.createSQRT1_2)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
exports.SQRT1_2 = SQRT1_2;
var tau = /* #__PURE__ */(0, _factoriesAny.createTau)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
exports.tau = tau;
var efimovFactor = /* #__PURE__ */(0, _factoriesAny.createEfimovFactor)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
exports.efimovFactor = efimovFactor;
var fineStructure = /* #__PURE__ */(0, _factoriesAny.createFineStructure)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
exports.fineStructure = fineStructure;
var sackurTetrode = /* #__PURE__ */(0, _factoriesAny.createSackurTetrode)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
exports.sackurTetrode = sackurTetrode;
var weakMixingAngle = /* #__PURE__ */(0, _factoriesAny.createWeakMixingAngle)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
exports.weakMixingAngle = weakMixingAngle;
var Fraction = /* #__PURE__ */(0, _factoriesAny.createFractionClass)({});
exports.Fraction = Fraction;
var e = /* #__PURE__ */(0, _factoriesAny.createE)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
exports.e = e;

var _Infinity = /* #__PURE__ */(0, _factoriesAny.createInfinity)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});

exports._Infinity = _Infinity;
var LOG2E = /* #__PURE__ */(0, _factoriesAny.createLOG2E)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
exports.LOG2E = LOG2E;
var version = /* #__PURE__ */(0, _factoriesAny.createVersion)({});
exports.version = version;
var DenseMatrix = /* #__PURE__ */(0, _factoriesAny.createDenseMatrixClass)({
  Matrix: Matrix
});
exports.DenseMatrix = DenseMatrix;
var phi = /* #__PURE__ */(0, _factoriesAny.createPhi)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
exports.phi = phi;
var typed = /* #__PURE__ */(0, _factoriesAny.createTyped)({
  BigNumber: BigNumber,
  Complex: Complex,
  DenseMatrix: DenseMatrix,
  Fraction: Fraction
});
exports.typed = typed;
var isInteger = /* #__PURE__ */(0, _factoriesAny.createIsInteger)({
  typed: typed
});
exports.isInteger = isInteger;
var isNumeric = /* #__PURE__ */(0, _factoriesAny.createIsNumeric)({
  typed: typed
});
exports.isNumeric = isNumeric;
var isPositive = /* #__PURE__ */(0, _factoriesAny.createIsPositive)({
  typed: typed
});
exports.isPositive = isPositive;
var isNaN = /* #__PURE__ */(0, _factoriesAny.createIsNaN)({
  typed: typed
});
exports.isNaN = isNaN;
var equalScalar = /* #__PURE__ */(0, _factoriesAny.createEqualScalar)({
  config: _configReadonly.config,
  typed: typed
});
exports.equalScalar = equalScalar;
var number = /* #__PURE__ */(0, _factoriesAny.createNumber)({
  typed: typed
});
exports.number = number;

var _boolean = /* #__PURE__ */(0, _factoriesAny.createBoolean)({
  typed: typed
});

exports["boolean"] = _boolean;
var complex = /* #__PURE__ */(0, _factoriesAny.createComplex)({
  Complex: Complex,
  typed: typed
});
exports.complex = complex;
var splitUnit = /* #__PURE__ */(0, _factoriesAny.createSplitUnit)({
  typed: typed
});
exports.splitUnit = splitUnit;
var unaryPlus = /* #__PURE__ */(0, _factoriesAny.createUnaryPlus)({
  BigNumber: BigNumber,
  config: _configReadonly.config,
  typed: typed
});
exports.unaryPlus = unaryPlus;
var apply = /* #__PURE__ */(0, _factoriesAny.createApply)({
  isInteger: isInteger,
  typed: typed
});
exports.apply = apply;
var cube = /* #__PURE__ */(0, _factoriesAny.createCube)({
  typed: typed
});
exports.cube = cube;
var expm1 = /* #__PURE__ */(0, _factoriesAny.createExpm1)({
  Complex: Complex,
  typed: typed
});
exports.expm1 = expm1;
var log10 = /* #__PURE__ */(0, _factoriesAny.createLog10)({
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
exports.log10 = log10;
var multiplyScalar = /* #__PURE__ */(0, _factoriesAny.createMultiplyScalar)({
  typed: typed
});
exports.multiplyScalar = multiplyScalar;
var sign = /* #__PURE__ */(0, _factoriesAny.createSign)({
  BigNumber: BigNumber,
  Fraction: Fraction,
  complex: complex,
  typed: typed
});
exports.sign = sign;
var square = /* #__PURE__ */(0, _factoriesAny.createSquare)({
  typed: typed
});
exports.square = square;
var bitNot = /* #__PURE__ */(0, _factoriesAny.createBitNot)({
  typed: typed
});
exports.bitNot = bitNot;
var arg = /* #__PURE__ */(0, _factoriesAny.createArg)({
  typed: typed
});
exports.arg = arg;
var im = /* #__PURE__ */(0, _factoriesAny.createIm)({
  typed: typed
});
exports.im = im;
var not = /* #__PURE__ */(0, _factoriesAny.createNot)({
  typed: typed
});
exports.not = not;
var filter = /* #__PURE__ */(0, _factoriesAny.createFilter)({
  typed: typed
});
exports.filter = filter;
var forEach = /* #__PURE__ */(0, _factoriesAny.createForEach)({
  typed: typed
});
exports.forEach = forEach;
var map = /* #__PURE__ */(0, _factoriesAny.createMap)({
  typed: typed
});
exports.map = map;
var erf = /* #__PURE__ */(0, _factoriesAny.createErf)({
  typed: typed
});
exports.erf = erf;
var format = /* #__PURE__ */(0, _factoriesAny.createFormat)({
  typed: typed
});
exports.format = format;
var oct = /* #__PURE__ */(0, _factoriesAny.createOct)({
  typed: typed
});
exports.oct = oct;
var print = /* #__PURE__ */(0, _factoriesAny.createPrint)({
  typed: typed
});
exports.print = print;
var isPrime = /* #__PURE__ */(0, _factoriesAny.createIsPrime)({
  typed: typed
});
exports.isPrime = isPrime;
var acos = /* #__PURE__ */(0, _factoriesAny.createAcos)({
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
exports.acos = acos;
var acot = /* #__PURE__ */(0, _factoriesAny.createAcot)({
  BigNumber: BigNumber,
  typed: typed
});
exports.acot = acot;
var acsc = /* #__PURE__ */(0, _factoriesAny.createAcsc)({
  BigNumber: BigNumber,
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
exports.acsc = acsc;
var asec = /* #__PURE__ */(0, _factoriesAny.createAsec)({
  BigNumber: BigNumber,
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
exports.asec = asec;
var asin = /* #__PURE__ */(0, _factoriesAny.createAsin)({
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
exports.asin = asin;
var atan = /* #__PURE__ */(0, _factoriesAny.createAtan)({
  typed: typed
});
exports.atan = atan;
var atanh = /* #__PURE__ */(0, _factoriesAny.createAtanh)({
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
exports.atanh = atanh;
var cosh = /* #__PURE__ */(0, _factoriesAny.createCosh)({
  typed: typed
});
exports.cosh = cosh;
var coth = /* #__PURE__ */(0, _factoriesAny.createCoth)({
  BigNumber: BigNumber,
  typed: typed
});
exports.coth = coth;
var csch = /* #__PURE__ */(0, _factoriesAny.createCsch)({
  BigNumber: BigNumber,
  typed: typed
});
exports.csch = csch;
var sech = /* #__PURE__ */(0, _factoriesAny.createSech)({
  BigNumber: BigNumber,
  typed: typed
});
exports.sech = sech;
var sinh = /* #__PURE__ */(0, _factoriesAny.createSinh)({
  typed: typed
});
exports.sinh = sinh;
var tanh = /* #__PURE__ */(0, _factoriesAny.createTanh)({
  typed: typed
});
exports.tanh = tanh;
var combinations = /* #__PURE__ */(0, _factoriesAny.createCombinations)({
  typed: typed
});
exports.combinations = combinations;
var pickRandom = /* #__PURE__ */(0, _factoriesAny.createPickRandom)({
  config: _configReadonly.config,
  typed: typed
});
exports.pickRandom = pickRandom;
var randomInt = /* #__PURE__ */(0, _factoriesAny.createRandomInt)({
  config: _configReadonly.config,
  typed: typed
});
exports.randomInt = randomInt;
var LN2 = /* #__PURE__ */(0, _factoriesAny.createLN2)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
exports.LN2 = LN2;
var clone = /* #__PURE__ */(0, _factoriesAny.createClone)({
  typed: typed
});
exports.clone = clone;
var hasNumericValue = /* #__PURE__ */(0, _factoriesAny.createHasNumericValue)({
  isNumeric: isNumeric,
  typed: typed
});
exports.hasNumericValue = hasNumericValue;
var typeOf = /* #__PURE__ */(0, _factoriesAny.createTypeOf)({
  typed: typed
});
exports.typeOf = typeOf;
var string = /* #__PURE__ */(0, _factoriesAny.createString)({
  typed: typed
});
exports.string = string;
var fraction = /* #__PURE__ */(0, _factoriesAny.createFraction)({
  Fraction: Fraction,
  typed: typed
});
exports.fraction = fraction;
var unaryMinus = /* #__PURE__ */(0, _factoriesAny.createUnaryMinus)({
  typed: typed
});
exports.unaryMinus = unaryMinus;
var addScalar = /* #__PURE__ */(0, _factoriesAny.createAddScalar)({
  typed: typed
});
exports.addScalar = addScalar;
var exp = /* #__PURE__ */(0, _factoriesAny.createExp)({
  typed: typed
});
exports.exp = exp;
var log2 = /* #__PURE__ */(0, _factoriesAny.createLog2)({
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
exports.log2 = log2;
var sqrt = /* #__PURE__ */(0, _factoriesAny.createSqrt)({
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
exports.sqrt = sqrt;
var conj = /* #__PURE__ */(0, _factoriesAny.createConj)({
  typed: typed
});
exports.conj = conj;
var getMatrixDataType = /* #__PURE__ */(0, _factoriesAny.createGetMatrixDataType)({
  typed: typed
});
exports.getMatrixDataType = getMatrixDataType;
var mode = /* #__PURE__ */(0, _factoriesAny.createMode)({
  isNaN: isNaN,
  isNumeric: isNumeric,
  typed: typed
});
exports.mode = mode;
var bin = /* #__PURE__ */(0, _factoriesAny.createBin)({
  typed: typed
});
exports.bin = bin;
var acosh = /* #__PURE__ */(0, _factoriesAny.createAcosh)({
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
exports.acosh = acosh;
var acsch = /* #__PURE__ */(0, _factoriesAny.createAcsch)({
  BigNumber: BigNumber,
  typed: typed
});
exports.acsch = acsch;
var asinh = /* #__PURE__ */(0, _factoriesAny.createAsinh)({
  typed: typed
});
exports.asinh = asinh;
var cos = /* #__PURE__ */(0, _factoriesAny.createCos)({
  typed: typed
});
exports.cos = cos;
var csc = /* #__PURE__ */(0, _factoriesAny.createCsc)({
  BigNumber: BigNumber,
  typed: typed
});
exports.csc = csc;
var sin = /* #__PURE__ */(0, _factoriesAny.createSin)({
  typed: typed
});
exports.sin = sin;
var combinationsWithRep = /* #__PURE__ */(0, _factoriesAny.createCombinationsWithRep)({
  typed: typed
});
exports.combinationsWithRep = combinationsWithRep;
var random = /* #__PURE__ */(0, _factoriesAny.createRandom)({
  config: _configReadonly.config,
  typed: typed
});
exports.random = random;
var SQRT2 = /* #__PURE__ */(0, _factoriesAny.createSQRT2)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
exports.SQRT2 = SQRT2;
var isNegative = /* #__PURE__ */(0, _factoriesAny.createIsNegative)({
  typed: typed
});
exports.isNegative = isNegative;
var SparseMatrix = /* #__PURE__ */(0, _factoriesAny.createSparseMatrixClass)({
  Matrix: Matrix,
  equalScalar: equalScalar,
  typed: typed
});
exports.SparseMatrix = SparseMatrix;
var matrix = /* #__PURE__ */(0, _factoriesAny.createMatrix)({
  DenseMatrix: DenseMatrix,
  Matrix: Matrix,
  SparseMatrix: SparseMatrix,
  typed: typed
});
exports.matrix = matrix;
var cbrt = /* #__PURE__ */(0, _factoriesAny.createCbrt)({
  BigNumber: BigNumber,
  Complex: Complex,
  Fraction: Fraction,
  config: _configReadonly.config,
  isNegative: isNegative,
  matrix: matrix,
  typed: typed,
  unaryMinus: unaryMinus
});
exports.cbrt = cbrt;
var gcd = /* #__PURE__ */(0, _factoriesAny.createGcd)({
  BigNumber: BigNumber,
  DenseMatrix: DenseMatrix,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
exports.gcd = gcd;
var mod = /* #__PURE__ */(0, _factoriesAny.createMod)({
  DenseMatrix: DenseMatrix,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
exports.mod = mod;
var nthRoot = /* #__PURE__ */(0, _factoriesAny.createNthRoot)({
  BigNumber: BigNumber,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
exports.nthRoot = nthRoot;
var xgcd = /* #__PURE__ */(0, _factoriesAny.createXgcd)({
  BigNumber: BigNumber,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
exports.xgcd = xgcd;
var bitAnd = /* #__PURE__ */(0, _factoriesAny.createBitAnd)({
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
exports.bitAnd = bitAnd;
var bitXor = /* #__PURE__ */(0, _factoriesAny.createBitXor)({
  DenseMatrix: DenseMatrix,
  matrix: matrix,
  typed: typed
});
exports.bitXor = bitXor;
var or = /* #__PURE__ */(0, _factoriesAny.createOr)({
  DenseMatrix: DenseMatrix,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
exports.or = or;
var concat = /* #__PURE__ */(0, _factoriesAny.createConcat)({
  isInteger: isInteger,
  matrix: matrix,
  typed: typed
});
exports.concat = concat;
var diag = /* #__PURE__ */(0, _factoriesAny.createDiag)({
  DenseMatrix: DenseMatrix,
  SparseMatrix: SparseMatrix,
  matrix: matrix,
  typed: typed
});
exports.diag = diag;
var identity = /* #__PURE__ */(0, _factoriesAny.createIdentity)({
  BigNumber: BigNumber,
  DenseMatrix: DenseMatrix,
  SparseMatrix: SparseMatrix,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
exports.identity = identity;
var ones = /* #__PURE__ */(0, _factoriesAny.createOnes)({
  BigNumber: BigNumber,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
exports.ones = ones;
var reshape = /* #__PURE__ */(0, _factoriesAny.createReshape)({
  isInteger: isInteger,
  matrix: matrix,
  typed: typed
});
exports.reshape = reshape;
var size = /* #__PURE__ */(0, _factoriesAny.createSize)({
  matrix: matrix,
  config: _configReadonly.config,
  typed: typed
});
exports.size = size;
var subset = /* #__PURE__ */(0, _factoriesAny.createSubset)({
  matrix: matrix,
  typed: typed
});
exports.subset = subset;
var zeros = /* #__PURE__ */(0, _factoriesAny.createZeros)({
  BigNumber: BigNumber,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
exports.zeros = zeros;
var hex = /* #__PURE__ */(0, _factoriesAny.createHex)({
  typed: typed
});
exports.hex = hex;
var round = /* #__PURE__ */(0, _factoriesAny.createRound)({
  BigNumber: BigNumber,
  DenseMatrix: DenseMatrix,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed,
  zeros: zeros
});
exports.round = round;
var leftShift = /* #__PURE__ */(0, _factoriesAny.createLeftShift)({
  DenseMatrix: DenseMatrix,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed,
  zeros: zeros
});
exports.leftShift = leftShift;
var rightLogShift = /* #__PURE__ */(0, _factoriesAny.createRightLogShift)({
  DenseMatrix: DenseMatrix,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed,
  zeros: zeros
});
exports.rightLogShift = rightLogShift;
var compare = /* #__PURE__ */(0, _factoriesAny.createCompare)({
  BigNumber: BigNumber,
  DenseMatrix: DenseMatrix,
  Fraction: Fraction,
  config: _configReadonly.config,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
exports.compare = compare;
var compareText = /* #__PURE__ */(0, _factoriesAny.createCompareText)({
  matrix: matrix,
  typed: typed
});
exports.compareText = compareText;
var smaller = /* #__PURE__ */(0, _factoriesAny.createSmaller)({
  DenseMatrix: DenseMatrix,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
exports.smaller = smaller;
var larger = /* #__PURE__ */(0, _factoriesAny.createLarger)({
  DenseMatrix: DenseMatrix,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
exports.larger = larger;
var unequal = /* #__PURE__ */(0, _factoriesAny.createUnequal)({
  DenseMatrix: DenseMatrix,
  config: _configReadonly.config,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
exports.unequal = unequal;
var ImmutableDenseMatrix = /* #__PURE__ */(0, _factoriesAny.createImmutableDenseMatrixClass)({
  DenseMatrix: DenseMatrix,
  smaller: smaller
});
exports.ImmutableDenseMatrix = ImmutableDenseMatrix;
var FibonacciHeap = /* #__PURE__ */(0, _factoriesAny.createFibonacciHeapClass)({
  larger: larger,
  smaller: smaller
});
exports.FibonacciHeap = FibonacciHeap;
var sparse = /* #__PURE__ */(0, _factoriesAny.createSparse)({
  SparseMatrix: SparseMatrix,
  typed: typed
});
exports.sparse = sparse;
var acoth = /* #__PURE__ */(0, _factoriesAny.createAcoth)({
  BigNumber: BigNumber,
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
exports.acoth = acoth;
var atan2 = /* #__PURE__ */(0, _factoriesAny.createAtan2)({
  BigNumber: BigNumber,
  DenseMatrix: DenseMatrix,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
exports.atan2 = atan2;
var sec = /* #__PURE__ */(0, _factoriesAny.createSec)({
  BigNumber: BigNumber,
  typed: typed
});
exports.sec = sec;
var add = /* #__PURE__ */(0, _factoriesAny.createAdd)({
  DenseMatrix: DenseMatrix,
  SparseMatrix: SparseMatrix,
  addScalar: addScalar,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
exports.add = add;
var dot = /* #__PURE__ */(0, _factoriesAny.createDot)({
  addScalar: addScalar,
  conj: conj,
  multiplyScalar: multiplyScalar,
  size: size,
  typed: typed
});
exports.dot = dot;
var composition = /* #__PURE__ */(0, _factoriesAny.createComposition)({
  addScalar: addScalar,
  combinations: combinations,
  isInteger: isInteger,
  isNegative: isNegative,
  isPositive: isPositive,
  larger: larger,
  typed: typed
});
exports.composition = composition;
var isZero = /* #__PURE__ */(0, _factoriesAny.createIsZero)({
  typed: typed
});
exports.isZero = isZero;
var abs = /* #__PURE__ */(0, _factoriesAny.createAbs)({
  typed: typed
});
exports.abs = abs;
var floor = /* #__PURE__ */(0, _factoriesAny.createFloor)({
  config: _configReadonly.config,
  equalScalar: equalScalar,
  matrix: matrix,
  round: round,
  typed: typed
});
exports.floor = floor;
var multiply = /* #__PURE__ */(0, _factoriesAny.createMultiply)({
  addScalar: addScalar,
  dot: dot,
  equalScalar: equalScalar,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  typed: typed
});
exports.multiply = multiply;
var dotMultiply = /* #__PURE__ */(0, _factoriesAny.createDotMultiply)({
  equalScalar: equalScalar,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  typed: typed
});
exports.dotMultiply = dotMultiply;
var re = /* #__PURE__ */(0, _factoriesAny.createRe)({
  typed: typed
});
exports.re = re;
var flatten = /* #__PURE__ */(0, _factoriesAny.createFlatten)({
  matrix: matrix,
  typed: typed
});
exports.flatten = flatten;
var resize = /* #__PURE__ */(0, _factoriesAny.createResize)({
  config: _configReadonly.config,
  matrix: matrix
});
exports.resize = resize;
var squeeze = /* #__PURE__ */(0, _factoriesAny.createSqueeze)({
  matrix: matrix,
  typed: typed
});
exports.squeeze = squeeze;
var to = /* #__PURE__ */(0, _factoriesAny.createTo)({
  matrix: matrix,
  typed: typed
});
exports.to = to;
var pow = /* #__PURE__ */(0, _factoriesAny.createPow)({
  Complex: Complex,
  config: _configReadonly.config,
  fraction: fraction,
  identity: identity,
  matrix: matrix,
  multiply: multiply,
  number: number,
  typed: typed
});
exports.pow = pow;
var dotPow = /* #__PURE__ */(0, _factoriesAny.createDotPow)({
  DenseMatrix: DenseMatrix,
  equalScalar: equalScalar,
  matrix: matrix,
  pow: pow,
  typed: typed
});
exports.dotPow = dotPow;
var rightArithShift = /* #__PURE__ */(0, _factoriesAny.createRightArithShift)({
  DenseMatrix: DenseMatrix,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed,
  zeros: zeros
});
exports.rightArithShift = rightArithShift;
var compareNatural = /* #__PURE__ */(0, _factoriesAny.createCompareNatural)({
  compare: compare,
  typed: typed
});
exports.compareNatural = compareNatural;
var equalText = /* #__PURE__ */(0, _factoriesAny.createEqualText)({
  compareText: compareText,
  isZero: isZero,
  typed: typed
});
exports.equalText = equalText;
var largerEq = /* #__PURE__ */(0, _factoriesAny.createLargerEq)({
  DenseMatrix: DenseMatrix,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
exports.largerEq = largerEq;
var partitionSelect = /* #__PURE__ */(0, _factoriesAny.createPartitionSelect)({
  compare: compare,
  isNaN: isNaN,
  isNumeric: isNumeric,
  typed: typed
});
exports.partitionSelect = partitionSelect;
var Index = /* #__PURE__ */(0, _factoriesAny.createIndexClass)({
  ImmutableDenseMatrix: ImmutableDenseMatrix
});
exports.Index = Index;
var asech = /* #__PURE__ */(0, _factoriesAny.createAsech)({
  BigNumber: BigNumber,
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
exports.asech = asech;
var tan = /* #__PURE__ */(0, _factoriesAny.createTan)({
  typed: typed
});
exports.tan = tan;
var setDifference = /* #__PURE__ */(0, _factoriesAny.createSetDifference)({
  DenseMatrix: DenseMatrix,
  Index: Index,
  compareNatural: compareNatural,
  size: size,
  subset: subset,
  typed: typed
});
exports.setDifference = setDifference;
var setIntersect = /* #__PURE__ */(0, _factoriesAny.createSetIntersect)({
  DenseMatrix: DenseMatrix,
  Index: Index,
  compareNatural: compareNatural,
  size: size,
  subset: subset,
  typed: typed
});
exports.setIntersect = setIntersect;
var setMultiplicity = /* #__PURE__ */(0, _factoriesAny.createSetMultiplicity)({
  Index: Index,
  compareNatural: compareNatural,
  size: size,
  subset: subset,
  typed: typed
});
exports.setMultiplicity = setMultiplicity;
var setSize = /* #__PURE__ */(0, _factoriesAny.createSetSize)({
  compareNatural: compareNatural,
  typed: typed
});
exports.setSize = setSize;
var trace = /* #__PURE__ */(0, _factoriesAny.createTrace)({
  add: add,
  matrix: matrix,
  typed: typed
});
exports.trace = trace;
var quantileSeq = /* #__PURE__ */(0, _factoriesAny.createQuantileSeq)({
  add: add,
  compare: compare,
  multiply: multiply,
  partitionSelect: partitionSelect,
  typed: typed
});
exports.quantileSeq = quantileSeq;
var gamma = /* #__PURE__ */(0, _factoriesAny.createGamma)({
  BigNumber: BigNumber,
  Complex: Complex,
  config: _configReadonly.config,
  multiplyScalar: multiplyScalar,
  pow: pow,
  typed: typed
});
exports.gamma = gamma;
var bignumber = /* #__PURE__ */(0, _factoriesAny.createBignumber)({
  BigNumber: BigNumber,
  typed: typed
});
exports.bignumber = bignumber;
var lcm = /* #__PURE__ */(0, _factoriesAny.createLcm)({
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
exports.lcm = lcm;
var bitOr = /* #__PURE__ */(0, _factoriesAny.createBitOr)({
  DenseMatrix: DenseMatrix,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
exports.bitOr = bitOr;
var kron = /* #__PURE__ */(0, _factoriesAny.createKron)({
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  typed: typed
});
exports.kron = kron;
var transpose = /* #__PURE__ */(0, _factoriesAny.createTranspose)({
  matrix: matrix,
  typed: typed
});
exports.transpose = transpose;
var numeric = /* #__PURE__ */(0, _factoriesAny.createNumeric)({
  bignumber: bignumber,
  fraction: fraction,
  number: number
});
exports.numeric = numeric;
var and = /* #__PURE__ */(0, _factoriesAny.createAnd)({
  equalScalar: equalScalar,
  matrix: matrix,
  not: not,
  typed: typed,
  zeros: zeros
});
exports.and = and;
var smallerEq = /* #__PURE__ */(0, _factoriesAny.createSmallerEq)({
  DenseMatrix: DenseMatrix,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
exports.smallerEq = smallerEq;
var sort = /* #__PURE__ */(0, _factoriesAny.createSort)({
  compare: compare,
  compareNatural: compareNatural,
  matrix: matrix,
  typed: typed
});
exports.sort = sort;
var min = /* #__PURE__ */(0, _factoriesAny.createMin)({
  config: _configReadonly.config,
  numeric: numeric,
  smaller: smaller,
  typed: typed
});
exports.min = min;
var cot = /* #__PURE__ */(0, _factoriesAny.createCot)({
  BigNumber: BigNumber,
  typed: typed
});
exports.cot = cot;
var setDistinct = /* #__PURE__ */(0, _factoriesAny.createSetDistinct)({
  DenseMatrix: DenseMatrix,
  Index: Index,
  compareNatural: compareNatural,
  size: size,
  subset: subset,
  typed: typed
});
exports.setDistinct = setDistinct;
var setPowerset = /* #__PURE__ */(0, _factoriesAny.createSetPowerset)({
  Index: Index,
  compareNatural: compareNatural,
  size: size,
  subset: subset,
  typed: typed
});
exports.setPowerset = setPowerset;
var index = /* #__PURE__ */(0, _factoriesAny.createIndex)({
  Index: Index,
  typed: typed
});
exports.index = index;
var sum = /* #__PURE__ */(0, _factoriesAny.createSum)({
  add: add,
  config: _configReadonly.config,
  numeric: numeric,
  typed: typed
});
exports.sum = sum;
var factorial = /* #__PURE__ */(0, _factoriesAny.createFactorial)({
  gamma: gamma,
  typed: typed
});
exports.factorial = factorial;
var permutations = /* #__PURE__ */(0, _factoriesAny.createPermutations)({
  factorial: factorial,
  typed: typed
});
exports.permutations = permutations;
var ceil = /* #__PURE__ */(0, _factoriesAny.createCeil)({
  config: _configReadonly.config,
  equalScalar: equalScalar,
  matrix: matrix,
  round: round,
  typed: typed
});
exports.ceil = ceil;
var subtract = /* #__PURE__ */(0, _factoriesAny.createSubtract)({
  DenseMatrix: DenseMatrix,
  addScalar: addScalar,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed,
  unaryMinus: unaryMinus
});
exports.subtract = subtract;
var cross = /* #__PURE__ */(0, _factoriesAny.createCross)({
  matrix: matrix,
  multiply: multiply,
  subtract: subtract,
  typed: typed
});
exports.cross = cross;
var range = /* #__PURE__ */(0, _factoriesAny.createRange)({
  bignumber: bignumber,
  matrix: matrix,
  config: _configReadonly.config,
  larger: larger,
  largerEq: largerEq,
  smaller: smaller,
  smallerEq: smallerEq,
  typed: typed
});
exports.range = range;
var row = /* #__PURE__ */(0, _factoriesAny.createRow)({
  Index: Index,
  matrix: matrix,
  range: range,
  typed: typed
});
exports.row = row;
var prod = /* #__PURE__ */(0, _factoriesAny.createProd)({
  config: _configReadonly.config,
  multiplyScalar: multiplyScalar,
  numeric: numeric,
  typed: typed
});
exports.prod = prod;
var equal = /* #__PURE__ */(0, _factoriesAny.createEqual)({
  DenseMatrix: DenseMatrix,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
exports.equal = equal;
var max = /* #__PURE__ */(0, _factoriesAny.createMax)({
  config: _configReadonly.config,
  larger: larger,
  numeric: numeric,
  typed: typed
});
exports.max = max;
var setCartesian = /* #__PURE__ */(0, _factoriesAny.createSetCartesian)({
  DenseMatrix: DenseMatrix,
  Index: Index,
  compareNatural: compareNatural,
  size: size,
  subset: subset,
  typed: typed
});
exports.setCartesian = setCartesian;
var setSymDifference = /* #__PURE__ */(0, _factoriesAny.createSetSymDifference)({
  Index: Index,
  concat: concat,
  setDifference: setDifference,
  size: size,
  subset: subset,
  typed: typed
});
exports.setSymDifference = setSymDifference;
var fix = /* #__PURE__ */(0, _factoriesAny.createFix)({
  Complex: Complex,
  ceil: ceil,
  floor: floor,
  matrix: matrix,
  typed: typed
});
exports.fix = fix;
var column = /* #__PURE__ */(0, _factoriesAny.createColumn)({
  Index: Index,
  matrix: matrix,
  range: range,
  typed: typed
});
exports.column = column;
var ctranspose = /* #__PURE__ */(0, _factoriesAny.createCtranspose)({
  conj: conj,
  transpose: transpose,
  typed: typed
});
exports.ctranspose = ctranspose;
var deepEqual = /* #__PURE__ */(0, _factoriesAny.createDeepEqual)({
  equal: equal,
  typed: typed
});
exports.deepEqual = deepEqual;
var setIsSubset = /* #__PURE__ */(0, _factoriesAny.createSetIsSubset)({
  Index: Index,
  compareNatural: compareNatural,
  size: size,
  subset: subset,
  typed: typed
});
exports.setIsSubset = setIsSubset;
var xor = /* #__PURE__ */(0, _factoriesAny.createXor)({
  DenseMatrix: DenseMatrix,
  matrix: matrix,
  typed: typed
});
exports.xor = xor;
var divideScalar = /* #__PURE__ */(0, _factoriesAny.createDivideScalar)({
  numeric: numeric,
  typed: typed
});
exports.divideScalar = divideScalar;
var nthRoots = /* #__PURE__ */(0, _factoriesAny.createNthRoots)({
  Complex: Complex,
  config: _configReadonly.config,
  divideScalar: divideScalar,
  typed: typed
});
exports.nthRoots = nthRoots;
var lsolve = /* #__PURE__ */(0, _factoriesAny.createLsolve)({
  DenseMatrix: DenseMatrix,
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  subtract: subtract,
  typed: typed
});
exports.lsolve = lsolve;
var lsolveAll = /* #__PURE__ */(0, _factoriesAny.createLsolveAll)({
  DenseMatrix: DenseMatrix,
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  subtract: subtract,
  typed: typed
});
exports.lsolveAll = lsolveAll;
var Spa = /* #__PURE__ */(0, _factoriesAny.createSpaClass)({
  FibonacciHeap: FibonacciHeap,
  addScalar: addScalar,
  equalScalar: equalScalar
});
exports.Spa = Spa;
var setUnion = /* #__PURE__ */(0, _factoriesAny.createSetUnion)({
  Index: Index,
  concat: concat,
  setIntersect: setIntersect,
  setSymDifference: setSymDifference,
  size: size,
  subset: subset,
  typed: typed
});
exports.setUnion = setUnion;
var lup = /* #__PURE__ */(0, _factoriesAny.createLup)({
  DenseMatrix: DenseMatrix,
  Spa: Spa,
  SparseMatrix: SparseMatrix,
  abs: abs,
  addScalar: addScalar,
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  larger: larger,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  subtract: subtract,
  typed: typed,
  unaryMinus: unaryMinus
});
exports.lup = lup;
var slu = /* #__PURE__ */(0, _factoriesAny.createSlu)({
  SparseMatrix: SparseMatrix,
  abs: abs,
  add: add,
  divideScalar: divideScalar,
  larger: larger,
  largerEq: largerEq,
  multiply: multiply,
  subtract: subtract,
  transpose: transpose,
  typed: typed
});
exports.slu = slu;
var det = /* #__PURE__ */(0, _factoriesAny.createDet)({
  lup: lup,
  matrix: matrix,
  multiply: multiply,
  subtract: subtract,
  typed: typed,
  unaryMinus: unaryMinus
});
exports.det = det;
var distance = /* #__PURE__ */(0, _factoriesAny.createDistance)({
  abs: abs,
  addScalar: addScalar,
  divideScalar: divideScalar,
  multiplyScalar: multiplyScalar,
  sqrt: sqrt,
  subtract: subtract,
  typed: typed,
  unaryMinus: unaryMinus
});
exports.distance = distance;
var stirlingS2 = /* #__PURE__ */(0, _factoriesAny.createStirlingS2)({
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
var catalan = /* #__PURE__ */(0, _factoriesAny.createCatalan)({
  addScalar: addScalar,
  combinations: combinations,
  divideScalar: divideScalar,
  isInteger: isInteger,
  isNegative: isNegative,
  multiplyScalar: multiplyScalar,
  typed: typed
});
exports.catalan = catalan;
var diff = /* #__PURE__ */(0, _factoriesAny.createDiff)({
  matrix: matrix,
  number: number,
  subtract: subtract,
  typed: typed
});
exports.diff = diff;
var log = /* #__PURE__ */(0, _factoriesAny.createLog)({
  Complex: Complex,
  config: _configReadonly.config,
  divideScalar: divideScalar,
  typed: typed
});
exports.log = log;
var dotDivide = /* #__PURE__ */(0, _factoriesAny.createDotDivide)({
  DenseMatrix: DenseMatrix,
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
exports.dotDivide = dotDivide;
var usolveAll = /* #__PURE__ */(0, _factoriesAny.createUsolveAll)({
  DenseMatrix: DenseMatrix,
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  subtract: subtract,
  typed: typed
});
exports.usolveAll = usolveAll;
var hypot = /* #__PURE__ */(0, _factoriesAny.createHypot)({
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
var qr = /* #__PURE__ */(0, _factoriesAny.createQr)({
  addScalar: addScalar,
  complex: complex,
  conj: conj,
  divideScalar: divideScalar,
  equal: equal,
  identity: identity,
  isZero: isZero,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  sign: sign,
  sqrt: sqrt,
  subtract: subtract,
  typed: typed,
  unaryMinus: unaryMinus,
  zeros: zeros
});
exports.qr = qr;
var inv = /* #__PURE__ */(0, _factoriesAny.createInv)({
  abs: abs,
  addScalar: addScalar,
  det: det,
  divideScalar: divideScalar,
  identity: identity,
  matrix: matrix,
  multiply: multiply,
  typed: typed,
  unaryMinus: unaryMinus
});
exports.inv = inv;
var expm = /* #__PURE__ */(0, _factoriesAny.createExpm)({
  abs: abs,
  add: add,
  identity: identity,
  inv: inv,
  multiply: multiply,
  typed: typed
});
exports.expm = expm;
var divide = /* #__PURE__ */(0, _factoriesAny.createDivide)({
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  inv: inv,
  matrix: matrix,
  multiply: multiply,
  typed: typed
});
exports.divide = divide;
var mean = /* #__PURE__ */(0, _factoriesAny.createMean)({
  add: add,
  divide: divide,
  typed: typed
});
exports.mean = mean;
var variance = /* #__PURE__ */(0, _factoriesAny.createVariance)({
  add: add,
  apply: apply,
  divide: divide,
  isNaN: isNaN,
  multiply: multiply,
  subtract: subtract,
  typed: typed
});
exports.variance = variance;
var kldivergence = /* #__PURE__ */(0, _factoriesAny.createKldivergence)({
  divide: divide,
  dotDivide: dotDivide,
  isNumeric: isNumeric,
  log: log,
  matrix: matrix,
  multiply: multiply,
  sum: sum,
  typed: typed
});
exports.kldivergence = kldivergence;
var bellNumbers = /* #__PURE__ */(0, _factoriesAny.createBellNumbers)({
  addScalar: addScalar,
  isInteger: isInteger,
  isNegative: isNegative,
  stirlingS2: stirlingS2,
  typed: typed
});
exports.bellNumbers = bellNumbers;
var log1p = /* #__PURE__ */(0, _factoriesAny.createLog1p)({
  Complex: Complex,
  config: _configReadonly.config,
  divideScalar: divideScalar,
  log: log,
  typed: typed
});
exports.log1p = log1p;
var Unit = /* #__PURE__ */(0, _factoriesAny.createUnitClass)({
  BigNumber: BigNumber,
  Complex: Complex,
  Fraction: Fraction,
  abs: abs,
  addScalar: addScalar,
  config: _configReadonly.config,
  divideScalar: divideScalar,
  equal: equal,
  fix: fix,
  format: format,
  isNumeric: isNumeric,
  multiplyScalar: multiplyScalar,
  number: number,
  pow: pow,
  round: round,
  subtract: subtract
});
exports.Unit = Unit;
var createUnit = /* #__PURE__ */(0, _factoriesAny.createCreateUnit)({
  Unit: Unit,
  typed: typed
});
exports.createUnit = createUnit;
var eigs = /* #__PURE__ */(0, _factoriesAny.createEigs)({
  abs: abs,
  add: add,
  addScalar: addScalar,
  atan: atan,
  bignumber: bignumber,
  config: _configReadonly.config,
  cos: cos,
  equal: equal,
  inv: inv,
  matrix: matrix,
  multiply: multiply,
  multiplyScalar: multiplyScalar,
  sin: sin,
  subtract: subtract,
  typed: typed
});
exports.eigs = eigs;
var intersect = /* #__PURE__ */(0, _factoriesAny.createIntersect)({
  abs: abs,
  add: add,
  addScalar: addScalar,
  config: _configReadonly.config,
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  matrix: matrix,
  multiply: multiply,
  multiplyScalar: multiplyScalar,
  smaller: smaller,
  subtract: subtract,
  typed: typed
});
exports.intersect = intersect;
var std = /* #__PURE__ */(0, _factoriesAny.createStd)({
  sqrt: sqrt,
  typed: typed,
  variance: variance
});
exports.std = std;
var atomicMass = /* #__PURE__ */(0, _factoriesAny.createAtomicMass)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.atomicMass = atomicMass;
var bohrMagneton = /* #__PURE__ */(0, _factoriesAny.createBohrMagneton)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.bohrMagneton = bohrMagneton;
var boltzmann = /* #__PURE__ */(0, _factoriesAny.createBoltzmann)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.boltzmann = boltzmann;
var conductanceQuantum = /* #__PURE__ */(0, _factoriesAny.createConductanceQuantum)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.conductanceQuantum = conductanceQuantum;
var deuteronMass = /* #__PURE__ */(0, _factoriesAny.createDeuteronMass)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.deuteronMass = deuteronMass;
var electronMass = /* #__PURE__ */(0, _factoriesAny.createElectronMass)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.electronMass = electronMass;
var faraday = /* #__PURE__ */(0, _factoriesAny.createFaraday)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.faraday = faraday;
var firstRadiation = /* #__PURE__ */(0, _factoriesAny.createFirstRadiation)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.firstRadiation = firstRadiation;
var gravitationConstant = /* #__PURE__ */(0, _factoriesAny.createGravitationConstant)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.gravitationConstant = gravitationConstant;
var hartreeEnergy = /* #__PURE__ */(0, _factoriesAny.createHartreeEnergy)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.hartreeEnergy = hartreeEnergy;
var klitzing = /* #__PURE__ */(0, _factoriesAny.createKlitzing)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.klitzing = klitzing;
var magneticConstant = /* #__PURE__ */(0, _factoriesAny.createMagneticConstant)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.magneticConstant = magneticConstant;
var molarMass = /* #__PURE__ */(0, _factoriesAny.createMolarMass)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.molarMass = molarMass;
var molarPlanckConstant = /* #__PURE__ */(0, _factoriesAny.createMolarPlanckConstant)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.molarPlanckConstant = molarPlanckConstant;
var neutronMass = /* #__PURE__ */(0, _factoriesAny.createNeutronMass)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.neutronMass = neutronMass;
var planckCharge = /* #__PURE__ */(0, _factoriesAny.createPlanckCharge)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.planckCharge = planckCharge;
var planckLength = /* #__PURE__ */(0, _factoriesAny.createPlanckLength)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.planckLength = planckLength;
var planckTemperature = /* #__PURE__ */(0, _factoriesAny.createPlanckTemperature)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.planckTemperature = planckTemperature;
var protonMass = /* #__PURE__ */(0, _factoriesAny.createProtonMass)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.protonMass = protonMass;
var reducedPlanckConstant = /* #__PURE__ */(0, _factoriesAny.createReducedPlanckConstant)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.reducedPlanckConstant = reducedPlanckConstant;
var secondRadiation = /* #__PURE__ */(0, _factoriesAny.createSecondRadiation)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.secondRadiation = secondRadiation;
var stefanBoltzmann = /* #__PURE__ */(0, _factoriesAny.createStefanBoltzmann)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.stefanBoltzmann = stefanBoltzmann;
var vacuumImpedance = /* #__PURE__ */(0, _factoriesAny.createVacuumImpedance)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.vacuumImpedance = vacuumImpedance;
var usolve = /* #__PURE__ */(0, _factoriesAny.createUsolve)({
  DenseMatrix: DenseMatrix,
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  subtract: subtract,
  typed: typed
});
exports.usolve = usolve;
var norm = /* #__PURE__ */(0, _factoriesAny.createNorm)({
  abs: abs,
  add: add,
  conj: conj,
  ctranspose: ctranspose,
  eigs: eigs,
  equalScalar: equalScalar,
  larger: larger,
  matrix: matrix,
  multiply: multiply,
  pow: pow,
  smaller: smaller,
  sqrt: sqrt,
  typed: typed
});
exports.norm = norm;
var lusolve = /* #__PURE__ */(0, _factoriesAny.createLusolve)({
  DenseMatrix: DenseMatrix,
  lsolve: lsolve,
  lup: lup,
  matrix: matrix,
  slu: slu,
  typed: typed,
  usolve: usolve
});
exports.lusolve = lusolve;
var sqrtm = /* #__PURE__ */(0, _factoriesAny.createSqrtm)({
  abs: abs,
  add: add,
  identity: identity,
  inv: inv,
  max: max,
  multiply: multiply,
  size: size,
  sqrt: sqrt,
  subtract: subtract,
  typed: typed
});
exports.sqrtm = sqrtm;
var multinomial = /* #__PURE__ */(0, _factoriesAny.createMultinomial)({
  add: add,
  divide: divide,
  factorial: factorial,
  isInteger: isInteger,
  isPositive: isPositive,
  multiply: multiply,
  typed: typed
});
exports.multinomial = multinomial;
var avogadro = /* #__PURE__ */(0, _factoriesAny.createAvogadro)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.avogadro = avogadro;
var classicalElectronRadius = /* #__PURE__ */(0, _factoriesAny.createClassicalElectronRadius)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.classicalElectronRadius = classicalElectronRadius;
var electricConstant = /* #__PURE__ */(0, _factoriesAny.createElectricConstant)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.electricConstant = electricConstant;
var fermiCoupling = /* #__PURE__ */(0, _factoriesAny.createFermiCoupling)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.fermiCoupling = fermiCoupling;
var gravity = /* #__PURE__ */(0, _factoriesAny.createGravity)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.gravity = gravity;
var loschmidt = /* #__PURE__ */(0, _factoriesAny.createLoschmidt)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.loschmidt = loschmidt;
var molarMassC12 = /* #__PURE__ */(0, _factoriesAny.createMolarMassC12)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.molarMassC12 = molarMassC12;
var nuclearMagneton = /* #__PURE__ */(0, _factoriesAny.createNuclearMagneton)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.nuclearMagneton = nuclearMagneton;
var planckMass = /* #__PURE__ */(0, _factoriesAny.createPlanckMass)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.planckMass = planckMass;
var quantumOfCirculation = /* #__PURE__ */(0, _factoriesAny.createQuantumOfCirculation)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.quantumOfCirculation = quantumOfCirculation;
var speedOfLight = /* #__PURE__ */(0, _factoriesAny.createSpeedOfLight)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.speedOfLight = speedOfLight;
var wienDisplacement = /* #__PURE__ */(0, _factoriesAny.createWienDisplacement)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.wienDisplacement = wienDisplacement;
var rotationMatrix = /* #__PURE__ */(0, _factoriesAny.createRotationMatrix)({
  BigNumber: BigNumber,
  DenseMatrix: DenseMatrix,
  SparseMatrix: SparseMatrix,
  addScalar: addScalar,
  config: _configReadonly.config,
  cos: cos,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  norm: norm,
  sin: sin,
  typed: typed,
  unaryMinus: unaryMinus
});
exports.rotationMatrix = rotationMatrix;
var median = /* #__PURE__ */(0, _factoriesAny.createMedian)({
  add: add,
  compare: compare,
  divide: divide,
  partitionSelect: partitionSelect,
  typed: typed
});
exports.median = median;
var bohrRadius = /* #__PURE__ */(0, _factoriesAny.createBohrRadius)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.bohrRadius = bohrRadius;
var elementaryCharge = /* #__PURE__ */(0, _factoriesAny.createElementaryCharge)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.elementaryCharge = elementaryCharge;
var inverseConductanceQuantum = /* #__PURE__ */(0, _factoriesAny.createInverseConductanceQuantum)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.inverseConductanceQuantum = inverseConductanceQuantum;
var molarVolume = /* #__PURE__ */(0, _factoriesAny.createMolarVolume)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.molarVolume = molarVolume;
var planckTime = /* #__PURE__ */(0, _factoriesAny.createPlanckTime)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.planckTime = planckTime;
var thomsonCrossSection = /* #__PURE__ */(0, _factoriesAny.createThomsonCrossSection)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.thomsonCrossSection = thomsonCrossSection;
var rotate = /* #__PURE__ */(0, _factoriesAny.createRotate)({
  multiply: multiply,
  rotationMatrix: rotationMatrix,
  typed: typed
});
exports.rotate = rotate;
var mad = /* #__PURE__ */(0, _factoriesAny.createMad)({
  abs: abs,
  map: map,
  median: median,
  subtract: subtract,
  typed: typed
});
exports.mad = mad;
var coulomb = /* #__PURE__ */(0, _factoriesAny.createCoulomb)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.coulomb = coulomb;
var magneticFluxQuantum = /* #__PURE__ */(0, _factoriesAny.createMagneticFluxQuantum)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.magneticFluxQuantum = magneticFluxQuantum;
var rydberg = /* #__PURE__ */(0, _factoriesAny.createRydberg)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.rydberg = rydberg;
var unit = /* #__PURE__ */(0, _factoriesAny.createUnitFunction)({
  Unit: Unit,
  typed: typed
});
exports.unit = unit;
var gasConstant = /* #__PURE__ */(0, _factoriesAny.createGasConstant)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.gasConstant = gasConstant;
var planckConstant = /* #__PURE__ */(0, _factoriesAny.createPlanckConstant)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
exports.planckConstant = planckConstant;