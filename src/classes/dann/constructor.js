/**
 * @module Dann
 */

/**
 * Deep Neural Network object. Can be trained with data or by neuro-evolution.
 * @class Dann
 * @constructor
 * @param {Number} [input] the number of input neurons.
 * @param {Number} [output] the number of output neurons.
 * @example
 * <code>
 * // 2 input, 1 output model
 * const nn = new Dann(2, 1);
 * nn.log();
 * </code>
 */
Dann = function Dann(i = 1, o = 1) {
  this.i = i;
  this.inputs = new Layer('input', i);

  this.o = o;
  this.outputs = new Layer('output', o, 'sigmoid');

  this.Layers = [this.inputs, this.outputs];
  this.weights = [];
  this.biases = [];
  this.errors = [];
  this.gradients = [];

  this.outs = [];
  this.loss = 0;
  this.losses = [];
  this.lr = 0.001;
  this.arch = [i, o];

  this.epoch = 0;
  this.recordLoss = false;

  this.lossfunc = mse;
  this.lossfunc_s = this.lossfunc.name;
};
