Rann.prototype.feed = function feed(input, options) {
  this.previous = new Array(this.nn.arch[1]).fill(0);
  for (let t = 0; t < input.length; t++) {
    this.input = new Array(this.i).fill(0);
    this.input[t] = input[t];
    let output = this.nn.feedForward(this.input, {
      pull: 1,
      insert: { layer: 1, value: this.previous },
    });
    this.previous = output;
    this.output = this.nn.feedForward(this.input, {
      insert: { layer: 1, value: this.previous },
    });
  }
  return this.output;
};
