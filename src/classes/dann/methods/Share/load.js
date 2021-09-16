/*
 * (Browser)
 * When this function is called, an input tag requesting a file appears on screen. When clicked, it opens a local file dialogue. Once the appropriate file is selected the dann data automatically uploads. The filename argument is not required for this version since the browser dialog takes care of it.
 * @method load
 * @deprecated Use fromJSON or createFromJSON, Removed in 2.2.6
 * @param {String} name The name of the variable that holds the dann model.
 * @param {String} arg2 The ID of the HTML element in which to place the input dom element. If left undefined, the input dom element is appended to the body element.
 * @param {Function} arg3 A function to be called when the model finished loading.
 */
/*
 * (Nodejs)
 * Load a previously saved json file from ./savedDanns/. If the network's architechture is not the same, it is going to overwrite the Dann object.
 * @method load
 * @deprecated Use fromJSON or createFromJSON, Removed in 2.2.6
 * @param {String} name The name of the saved directory that holds the dann model.
 * @param {Function} arg2 A function to be called when the model finished loading.
 */
// Dann.prototype.load = function load(name, arg2, arg3) {
//   if (isBrowser) {
//     upload(name, arg2, arg3);
//   } else {
//     let path = './savedDanns/' + name + '/dannData.json';
//     if (fs.existsSync(path)) {
//       let text = fs.readFileSync(path, 'utf8');
//       let xdata = JSON.parse(text);

//       let newNN = xdata;
//       this.applyToModel(newNN);
//       if (typeof arg2 === 'function') {
//         arg2(false);
//       } else {
//         let type = typeof arg2;
//         DannError.error(
//           "callback specified is not a function, the function recieved a '" +
//             type +
//             "' instead",
//           'Dann.prototype.load'
//         );
//         return;
//       }
//     } else {
//       if (typeof arg2 === 'function') {
//         arg2(true);
//       } else if (typeof arg2 !== 'function') {
//         let type = typeof arg2;
//         DannError.error(
//           'Callback specified is not a function, the function recieved a ' +
//             type +
//             ' instead',
//           'Dann.prototype.load'
//         );
//         return;
//       } else {
//         DannError.error('File not found', 'Dann.prototype.load');
//         return;
//       }
//     }
//   }
// };
