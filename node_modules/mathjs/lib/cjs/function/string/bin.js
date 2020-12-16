"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBin = void 0;

var _baseUtils = require("./baseUtils.js");

/**
 * Format a number as binary.
 *
 * Syntax:
 *
 *    math.bin(value)
 *
 * Examples:
 *
 *    //the following outputs "0b10"
 *    math.bin(2)
 *
 * See also:
 *
 *    oct
 *    hex
 *
 * @param {number} value    Value to be stringified
 * @return {string}         The formatted value
 */
var createBin = (0, _baseUtils.createBaseFormatterFactory)('bin', 2);
exports.createBin = createBin;