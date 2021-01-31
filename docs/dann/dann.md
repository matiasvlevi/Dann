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

### Saving & Loading
- [save (Browser) ](https://github.com/matiasvlevi/Dann/wiki/Dann-save-(Browser))<br/>
- [save (Nodejs)](https://github.com/matiasvlevi/Dann/wiki/Dann-save-(Node))<br/>
- [load (Browser)](https://github.com/matiasvlevi/Dann/wiki/Dann-Load-(Browser))<br/>
- [load (Nodejs)](https://github.com/matiasvlevi/Dann/wiki/Dann-Load-(Node))



### Debug
- [log](https://github.com/matiasvlevi/Dann/wiki/Dann-log)

<br/>

# Example

Here is a neural network training to solve XOR:
```js
const Dann = require('dannjs').dann;  //nodejs only

// XOR neural network
const nn =  new Dann(2,1);
nn.addHiddenLayer(4,'tanH');
nn.outputActivation('sigmoid');
nn.makeWeights();
nn.lr = 0.1;

// feeding data to the model before training
nn.feedForward([0,0],{log:true});

// training the model
const epoch = 10000;
for (let e = 0; e < epoch; e++) {
    nn.backpropagate([0,0],[0]);
    nn.backpropagate([1,1],[0]);
    nn.backpropagate([0,1],[1]);
    nn.backpropagate([1,0],[1]);
}

// feeding data to the model after training
nn.feedForward([0,0],{log:true});
```
