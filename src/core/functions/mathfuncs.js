/*
 * Mathjs wrapper
 */
const random = (a, b) => Math.random(1) * (b - a) + a;
const exp = (x) => Math.exp(x);
const abs = (x) => Math.abs(x);
const log = (x) => Math.log(x);
const pow = (x, e) => Math.pow(x, e);
const round = (x) => Math.round(x);
const sqrt = (x) => Math.sqrt(x);
const cosh = (x) => (exp(x) + exp(-x)) / 2;
