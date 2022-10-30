Dann.prototype.kernel_train = function kernel_train(data, options) {
  data = data.map((point) => Object.values(point));

  console.log(this);                    // DEBUG
  console.log(global.Cuno.train(this)); // DEBUG
};
