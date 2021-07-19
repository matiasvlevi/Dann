/*
 * Undisplayed documentation
 * Convert a string to an array of values.
 * @param {String} str The string to convert to an array of values.
 * @returns
 */
Rann.stringToNum = function stringToNum(str) {
  let supported = Rann.ascii();
  let letters = str.split('');
  let numbers = [];
  for (letter of letters) {
    let ascii_value = supported.indexOf(letter);
    let value = (ascii_value + 1) / (supported.length + 1);
    numbers.push(value);
  }
  return numbers;
};
