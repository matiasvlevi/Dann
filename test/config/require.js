//Dannjs imports
const {
  Dann,
  Layer,
  Matrix,
  Add,
  XOR,
  makeXOR,
  makeBinary,
  activations,
  lossfuncs,
  poolfuncs,
} = require('../build/dann.js');

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
