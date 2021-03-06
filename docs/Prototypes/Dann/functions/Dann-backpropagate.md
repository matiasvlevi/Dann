[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

# backpropagate( input , target , options );
Train the model's weights.

- #### input <br/>
Takes an array of input data.

<br/>

- #### target <br/>
Takes an array of expected output.

<br/>

- #### options (optional) <br/>
An object including specific properties.
###### Properties
| Property 	| Type 	| Function 	|
|-	|-	|-	|
| log 	| Boolean 	| If set to true, it will log a report in the console. 	|
| table 	| Boolean 	| If the 'log' option is set to true, setting this value to true will print the arrays of this function in tables. 	|
| saveLoss 	| Boolean 	| Whether or not to save the losses in the neural network object. After a lot of training, carrying loss data in the neural network object gets heavy, this is why it is set to false by default. 	|
| mode<br>* for development 	| String 	| When gpu support will be implemented, specifing the string 'gpu' as opposed to 'cpu' will run the function on a kernel. This funtionality is not yet implemented 	|


<br/>

# Example

```js
//train 1 epoch
for (data of dataset) {
    nn.backpropagate(data.input,data.output);
}
```
or here is another example
```js
//train 1 epoch
for (data of dataset) {
    nn.backpropagate([0,1],[1]);
    nn.backpropagate([1,0],[1]);
    nn.backpropagate([1,1],[0]);
    nn.backpropagate([0,0],[0]);
}
```