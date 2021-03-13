[Back to Dann](https://github.com/matiasvlevi/Dann/wiki/Dann-Object)

# createFromObject( ); 
###### Static function
<br/> 
Creates a Dann model from a dannData object.

- #### returns<br/>
     a Dann model.
<br/>


### Example

```js
const nn = new Dann(24,4);
nn.addHiddenLayer(12,'sigmoid');
nn.makeWeights();
const dannData = nn.dataObject();

const newNN = Dann.createFromObject(dannData);
newNN.log();

```