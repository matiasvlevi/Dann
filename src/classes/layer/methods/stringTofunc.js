/*
 * Undisplayed documentation
 *
 * @method stringTofunc
 * @param {String} str String to convert into activation function object info.
 * @return {Object} Object containing information about an activation function.
 */
Layer.stringTofunc = function stringTofunc(str) {
  let act = str;
  let der = act + '_d';
  let func;
  let func_d;
  func = activations[act];
  func_d = activations[der];

  if (func !== undefined) {
    if (func_d !== undefined) {
      return { name: act, name_d: der, func: func, func_d: func_d };
    } else {
      DannError.error(
        "You need to create the derivative of your custom function. The activation function specified '" +
          str +
          "' does not have a derivative assigned. The activation function was set to the default 'sigmoid'.",
        'Layer.stringTofunc'
      );
      return;
    }
  } else {
    DannError.error(
      "the activation function '" +
        str +
        "' is not a valid activation function. The activation function was set to the default 'sigmoid'.",
      'Layer.stringTofunc'
    );
    return;
  }
};
