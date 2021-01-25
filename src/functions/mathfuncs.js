//Shortening Mathjs functions:
const random = (a,b) => Math.random(1)*(b-a)+a;
const exp = (x) => Math.exp(x);
const abs = (x) => Math.abs(x);
const log = (x) => Math.log(x);
const logn = (x,n) => log(x)/log(n);
const pow = (x,e) => Math.pow(x,e);
const sin = (x) => Math.sin(x);
const cos = (x) => Math.cos(x);
const tan = (x) => Math.tan(x);
const round = (x) => Math.round(x);
const sqrt = (x) => Math.sqrt(x);

//Other math functions:
const cosh = (x) => (exp(x)+exp(-x))/2;
const sech = (x) => 1/cosh(x);
