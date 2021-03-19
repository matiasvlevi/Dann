[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

# toJSON( );
Applies a dannData object.

- #### returns<br/>
     model data json object, you can apply it to a model with `yourmodel.fromJSON();`.<br/> See docs [here](https://github.com/matiasvlevi/Dann/wiki/Dann-fromJSON).

<br/>


### Example

```js
const nn = new Dann(24,4);
nn.addHiddenLayer(12,'sigmoid');
nn.makeWeights();

const modelData = nn.toJSON();

const newNN = new Dann();
newNN.fromJSON(modelData);

newNN.log();
```