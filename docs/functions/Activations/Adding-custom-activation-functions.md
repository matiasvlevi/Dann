[Back to Home](https://github.com/matiasvlevi/Dann/wiki)
<br/>

Activation functions are stored in an object value named `activations`. It is set as a global value for in the browser. <br/> For nodejs you can require it like so:

```js
const activations = require('dannjs').activations;
```


Create a function and set it as the property of `activations`.<br/> The name of the property is the name the Dann model is going to use to refer to the function. In order to backpropagate the model, you'll need to add the derivative of your activation function under the same name with a `'_d'` added to it.

```js
activations.name = function; // activation function
activations.name_d = function; // derivative of the function
```                  

Here's an example with the pre-existing `'sigmoid'` activation function:
```js
const dn = require('dannjs');         //nodejs only
const activations = dn.activations;   //nodejs only

activations.sigmoid = function sigmoid(x) {
    return 1/(1+Math.exp(-x));
}
activations.sigmoid_d = function sigmoid_d(x) {
    let x1 = activations.sigmoid(x);
    return x1 * (1 - x1));
}      
```

#### Function arguments
A standard activation function takes one argument.

* x <br/>
The value to be passed through the function.
<br/>

* returns <br/>
An output value.


<br/><br/><br/><br/><br/><br/><br/>
