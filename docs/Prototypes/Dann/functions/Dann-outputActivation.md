[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

# outputActivation( activation );
Sets the activation function of the output

- #### activation <br/>
    Takes a string of the activation function's name. If this function is not called, the activation function will be set to 'sigmoid' by default. See available activation functions [Here](https://github.com/matiasvlevi/Dann/wiki/Activation-functions).

<br/>


### Example 

```js
const nn = new Dann(4,2);
nn.addHiddenLayer(8,'sigmoid');
nn.makeWeights();

console.log('Before changing the output activation');
nn.log({struct:true})

nn.outputActivation('tanH');

console.log('After changing the output activation');
nn.log({struct:true})
```