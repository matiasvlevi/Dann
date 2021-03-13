[Back to Home](https://github.com/matiasvlevi/Dann/wiki)

<br/>

Pool functions are stored in an Object value named `poolfuncs`. In the browser, it is set as a global value. <br/> For nodejs you can require such object like so:
```js
const dn = require('dannjs');
const poolfuncs = dn.poolfuncs;
```
<br/>

To add your own function, add a new Object property referencing the function you want to add.

```js
poolfuncs.name = function;
```

Here's an example with the pre-existing `'avgpool'` pool function under a different name:

```js
const dn = require('dannjs');     //nodejs only
const poolfuncs = dn.poolfuncs;   //nodejs only

poolfuncs.myCustomFunc = function (arr) {
    let sum = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        sum += arr[i];
    }
    return sum/len;
}

const layer = new Layer('myCustomFuncpool', 9, 2, 1);
```
To use this function in a pool layer you need to specify the type as `'functionName'` + `'pool'`.

<br/>

### Function arguments
A pool function is used to select/compute a value out of an array.

* array <br/>
An array used to compute a numeric value as an output.
<br/>

* returns <br/>
A numeric value
<br/><br/><br/>

