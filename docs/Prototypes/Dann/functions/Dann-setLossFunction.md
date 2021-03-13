[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

# setLossFunction( lossfunc );
Set the loss function of the model

- #### lossfunc <br/>
    Takes a string of the loss function's name. If this function is not called, the loss function will be set to 'mse' by default. See available loss functions [Here](https://github.com/matiasvlevi/Dann/wiki/Loss-functions).

<br/>

### Example 

```js
const nn = new Dann(4,2);
nn.addHiddenLayer(8,'sigmoid');
nn.makeWeights();

console.log('Before changing the loss function');
console.log(nn.lossfunc)

nn.setLossFunction('mael');

console.log('After changing the loss function');
console.log(nn.lossfunc)

```