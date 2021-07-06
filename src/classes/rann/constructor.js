/**
 * @module Rann
 */

/**
 * Recurrent Neural Network object. Feature still in development.
 * @class Rann
 * @constructor
 * @param {Number} i The number of input neurons, must be the same length as the sequences to input.
 * @param {Number} h The number of hidden neurons
 * @param {Number} o The number of output neurons
 * @example
 * <code>
 * const rnn = new Rann(10, 32, 10);
 * rnn.log();
 * </code>
 */
Rann = function Rann(i = 2, h = 8, o = 2) {
  // Structure Values
  this.i = i;
  this.o = o;
  this.h = h;
  this.lr = 0.001;
  this.arch = [this.i, this.h, this.o];

  this.layers = [];

  // Weights
  this.U = new Matrix(this.h, this.i);
  this.V = new Matrix(this.o, this.h);
  this.W = new Matrix(this.h, this.h);

  // Gradients
  this.dU = new Matrix(this.h, this.i);
  this.dV = new Matrix(this.o, this.h);
  this.dW = new Matrix(this.h, this.h);

  this.dU_t = new Matrix(this.h, this.i);
  this.dV_t = new Matrix(this.o, this.h);
  this.dW_t = new Matrix(this.h, this.h);

  this.dU_i = new Matrix(this.h, this.i);
  this.dW_i = new Matrix(this.h, this.h);

  // Randomize
  this.U.randomize(-1, 1);
  this.V.randomize(-1, 1);
  this.W.randomize(-1, 1);

  // Mult values
  this.mulv;
  this.mulw;
  this.mulu;

  // Set hidden activation
  this.actname = 'sigmoid';
  let funcData = Layer.stringTofunc(this.actname);
  this.actfunc = funcData['func'];
  this.actfunc_d = funcData['func_d'];

  // Set output activation
  this.o_actname = 'linear';
  this.o_actfunc = (x) => x;
  this.o_actfunc_d = (x) => 1;

  // Data values
  this.previous;
  this.input;
  this.output;

  // Other values
  this.truncate = 5;
  this.loss = 0;
  this.epoch = 0;
  this.lossfunc_s = 'mse';
  this.lossfunc = lossfuncs[this.lossfunc_s];
};
