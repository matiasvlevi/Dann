[Back to Home](https://github.com/matiasvlevi/Dann/wiki/Home)

### Import
```js
const Dann = require('dannjs').dann;
```

### Contructor( inputSize , outputSize )
When you create a neural network, you need to specify the size of the input & output layers.

```js
const nn = new Dann(2,2);
```
<br/>

## Object Properties
- ### arch <br/>
    This value represents the architecture of the model in the form of an array.


- ### lr <br/>
    This defines the learning rate of the model. This value is set to `0.001` by default.

- ### epoch
    This is an empty value. This is meant for you to increase whenever you have completed one epoch. This serves as a way to save the number of epochs along with the weights in the dannData.json file.


- ### loss <br/>
    This is the most recent loss value of the model. If the model has never been trained before, this value will be set to 0.

<br/><br/><br/>


# Function properties

### Model Creation
- [addHiddenLayer](https://github.com/matiasvlevi/Dann/wiki/Dann-addHiddenLayer) <br/>
- [outputActivation](https://github.com/matiasvlevi/Dann/wiki/Dann-outputActivation) <br/>
- [makeWeights](https://github.com/matiasvlevi/Dann/wiki/Dann-makeWeights) <br/>
- [setLossFunction](https://github.com/matiasvlevi/Dann/wiki/Dann-setLossFunction)

### Model Interaction
- [feedForward](https://github.com/matiasvlevi/Dann/wiki/Dann-feedForward)<br/>
- [backpropagate](https://github.com/matiasvlevi/Dann/wiki/Dann-backpropagate)

### Weight Mutations
- [mutateAdd](https://github.com/matiasvlevi/Dann/wiki/Dann-mutateAdd)<br/>
- [mutateRandom](https://github.com/matiasvlevi/Dann/wiki/Dann-mutateRandom)

### Save & load
- [save (Browser) ](https://github.com/matiasvlevi/Dann/wiki/Dann-save-(Browser))<br/>
- [save (Nodejs)](https://github.com/matiasvlevi/Dann/wiki/Dann-save-(Node))<br/>
- [load (Browser)](https://github.com/matiasvlevi/Dann/wiki/Dann-Load-(Browser))<br/>
- [load (Nodejs)](https://github.com/matiasvlevi/Dann/wiki/Dann-Load-(Node))

### Save & load JSON

- [toJSON](https://github.com/matiasvlevi/Dann/wiki/Dann-toJSON)<br/>
- [fromJSON](https://github.com/matiasvlevi/Dann/wiki/Dann-fromJSON)<br/>
  ###### Static
- [createFromJSON](https://github.com/matiasvlevi/Dann/wiki/Dann-createFromJSON)<br/>

### Debug
- [log](https://github.com/matiasvlevi/Dann/wiki/Dann-log)


<br/>

# Example

Here is a neural network training to solve XOR:
```js
const Dann = require('dannjs').dann;  //nodejs only

// 128 input , 8 output Model with 3 hidden layers
const nn =  new Dann(128,8);

nn.addHiddenLayer(64,'leakyReLU');
nn.addHiddenLayer(32,'leakyReLU');
nn.addHiddenLayer(16,'tanH');

nn.makeWeights();

nn.outputActivation('sigmoid');
nn.setLossFunction('mae');

nn.lr = 0.01;

nn.log();
```

