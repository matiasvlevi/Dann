Rann.checkSequences = function checkSequences(input, sequence) {
  for (let i = 0; i < input.length; i++) {
    if (input[i].length !== sequence) {
      return false;
    }
  }
  return true;
};
