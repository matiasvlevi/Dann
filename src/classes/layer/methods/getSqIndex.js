/*
 * Undisplayed documetation
 *
 * @method getSqIndex
 * @param {Number} w width
 * @param {Number} i row index
 * @param {Number} j column index
 * @returns
 */
Layer.getSqIndex = function getSqIndex(w, i, j) {
  return w * j + i;
};
