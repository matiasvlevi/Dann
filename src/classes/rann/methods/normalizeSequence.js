Rann.prototype.normalizeSequence = function normalizeSequence(input, record) {
  // Find largest value
  if (record !== undefined) {
    if (record === true) {
      let max_arr = [];
      for (let i = 0; i < input.length; i++) {
        max_arr = max_arr.concat(input[i]);
      }
      let largest = Math.max.apply(1, max_arr);
      if (this.largestSequenceValue < largest) {
        this.largestSequenceValue = largest;
      }
    }
  }
  // Normalize sequence
  let new_sequence = [];
  let sequence_length = input[0].length;
  for (let i = 0; i < input.length; i++) {
    new_sequence[i] = [];
    for (let j = 0; j < sequence_length; j++) {
      new_sequence[i].push(input[i][j] / this.largestSequenceValue);
    }
  }
  return new_sequence;
};
