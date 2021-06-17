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
  // Setting weights
  stringfunc += 'let w = [];';
  for (let i = 0; i < this.weights.length; i++) {
    stringfunc +=
      'w[' + i + '] = ' + JSON.stringify(this.weights[i].matrix) + ';';
  }
  // Setting biases
  stringfunc += 'let b = [];';
  for (let i = 0; i < this.biases.length; i++) {
    stringfunc +=
      'b[' + i + '] = ' + JSON.stringify(this.biases[i].matrix) + ';';
  }
  stringfunc += 'let c = ' + JSON.stringify(this.arch) + ';';
  // Setting activations
  stringfunc += 'let a = [];';
  for (let i = 1; i < this.Layers.length; i++) {
    let actname = this.Layers[i].actname;
    if (i !== 0) {
      let actfunc = toEs6(activations[actname]).toString().split('\n');
      let minfunction = '';
      for (let u = 0; u < actfunc.length; u++) {
        minfunction += actfunc[u];
      }
      actfunc = minfunction.split('\t');
      let minfunction_notabs = '';
      for (let u = 0; u < actfunc.length; u++) {
        minfunction_notabs += actfunc[u];
      }
      stringfunc += 'a[' + i + '] = ' + minfunction_notabs + ';';
    } else {
      stringfunc += 'a[' + i + '] = undefined;';
    }
  }
  // Setting layers
  stringfunc += 'let l = [];';
  stringfunc +=
    'l[0] = [];' +
    'for (let i = 0; i < ' +
    this.i +
    '; i++) {' +
    'l[0][i] = [input[i]];' +
    '};';
  stringfunc +=
    'for (let i = 1; i < ' +
    this.Layers.length +
    '; i++) {' +
    'l[i] = [];' +
    'for (let j = 0; j < c[i]; j++) {' +
    'l[i][j] = [0];' +
    '}' +
    '};';
  // ffw
  stringfunc +=
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
    '}' +
    '};' +
    // add biases
    'for (let i = 0; i < l[m+1].length; i++) {' +
    'for (let j = 0; j < l[m+1][0].length; j++) {' +
    'l[m+1][i][j] = l[m+1][i][j] + b[m][i][j];' +
    '}' +
    '};' +
    // map layer to activation function
    'for (let i = 0; i < l[m+1].length; i++) {' +
    'for (let j = 0; j < l[m+1][0].length; j++) {' +
    'l[m+1][i][j] = a[m+1](l[m+1][i][j]);' +
    '}' +
    '}' +
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
  return minify(stringfunc);
};
/*
 * minify code
 */
function minify(string) {
  string = string.replace(/ = /g, '=');
  string = string.replace(/ \+ /g, '+');
  string = string.replace(/ - /g, '-');
  string = string.replace(/ \* /g, '*');
  string = string.replace(/ \/ /g, '/');
  string = string.replace(/for \(/g, 'for(');
  string = string.replace(/; /g, ';');
  string = string.replace(/\) {/g, '){');
  string = string.replace(/ < /g, '<');
  string = string.replace(/ > /g, '>');
  string = string.replace(/ \+= /g, '+=');
  string = string.replace(/;\}/g, '}');
  for (let i = 0; i < 5; i++) {
    string = string.replace(/\{ /g, '{');
    string = string.replace(/ \{/g, '{');
    string = string.replace(/\} /g, '}');
    string = string.replace(/\t/g, '');
    string = string.replace(/\n/g, '');
  }
  for (let i = 0; i < 5; i++) {
    string = string.replace(/; /g, ';');
  }
  return string;
}
/*
 * Slice string by index but keep both segments.
 */
function slicestring(str, index) {
  return [str.slice(0, index + 1), str.slice(index + 1, str.length)];
}
/*
 * Transform a stringified function to a stringified es6 syntax in order to save space.
 */
function toEs6(func) {
  let str = func.toString();
  let index = str.indexOf('(');
  let rstr = slicestring(str, index)[1];
  index = rstr.indexOf(')');
  let funcarr = slicestring(rstr, index - 1);
  let args = funcarr[0];
  index = funcarr[1].indexOf(')');
  let content = slicestring(funcarr[1], index)[1];
  let funcstr = '(' + args + ')=>' + content;
  let minfuncstr = minify(funcstr);
  return minfuncstr;
}
