"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOct = void 0;

var _baseUtils = require("./baseUtils.js");

/**
 * Format a number as octal.
 *
 * Syntax:
 *
 *    math.oct(value)
 *
 * Examples:
 *
 *    //the following outputs "0o70"
 *    math.oct(56)
 *
 * See also:
 *
 *    bin
 *    hex
 *
 * @param {number} value  Value to be stringified
 * @return {string}       The formatted value
 */
var createOct = (0, _baseUtils.createBaseFormatterFactory)('oct', 8);
exports.createOct = createOct;