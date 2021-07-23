Rann.inputToNum = function inputToNum(input) {
  let supported = Rann.ascii();
  let str = '';
  for (let i = 0; i < input.length; i++) {
    str += ' ' + input[i];
  }
  let new_input = [];
  for (let i = 0; i < str.length; i++) {
    let index = supported.indexOf(str[i]);
    new_input.push(numberToBinary(index, 7));
  }
  return new_input;
};
