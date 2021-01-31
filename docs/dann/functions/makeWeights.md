### makeWeights( min , max );
Creates the weights. This function should be called after all the hidden layers were added. The optional parameters determine the range in which starting weights are going to be set randomly. If no arguments are specified, weights are going to be set in between -1 and 1.

- #### min (optional) <br/>
    The minimum range value.

<br/>

- #### max (optional) <br/>
    The maximum range value.

<br/>

### Example
```js
const nn = new Dann(2,2);

// initiate the Weights
nn.makeWeights();

// log weights
nn.log({weights:true,table:true});

// add a layer & re-initiate weights in a range of (-0.1,0.1)
nn.addHiddenLayer(4,'sigmoid');
nn.makeWeights(-0.1,0.1);

// log weights
console.log('New re-initiated weights:')
nn.log({weights:true,table:true});
```
