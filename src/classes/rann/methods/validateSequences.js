/*
 * Undisplayed documentation
 * Check if sequences are the right format for a given Rann model.
 * @param {Array} input Array of input sequences.
 * @param {Number} sequence The sequence length
 * @return {Boolean} If the sequences are valid for the given Rann model
 */
Rann.prototype.validateSequences = function checkSequences(input) {
  for (let i = 0; i < input.length; i++) {
    let type = typeof input[i];
    if (type === 'number') {
      if (input[i].length !== this.i) {
        return false;
      }
    }
  }
  return true;
};
