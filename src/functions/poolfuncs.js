// Pooling functions:
function max(arr) {
    let record = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] > record) {
            record = arr[i];
        }
    }
    return record;
}
function min(arr) {
    let record = 100000; // Bigger enough value, technically should represent infinity.
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] < record) {
            record = arr[i];
        }
    }
    return record;
}
function avg(arr) {
    let sum = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        sum += arr[i];
    }
    return sum/len;
}
