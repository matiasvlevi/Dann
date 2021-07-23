Rann.numToOutput = function numToOutput(num) {
  let supported = Rann.ascii();
  let new_num = [];
  for (let i = 0; i < num.length; i++) {
    new_num.push(Math.round(num[i]));
  }
  let str = new_num.toString().replace(/,/gi, '');
  return supported[parseInt(str, 2)];
};
