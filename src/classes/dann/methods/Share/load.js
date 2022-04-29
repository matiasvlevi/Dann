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
