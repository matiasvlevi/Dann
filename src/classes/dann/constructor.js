/**
 * @module Dann
 * @submodule Create
 */
/**
 * Deep Neural Network component. Can be trained with data or by neuro-evolution.
 * @class Dann
 * @constructor
 * @method constructor
 * @param {Number} [input] the number of input neurons.
 * @param {Number} [output] the number of output neurons.
 * @example
 * <code>
 * const { Dann } = require('dannjs');
 * </code>
 * <code>
 * // 784 input, 2 output model
 * const nn = new Dann(784, 2);
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
  this.dropout = [];

  this.outs = [];
  this.loss = 0;
  this.lr = 0.001;
  this.arch = [i, o];

  this.epoch = 0;
  this.recordLoss = false;

  this.lossfunc = lossfuncs.mse;
  this.lossfunc_s = this.lossfunc.name;
  this.percentile = 0.5;
};

Dann.Cuno = global.Cuno;
