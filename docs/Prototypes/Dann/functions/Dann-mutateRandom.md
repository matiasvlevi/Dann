[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

# mutateRandom( range , probability );
This function mutates each weights randomly. This is for Neuroevolution tasks.


- #### range <br/>
    This will multiply with a random number from -range to range and add to each weight.

<br/>

- ####  probability <br/>
    The probability of a weight being affected by a random mutation. Ranging from 0 to 1. Setting this value to 1 would mutate all the model's weights.

<br/>


### Example

```js
const nn = new Dann(4,2);
nn.makeWeights();

nn.log({weights:true,table:true})

// adding (weight*random(-0.1,0.1)) to 50% of the weights.
nn.mutateRandom(0.1,0.5);

nn.log({weights:true,table:true})
```