Rann.prototype.fromJSON = function fromJSON(data) {
  // Meta data
  this.i = data.i;
  this.h = data.h;
  this.o = data.o;
  this.arch = JSON.parse(data.arch);

  // Neural network data
  this.lr = data.lr;
  this.largestSequenceValue = data.lsv;
  this.truncate = data.trun;
  this.epoch = data.e;
  this.loss = data.loss;

  this.layers = [];
  let layers = JSON.parse(data.layers);
  for (let i = 0; i < layers.length; i++) {
    let current = new Matrix().set(layers[i].current.matrix);
    let previous = new Matrix().set(layers[i].previous.matrix);
    this.layers[i] = {
      current: current,
      previous: previous,
    };
  }

  // Weights

  this.U = new Matrix().set(JSON.parse(data.U));

  this.V = new Matrix().set(JSON.parse(data.V));

  this.W = new Matrix().set(JSON.parse(data.W));

  // Gradients
  this.dU = new Matrix().set(JSON.parse(data.dU));
  this.dV = new Matrix().set(JSON.parse(data.dV));
  this.dW = new Matrix().set(JSON.parse(data.dW));

  this.dU_t = new Matrix().set(JSON.parse(data.dU_t));
  this.dV_t = new Matrix().set(JSON.parse(data.dV_t));
  this.dW_t = new Matrix().set(JSON.parse(data.dW_t));

  this.dU_i = new Matrix().set(JSON.parse(data.dU_i));
  this.dW_i = new Matrix().set(JSON.parse(data.dW_i));

  // Set model's loss function
  this.setLossFunction(data.lf);

  // Set hidden layer activation
  this.setActivation(data.act);

  // Set output activation (Only linear is supported as of now)
  this.o_actname = 'linear';
  this.o_actfunc = (x) => x;
  this.o_actfunc_d = (x) => 1;
};
