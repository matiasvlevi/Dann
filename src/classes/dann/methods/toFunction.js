/**
 * This method allows for a Dann model to be converted into a minified javascript function that can run independently, which means you don't need to import the library for it to work. The function generated acts as a Dann.feedForward().
 * @method toFunction
 * @param {String} [name] the name of the function, set to 'myDannFunction' by default.
 * @return {String} The function as a string.
 * @example
 * <code>
 * const nn = new Dann(4, 4);
 * nn.addHiddenLayer(8);
 * nn.makeWeights();
 * let stringFunction = nn.toFunction();
 * // Copy & paste the string function!
 * console.log(stringFunction);
 * </code>
 */
Dann.prototype.toFunction = function toFunction(name = 'myDannFunction') {
  let stringfunc = 'function ' + name + '(input) {';
  stringfunc += 'let w = [];';
  for (let i = 0; i < this.weights.length; i++) {
    stringfunc +=
      'w[' + i + '] = ' + JSON.stringify(this.weights[i].matrix) + ';';
  }
  stringfunc += 'let l = [];';
  stringfunc += 'let a = [];';
  for (let i = 0; i < this.Layers.length; i++) {
    stringfunc +=
      'l[' + i + '] = ' + JSON.stringify(this.Layers[i].layer.matrix) + ';';
  }
  for (let i = 0; i < this.Layers.length; i++) {
    let actname = this.Layers[i].actname;
    if (i !== 0) {
      let actfunc = activations[actname].toString().split('\n');
      let minfunction = '';
      for (let u = 0; u < actfunc.length; u++) {
        minfunction += actfunc[u];
      }
      stringfunc += 'a[' + i + '] = ' + minfunction + ';';
    } else {
      stringfunc += 'a[' + i + '] = undefined;';
    }
  }
  stringfunc += 'let b = [];';
  for (let i = 0; i < this.biases.length; i++) {
    stringfunc +=
      'b[' + i + '] = ' + JSON.stringify(this.biases[i].matrix) + ';';
  }
  // Set inputs
  stringfunc +=
    'l[0] = [];' +
    'for (let i = 0; i < ' +
    this.i +
    '; i++) {' +
    'l[0][i] = [input[i]];' +
    '};' +
    // Feedforward
    'for (let m = 0; m < ' +
    this.weights.length +
    '; m++) {' +
    // mult
    'for (let i = 0; i < w[m].length; i++) {' +
    'for (let j = 0; j < l[m][0].length; j++) {' +
    'let sum = 0;' +
    'for (let k = 0; k < w[m][0].length; k++) {' +
    'sum += w[m][i][k] * l[m][k][j];' +
    '};' +
    'l[m+1][i][j] = sum;' +
    '};' +
    '};' +
    // add biases
    'for (let i = 0; i < l[m+1].length; i++) {' +
    'for (let j = 0; j < l[m+1][0].length; j++) {' +
    'l[m+1][i][j] = l[m+1][i][j] + b[m][i][j];' +
    '};' +
    '};' +
    // map layer to activation function
    'for (let i = 0; i < l[m+1].length; i++) {' +
    'for (let j = 0; j < l[m+1][0].length; j++) {' +
    'l[m+1][i][j] = a[m+1](l[m+1][i][j]);' +
    '};' +
    '};' +
    '};' +
    // return output
    'let o = [];' +
    'for (let i = 0; i < ' +
    this.o +
    '; i++) {' +
    'o[i] = l[' +
    (this.Layers.length - 1) +
    '][i][0];' +
    '};' +
    'return o' +
    '}';
  //minify
  stringfunc = stringfunc.replace(/ = /g, '=');
  stringfunc = stringfunc.replace(/ \+ /g, '+');
  stringfunc = stringfunc.replace(/ \* /g, '*');
  stringfunc = stringfunc.replace(/ \/ /g, '/');
  stringfunc = stringfunc.replace(/for \(/g, 'for(');
  stringfunc = stringfunc.replace(/; /g, ';');
  stringfunc = stringfunc.replace(/\) {/g, '){');
  stringfunc = stringfunc.replace(/ < /g, '<');
  stringfunc = stringfunc.replace(/ > /g, '>');
  return stringfunc;
};
