[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

# addHiddenLayer( size , activation );
Adds one hidden layer.

- #### size <br/>
    Layer size, the number of neurons in the layer.

<br/>

- #### activation <br/>
    Takes a string of the activation function's name. If left empty, the activation function will be set to ``'sigmoid'`` by default. See available activation functions [Here](https://github.com/matiasvlevi/Dann/wiki/Activation-functions).

<br/>

### Example

```js
const nn = new Dann(10,2);

//Add a layer
nn.addHiddenLayer(8,'sigmoid');

//console log
console.log('Added first hidden layer: ')
nn.log({struct:true});

//Add a layer
nn.addHiddenLayer(4,'tanH');

//console log
console.log('Added a second hidden layer: ')
nn.log({struct:true});
```