const isBrowser = (typeof process !== 'object');
let csv;
let fs;
let w;

//CDN dependencies:
function addCDNdependencies() {
    let element = document.createElement('script');
    element.setAttribute('type','text/javascript');
    element.setAttribute('src','https://cdn.jsdelivr.net/npm/mathjs@8.1.0/lib/browser/math.min.js');
    document.head.insertBefore(element, document.head.children[0]);
}
if(isBrowser) {
    addCDNdependencies();
} else {
    fs = require('fs');
    require('mathjs');
    csv = require('fast-csv');
    w = require('@fast-csv/format');
}
