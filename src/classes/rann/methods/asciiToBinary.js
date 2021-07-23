Rann.asciiToBinary = function asciiToBinary(char) {
  let supported = Rann.ascii();
  let index = supported.indexOf(char);
  return numberToBinary(index, 7);
};
