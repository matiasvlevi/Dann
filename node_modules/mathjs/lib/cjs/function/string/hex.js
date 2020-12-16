"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHex = void 0;

var _baseUtils = require("./baseUtils.js");

/**
 * Format a number as hexadecimal.
 *
 * Syntax:
 *
 *    math.hex(value)
 *
 * Examples:
 *
 *    //the following outputs "0xF0"
 *    math.hex(240)
 *
 * See also:
 *
 *    oct
 *    bin
 *
 * @param {number} value    Value to be stringified
 * @return {string}         The formatted value
 */
var createHex = (0, _baseUtils.createBaseFormatterFactory)('hex', 16);
exports.createHex = createHex;