/**
 * @module Dann
 * @submodule Share
 */
/**
 * Creates a Dann model from a json object.
 * @method createFromJSON
 * @static
 * @param {Object} data model data json object, you can get this object from a yourmodel.toJSON(); See docs <a href="https://dannjs.org">here</a>.
 * @return {Dann} A Dann model.
 * @example
 * <code>
 * const nn = new Dann(24, 4);
 * nn.addHiddenLayer(12, 'sigmoid');
 * nn.makeWeights();
 * const modelData = nn.toJSON();
 * const newNN = Dann.createFromJSON(modelData);
 * newNN.log();
 * </code>
 */
Dann.createFromJSON = function createFromJSON(data) {
  const model = new Dann();
  model.fromJSON(data);
  return model;
};
