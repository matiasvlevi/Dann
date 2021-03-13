[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

# log( options );
Displays information about the model in the console.

- #### options (optional) <br/>
    An object including specific properties.
    ###### Properties
| Property 	| Type 	| Function 	|
|-	|-	|-	|
| details 	| Boolean 	| If set to true, the function will log more advanced details about the model. 	|
| decimals 	| integer 	| The number of decimals the logged data is going to have. It is set to 3 by default. 	|
| table 	| Boolean 	| Whether or not we want to print our matrices in the form of a table or Matrix object log. 	|
| gradients 	| Boolean 	| If this is set to true, the the function will log the gradients of the model. 	|
| biases 	| Boolean 	| If this is set to true, the the function will log the biases of the model. 	|
| weights 	| Boolean 	| If this is set to true, the the function will log the weights of the model. 	|
| struct 	| Boolean 	| If this is set to true, the the function will log the structure of the model. 	|
| errors 	| Boolean 	| If this is set to true, the the function will log the errors of the model. 	|
| misc 	| Boolean 	| If this is set to true, the the function will log the loss of the model, the learning rate of the model and the loss function (the learning rate could also be logged as console.log(Dann.lr)). 	|

<br/><br/>

# Example

Creating a Dann model & logging it.
```js

const nn =  new Dann(24,2);
nn.addHiddenLayer(16,'siLU');
nn.makeWeights();

nn.outputActivation('tanH');

nn.lr = 0.01;

nn.log();
```
Outputs:
```
Dann NeuralNetwork:
   Layers:
     Input Layer:   24       
     hidden Layer: 16  (siLU)
     output Layer: 2  (tanH)
   Other Values: 
     Learning rate: 0.01
     Loss Function: mse
     Current Epoch: 0

```
<br/>

#### Here is how you specify options:

```js
const nn = new Dann(16,1);
nn.addHiddenLayer(8,'sigmoid');
nn.makeWeights();

//log the structure
nn.log({struct:true});

//log the weights in a table
nn.log({weights:true,table:true});

//log the biases & round the values to 10 decimals
nn.log({biases:true,decimals:10});

// nn.log({other options})
```