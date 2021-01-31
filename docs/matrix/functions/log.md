### log( options );
Logs information about the matrix.


- #### options (optional) <br/>
Options on how to log the matrix.
###### Properties
| Property 	| Type 	| Function 	|
|:-:	|:-:	|-	|
| decimals 	| Integer 	| The number of decimals the logged data is going to have. It is set to 3 by default. 	|
| table 	| Boolean 	| Whether or not we want to print our matrix in the form of a table or a normal Matrix object log. 	|

<br/>


Example :

```js

const m1 = new Matrix(2,3);

// simple log:
m1.log();

// table log:
m1.log({table:true})

// round the data:
m1.log({decimals:2})

```
