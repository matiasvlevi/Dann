# Change log 

<br/>

# v2.4.1c

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.4.1c)

### Fixes 

* `Dann.prototype.toFunction` es6 activation functions fixes for browser & node, pointed out by #48. 

* Activation functions names are now all lowercase, and activation names specified by the user are passed through `name.toLocaleLowerCase` which allows for mixed cases and backwards compatibility. Feature implemented by @and1can through  issue #44 

* Removed `Dann.prototype.losses` since it was used to store loss values if the `saveLoss` option was set to true when calling  `Dann.prototype.backpropagate`. This feature did not need to be built in the library, the prefered way to achieve something like this would be:

```js
let savedLosses = [];
for (...) {
  nn.backpropagate(input, output);
  savedLosses.push(nn.loss);
}
```  
This allows more control on when to save a loss, as opposed to always have to save a loss value when `Dann.prototype.backpropagate` is called with `saveLoss` ticked to true.

<br/><br/>

# v2.4.0

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.4.0)

### Changes

* Added `asLabel` option for `feedForward` and `feed`.
```js
nn.feed([1, 1]) // Outputs an array
nn.feed([1, 1], { asLabel: true }) // Outputs the index of the largest output value
```
* Changed exports, Classes are now capitalized, old uncapitalized names are still available for old code support.

<br/><br/>

# v2.3.14

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.3.14)

### Changes
* Cleaner `Dann.prototype.log`, `Dann.prototype.feedForward`, `Dann.prototype.backpropagate` methods.
* Added a validity check system to work with the error handling.
* Restored logo in manual browser tests
* Added a static `Dann.print` method to print either as a log or table. Instead of using `console.log` & `console.table` in if statements.

<br/><br/>

# v2.3.13

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.3.13)

### Changes
* Removed duplicate function `fromJSON`
* Added social icons in readme

<br/><br/>

# v2.3.12

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.3.12)

### Bug fix

* Fixed `Dann.prototype.log` `null` values

<br/><br/>

# v2.3.11

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.3.11)

### Changes
* Options now use less conditionals
* Added a new dropout option, which allows you to set a value in between 0 and 1 to determine the chance of a neuron being idle during a backward pass.

Here is an example with 10% chance a neuron becomes inactive
```js
nn.backpropagate([your_inputs],[your_outputs],{ dropout : 0.1 });
```

#### Dropout

![image](https://user-images.githubusercontent.com/50473168/131260287-da201ee6-94e7-4524-a2ba-b89a49934731.png)

<br/><br/>

# v2.2.11

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.11)

### Changes
* Added quantile loss function & support for a percentile value.
[Here](https://dannjs.org/docs/classes/Dann#method_setLossFunction) is documentation about loss functions, including quantile loss


### Dev changes
* Fixed missing `sig` task
* Added unit tests for quantile loss & percentile value.


<br/><br/>

# v2.2.10

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.10)

### Changes
* Added `makeXOR` method which allows for the creation of `X` inputs XOR datasets
* Added `Dann.prototype.feed` alias for `Dann.prototype.feedForward`
* Added `Dann.prototype.train` alias for `Dann.prototype.backpropagate`

### Dev changes
* Fixed dev dependencies

<br/><br/>

# v2.2.9

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.9)

# v2.2.9

### Changes
* Added `Add` class
  * `Add.activation` allows the user to add custom activation functions
  * `Add.loss` allows the user to add custom loss functions

Add documentation can be found [here](https://dannjs.org/docs/classes/Add.html)

### Dev changes
* Added grunt tasks for documentation build
* Added unit tests for `Add` and its methods

<br/><br/>

# v2.2.8

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.8)

# v2.2.8

### Changes
* added `binary` & `softplus` activations
* documentation rectification

### Dev Changes
* added unit tests for new activations
* added deprecation message in documentation
* added npm shortcut commands
    * `npm run browser` launches the `empty-example` html file in a browser
    * `npm run doc:show` launches the built documentation in a browser


<br/><br/>

# v2.2.7

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.7)

# v2.2.7

### Changes
* Added `softsign` activation function
* Added `sinc` activation function
* Added unit tests for `sinc` & `softsign` functions
* fixed unit tests for activation function changed `assert.equal` to `assert.closeTo`


<br/><br/>

# v2.2.6e

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.6e)



### Changes

* added example testing grunt task
* minor fixes

<br/><br/>

# v2.2.6d

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.6d)

### Removed dependencies

<br/><br/>

# v2.2.6c

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.6c)

### v2.2.6c
- More efficient `Dann.prototype.toFunction()`

<br/><br/>

# v2.2.6b

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.6b)

## Fix
* fixed `@fast-csv` dependency problem.

<br/><br/>

# v2.2.6

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.6)

# v2.2.6 

### Changes

* Added `Dann.prototype.toFunction();` to convert a dann model to a standalone function.
* Added `Dann.prototype.mapWeights();` to map function to a Dann model's weights.

* Removed `Dann.prototype.save();` for both node & browser.
* Removed `Dann.prototype.load();` for both node & browser.

* Removed npm dependency `fs`
* Removed npm dependency `fast-csv`



<br/><br/>

# v2.2.5b

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.5b)

* fixes `Matrix.log`

<br/><br/>

# v2.2.5

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.5)

# v2.2.5

### Changes

* Added Inline documentation with `yuidoc`
* Added Unit tests with `mocha`
* Added Examples in `test/manual-tests`
* Added new [documentation on website](https://dannjs.org/docs/)

<br/><br/>

# v2.2.4f

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.4f)

# JSON functions now renamed


* `createFromObject();` is now `createFromJSON();`
* `dannObject();` is now `toJSON();`
* `applyToModel();` is now `fromJSON();`

<br/><br/>

# v2.2.4e

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.4e)

* changes in contribution docs & `devsetup.bat`
you might want to rerun the `devsetup.bat` to have the updated dev tools.
* minor changes in `Layer` 

<br/><br/>

# v2.2.4d

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.4d)

Fixes regaring `Dann.load();` and the window element in the browser.

<br/><br/>

# v2.2.4c

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.4c)

### Changes
* fixed `Dann.mutateAdd` and `Dann.mutateRandom` functions
<br/>

[See `Dann.mutateAdd`  docs here](https://github.com/matiasvlevi/Dann/wiki/Dann-mutateAdd)
[See `Dann.mutateRandom`  docs here](https://github.com/matiasvlevi/Dann/wiki/Dann-mutateRandom)

<br/><br/>

# v2.2.4b

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.4b)

### Changes

<br/>

## Added XOR dataset.
require it like so:
```js
const XOR = require('dannjs').xor;
```
It looks like this:
```js
[
  { input: [ 1, 0 ], output: [ 1 ] },
  { input: [ 0, 1 ], output: [ 1 ] },
  { input: [ 0, 0 ], output: [ 0 ] },
  { input: [ 1, 1 ], output: [ 0 ] }
]
```

<br/><br/>

## Added a function that creates binary datasets following a math rule. 
require it like so:
```js
const makeBinary = dn.makeBinary;
```
Use it like this:
```js
const dataset = makeBinary(3):
console.log(dataset);
```
which outputs:
```js
[
  { input: [ 0, 0, 0 ], target: [ 0, 0, 1 ] },
  { input: [ 0, 0, 1 ], target: [ 0, 1, 0 ] },
  { input: [ 0, 1, 0 ], target: [ 0, 1, 1 ] },
  { input: [ 0, 1, 1 ], target: [ 1, 0, 0 ] },
  { input: [ 1, 0, 0 ], target: [ 1, 0, 1 ] },
  { input: [ 1, 0, 1 ], target: [ 1, 1, 0 ] },
  { input: [ 1, 1, 0 ], target: [ 1, 1, 1 ] }
]
```


or by specifying a math rule
```js
const dataset = makeBinary(4, (x)=>(2*x) ):
console.log(dataset);
```
which outputs: 
```js
[
  { input: [ 0, 0, 0, 0 ], target: [ 0, 0, 0, 0 ] },
  { input: [ 0, 0, 0, 1 ], target: [ 0, 0, 1, 0 ] },
  { input: [ 0, 0, 1, 0 ], target: [ 0, 1, 0, 0 ] },
  { input: [ 0, 0, 1, 1 ], target: [ 0, 1, 1, 0 ] },
  { input: [ 0, 1, 0, 0 ], target: [ 1, 0, 0, 0 ] },
  { input: [ 0, 1, 0, 1 ], target: [ 1, 0, 1, 0 ] },
  { input: [ 0, 1, 1, 0 ], target: [ 1, 1, 0, 0 ] },
  { input: [ 0, 1, 1, 1 ], target: [ 1, 1, 1, 0 ] }
]
```

<br/><br/>

# v2.2.4

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.4)

### Changes:

* Added static function for dann `Dann.createFromModel(data)` which takes a dannData object generated by `yourmodel.dataObject();` and creates a Dann model from it.
ex:
```js
const nn = new Dann(4,4);
nn.addHiddenLayer(16,'sigmoid');
nn.makeWeights();

const modeldata = nn.dataObject();

const newNN = Dann.createFromObject(modeldata);
newNN.log();
```

<br/>

* You can now select an Id of an html element when using `yourmodel.load()` when working in the browser. If the id is not specified, the input element is going to be placed in `<body>`

Html:
```html
<body>
    <div id="div1"></div>
</body>
```
Javascript:
```js
let nn = new Dann();

nn.load('nn','div1',function(err) {
    if (err) {
        console.log('Failed to load the model.');
    } else {
        console.log('Succesfully loaded the model.');
    }
    nn.log();
});
```

To add styling to the `<input>` element you can reference it like so:

```css
#div1 {
    /* <input> element styling here */
}
```


<br/><br/>

# v2.2.3d

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.3d)

Sync with npm package version

<br/><br/>

# v2.2.3c

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.3c)

# v2.2.3c

* Added `Dann.dataObject();` function which returns a json-savable javascript object containing information about the model.

ex:

```js
const nn = new Dann();

// getting the object
const data = nn.dataObject();

// uploading the object
nn.applyToModel(data);

```


<br/><br/>

# v2.2.3b

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.3b)

## New Loss Function
Added the Mean absolute exponential loss (mael).


```js
//New experimental function: Mean absolute exponential loss
function mael(predictions,target) {
    let sum = 0;
    let ans = 0;
    let n = target.length;
    for (let i = 0; i < n;  i++) {
        let y = target[i]
        let yHat = predictions[i];
        let x = (y - yHat);

        //Mean absolute exponential function
        let top = -x*(exp(-x)-1);
        let down = (exp(-x)+1);
        sum += top/down;
    }
    ans = sum/n;
    return ans;
}
```

### Definition:

<p align="center">
    <img align="center" src="https://latex.codecogs.com/svg.latex?\%20\color{white}g(x)%20=%20\frac{-x%20(e^{-x}%20-1)}{e^{-x}+1}" />
    <br/><br/>
    <img src="https://latex.codecogs.com/svg.latex?\%20\color{white}H(y,\hat{y})%20=%20\sum_{i=0}^{n}%20g(y_i%20-%20\hat{y_i})" />
</p>

See [loss function docs](https://github.com/matiasvlevi/Dann/wiki/Loss-functions)

### Graph:

<p align="center">
<img src="https://dannjs.org/images/mael.png" width="50%"/>
</p>

<br/><br/>

# v2.2.3

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.3)

### Changes
* the abscence of  `Dann.makeWeights();` is now a warning instead of error.
* `Dann.feedForward();` now has the `decimals` option. If it is specified, the output of this function will be rounded to the number of decimals specified.

ex:

```js
//creates (1 input,1 output) neural network
const nn = new Dann();
nn.makeWeights();
nn.feedForward([1],{log:true,decimals:2});
//outputs: [value rounded to 2 decimals]

``` 

<br/><br/>

# v2.2.2f

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.2f)

### Added callbacks with errors
* Dann.load() callback with error

In the browser:
```js
const nn = new Dann();   
//opens a DOM file selector
nn.load('nn',function(err) {
    if (err) {
        console.log('Error loading the Dann model');
    } else {
        console.log('Successfully loaded the Dann model');
        nn.log();
    }
});
```
In node:
```js
const nn = new Dann();
nn.load('filename',function(err) {
    if (err) {
        console.log('Error loading the Dann model');
    } else {
        console.log('Successfully loaded the Dann model');
        nn.log();
    }
});
```

<br/><br/>

# v2.2.2d

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.2d)

## Added dev environment setup
* Running `devsetup.bat` will install node modules (or update them) from `package.json` and setup a test environment for the browser & nodejs

`test.bat` runs the `tests/nodeTests.js` file. 
`test.htm` uses the `tests/browserTests.js` file.

### fix
* `mutateRandom();` probability argument is now optional

<br/><br/>

# v2.2.2c

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.2c)

### Patch
* fixed the `outputActivation();` problem with the browser

<br/><br/>

# v2.2.2b

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.2b)

### Patch
* patched the `Dann error: x,y arguments exceed the matrix dimensions.` when logging a dann model with `{detials:true}`

<br/><br/>

# v2.2.2

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.2)

## Segment Update

* the initial `dann.js` source file is now segmented in `/src`. 
* Grunt is used to concat & minify. Built files are located in `/build`

### Other
* `poolFuncs` is now `poolfuncs`
* A lot of global functions are now static Layer functions for cleaner code.

<br/><br/>

# v2.2.1b

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.1b)

README changes

<br/><br/>

# v2.2.1

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.1)

## Added
* functions for the matrix object.
* error handling for new & pre-existing matrix functions.

## New functions

### insert( value , x , y );
This function sets a specific value in the matrix.


* value <br/>
The value to be inserted into the specified coordinates in the matrix
<br/>

* x <br/>
Column index

<br/>

* y <br/>
Row index

<br/>


---
### initiate( value );
This function resets the matrix, all values are set to the same value.

* value (optional)<br/>
The value to be set through out the matrix. Is set to  0 by default
<br/>



<br/><br/>

# v2.2.0

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.2.0)

## Dann.save(); changes
* changed the way the csv train report is formatted.
## Dann.load(); changes
* you can now add a callback as the second argument for nodejs.

Here is an example:
```js
const nn = new Dann(1,1);

nn.load('sampleA', function () {
    console.log('finished loading');
});
```


<br/><br/>

# v2.1.9d

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.9d)

### Pooling layer v2.1.9d

pooling layers now can take an input array that can be arranged as a non square matrix. Width & Height arguments are optional, if not specified, the layer will arrange the array as a square matrix.

```js
const layer = new Layer( type , inputSize , sampleSize , stride , width , height );
```

#### Example:

```js
const layer = new Layer('maxpool', 12, 2, 1, 3, 4);

// Array length of 12 (can be arranged in a 3x4 matrix)
let input = [
    1,2,3,
    4,5,6,
    7,8,9,
    10,11,12
];

let output = layer.feed(input);
// output = [ 5, 6, 8, 9, 11, 12];
```

<br/><br/>

# v2.1.9c

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.9c)

* getPoolOutputLength(); fix

<br/><br/>

# v2.1.9b

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.9b)

* pooling layer input undefined rows matrix fix

<br/><br/>

# v2.1.9

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.9)

# Pooling Layer Update

* Added pooling layers 
* Added more error handling.
* added `console.trace();` to existing errors to help with debugging.
* cleaner code 

## Create Pooling layers
this is how you would create a pooling layer:
```js
const layer = new Layer( type, inputSize , sampeSize , stride );
```
in order to pass data trough the layer, you need to use Layer.feed();
```js

const layer = new Layer('maxpool', 9, 2, 1);

// Array length of 9
let input = [
    1,2,3,
    4,5,6,
    7,8,9
];

let output = layer.feed(input);
// output = [ 5, 6, 8, 9 ]
```

### You can use different pooling functions
* `maxpool`
* `minpool`
* `avgpool`

### You can also add your custom function

to use your custom pool function, specify it as the type with 'pool' added at the end.
this is how you get the  `'avgpool'` type with the `poolFuncs.avg`  function or the `'maxpool'` type with the `poolFuncs.max` function.
```js
const dn = require('dannjs');     //nodejs only
const poolFuncs = dn.poolFuncs;   //nodejs only

poolFuncs.myCustomFunc = function (arr) {
    let sum = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        sum += arr[i];
    }
    return sum/len;
}

const layer = new Layer('myCustomFuncpool', 9, 2, 1);

```

This piece of documentation will eventually move to the website. 

<br/><br/>

# v2.1.8f

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.8f)

fixed mathjs bug

<br/><br/>

# v2.1.8e

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.8e)



<br/><br/>

# v2.1.8d

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.8d)



<br/><br/>

# v2.1.8c

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.8c)



<br/><br/>

# v2.1.8b

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.8b)



<br/><br/>

# v2.1.8

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.8)

* `Dann.feedForward();` & `Dann.backpropagate();` now have the `table` option to print their output in a table.
* Added an empty line space after `Dann.log();`
* `Dann.makeWeights();` now has 2 new optional arguments.

Documentation is on the website. 

<br/><br/>

# v2.1.7e

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.7e)

LeakyReLU is now:
```js
function leakyReLU(x) {
    if (x >= 0) {
        return 1*x;
    } else {
        return 0.01*x;
    }
}
```
instead of the former:
```js
function leakyReLU(x) {
    if (x >= 0) {
        return 1*x;
    } else {
        return 0.1*x;
    }

}
```

<br/><br/>

# v2.1.7d

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.7d)

* table option in `Dann.log();` now logs the arrays as tables.


<br/><br/>

# v2.1.7c

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.7c)

* Minor `Dann.log();` fixes
* saveLoss is now set to false by default for `Dann.backpropagate();` options

<br/><br/>

# v2.1.7b

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.7b)

Fix about the Dann.log( ) details options.

<br/><br/>

# v2.1.7

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.7)

Dannjs is now p5js free, it now relies on mathjs which is automatically included in the html file..

<br/><br/>

# v2.1.6d

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.6d)

minor error handling fixes

<br/><br/>

# v2.1.6c

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.6c)



<br/><br/>

# v2.1.6b

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.6b)

minor fixes

<br/><br/>

# v2.1.6

[See release](https://github.com/matiasvlevi/Dann/releases/tag/v2.1.6)

# Dann.log(); now has options.

-It uses an option object with specific settings as properties. (mostly boolean options). 
-Documentation will be coming on the website.
-If the options argument is left empty, nothing changes, it is still good old Dann.log();
## details
`.log({ details:true });`
this would log all details about the model
<br />
## Log individual information. 
`.log({ gradients:true });` or `.log({ weights:true , misc:true });`
You can then specify one of the detailed elements individually.
Here is a temporary list of these settings.
-biases
-weights
-struct
-gradients
-errors
-misc
<br />
## Specify Decimals
`.log({ decimals:4 });`
You can specify the number of decimals your logged data will be rounded to. This is especially useful when logging matrices, for clarity purposes. If this value is not specified, it will be set to 3 by default.
<br />
## Table or Standard Log
`.log({ table:true });`
This is to specify if we want to print our matrices in the form of a table or simply by logging the Matrix object.

<br/><br/>

