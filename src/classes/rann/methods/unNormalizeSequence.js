Rann.prototype.unNormalizeSequence = function unNormalizeSequence(sequence) {
  // Normalize sequence
  let new_sequence = [];
  for (let i = 0; i < sequence.length; i++) {
    new_sequence[i] = [];
    for (let j = 0; j < sequence[0].length; j++) {
      new_sequence[i].push(sequence[i][j] * this.largestSequenceValue);
    }
  }
  return new_sequence;
};
