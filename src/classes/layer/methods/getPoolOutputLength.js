/*
 * Undisplayed documentation
 *
 * Get the length of the output of the layer depending on it's parameters.
 * @method getPoolOutputLength
 * @param {Number} f Sample Size
 * @param {Number} s Stride
 * @param {Number} w Size X
 * @param {Number} h Size Y
 * @return {Number} The size of the layer's output.
 */
Layer.getPoolOutputLength = function getPoolOutputLength(f, s, w, h) {
  return ((w - f) / s + 1) * ((h - f) / s + 1);
};
