Rann.binaryToAscii = function binaryToAscii(binary_arr) {
  let supported = Rann.ascii();
  let str = binary_arr.toString().replace(/,/gi, '');
  if (str.length < 7) {
    for (let i = 7; i > str.length; i++) {
      str = '0' + str;
    }
  }
  let index = parseInt(str, 2);
  return supported[index];
};
