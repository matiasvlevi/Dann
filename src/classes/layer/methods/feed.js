/**
 * Feed data through the layer to obtain an output.
 * @method feed
 * @param {Array} data Takes an array of numbers to feed through the layer.
 * @param {Object} [options] An object including specific properties.
 * <table>
 * <thead>
 * <tr>
 * <th style="text-align:center">Property</th>
 * <th style="text-align:center">Type</th>
 * <th>Function</th>
 * </tr>
 * </thead>
 * <tbody>
 * <tr>
 * <td style="text-align:center">log</td>
 * <td style="text-align:center">Boolean</td>
 * <td>Whether or not to log the output.</td>
 * </tr>
 * <tr>
 * <td style="text-align:center">table</td>
 * <td style="text-align:center">Boolean</td>
 * <td>Whether or not we want to print the result in the form of a table or a normal console log.</td>
 * </tr>
 * </tbody>
 * </table>
 * @return {Array} Array of outputs values.
 */
Layer.prototype.feed = function feed(data, options) {
  if (this.subtype !== 'pool') {
    DannError.error(
      "This function can only be used by Layers with 'pool' subtype",
      'Layer.prototype.feed'
    );
  } else {
    let showLog = false;
    let table = false;
    let f = this.sampleSize;
    let s = this.stride;
    if (options !== undefined) {
      if (options.log) {
        showLog = options.log;
      }
      if (options.table) {
        table = options.table;
      }
    }
    if (data.length !== this.inputSize) {
      DannError.error(
        'Dann Error: The data you are trying to feed to this ' +
          this.type +
          ' layer is not the same length as the number of input this layer has.',
        'Layer.prototype.feed'
      );
      return;
    } else {
      let downsampled = this.downsample(data, f, s);
      if (showLog) {
        if (table) {
          console.table(downsampled);
        } else {
          console.log(downsampled);
        }
      }
      return downsampled;
    }
  }
};
