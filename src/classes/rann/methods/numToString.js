/*
 * @method numToString
 * @param {Array} num list of number to convert to string
 * @return {String} converted string
 */
Rann.numToString = function numToString(num) {
  let supported =
    ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
  let ans = '';
  for (let i = 0; i < num.length; i++) {
    let letter = Math.floor(num[i] * supported.length);
    ans += supported[letter];
  }
  return ans;
};
