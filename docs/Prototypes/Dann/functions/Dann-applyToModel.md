[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

# applyToModel( data );
Applies a dannData object.

- #### data <br/>
     dannData object, you can get this object from a `yourmodel.dataObject();`.<br/> See docs [here](https://github.com/matiasvlevi/Dann/wiki/Dann-dataObject).

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