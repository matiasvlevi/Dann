//Dannjs imports
const Dannjs = require('../build/dann.js');
const Dann = Dannjs.dann;
const Matrix = Dannjs.matrix;
const Layer = Dannjs.layer;
const XOR = Dannjs.xor;
const makeXOR = Dannjs.makeXOR;
const act = Dannjs.activations;
const lossfuncs = Dannjs.lossfuncs;
const poolfuncs = Dannjs.poolfuncs;
const Add = Dannjs.add;
//Chai imports
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
//Disabling error messages
DannError.error = () => {
  return;
};
DannError.warn = () => {
  return;
};
