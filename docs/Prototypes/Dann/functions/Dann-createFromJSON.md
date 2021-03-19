[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

# createFromJSON( data ); 
###### Static function
<br/> 
Creates a Dann model from a json object.

- #### data<br/>
     model data json object, you can get this object from a `yourmodel.toJSON();`.<br/> See docs [here](https://github.com/matiasvlevi/Dann/wiki/Dann-toJSON).

- #### returns<br/>
     a Dann model.
<br/>


### Example

```js
const nn = new Dann(24,4);
nn.addHiddenLayer(12,'sigmoid');
nn.makeWeights();
const modelData = nn.toJSON();

const newNN = Dann.createFromJSON(modelData);
newNN.log();

```