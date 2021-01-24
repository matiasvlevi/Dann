//Shortening Mathjs functions:
function random(x1,x2) {
    return Math.random(1)*(x2-x1)+x1;
}
function exp(x1) {
    return Math.exp(x1);
}
function abs(x1) {
    return Math.abs(x1);
}
function log(x1) {
    return Math.log(x1);
}
function pow(x1,e) {
    return Math.pow(x1,e);
}
function sin(x1) {
    return Math.sin(x1);
}
function cos(x1) {
    return Math.cos(x1);
}
function tan(x1) {
    return Math.tan(x1);
}
function round(x1) {
    return Math.round(x1);
}
function sqrt(x1) {
    return Math.sqrt(x1);
}
//Other math functions:
function cosh(x) {
    return ((exp(x)+exp(-x))/2);
}
function sech(x) {
    return 1/cosh(x);
}
