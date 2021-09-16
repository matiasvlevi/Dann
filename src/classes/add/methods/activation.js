/**
 * Add a custom activation function.
 * @method activation
 * @param {string} name the name of the new activation function.
 * @param {function} activation the activation function.
 * @param {function} derivative the derivative of this activation function.
 * @example
 * <code>
 * Add.activation('myfunc',
 *   (x) => {
 *     if (x <= 0) {
 *       return 0;
 *     } else {
 *       return 1;
 *     }
 *   },
 *   (x) => {
 *     return 0;
 *   }
 * );
 * let nn = new Dann();
 * nn.outputActivation('myfunc');
 * nn.log();
 * </code>
 */
Add.activation = function (name, activation, derivative) {
  if (typeof name !== 'string') {
    DannError.error('The name argument is not a string.', 'Add.activation');
    return;
  }
  if (activation.length !== 1 || derivative.length !== 1) {
    DannError.error(
      'One of the functions specified does not have only 1 argument.',
      'Add.activation'
    );
    return;
  } else {
    activations[name] = activation;
    activations[name + '_d'] = derivative;
    return;
  }
};
