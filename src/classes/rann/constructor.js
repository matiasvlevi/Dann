/**
 * @module Rann
 */

/**
 * Recurrent Neural Network object. Feature still in development.
 * @class Rann
 * @constructor
 */
Rann = function Rann(i = 1, h = 2, o = 1) {
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

  // Mult values (dev only)
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
  funcData = Layer.stringTofunc(this.actname);
  this.o_actfunc = (x) => x;
  this.o_actfunc_d = (x) => 1;

  // Other values
  this.previous;
  this.input;
  this.output;
};
