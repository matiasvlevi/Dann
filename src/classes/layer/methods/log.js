/**
 * Log the layer in the console.
 * @method log
 * @example
 * <code>
 * const l1 = new Layer('maxpool', 16, 4, 4);
 * l1.log();
 * </code>
 */
Layer.prototype.log = function log() {
  console.log(this);
};
