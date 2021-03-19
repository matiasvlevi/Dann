[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

# fromJSON( data );
Applies a json object.

- #### data <br/>
     model data json object, you can get this object from a `yourmodel.toJSON();`.<br/> See docs [here](https://github.com/matiasvlevi/Dann/wiki/Dann-toJSON).

<br/>


### Example

```js
const nn = new Dann(24,4);
nn.addHiddenLayer(18,'tanH');
nn.addHiddenLayer(12,'sigmoid');
nn.makeWeights();

const modelData = nn.toJSON();

const newNN = new Dann();
newNN.fromJSON(modelData);

newNN.log();
```