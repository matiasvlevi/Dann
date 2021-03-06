[Back to Home](https://github.com/matiasvlevi/Dann/wiki/Home)

### Import
```js
const Layer = require('dannjs').layer;
```

### Contructor( type , inputSize , sampleSize , stride )
When you create a pooling layer you need to specify the number of input size, the sample size & the stride.

```js
const l1 = new Layer('avgpool',16,2,2);
```

<br/>

### Object Properties

- #### type <br/>
    A string representing the type of this layer.

- #### subtype <br/>
    A string representing the sub type of this layer. Can be `'pool'` for pooling layers or `'input'`, `'hidden'` and `'output'` for neuron layers used by Dann models.


- #### sampleSize <br/>
    The size of the 2d sample iterating trough the array.

- #### stride <br/>
    The number of jumps the sample is going to perform for each iteration.

- #### poolfunc <br/>
    The function this pooling layer uses to process a sample as an array into a numeric output. ex: avg, max. See available pooling functions [Here](https://github.com/matiasvlevi/Dann/wiki/pool-functions).
<br/><br/><br/>

### Functions

- [feed](https://github.com/matiasvlevi/Dann/wiki/Layer-feed)

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
