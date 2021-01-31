
### log( options );
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
