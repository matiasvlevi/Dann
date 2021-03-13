[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

# dataObject( );
Applies a dannData object.

- #### returns<br/>
     dannData object, you can apply it to a model with `yourmodel.applyToModel();`.<br/> See docs [here](https://github.com/matiasvlevi/Dann/wiki/Dann-applyToModel).

<br/>


### Example

```js
const nn = new Dann(24,4);
nn.addHiddenLayer(12,'sigmoid');
nn.makeWeights();

const dannData = nn.dataObject();

const newNN = new Dann();
newNN.applyToModel(dannData);

newNN.log();
```