/**
 * @module Rann
 */

/**
 * Recurrent Neural Network object. Feature still in development.
 * @class Rann
 * @constructor
 */
Rann = function Rann(i = 1, o = 1) {
  this.i = i;
  this.o = o;
  this.lr = 0.001;
  this.nn = new Dann(i, o);
  this.nn.addHiddenLayer(i * 2);
  this.nn.makeWeights();
  this.nn.lr = this.lr;
  this.previous = [];
  this.input = [];
};
