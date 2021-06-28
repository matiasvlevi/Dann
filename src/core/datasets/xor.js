/*
 * XOR dataset made for testing & example purposes.
 */


/*
 * Undisplayed documentation
 * Make a dataset consisting of binary values represented as arrays and XOR result of the binary values
 * Made for testing & example purposes.
 * @method makeXOR
 * @param {Number} size Number of bits
 * @returns {Array} The dataset
 * @example
 * <code>
 *  let dataset = makeXOR(3);
 *  console.log(dataset);
 * // [
 * //   { input: [ 0, 0, 0 ], output: [ 0 ] },
 * //   { input: [ 0, 0, 1 ], output: [ 1 ] },
 * //   { input: [ 0, 1, 0 ], output: [ 1 ] },
 * //   { input: [ 0, 1, 1 ], output: [ 0 ] },
 * //   { input: [ 1, 0, 0 ], output: [ 1 ] },
 * //   { input: [ 1, 0, 1 ], output: [ 0 ] },
 * //   { input: [ 1, 1, 0 ], output: [ 0 ] },
 * //   { input: [ 1, 1, 1 ], output: [ 1 ] }
 * // ]
 * </code>
 */
function makeXOR(number) {
  let data = makeBinary(number);
  let lastElement = {input: data[data.length-1].target, target: []};
  data.push(lastElement);
  data.forEach((element)=>{
      delete element["target"];
      element.output = [element.input.reduce((a,b)=>a+b,0)%2];
  });
  return data;
}


/*
 * XOR dataset made for testing & example purposes.
 */


const XOR = [
  {
    input: [1, 0],
    output: [1],
  },
  {
    input: [0, 1],
    output: [1],
  },
  {
    input: [0, 0],
    output: [0],
  },
  {
    input: [1, 1],
    output: [0],
  },
];
