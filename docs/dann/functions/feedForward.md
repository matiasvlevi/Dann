

### feedForward( input , options );
This function feeds data through the model to obtain an output.


- #### input <br/>
Takes an array of input data.

<br/>

- #### options (optional) <br/>
An object including specific properties.
###### Properties
| Property 	| Type 	| Function 	|
|-	|-	|-	|
| log 	| Boolean 	| If set to true, it will log a report in the console. 	|
| table 	| Boolean 	| If the 'log' option is set to true, setting this value to true will print the arrays of this function in tables. 	|
| decimals | Integer 	| If used, the output of this function will be rounded to the number of decimals specified. 	|
| mode<br>* for development 	| String 	| When gpu support will be implemented, specifing the string 'gpu' as opposed to 'cpu' will run the function on a kernel. This funtionality is not yet implemented 	|

<br/>

- #### returns <br/>
an array of output predictions.

<br/>
