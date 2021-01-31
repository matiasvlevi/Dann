### feed( input , options );
This function feeds data through the layer to obtain an output.


- #### input <br/>
Takes an array of inputs to feed through the layer.

<br/>

- #### options (optional) <br/>
An object including specific properties.
###### Properties
| Property 	| Type 	| Function 	|
|:-:	|:-:	|-	|
| log 	| Boolean 	| Wheter or not to log the output. 	|
| table 	| Boolean 	| Whether or not we want to print the result in the form of a table or a normal console log. 	|

<br/>

- #### returns <br/>
Returns an array of outputs

<br/>

## Examples

Here is how you would create a pooling layer & compute some 16 length array of data.
```js
const Layer = require('dannjs').layer;  //nodejs only

const l1 = new Layer('avgpool' , 16, 2, 2);

const input = [
    4, 3, 1, 5,
    1, 3, 4, 8,
    4, 5, 4, 3,
    6, 5, 9, 4
];

const output = l1.feed(input);
console.log(output);

// Output:
// [2.75, 4.5, 5, 5]
```
<br/>

You can also use this layer for a non-squarable array by specifing width & height when constructing the layer.
```js
const Layer = require('dannjs').layer;  //nodejs only

const l1 = new Layer('avgpool' , 12, 2, 1, 4, 3);

const input = [
    4, 3, 1, 5,
    1, 3, 4, 8,
    4, 5, 4, 3
];

const output = l1.feed(input);
console.log(output);

// Output:
// [2.75, 2.75, 4.5, 2.75, 4, 4.75]
```
<br/>
