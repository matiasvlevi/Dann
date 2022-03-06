Dann.prototype.checkArrayLength = function checkArrayLength(arr, n) {
  return arr.length === n
};

Dann.prototype.checkLearningRate = function checkLearningRate() {
  if (typeof this.lr !== 'number') {
    DannError.error(
      'The learning rate specified (Dann.lr property) is not a number.',
      'Dann.prototype.backpropagate'
    );
    return false;
  } else {
    if (this.lr >= 1) {
      DannError.error(
        'The learning rate specified is greater or equal to 1',
        'Dann.prototype.backpropagate'
      );
      return false;
    }
  }
  return true;
};

Dann.prototype.checkDropoutRate = function (dropout) {
  if (dropout >= 1) {
    DannError.error(
      'The probability value can not be bigger or equal to 1',
      'Dann.prototype.backpropagate'
    );
    return false;
  } else if (dropout <= 0) {
    DannError.error(
      'The probability value can not be smaller or equal to 0',
      'Dann.prototype.backpropagate'
    );
    return false;
  }
  return true;
};
