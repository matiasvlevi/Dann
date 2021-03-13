[Back to Home](https://github.com/matiasvlevi/Dann/wiki)
<br/>

Loss functions are stored in an Object value named `lossfuncs`. <br/> For nodejs require the object like so:

```js
const lossfuncs = require('dannjs').lossfuncs;
```

To add your own function, add a new object property with the function you want to add. The name of the property is the name the Dann model is going to use to refer to the function.

```js
lossfuncs.name = function;
```

Here's an example with the pre-existing `'mse'` loss function:

```js
const dn = require('dannjs');     //nodejs only
const lossfuncs = dn.lossfuncs;   //nodejs only

lossfuncs.mse = function mse(predictions,target) {
    let sum = 0;
    let n = target.length;

    for (let i = 0; i < n; i++) {
        let y = target[i];
        let yHat = predictions[i];
        sum += Math.pow(y - yHat,2);
    }

    return sum/n;
}
```
<br/>

### Function arguments
A standard loss function takes two arguments to evaluate the resulting loss of the model.

* predictions <br/>
The predicted output of the model as an array.
<br/>

* target <br/>
The desired output of the model as an array.
<br/>

* returns <br/>
A loss value.
<br/><br/><br/>
